import { SUBJECTS, ALL_QUESTIONS } from "./data.js";

const $ = (id) => document.getElementById(id);

const subjectGrid = $("subjectGrid");
const selectionInfo = $("selectionInfo");
const countInput = $("countInput");
const shuffleInput = $("shuffleInput");
const startSelectedBtn = $("startSelectedBtn");
const startAllBtn = $("startAllBtn");
const selectAllBtn = $("selectAllBtn");
const clearAllBtn = $("clearAllBtn");

const quizPanel = $("quizPanel");
const summaryPanel = $("summaryPanel");
const progressEl = $("progress");
const metaEl = $("meta");
const questionEl = $("question");
const graphEl = $("graph");
const optionsEl = $("options");
const submitBtn = $("submitBtn");
const nextBtn = $("nextBtn");
const feedbackEl = $("feedback");

const scoreEl = $("score");
const coveredEl = $("covered");
const weakEl = $("weak");
const restartBtn = $("restartBtn");

let session = [];
let index = 0;
let score = 0;
const wrongByTopic = new Map();

function getDirection(text) {
  const s = String(text || "").trim();
  if (!s) return "rtl";

  const hasHebrew = /[\u0590-\u05FF]/.test(s);
  const hasLatin = /[A-Za-z]/.test(s);
  const codeLike = /[{}();<>_=+\-*/\\|]|\b(SELECT|FROM|WHERE|JOIN|class|function|const|let|var)\b/i.test(s) || s.includes("\n");

  if (codeLike && hasLatin) return "ltr";
  if (hasHebrew && !hasLatin) return "rtl";
  if (hasLatin && !hasHebrew) return "ltr";
  return "auto";
}

