const GRAPH_A = `*   M (main)
|\
| * C2 (feature)
| * C1
* | B2
|/
* A`;

const GRAPH_B = `*   M
|\
| * F2
| * F1
* | B2
|/
* B1
* A`;

const GRAPH_C = `* D (HEAD -> main)
* C
| * F2 (feature)
| * F1
|/
* B
* A`;

const defs = [
  {
    topic: "מה זה Version Control ולמה זה טוב",
    q1: {
      q: "מה התיאור המדויק ביותר של מערכת ניהול גרסאות בהקשר הנדסי?",
      o: [
        "כלי שמחליף גיבויים לחלוטין ולכן אין צורך בתהליכי גיבוי",
        "מערכת לניהול היסטוריית שינויים בקבצים, השוואת גרסאות, שחזור מצבים ושיתוף עבודה",
        "מערכת לשמירת הקובץ האחרון בלבד כדי למנוע עומס",
        "כלי שמיועד רק לקבצי קוד ולא למסמכים או קונפיגורציה"
      ],
      a: "B",
      e: "Version Control שומר היסטוריה מלאה ומאפשר שחזור, השוואה ושיתופיות."
    },
    q2: {
      q: "מה הסיבה הכי חזקה להשתמש ב-Git גם כשעובדים לבד?",
      o: [
        "כי commit אוטומטית בודק איכות קוד ומונע באגים לוגיים",
        "כי אפשר לשמור נקודות שחזור זולות, לנסות ניסויים, ולחזור אחורה בלי להעתיק תיקיות",
        "כי Git מקמפל את הפרויקט מהר יותר",
        "כי Git מונע לחלוטין מחיקות קבצים בטעות"
      ],
      a: "B",
      e: "היתרון המרכזי לבד הוא ניסוי/שחזור/היסטוריה מדויקת בעלות נמוכה."
    }
  },
  {
    topic: "Distributed vs. centralized",
    q1: {
      q: "איזה משפט נכון ביותר על DVCS מול CVCS?",
      o: [
        "ב-DVCS חייבים שרת מרכזי פעיל כדי לבצע commit",
        "ב-CVCS לכל מפתח יש היסטוריה מלאה מקומית כברירת מחדל",
        "ב-DVCS אפשר לבצע commit מקומי אופליין כי ההיסטוריה המלאה מקומית",
        "אין הבדל מהותי, רק שמות שונים לפקודות"
      ],
      a: "C",
      e: "ב-DVCS ההיסטוריה אצל כל מפתח ולכן commit מקומי אפשרי בלי רשת."
    },
    q2: {
      q: "בצוות עם חיבור רשת לא יציב, מה ההשלכה המעשית של Git לעומת מודל מרכזי קלאסי?",
      o: [
        "אי אפשר לעבוד בכלל בלי pull אחרון",
        "אפשר להמשיך לבצע commits, branches ו-merge מקומיים, ולסנכרן כשיש רשת",
        "רק צפייה בלוג אפשרית אבל לא שינויים",
        "Git חוסם יצירת ענפים מקומיים בזמן אופליין"
      ],
      a: "B",
      e: "Git שומר אובייקטים והיסטוריה מקומית ולכן מאפשר המשך עבודה מלא גם אופליין."
    }
  },
  {
    topic: "Changesets",
    q1: {
      q: "מה מתאר changeset ב-Git בצורה הכי מדויקת?",
      o: [
        "רשימת קבצים שקיימים בפרויקט כרגע בלבד",
        "שינוי לוגי בין מצבים, שנשמר כ-commit עם הורים ומטא-דאטה",
        "רק patch טקסטואלי בלי קשר לגרף commits",
        "עותק מלא של כל מערכת ההפעלה"
      ],
      a: "B",
      e: "Commit מייצג changeset מחובר להורה/הורים בגרף ההיסטוריה."
    },
    q2: {
      q: "למה 'commit קטן ואטומי' עדיף בדרך כלל על commit ענק?",
      o: [
        "כי Git לא יודע לשמור commits גדולים",
        "כי commits קטנים מקלים על code review, revert נקודתי ו-bisect",
        "כי commit גדול תמיד יוצר קונפליקט מיידי",
        "כי commit קטן תמיד דוחס טוב יותר בדיסק"
      ],
      a: "B",
      e: "אטומיות משפרת ניתוח היסטוריה ותיקון תקלות."
    }
  },
  {
    topic: "Revision graphs",
    q1: {
      q: "בהינתן הגרף, איזה commit הוא merge commit?",
      g: GRAPH_A,
      o: ["A", "B2", "C2", "M"],
      a: "D",
      e: "Merge commit הוא commit עם שני הורים (כאן M)."
    },
    q2: {
      q: "איזה טיעון הכי נכון לגבי גרף revisions ב-Git?",
      g: GRAPH_B,
      o: [
        "ההיסטוריה היא רשימה לינארית בלבד, ללא הסתעפויות אמיתיות",
        "כל branch חייב להיות באותו אורך כדי ש-merge יעבוד",
        "הגרף הוא DAG: כיווני, ללא מחזורים, ומקשרים בו הורות בין commits",
        "תגיות (tags) משנות את תוכן ה-commit שעליו הן מצביעות"
      ],
      a: "C",
      e: "מודל ההיסטוריה של Git הוא DAG של commits."
    }
  },
  {
    topic: "Repository vs staging area vs working directory",
    q1: {
      q: "שינית קובץ tracked ועדיין לא הרצת `git add`. איפה השינוי נמצא?",
      o: [
        "רק ב-repository",
        "רק ב-index (staging)",
        "ב-working directory בלבד",
        "נמחק אוטומטית"
      ],
      a: "C",
      e: "לפני add השינוי קיים ב-working tree בלבד."
    },
    q2: {
      q: "מה נכון לגבי `git commit`?",
      o: [
        "הוא שומר כל שינוי ב-working directory גם אם לא staged",
        "הוא שומר snapshot מה-index (staging area)",
        "הוא מבטל את ה-index לאחר כל commit",
        "הוא חייב לבצע push כחלק מהפקודה"
      ],
      a: "B",
      e: "commit לוקח snapshot של מה שנמצא ב-index."
    }
  }
];

