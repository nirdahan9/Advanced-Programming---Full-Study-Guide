import { TOPICS as JAVA_TOPICS, QUESTIONS as JAVA_QUESTIONS } from "../java-exam-quiz-site/questions.js";
import { TOPICS as PY_TOPICS, QUESTIONS as PY_QUESTIONS } from "../python-exam-quiz-site/questions.js";
import { TOPICS as SQL_TOPICS, QUESTIONS as SQL_QUESTIONS } from "../sql-exam-quiz-site/questions.js";
import { TOPICS as GIT_TOPICS, QUESTIONS as GIT_QUESTIONS } from "../version-control-exam-quiz-site/questions.js";
import { TOPICS as WEB_V2_TOPICS, QUESTIONS as WEB_V2_QUESTIONS } from "../web-exam-quiz-site/questions_v2.js";
import { TOPICS as WEB_V1_TOPICS, QUESTIONS as WEB_V1_QUESTIONS } from "../web-exam-quiz-site/questions.js";

function normalizeQuestions(subjectKey, subjectLabel, topics, questions, sourceTag) {
  return questions.map((q, idx) => {
    const topic = topics[q.t] ?? `Topic ${q.t}`;
    return {
      id: `${subjectKey}-${sourceTag}-${idx}`,
      subjectKey,
      subjectLabel,
      topic,
      t: q.t,
      q: q.q,
      o: q.o,
      a: q.a,
      e: q.e || "",
      ...(q.g ? { g: q.g } : {})
    };
  });
}

const javaQuestions = normalizeQuestions("java", "Java", JAVA_TOPICS, JAVA_QUESTIONS, "main");
const pythonQuestions = normalizeQuestions("python", "Python", PY_TOPICS, PY_QUESTIONS, "main");
const sqlQuestions = normalizeQuestions("sql", "SQL", SQL_TOPICS, SQL_QUESTIONS, "main");
const gitQuestions = normalizeQuestions("git", "Git", GIT_TOPICS, GIT_QUESTIONS, "main");

const webQuestionsV2 = normalizeQuestions("web", "Web", WEB_V2_TOPICS, WEB_V2_QUESTIONS, "v2");
const webQuestionsV1 = normalizeQuestions("web", "Web", WEB_V1_TOPICS, WEB_V1_QUESTIONS, "v1");
const webQuestions = [...webQuestionsV2, ...webQuestionsV1];

export const SUBJECTS = [
  { key: "git", label: "Git", questions: gitQuestions },
  { key: "java", label: "Java", questions: javaQuestions },
  { key: "python", label: "Python", questions: pythonQuestions },
  { key: "sql", label: "SQL", questions: sqlQuestions },
  { key: "web", label: "Web", questions: webQuestions }
];

export const ALL_QUESTIONS = SUBJECTS.flatMap((s) => s.questions);

for (const subject of SUBJECTS) {
  if (!subject.questions.length) {
    throw new Error(`No questions loaded for subject: ${subject.key}`);
  }
}

for (const q of ALL_QUESTIONS) {
  if (!Array.isArray(q.o) || q.o.length < 2) {
    throw new Error(`Invalid options in question: ${q.id}`);
  }
}