function applyDirection(el, text) {
  if (!el) return;
  el.setAttribute("dir", getDirection(text));
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isCodeLikeText(text) {
  const s = String(text || "");
  return /[{}();<>_=+\-*/\\|]|\b(SELECT|FROM|WHERE|JOIN|class|function|const|let|var|console\.log|git)\b/i.test(s);
}

function renderRichText(container, text, preClassPrefix) {
  const value = String(text || "");
  const isMultiLine = value.includes("\n");

  if (!isMultiLine) {
    container.innerHTML = `<span class="${preClassPrefix}-text">${escapeHtml(value)}</span>`;
    applyDirection(container, value);
    return;
  }

  const codeClass = isCodeLikeText(value) ? " code-like" : "";
  container.innerHTML = `<pre class="${preClassPrefix}-pre${codeClass}">${escapeHtml(value)}</pre>`;
  const preNode = container.querySelector(`.${preClassPrefix}-pre`);
  applyDirection(preNode, value);
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function renderSubjectSelector() {
  subjectGrid.innerHTML = SUBJECTS.map(
    (s) => `
      <label class="subject-card">
        <div>
          <input type="checkbox" class="subject-check" value="${s.key}" checked />
          <span class="name">${s.label}</span>
        </div>
        <div class="count">${s.questions.length} שאלות</div>
      </label>
    `
  ).join("");

  subjectGrid.addEventListener("change", updateSelectionInfo);
  updateSelectionInfo();
}

function getSelectedSubjectKeys() {
  return [...document.querySelectorAll(".subject-check:checked")].map((x) => x.value);
}

function getPoolBySubjects(keys) {
  const keySet = new Set(keys);
  return SUBJECTS.filter((s) => keySet.has(s.key)).flatMap((s) => s.questions);
}

function updateSelectionInfo() {
  const selectedKeys = getSelectedSubjectKeys();
  const poolSize = getPoolBySubjects(selectedKeys).length;
  const selectedNames = SUBJECTS.filter((s) => selectedKeys.includes(s.key)).map((s) => s.label);

  selectionInfo.textContent = selectedKeys.length
    ? `נבחרו ${selectedKeys.length} נושאים (${selectedNames.join(", ")}) — ${poolSize} שאלות זמינות.`
    : "לא נבחרו נושאים.";

  startSelectedBtn.disabled = selectedKeys.length === 0;
}

function getCurrent() {
  return session[index] || null;
}

function renderQuestion() {
  const q = getCurrent();
  if (!q) {
    showSummary();
    return;
  }

  progressEl.textContent = `שאלה ${index + 1} מתוך ${session.length}`;
  metaEl.textContent = `נושא: ${q.subjectLabel}`;
  applyDirection(metaEl, metaEl.textContent);
  renderRichText(questionEl, q.q, "question");

  if (q.g) {
    graphEl.textContent = q.g;
    graphEl.classList.remove("hidden");
  } else {
    graphEl.textContent = "";
    graphEl.classList.add("hidden");
  }

  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";
  submitBtn.disabled = false;
  nextBtn.disabled = true;

  optionsEl.innerHTML = q.o
    .map((text, i) => {
      const letter = String.fromCharCode(65 + i);
      const isMultiLine = String(text).includes("\n");
      const codeClass = isCodeLikeText(text) ? " code-like" : "";
      const contentHtml = isMultiLine
        ? `<pre class="option-pre${codeClass}">${escapeHtml(text)}</pre>`
        : `<span class="option-text">${escapeHtml(text)}</span>`;

      return `
        <label class="option">
          <input type="radio" name="answer" value="${letter}" />
          <strong>${letter})</strong>
          ${contentHtml}
        </label>
      `;
    })
    .join("");

  const optionContents = optionsEl.querySelectorAll(".option .option-text, .option .option-pre");
  optionContents.forEach((el, i) => applyDirection(el, q.o[i]));
}

function getSelectedAnswer() {
  const node = optionsEl.querySelector('input[name="answer"]:checked');
  return node ? node.value : null;
}

function submitAnswer() {
  const q = getCurrent();
  if (!q) return;

  const selected = getSelectedAnswer();
  if (!selected) {
    feedbackEl.className = "feedback bad";
    feedbackEl.textContent = "בחר/י תשובה לפני בדיקה.";
    return;
  }

  submitBtn.disabled = true;

  if (selected === q.a) {
    score += 1;
    feedbackEl.className = "feedback ok";
    feedbackEl.textContent = `נכון ✅ ${q.e ? `| ${q.e}` : ""}`;
  } else {
    feedbackEl.className = "feedback bad";
    feedbackEl.textContent = `לא נכון ❌ | תשובה נכונה: ${q.a}. ${q.e || ""}`;
    const weakKey = `${q.subjectLabel} — ${q.topic}`;
    wrongByTopic.set(weakKey, (wrongByTopic.get(weakKey) || 0) + 1);
  }

  applyDirection(feedbackEl, feedbackEl.textContent);
  nextBtn.disabled = false;
}

function nextQuestion() {
  index += 1;
  renderQuestion();
}

function showSummary() {
  quizPanel.classList.add("hidden");
  summaryPanel.classList.remove("hidden");

  scoreEl.textContent = `ציון: ${score}/${session.length}`;

  const uniqueSubjects = new Set(session.map((q) => q.subjectKey));
  coveredEl.textContent = `נושאים שתורגלו בסשן: ${uniqueSubjects.size}`;

  if (!wrongByTopic.size) {
    weakEl.textContent = "מעולה! אין נושאים חלשים בסשן הזה.";
    return;
  }

  const rows = [...wrongByTopic.entries()].sort((a, b) => b[1] - a[1]);
  weakEl.innerHTML =
    "כדאי לחזור על:<ul>" +
    rows
      .map(([topic, count]) => `<li dir=\"${getDirection(topic)}\">${escapeHtml(topic)} (${count})</li>`)
      .join("") +
    "</ul>";
}

function resetSessionState() {
  index = 0;
  score = 0;
  wrongByTopic.clear();
  summaryPanel.classList.add("hidden");
  quizPanel.classList.remove("hidden");
}

function startQuizFromPool(pool) {
  if (!pool.length) {
    alert("אין שאלות זמינות עבור הבחירה.");
    return;
  }

  const requested = Number(countInput.value) || 40;
  const count = Math.max(1, Math.min(pool.length, requested));

  session = [...pool];
  if (shuffleInput.checked) shuffle(session);
  session = session.slice(0, count);

  resetSessionState();
  renderQuestion();
}

function startSelected() {
  const selectedKeys = getSelectedSubjectKeys();
  startQuizFromPool(getPoolBySubjects(selectedKeys));
}

function startAll() {
  startQuizFromPool(ALL_QUESTIONS);
}

function setAllSubjects(checked) {
  document.querySelectorAll(".subject-check").forEach((cb) => {
    cb.checked = checked;
  });
  updateSelectionInfo();
}

selectAllBtn.addEventListener("click", () => setAllSubjects(true));
clearAllBtn.addEventListener("click", () => setAllSubjects(false));
startSelectedBtn.addEventListener("click", startSelected);
startAllBtn.addEventListener("click", startAll);
submitBtn.addEventListener("click", submitAnswer);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", startSelected);

renderSubjectSelector();
startAllBtn.textContent = `התחל את כל הנושאים (${ALL_QUESTIONS.length} שאלות)`;