const commandDefs = [
  {
    topic: "git init",
    truth: "יוצר מאגר Git חדש (תיקיית .git) בתיקייה הנוכחית; לא יוצר commit ראשון אוטומטית",
    scenario: "בתיקייה שאין בה Git מריצים: git init\nמה הפלט האופייני?",
    good: "Initialized empty Git repository in <path>/.git/"
  },
  {
    topic: "git add",
    truth: "מעתיק שינויים ל-index; לא יוצר commit",
    scenario: "יצרת קובץ חדש notes.txt והרצת: git add notes.txt\nמה יופיע ב-`git status --short`?",
    good: "A  notes.txt"
  },
  {
    topic: "git status",
    truth: "מציג מצב working tree וה-index מול HEAD",
    scenario: "אין שינויים והכל מסונכרן. מה שורת מצב אופיינית ב-`git status`?",
    good: "nothing to commit, working tree clean"
  },
  {
    topic: "git commit",
    truth: "יוצר commit חדש מה-index עם הודעה ומצביע הורה",
    scenario: "אחרי staging תקין מריצים: git commit -m " + '"fix parser"' + "\nאיזה פלט אופייני?",
    good: "[main <sha>] fix parser"
  },
  {
    topic: "git log",
    truth: "מציג היסטוריית commits מהחדש לישן כברירת מחדל",
    scenario: "איזו טענה נכונה לגבי סדר ברירת מחדל של `git log`?",
    good: "ה-commit האחרון מוצג ראשון"
  },
  {
    topic: "git mv",
    truth: "מבצע rename/move ומעדכן את ה-index בהתאם",
    scenario: "הרצת: git mv old.txt new.txt\nמה יופיע אופיינית ב-`git status --short`?",
    good: "R  old.txt -> new.txt"
  },
  {
    topic: "git rm",
    truth: "מסיר קובץ מהעץ ומה-index (אלא אם משתמשים ב---cached)",
    scenario: "הרצת: git rm temp.txt\nמה יופיע אופיינית ב-`git status --short` לפני commit?",
    good: "D  temp.txt"
  },
  {
    topic: "git diff",
    truth: "מציג הבדלים; בלי דגלים משווה working tree מול index",
    scenario: "שינית קובץ tracked ולא עשית add. מה `git diff` יציג?",
    good: "את ההבדל בין התוכן הנוכחי בקובץ לבין מה שב-index"
  },
  {
    topic: "git checkout",
    truth: "יכול להחליף branch או לשחזר קבצים/מצבים ישנים; פקודה ותיקה ורב-משמעית",
    scenario: "הרצת: git checkout HEAD~1 -- app.js\nמה ההשפעה העיקרית?",
    good: "הקובץ app.js משוחזר מתוכן HEAD~1 בלי להזיז את HEAD לענף אחר"
  },
  {
    topic: "git switch",
    truth: "מיועדת להחלפת branches (נוחה ובטוחה יותר לשימוש זה מאשר checkout)",
    scenario: "הרצת: git switch -c feature/auth\nמה פלט אופייני?",
    good: "Switched to a new branch 'feature/auth'"
  },
  {
    topic: "git merge",
    truth: "מאחד היסטוריות; יכול להיות fast-forward, auto-merge או קונפליקט",
    scenario: "מיזוג לא-FF עבר ללא קונפליקט. מה פלט אופייני?",
    good: "Merge made by the 'ort' strategy."
  },
  {
    topic: "git clone",
    truth: "יוצר עותק מקומי של remote כולל היסטוריה ורפרנסים רלוונטיים",
    scenario: "מריצים: git clone https://example.com/repo.git\nמה פלט אופייני?",
    good: "Cloning into 'repo'..."
  },
  {
    topic: "git push",
    truth: "שולח אובייקטים ו-update של refs מה-local ל-remote",
    scenario: "לאחר commit חדש בענף main, מה תראה לעיתים קרובות ב-push מוצלח?",
    good: "main -> main"
  },
  {
    topic: "git pull",
    truth: "שקול ל-fetch ואז merge (או rebase אם הוגדר)",
    scenario: "ב-pull שבו הענף המקומי מאחור בלבד, איזה תיאור פלט סביר?",
    good: "Fast-forward"
  },
  {
    topic: "git remote",
    truth: "מנהל שמות ו-URLs של remotes (כמו origin)",
    scenario: "איזה מידע נותן `git remote -v`?",
    good: "שמות remotes וכתובות fetch/push לכל אחד"
  },
  {
    topic: "git revert",
    truth: "יוצר commit חדש שמבטל שינוי של commit קודם, בלי לשכתב היסטוריה",
    scenario: "מה תוצאה עקרונית של `git revert <sha>`?",
    good: "נוצר commit חדש שמבצע שינוי נגדי"
  },
  {
    topic: "git reset",
    truth: "מזיז את HEAD/branch (ולפי mode גם index/working tree)",
    scenario: "אחרי `git reset --soft HEAD~1`, איפה השינויים של ה-commit שבוטל?",
    good: "נשארים staged ב-index"
  },
  {
    topic: "git branch",
    truth: "מייצר/מוחק/מציג מצביעי ענף; branch הוא מצביע נע ל-commit",
    scenario: "מה מסמן הכוכבית בפלט `git branch`?",
    good: "הענף הפעיל כרגע (HEAD מצביע אליו)"
  },
  {
    topic: "git rebase",
    truth: "מעביר רצף commits לבסיס חדש ועלול לשכתב SHA",
    scenario: "ב-rebase מוצלח ללא עצירות, איזה פלט אופייני מתקבל בסוף?",
    good: "Successfully rebased and updated refs/heads/<branch>."
  },
  {
    topic: "git bisect",
    truth: "מבצע חיפוש בינארי על טווח commits כדי למצוא commit בעייתי",
    scenario: "אחרי `git bisect start` + סימון good/bad, מה מאפיין פלט אופייני?",
    good: "Bisecting: <n> revisions left to test after this"
  }
];

for (const c of commandDefs) {
  defs.push({
    topic: c.topic,
    q1: {
      q: `איזה משפט מדויק ביותר לגבי \`${c.topic}\`?`,
      o: [
        c.truth,
        "מבצע commit אוטומטי לכל הקבצים ששונו",
        "משפיע רק על ה-remote ולא משנה כלום מקומית",
        "מוחק את היסטוריית הפרויקט כדי לחסוך מקום"
      ],
      a: "A",
      e: "זו ההתנהגות הנכונה של הפקודה בהקשר Git סטנדרטי."
    },
    q2: {
      q: c.scenario,
      o: [
        c.good,
        "Detached HEAD at <sha>",
        "fatal: not a git repository (or any of the parent directories): .git",
        "Everything up-to-date (ללא שינוי ב-refs)"
      ],
      a: "A",
      e: "זהו הפלט/התוצאה האופייניים לסנריו הנתון."
    }
  });
}

defs.push(
  {
    topic: "Traversing the graph (~ ^ ... ..)",
    q1: {
      q: "בהינתן הגרף, למה מתייחס `M^2`?",
      g: GRAPH_B,
      o: ["B2", "F2", "F1", "A"],
      a: "B",
      e: "ב-merge commit, `^1` הוא הורה ראשון ו-`^2` הוא ההורה השני."
    },
    q2: {
      q: "בהינתן הגרף, איזה ביטוי מייצג את ה-commit השני אחורה בשרשרת ההורה הראשון של M?",
      g: GRAPH_B,
      o: ["M~2", "M^2", "M^^2", "M...B1"],
      a: "A",
      e: "האופרטור `~2` מתקדם פעמיים לאורך ההורה הראשון."
    }
  },
  {
    topic: "Lifecycle: untracked",
    q1: {
      q: "יצרת קובץ חדש ש-Git לא הכיר קודם. לפני `git add`, מה מצבו?",
      o: ["staged", "tracked", "untracked", "unmodified"],
      a: "C",
      e: "קובץ חדש שאינו ב-index הוא untracked."
    },
    q2: {
      q: "איזו פעולה מעבירה קובץ מ-untracked ל-tracked (לפחות החל מהsnapshot הבא)?",
      o: ["git add", "git push", "git log", "git remote -v"],
      a: "A",
      e: "add מכניס את הקובץ ל-index ולכן הוא הופך tracked."
    }
  },
  {
    topic: "Lifecycle: unmodified",
    q1: {
      q: "מתי קובץ tracked מוגדר `unmodified`?",
      o: [
        "כשיש הבדל בין working tree ל-index",
        "כשאין הבדל בין working tree ל-index וגם ל-HEAD עבורו",
        "רק אחרי clone ראשון",
        "כשמוחקים אותו עם git rm"
      ],
      a: "B",
      e: "unmodified פירושו אין שינוי שלא נשמר מאז ה-commit האחרון עבור מצב העבודה."
    },
    q2: {
      q: "איזה רצף יכול להחזיר קובץ tracked למצב unmodified בלי ליצור commit חדש?",
      o: [
        "לערוך קובץ ואז git add",
        "לערוך קובץ ואז לשחזרו לתוכן HEAD",
        "git branch ואז git tag",
        "git push ואז git pull"
      ],
      a: "B",
      e: "אם התוכן חוזר בדיוק לגרסת HEAD, הקובץ שוב unmodified."
    }
  },
  {
    topic: "Lifecycle: modified",
    q1: {
      q: "שינית קובץ tracked ולא ביצעת add. מה סטטוס הקובץ?",
      o: ["modified", "staged", "untracked", "deleted"],
      a: "A",
      e: "השינוי קיים רק ב-working tree ולכן modified."
    },
    q2: {
      q: "איזה diff מדגיש קובץ במצב modified (לא staged)?",
      o: ["git diff", "git diff --cached", "git log --oneline", "git show HEAD^"],
      a: "A",
      e: "ברירת המחדל של git diff: working tree מול index."
    }
  },
  {
    topic: "Lifecycle: staged",
    q1: {
      q: "מה נכון לגבי קובץ staged?",
      o: [
        "השינוי שלו כבר ב-commit האחרון",
        "השינוי שלו נבחר להיכנס ל-commit הבא מה-index",
        "אי אפשר לשנות אותו יותר ב-working tree",
        "הוא מחויב אוטומטית ב-push הבא"
      ],
      a: "B",
      e: "staged = נמצא ב-index לקראת commit."
    },
    q2: {
      q: "איזו פקודה מציגה בדיוק מה staged כרגע?",
      o: ["git diff --cached", "git diff", "git status --porcelain=v2 --branch=never", "git reflog"],
      a: "A",
      e: "`git diff --cached` משווה index מול HEAD."
    }
  },
  {
    topic: "HEAD",
    q1: {
      q: "מהו HEAD בדרך כלל?",
      o: [
        "אובייקט blob של הקובץ הפעיל",
        "מצביע סמלי לענף הפעיל, שמצביע ל-commit הנוכחי",
        "תגית (tag) מיוחדת שלא זזה",
        "ה-remote הראשי"
      ],
      a: "B",
      e: "במצב רגיל HEAD מצביע לענף, והענף מצביע ל-tip commit."
    },
    q2: {
      q: "מתי מתקבל מצב Detached HEAD?",
      o: [
        "כש-HEAD מצביע ישירות ל-commit ולא לענף",
        "כשאין remote origin",
        "כשיש רק branch אחד",
        "כשלא ביצעת commit ראשון"
      ],
      a: "A",
      e: "Detached HEAD נוצר כשעומדים על commit/תגית ישירות."
    }
  },
  {
    topic: "branches",
    q1: {
      q: "מה Branch ב-Git מבחינה פנימית?",
      o: [
        "עותק מלא נפרד של כל הפרויקט",
        "מצביע נע ל-commit מסוים",
        "תיקייה פיזית אחרת בדיסק",
        "סוג מיוחד של tag"
      ],
      a: "B",
      e: "Branch הוא reference נע (כמעט תמיד refs/heads/<name>)."
    },
    q2: {
      q: "מה הכי מדויק לגבי יצירת branch חדש?",
      o: [
        "יוצרת היסטוריה חדשה מאפס",
        "יוצרת מצביע נוסף לאותו commit נוכחי; היסטוריה מתפצלת רק אחרי commits שונים",
        "מוחקת את branch הקודם",
        "מחייבת remote בשם origin"
      ],
      a: "B",
      e: "הפיצול הלוגי מתחיל כשכל ענף מתקדם עם commits שונים."
    }
  },
  {
    topic: "tags",
    q1: {
      q: "מה הבדל עיקרי בין branch ל-tag?",
      o: [
        "שניהם זזים בכל commit חדש",
        "tag בדרך כלל מצביע קבוע, branch מצביע נע",
        "branch לא יכול להצביע ל-commit",
        "tag חייב להיות חתום קריפטוגרפית"
      ],
      a: "B",
      e: "Tag נועד לסימון נקודה יציבה, למשל גרסה."
    },
    q2: {
      q: "איזה משפט נכון על lightweight tag לעומת annotated tag?",
      o: [
        "שניהם זהים לחלוטין ברמת אובייקטים",
        "annotated כולל אובייקט tag עם מטא-דאטה; lightweight הוא רק ref ל-commit",
        "lightweight תמיד נשלח אוטומטית ב-push",
        "annotated לא יכול להצביע ל-commit"
      ],
      a: "B",
      e: "Annotated tag שומר מידע נוסף (יוצר/תאריך/הודעה/חתימה אפשרית)."
    }
  },
  {
    topic: "When tracked / which versions tracked / where stored",
    q1: {
      q: "איזו גרסה של קובץ tracked נשמרת בכל commit?",
      o: [
        "רק הקובץ האחרון בפרויקט, commit קודם נמחק",
        "ה-snapshot כפי שנמצא ב-index בזמן יצירת ה-commit",
        "רק ההבדל הטקסטואלי ללא יכולת שחזור snapshot",
        "תלוי רק בשם הקובץ ולא בתוכן"
      ],
      a: "B",
      e: "Commit מייצג snapshot של tree; התוכן נשמר כאובייקטים ב-.git/objects."
    },
    q2: {
      q: "היכן נשמרים בפועל אובייקטי הגרסאות ב-Git מקומי?",
      o: [
        "בתיקיית src של הפרויקט",
        "רק ב-remote",
        "בתוך `.git/objects` (כולל packfiles)",
        "בקובץ `.gitignore`"
      ],
      a: "C",
      e: "האובייקטים נשמרים במסד הנתונים המקומי של Git תחת .git."
    }
  },
  {
    topic: "Using local and remote repositories",
    q1: {
      q: "מה נכון לגבי push/pull?",
      o: [
        "`push` מביא commits מה-remote ו-`pull` שולח",
        "`push` שולח refs/objects ל-remote, `pull` מביא ומשלב",
        "`pull` תמיד מוחק commits מקומיים",
        "`push` עובד גם בלי remote מוגדר"
      ],
      a: "B",
      e: "זו החלוקה התקנית בין סנכרון יוצא לנכנס."
    },
    q2: {
      q: "למה `fetch` נחשב בטוח יותר מ-`pull` במצבים רגישים?",
      o: [
        "כי fetch גם ממזג אוטומטית",
        "כי fetch מעדכן refs מרוחקים מקומיים בלי למזג לענף הפעיל",
        "כי fetch מוחק קונפליקטים קיימים",
        "כי pull לא קיים ב-Git מודרני"
      ],
      a: "B",
      e: "fetch מביא נתונים בלבד; אתה שולט בנפרד בשלב המיזוג/ריבייס."
    }
  },
  {
    topic: "Central repository model",
    q1: {
      q: "במודל ריפו מרכזי, מה סיכון תפעולי מרכזי לעומת DVCS מלא?",
      o: [
        "אין בכלל היסטוריה",
        "תלות גבוהה בשרת יחיד לשיתופיות ולעיתים גם לעבודה",
        "אי אפשר לבצע merge",
        "אי אפשר לעשות branches"
      ],
      a: "B",
      e: "Single point of failure ותלות רשת בולטים יותר במודל מרכזי."
    },
    q2: {
      q: "איזו אמירה מאזנת נכונה על מודל מרכזי עם Git?",
      o: [
        "זה מודל עבודה אפשרי, אך Git נשאר DVCS עם יכולות מקומיות מלאות",
        "ברגע שמגדירים origin, Git הופך ל-CVCS טהור",
        "מודל מרכזי מבטל את הצורך בענפים",
        "אי אפשר לעבוד אופליין בכלל"
      ],
      a: "A",
      e: "המודל ארגוני/תהליכי; היכולות המקומיות של Git לא נעלמות."
    }
  },
  {
    topic: "3-way merge",
    q1: {
      q: "איזה מידע דרוש ל-3-way merge קלאסי?",
      g: GRAPH_C,
      o: [
        "רק ה-tip של main",
        "שני טיפים + base common ancestor",
        "רק commit הישן ביותר",
        "רק ה-index"
      ],
      a: "B",
      e: "3-way merge משתמש ב-base משותף ושני קצוות להשוואה."
    },
    q2: {
      q: "ב-3-way merge ללא קונפליקט טקסטואלי, מה בדרך כלל יקרה?",
      g: GRAPH_C,
      o: [
        "merge נעצר תמיד ל-edit ידני",
        "Git יוצר תוצאה משולבת אוטומטית ויכול ליצור merge commit",
        "Git מוחק ענף אחד אוטומטית",
        "Git מריץ revert פנימי"
      ],
      a: "B",
      e: "כאשר השינויים לא מתנגשים, Git מסוגל לבצע שילוב אוטומטי."
    }
  },
  {
    topic: "Fast-forward",
    q1: {
      q: "מתי merge יכול להיות Fast-forward?",
      o: [
        "כשלשני הענפים היו commits מקבילים",
        "כאשר יעד המיזוג הוא אב קדמון ישיר של הענף שמתמזג פנימה",
        "רק אם יש תגית על כל commit",
        "רק אם משתמשים ב-`--squash`"
      ],
      a: "B",
      e: "אין פיצול אמיתי; רק מקדמים מצביע ענף קדימה."
    },
    q2: {
      q: "מה מאפיין תוצאת FF לעומת merge commit?",
      o: [
        "נוצר commit חדש עם שני הורים",
        "לא נוצר commit merge חדש; pointer זז קדימה",
        "היסטוריה נכתבת מחדש תמיד",
        "נוצר קונפליקט בכוונה"
      ],
      a: "B",
      e: "Fast-forward הוא הזזת ref בלבד."
    }
  },
  {
    topic: "Auto-merge",
    q1: {
      q: "מה הכוונה ש-Git ביצע auto-merge?",
      o: [
        "Git בחר באקראי צד אחד בכל קובץ",
        "Git חישב שילוב אוטומטי כי לא זוהו התנגשויות לא פתירות באזורים הרלוונטיים",
        "Git דילג על המיזוג",
        "Git תמיד יוצר conflict markers גם בלי קונפליקט"
      ],
      a: "B",
      e: "Auto-merge קורה כשניתן להכריע חישובית בין השינויים."
    },
    q2: {
      q: "האם auto-merge מבטיח היעדר באגים לוגיים לאחר merge?",
      o: [
        "כן, auto-merge מבטיח נכונות סמנטית",
        "לא, הוא מבטיח בעיקר שניתן היה לשלב טקסט/עץ; בדיקות עדיין נדרשות",
        "כן, אם אין conflict אז אין צורך בבדיקות",
        "תלוי רק בשם הענף"
      ],
      a: "B",
      e: "אין הבטחה לנכונות עסקית/לוגית, רק לאפשרות מיזוג מכנית."
    }
  },
  {
    topic: "Conflict",
    q1: {
      q: "מה קונפליקט merge אומר בפועל?",
      o: [
        "Git לא הצליח לבחור אוטומטית תוצאה סופית לחלק מהשינויים",
        "ה-repository נהרס לחלוטין",
        "אי אפשר להמשיך לעבוד עד clone מחדש",
        "כל הקבצים בפרויקט נפגעו"
      ],
      a: "A",
      e: "קונפליקט ממוקד לקבצים/אזורים שדורשים הכרעה ידנית."
    },
    q2: {
      q: "מה רצף טיפוסי אחרי זיהוי conflict בזמן merge?",
      o: [
        "git push ואז git pull",
        "לפתור ידנית -> git add לקבצים שנפתרו -> git commit",
        "git reset --hard תמיד",
        "git tag ואז git stash בלבד"
      ],
      a: "B",
      e: "כך מסמנים ל-Git שהפתרון הושלם וממשיכים commit מיזוג."
    }
  },
  {
    topic: "Merge vs rebase",
    q1: {
      q: "איזה משפט מדויק ביותר?",
      g: GRAPH_A,
      o: [
        "merge לרוב משמר הסתעפות, rebase משכתב רצף commits לבסיס חדש",
        "שניהם לא משנים SHA אף פעם",
        "rebase יוצר תמיד merge commit",
        "merge מוחק commits מקוריים"
      ],
      a: "A",
      e: "Rebase משנה זהויות commits שהועתקו; merge מחבר היסטוריות."
    },
    q2: {
      q: "למה לרוב לא מומלץ לבצע rebase להיסטוריה שכבר פורסמה לאחרים?",
      o: [
        "כי rebase איטי מדי",
        "כי הוא יוצר SHA חדשים ועלול לשבור סנכרון עם clones אחרים",
        "כי Git אוסר את זה טכנית",
        "כי rebase עובד רק על Windows"
      ],
      a: "B",
      e: "שכתוב היסטוריה ציבורית יוצר divergence אצל משתתפים אחרים."
    }
  },
  {
    topic: "Bare repositories",
    q1: {
      q: "מהו bare repository?",
      o: [
        "repo עם working tree רגיל אך בלי commits",
        "repo שמכיל רק מסד Git (ללא working tree), לרוב לשרת",
        "repo שניתן להשתמש בו רק לקריאה",
        "repo בלי branches"
      ],
      a: "B",
      e: "Bare repo מיועד לשיתוף/סנכרון כיעד remote."
    },
    q2: {
      q: "למה לא נהוג לערוך קבצים ישירות בתוך bare repo?",
      o: [
        "כי אין בו working tree לעריכת קבצים",
        "כי הוא read-only קשיח ברמת מערכת הקבצים",
        "כי אין בו branches",
        "כי Git מוחק בו קבצים אחרי push"
      ],
      a: "A",
      e: "בלי working directory אין קבצים חיים לעריכה רגילה."
    }
  },
  {
    topic: ".gitignore",
    q1: {
      q: "מה נכון לגבי `.gitignore`?",
      o: [
        "מפסיק לעקוב אוטומטית אחרי קבצים שכבר tracked",
        "משפיע על untracked files; tracked דורש `git rm --cached` אם רוצים להפסיק לעקוב",
        "מוחק קבצים פיזית מהדיסק",
        "נבדק רק בזמן push"
      ],
      a: "B",
      e: "זו נקודה שמבלבלת הרבה: ignore לא 'מבטל tracking' קיים."
    },
    q2: {
      q: "איזו בחירה עדיפה לרוב עבור artifacts כמו build/, dist/, node_modules/?",
      o: [
        "לשמור הכל ב-repo כדי לשחזר מהר",
        "להכניס ל-.gitignore ולהפיק מחדש מתהליך build",
        "להמיר ל-submodule",
        "להחביא בתיקייה .git"
      ],
      a: "B",
      e: "Artifacts נגזרים עדיף לא לגרס אלא לייצר מחדש."
    }
  },
  {
    topic: "User config file",
    q1: {
      q: "איזו פקודה מגדירה שם משתמש גלובלי לכל הריפו במחשב?",
      o: [
        "git config user.name \"Dana\"",
        "git config --global user.name \"Dana\"",
        "git user --name Dana",
        "git remote set-user Dana"
      ],
      a: "B",
      e: "`--global` כותב לקובץ המשתמש (לרוב ~/.gitconfig)."
    },
    q2: {
      q: "מה סדר העדיפויות העקרוני בקונפיג Git (גבוה לנמוך)?",
      o: [
        "system > global > local",
        "local > global > system",
        "global > local > system",
        "אין היררכיה; האחרון אקראי"
      ],
      a: "B",
      e: "קונפיג מקומי לריפו עוקף גלובלי, וגלובלי עוקף מערכת."
    }
  },
  {
    topic: "Good practices: what to track vs ignore",
    q1: {
      q: "איזו פרקטיקה נחשבת טובה ביותר לרוב הפרויקטים?",
      o: [
        "לשמור secrets בקוד כדי שיהיו זמינים לכולם",
        "לגרס קוד מקור, קבצי תצורה חיוניים ותלויות נעולות; להתעלם מתוצרים זמניים ו-secrets",
        "לגרס רק קבצי בינארי כדי לחסוך זמן build",
        "לא לגרס קבצי בדיקות"
      ],
      a: "B",
      e: "עקרון: גרס מה שמקורי/משחזר, התעלם מנגזר/רגיש/מקומי."
    },
    q2: {
      q: "איזה שילוב מסוכן במיוחד ב-repo ציבורי?",
      o: [
        "README + LICENSE",
        ".env עם מפתחות אמיתיים + dumps פרטיים",
        "קבצי src + tests",
        "קובץ .gitignore"
      ],
      a: "B",
      e: "דליפת סודות ונתונים רגישים היא סיכון קריטי."
    }
  },
  {
    topic: "The .git directory",
    q1: {
      q: "מה תפקיד התיקייה `.git`?",
      o: [
        "קאש זמני שאפשר למחוק ללא השפעה",
        "מסד הנתונים והמטא-דאטה של המאגר (objects, refs, config ועוד)",
        "תיקיית קוד מקור",
        "רק שמירת קבצי .gitignore"
      ],
      a: "B",
      e: "זו ליבת ה-repo המקומי; מחיקה שלה שומטת את ההיסטוריה המקומית."
    },
    q2: {
      q: "מה יקרה לרוב אם תמחק את `.git` מתיקיית פרויקט פעיל?",
      o: [
        "הקוד ימחק אבל ההיסטוריה תישאר",
        "ההיסטוריה והרפרנסים המקומיים יאבדו; התיקייה תפסיק להיות repo Git",
        "Git ישחזר אוטומטית את `.git` באתחול הבא",
        "רק ה-remote יפגע"
      ],
      a: "B",
      e: "ללא .git אין למערכת מידע על commits/branches של אותו עותק."
    }
  },
  {
    topic: "Git submodules",
    q1: {
      q: "מה נשמר בריפו הראשי עבור submodule?",
      o: [
        "עותק מלא של כל היסטוריית תת-הריפו",
        "מצביע (gitlink) ל-commit ספציפי של תת-המאגר",
        "רק URL בלי SHA",
        "snapshot טקסטואלי של כל קבצי תת-המאגר"
      ],
      a: "B",
      e: "ה-main repo מצמיד SHA מדויק של ה-submodule."
    },
    q2: {
      q: "מה מהווה הטעות הנפוצה אחרי שמקדמים submodule ל-commit חדש?",
      o: [
        "שוכחים לבצע commit בריפו הראשי של עדכון המצביע",
        "מריצים git status",
        "יוצרים branch חדש",
        "משתמשים ב-clone --recursive"
      ],
      a: "A",
      e: "צריך commit ב-main repo כדי לשמור את ה-pointer החדש."
    }
  }
);

export const TOPICS = defs.map((d) => d.topic);

export const QUESTIONS = defs.flatMap((d, t) => {
  const normalize = (x) => ({ t, q: x.q, o: x.o, a: x.a, e: x.e || "", ...(x.g ? { g: x.g } : {}) });
  return [normalize(d.q1), normalize(d.q2)];
});

const counts = QUESTIONS.reduce((m, q) => {
  m[q.t] = (m[q.t] || 0) + 1;
  return m;
}, {});

for (let i = 0; i < TOPICS.length; i++) {
  if ((counts[i] || 0) < 2) {
    throw new Error(`Topic index ${i} has פחות מ-2 שאלות`);
  }
}
