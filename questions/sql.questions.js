export const TOPICS = [
  "❏ Relational databases.",
  "❏ SQL in Java.",
  "❏ SQL in Python.",
  "❏ Railroad diagrams.",
  "❏ Defining tables. Create. Types in sqlite. ",
  "❏ PRIMARY KEY, AUTOINCREMENT, NOT NULL.",
  "❏ select, where, join, on, using, group by, order by, having, asc, desc, limit, intersect, union, sum(), count(), length(), avg(), *, as, distinct.",
  "❏ insert, update, delete.",
  "❏ Types of join.",
  "❏ Normalizing tables.",
  "❏ Selecting all (*) or individual columns.",
  "❏ Nested queries.",
  "❏ Views."
];

export const QUESTIONS = [
  {
    "t": 0,
    "q": "איזה משפט הוא הנכון ביותר (במובן הרלציוני/מודל טבלאי, לא 'SQL בפועל')?",
    "o": [
      "מפתח זר חייב תמיד להיות UNIQUE בטבלה שמכילה אותו",
      "טבלה רלציונית היא אוסף *לא מסודר* של רשומות, וכל רשומה היא אוסף *לא מסודר* של עמודות",
      "בבסיס נתונים רלציוני אפשר לעשות JOIN רק אם יש FK מוצהר",
      "הערך NULL שקול ל-0 בעמודות נומריות"
    ],
    "a": "B",
    "e": "במודל הרלציוני אין סדר מובטח לרשומות, וגם עקרונית אין משמעות לסדר עמודות. NULL אינו 0 ולא '' אלא 'לא ידוע/לא קיים'."
  },
  {
    "t": 1,
    "q": "מה הסיבה *הכי חשובה* להעדיף PreparedStatement על concatenation של מחרוזות SQL?",
    "o": [
      "PreparedStatement תמיד מהיר יותר מכל SELECT",
      "PreparedStatement מונע SQL injection וגם מאפשר תכנון/קאשינג של השאילתה",
      "PreparedStatement מאפשר להשתמש ב-JOIN בלבד",
      "PreparedStatement הופך כל INSERT לטרנזקציה"
    ],
    "a": "B",
    "e": "היתרון הקריטי הוא בטיחות (SQL injection) + טיפול נכון בפרמטרים. בנוסף הרבה DBs גם מקנפגות תוכנית ביצוע/קאשינג."
  },
  {
    "t": 2,
    "q": "ב-python sqlite3, למה *אסור* לעשות: f\"SELECT ... WHERE name = '{user}'\" ?",
    "o": [
      "כי sqlite3 לא תומך ב-f-strings",
      "כי זה יכול לשבור escaping וגם לפתוח SQL injection; צריך להשתמש בפרמטרים (?)",
      "כי WHERE לא עובד עם טקסט",
      "כי sqlite3 דורש תמיד PreparedStatement אמיתי כמו ב-Java"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 3,
    "q": "ב-Railroad diagram של דקדוק, מה בדרך כלל מייצג מסלול שעובר דרך בלוק ואז חוזר אליו (loop)?",
    "o": [
      "אלמנט שחייב להופיע בדיוק פעם אחת",
      "אלמנט אופציונלי שמופיע לכל היותר פעם אחת",
      "אלמנט שחוזר 0 או יותר פעמים (חזרה/רשימה)",
      "אלמנט שאסור להשתמש בו במימושים אמיתיים"
    ],
    "a": "C",
    "e": ""
  },
  {
    "t": 4,
    "q": "איזה משפט מתאר נכון את מערכת הטיפוסים של SQLite?",
    "o": [
      "SQLite היא strongly typed כמו PostgreSQL ולכן TEXT לא יכול להכיל מספר",
      "SQLite משתמשת ב-'type affinity' ולכן ההצהרה על טיפוס משפיעה על המרה/אחסון אבל לא אוכפת תמיד כמו DB אחרות",
      "SQLite תומכת רק ב-INT ו-TEXT",
      "ב-SQLite אין NULL בכלל"
    ],
    "a": "B",
    "e": "SQLite משתמשת ב-type affinity: הטיפוס המוצהר נותן נטייה (INTEGER/TEXT/REAL/BLOB/NUMERIC) אבל לא אכיפה קשיחה בכל מקרה."
  },
  {
    "t": 5,
    "q": "ב-SQLite, מה נכון לגבי INTEGER PRIMARY KEY?",
    "o": [
      "הוא יוצר תמיד עמודה רגילה ללא קשר ל-rowid",
      "הוא הופך את העמודה לכינוי של rowid, וערך חדש יכול להיווצר אוטומטית אם לא מספקים אחד",
      "אסור להשתמש בו עם AUTOINCREMENT",
      "הוא לא מאפשר להכיל NULL ולכן חייבים גם NOT NULL"
    ],
    "a": "B",
    "e": "ב-SQLite, INTEGER PRIMARY KEY היא alias ל-rowid. NOT NULL מיותר כי PK כבר לא יכול להיות NULL."
  },
  {
    "t": 6,
    "q": "מה הפלט? (מלכודת: קדימות אופרטורים AND/OR)\n\nמצב טבלאות מלא לפני השאילתה:\n--- depts ---\n| id | name  |\n|----|-------|\n| 10 | R&D   |\n| 20 | Sales |\n| 30 | HR    |\n(3 rows shown)\n\n--- employees ---\n| id | name | dept_id | salary |\n|----|------|---------|--------|\n| 1  | Dana | 10      | 100    |\n| 2  | Eli  | 10      | 200    |\n| 3  | Noa  | 20      | 200    |\n| 4  | Avi  | NULL    | 150    |\n| 5  | Dana | 20      | NULL   |\n(5 rows shown)\n\nשאילתה:\nSELECT id FROM employees WHERE name = 'Dana' OR dept_id = 10 AND salary >= 200 ORDER BY id;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "0",
      "<empty result>",
      "1\n2\n5",
      "NULL"
    ],
    "a": "C",
    "e": "AND חזק יותר מ-OR, כלומר: name='Dana' OR (dept_id=10 AND salary>=200)."
  },
  {
    "t": 6,
    "q": "מה הפלט? (שים/י לב: DISTINCT על עמודה אחת)\n\nמצב טבלאות מלא לפני השאילתה:\n--- depts ---\n| id | name  |\n|----|-------|\n| 10 | R&D   |\n| 20 | Sales |\n| 30 | HR    |\n(3 rows shown)\n\n--- employees ---\n| id | name | dept_id | salary |\n|----|------|---------|--------|\n| 1  | Dana | 10      | 100    |\n| 2  | Eli  | 10      | 200    |\n| 3  | Noa  | 20      | 200    |\n| 4  | Avi  | NULL    | 150    |\n| 5  | Dana | 20      | NULL   |\n(5 rows shown)\n\nשאילתה:\nSELECT DISTINCT name FROM employees ORDER BY name;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "0",
      "Avi\nDana\nEli\nNoa",
      "<empty result>",
      "NULL"
    ],
    "a": "B",
    "e": "פלט השאילתה נקבע לפי נתוני הטבלאות והתחביר המדויק."
  },
  {
    "t": 6,
    "q": "מה הפלט? (מלכודת: איפה NULL יושב במיון?)\n\nמצב טבלאות מלא לפני השאילתה:\n--- depts ---\n| id | name  |\n|----|-------|\n| 10 | R&D   |\n| 20 | Sales |\n| 30 | HR    |\n(3 rows shown)\n\n--- employees ---\n| id | name | dept_id | salary |\n|----|------|---------|--------|\n| 1  | Dana | 10      | 100    |\n| 2  | Eli  | 10      | 200    |\n| 3  | Noa  | 20      | 200    |\n| 4  | Avi  | NULL    | 150    |\n| 5  | Dana | 20      | NULL   |\n(5 rows shown)\n\nשאילתה:\nSELECT id, salary FROM employees ORDER BY salary DESC, id ASC;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "2|200\n3|200\n4|150\n1|100\n5|NULL",
      "<empty result>",
      "0",
      "NULL"
    ],
    "a": "A",
    "e": "ב-SQLite: NULLs ממוינים אחרונים ב-ORDER BY ... DESC, וראשונים ב-ASC. (וזה משתנה בין DBs — פה אנחנו על SQLite)."
  },
  {
    "t": 8,
    "q": "מה הפלט? (מלכודת: תנאי ב-WHERE יכול להפוך LEFT JOIN ל-INNER בפועל)\n\nמצב טבלאות מלא לפני השאילתה:\n--- depts ---\n| id | name  |\n|----|-------|\n| 10 | R&D   |\n| 20 | Sales |\n| 30 | HR    |\n(3 rows shown)\n\n--- employees ---\n| id | name | dept_id | salary |\n|----|------|---------|--------|\n| 1  | Dana | 10      | 100    |\n| 2  | Eli  | 10      | 200    |\n| 3  | Noa  | 20      | 200    |\n| 4  | Avi  | NULL    | 150    |\n| 5  | Dana | 20      | NULL   |\n(5 rows shown)\n\nשאילתה:\nSELECT e.id, d.name FROM employees e LEFT JOIN depts d ON e.dept_id = d.id WHERE d.name = 'R&D' ORDER BY e.id;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "1|R&D\n2|R&D",
      "0",
      "<empty result>",
      "NULL"
    ],
    "a": "A",
    "e": "אחרי LEFT JOIN מתקבל d.name=NULL עבור עובדים ללא מחלקה; WHERE d.name='R&D' מסנן אותם החוצה."
  },
  {
    "t": 8,
    "q": "מה הפלט? (אותו רעיון, אבל הפעם התנאי בתוך ON)\n\nמצב טבלאות מלא לפני השאילתה:\n--- depts ---\n| id | name  |\n|----|-------|\n| 10 | R&D   |\n| 20 | Sales |\n| 30 | HR    |\n(3 rows shown)\n\n--- employees ---\n| id | name | dept_id | salary |\n|----|------|---------|--------|\n| 1  | Dana | 10      | 100    |\n| 2  | Eli  | 10      | 200    |\n| 3  | Noa  | 20      | 200    |\n| 4  | Avi  | NULL    | 150    |\n| 5  | Dana | 20      | NULL   |\n(5 rows shown)\n\nשאילתה:\nSELECT e.id, d.name FROM employees e LEFT JOIN depts d ON e.dept_id = d.id AND d.name = 'R&D' ORDER BY e.id;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "0",
      "<empty result>",
      "NULL",
      "1|R&D\n2|R&D\n3|NULL\n4|NULL\n5|NULL"
    ],
    "a": "D",
    "e": "כאן נשמרים כל העובדים; פשוט אין התאמה ל-d (מקבלים NULL) אם המחלקה לא R&D."
  },
  {
    "t": 6,
    "q": "מה הפלט? (מלכודת: SQLite מאפשר לבחור עמודה שלא ב-GROUP BY)\n\nמצב טבלאות מלא לפני השאילתה:\n--- depts ---\n| id | name  |\n|----|-------|\n| 10 | R&D   |\n| 20 | Sales |\n| 30 | HR    |\n(3 rows shown)\n\n--- employees ---\n| id | name | dept_id | salary |\n|----|------|---------|--------|\n| 1  | Dana | 10      | 100    |\n| 2  | Eli  | 10      | 200    |\n| 3  | Noa  | 20      | 200    |\n| 4  | Avi  | NULL    | 150    |\n| 5  | Dana | 20      | NULL   |\n(5 rows shown)\n\nשאילתה:\nSELECT dept_id, name, COUNT(*) FROM employees GROUP BY dept_id ORDER BY dept_id;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "<empty result>",
      "NULL|Avi|1\n10|Dana|2\n20|Noa|2",
      "0",
      "NULL"
    ],
    "a": "B",
    "e": "ב-SQL תקני זה לא חוקי; ב-SQLite זה מחזיר שם *שרירותי* מתוך הקבוצה. זו מלכודת: לא להסתמך על זה."
  },
  {
    "t": 6,
    "q": "מה הפלט?\n\nמצב טבלאות מלא לפני השאילתה:\n--- depts ---\n| id | name  |\n|----|-------|\n| 10 | R&D   |\n| 20 | Sales |\n| 30 | HR    |\n(3 rows shown)\n\n--- employees ---\n| id | name | dept_id | salary |\n|----|------|---------|--------|\n| 1  | Dana | 10      | 100    |\n| 2  | Eli  | 10      | 200    |\n| 3  | Noa  | 20      | 200    |\n| 4  | Avi  | NULL    | 150    |\n| 5  | Dana | 20      | NULL   |\n(5 rows shown)\n\nשאילתה:\nSELECT dept_id FROM employees GROUP BY dept_id HAVING COUNT(*) >= 2 ORDER BY dept_id;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "<empty result>",
      "NULL",
      "10\n20",
      "0"
    ],
    "a": "C",
    "e": "COUNT(*) כולל גם שורות עם salary NULL וגם קבוצת dept_id=NULL."
  },
  {
    "t": 6,
    "q": "מה הפלט? (מלכודת: COUNT(salary) במקום COUNT(*))\n\nמצב טבלאות מלא לפני השאילתה:\n--- depts ---\n| id | name  |\n|----|-------|\n| 10 | R&D   |\n| 20 | Sales |\n| 30 | HR    |\n(3 rows shown)\n\n--- employees ---\n| id | name | dept_id | salary |\n|----|------|---------|--------|\n| 1  | Dana | 10      | 100    |\n| 2  | Eli  | 10      | 200    |\n| 3  | Noa  | 20      | 200    |\n| 4  | Avi  | NULL    | 150    |\n| 5  | Dana | 20      | NULL   |\n(5 rows shown)\n\nשאילתה:\nSELECT dept_id FROM employees GROUP BY dept_id HAVING COUNT(salary) >= 2 ORDER BY dept_id;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "NULL",
      "0",
      "<empty result>",
      "10"
    ],
    "a": "D",
    "e": "פלט השאילתה נקבע לפי נתוני הטבלאות והתחביר המדויק."
  },
  {
    "t": 6,
    "q": "מה הפלט?\n\nמצב טבלאות מלא לפני השאילתה:\n--- p ---\n| id | dept_id |\n|----|---------|\n| 1  | 10      |\n| 2  | 20      |\n| 3  | NULL    |\n(3 rows shown)\n\n--- q2 ---\n| dept_id | label |\n|---------|-------|\n| 10      | X     |\n| 20      | Y     |\n(2 rows shown)\n\nשאילתה:\nSELECT id, dept_id, label FROM p JOIN q2 USING(dept_id) ORDER BY id;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "<empty result>",
      "NULL",
      "0",
      "1|10|X\n2|20|Y"
    ],
    "a": "D",
    "e": "USING מאחד את dept_id לעמודה אחת בתוצאה. INNER JOIN יפיל dept_id=NULL."
  },
  {
    "t": 6,
    "q": "מה הפלט של השאילתה? (שים/י לב ל-NULL ול-DISTINCT)\n\nמצב טבלאות מלא לפני השאילתה:\n--- depts ---\n| id | name  |\n|----|-------|\n| 10 | R&D   |\n| 20 | Sales |\n| 30 | HR    |\n(3 rows shown)\n\n--- employees ---\n| id | name | dept_id | salary |\n|----|------|---------|--------|\n| 1  | Dana | 10      | 100    |\n| 2  | Eli  | 10      | 200    |\n| 3  | Noa  | 20      | 200    |\n| 4  | Avi  | NULL    | 150    |\n| 5  | Dana | 20      | NULL   |\n(5 rows shown)\n\nשאילתה:\nSELECT DISTINCT name, salary FROM employees ORDER BY name ASC, salary ASC;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "0",
      "Avi|150\nDana|NULL\nDana|100\nEli|200\nNoa|200",
      "NULL",
      "<empty result>"
    ],
    "a": "B",
    "e": "DISTINCT עובד על זוג העמודות (name,salary). NULL נחשב ערך נפרד להשוואה לצורך DISTINCT וגם ממויין ראשון ב-ASC ב-SQLite."
  },
  {
    "t": 6,
    "q": "מה הפלט של השאילתה? (שאלה מלכודת על NULL)\n\nמצב טבלאות מלא לפני השאילתה:\n--- depts ---\n| id | name  |\n|----|-------|\n| 10 | R&D   |\n| 20 | Sales |\n| 30 | HR    |\n(3 rows shown)\n\n--- employees ---\n| id | name | dept_id | salary |\n|----|------|---------|--------|\n| 1  | Dana | 10      | 100    |\n| 2  | Eli  | 10      | 200    |\n| 3  | Noa  | 20      | 200    |\n| 4  | Avi  | NULL    | 150    |\n| 5  | Dana | 20      | NULL   |\n(5 rows shown)\n\nשאילתה:\nSELECT id FROM employees WHERE salary = NULL ORDER BY id;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "NULL",
      "0",
      "1",
      "<empty result>"
    ],
    "a": "D",
    "e": "השוואה ל-NULL עם '=' מחזירה UNKNOWN ולכן WHERE מסנן הכל. צריך IS NULL."
  },
  {
    "t": 6,
    "q": "מה הפלט של השאילתה?\n\nמצב טבלאות מלא לפני השאילתה:\n--- depts ---\n| id | name  |\n|----|-------|\n| 10 | R&D   |\n| 20 | Sales |\n| 30 | HR    |\n(3 rows shown)\n\n--- employees ---\n| id | name | dept_id | salary |\n|----|------|---------|--------|\n| 1  | Dana | 10      | 100    |\n| 2  | Eli  | 10      | 200    |\n| 3  | Noa  | 20      | 200    |\n| 4  | Avi  | NULL    | 150    |\n| 5  | Dana | 20      | NULL   |\n(5 rows shown)\n\nשאילתה:\nSELECT id FROM employees WHERE salary IS NULL ORDER BY id;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "NULL",
      "<empty result>",
      "5",
      "0"
    ],
    "a": "C",
    "e": "פלט השאילתה נקבע לפי נתוני הטבלאות והתחביר המדויק."
  },
  {
    "t": 6,
    "q": "מה הפלט של השאילתה? (שים/י לב לעובד בלי dept_id)\n\nמצב טבלאות מלא לפני השאילתה:\n--- depts ---\n| id | name  |\n|----|-------|\n| 10 | R&D   |\n| 20 | Sales |\n| 30 | HR    |\n(3 rows shown)\n\n--- employees ---\n| id | name | dept_id | salary |\n|----|------|---------|--------|\n| 1  | Dana | 10      | 100    |\n| 2  | Eli  | 10      | 200    |\n| 3  | Noa  | 20      | 200    |\n| 4  | Avi  | NULL    | 150    |\n| 5  | Dana | 20      | NULL   |\n(5 rows shown)\n\nשאילתה:\nSELECT e.name, d.name FROM employees e JOIN depts d ON e.dept_id = d.id ORDER BY e.id;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "<empty result>",
      "Dana|R&D\nEli|R&D\nNoa|Sales\nDana|Sales",
      "0",
      "NULL"
    ],
    "a": "B",
    "e": "JOIN רגיל (INNER) מפיל רשומות שלא עומדות בתנאי. עובד עם dept_id NULL לא יופיע."
  },
  {
    "t": 8,
    "q": "מה הפלט?\n\nמצב טבלאות מלא לפני השאילתה:\n--- depts ---\n| id | name  |\n|----|-------|\n| 10 | R&D   |\n| 20 | Sales |\n| 30 | HR    |\n(3 rows shown)\n\n--- employees ---\n| id | name | dept_id | salary |\n|----|------|---------|--------|\n| 1  | Dana | 10      | 100    |\n| 2  | Eli  | 10      | 200    |\n| 3  | Noa  | 20      | 200    |\n| 4  | Avi  | NULL    | 150    |\n| 5  | Dana | 20      | NULL   |\n(5 rows shown)\n\nשאילתה:\nSELECT e.id, d.name FROM employees e LEFT JOIN depts d ON e.dept_id = d.id ORDER BY e.id;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "0",
      "NULL",
      "<empty result>",
      "1|R&D\n2|R&D\n3|Sales\n4|NULL\n5|Sales"
    ],
    "a": "D",
    "e": "LEFT JOIN משאיר את כל העובדים; כשאין התאמה מתקבל NULL בעמודות של d."
  },
  {
    "t": 6,
    "q": "מה הפלט? (מלכודת: COUNT(col) לא סופר NULL)\n\nמצב טבלאות מלא לפני השאילתה:\n--- depts ---\n| id | name  |\n|----|-------|\n| 10 | R&D   |\n| 20 | Sales |\n| 30 | HR    |\n(3 rows shown)\n\n--- employees ---\n| id | name | dept_id | salary |\n|----|------|---------|--------|\n| 1  | Dana | 10      | 100    |\n| 2  | Eli  | 10      | 200    |\n| 3  | Noa  | 20      | 200    |\n| 4  | Avi  | NULL    | 150    |\n| 5  | Dana | 20      | NULL   |\n(5 rows shown)\n\nשאילתה:\nSELECT dept_id, COUNT(salary) FROM employees GROUP BY dept_id ORDER BY dept_id;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "<empty result>",
      "NULL",
      "0",
      "NULL|1\n10|2\n20|1"
    ],
    "a": "D",
    "e": "COUNT(salary) לא כולל NULL. וגם GROUP BY על NULL יוצר קבוצה נפרדת."
  },
  {
    "t": 6,
    "q": "מה הפלט?\n\nמצב טבלאות מלא לפני השאילתה:\n--- depts ---\n| id | name  |\n|----|-------|\n| 10 | R&D   |\n| 20 | Sales |\n| 30 | HR    |\n(3 rows shown)\n\n--- employees ---\n| id | name | dept_id | salary |\n|----|------|---------|--------|\n| 1  | Dana | 10      | 100    |\n| 2  | Eli  | 10      | 200    |\n| 3  | Noa  | 20      | 200    |\n| 4  | Avi  | NULL    | 150    |\n| 5  | Dana | 20      | NULL   |\n(5 rows shown)\n\nשאילתה:\nSELECT dept_id, AVG(salary) FROM employees GROUP BY dept_id HAVING AVG(salary) >= 150 ORDER BY dept_id;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "NULL",
      "NULL|150.0\n10|150.0\n20|200.0",
      "<empty result>",
      "0"
    ],
    "a": "B",
    "e": "HAVING מסנן אחרי GROUP BY. AVG מתעלם מ-NULL."
  },
  {
    "t": 6,
    "q": "מה הפלט? (שאלה מלכודת על alias ו-ordering)\n\nמצב טבלאות מלא לפני השאילתה:\n--- depts ---\n| id | name  |\n|----|-------|\n| 10 | R&D   |\n| 20 | Sales |\n| 30 | HR    |\n(3 rows shown)\n\n--- employees ---\n| id | name | dept_id | salary |\n|----|------|---------|--------|\n| 1  | Dana | 10      | 100    |\n| 2  | Eli  | 10      | 200    |\n| 3  | Noa  | 20      | 200    |\n| 4  | Avi  | NULL    | 150    |\n| 5  | Dana | 20      | NULL   |\n(5 rows shown)\n\nשאילתה:\nSELECT name, salary, salary/100 AS bucket FROM employees ORDER BY bucket DESC, name ASC, salary ASC;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "NULL",
      "0",
      "<empty result>",
      "Eli|200|2\nNoa|200|2\nAvi|150|1\nDana|100|1\nDana|NULL|NULL"
    ],
    "a": "D",
    "e": "ב-SQLite, salary/100 כאשר salary הוא INTEGER עושה חלוקה מספרית ומחזיר REAL? בפועל ב-SQLite '/' תמיד real-division; אבל אם salary NULL אז bucket NULL והתיעדוף במיון חשוב."
  },
  {
    "t": 6,
    "q": "מה הפלט?\n\nמצב טבלאות מלא לפני השאילתה:\n--- depts ---\n| id | name  |\n|----|-------|\n| 10 | R&D   |\n| 20 | Sales |\n| 30 | HR    |\n(3 rows shown)\n\n--- employees ---\n| id | name | dept_id | salary |\n|----|------|---------|--------|\n| 1  | Dana | 10      | 100    |\n| 2  | Eli  | 10      | 200    |\n| 3  | Noa  | 20      | 200    |\n| 4  | Avi  | NULL    | 150    |\n| 5  | Dana | 20      | NULL   |\n(5 rows shown)\n\nשאילתה:\nSELECT id, salary FROM employees WHERE salary IS NOT NULL ORDER BY salary DESC, id ASC LIMIT 2;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "2|200\n3|200",
      "<empty result>",
      "0",
      "NULL"
    ],
    "a": "A",
    "e": "פלט השאילתה נקבע לפי נתוני הטבלאות והתחביר המדויק."
  },
  {
    "t": 6,
    "q": "מה הפלט? (שים/י לב: UNION עושה DISTINCT כברירת מחדל)\n\nמצב טבלאות מלא לפני השאילתה:\n--- a ---\n| x |\n|---|\n| 1 |\n| 2 |\n| 2 |\n| 3 |\n(4 rows shown)\n\n--- b ---\n| x |\n|---|\n| 2 |\n| 2 |\n| 4 |\n(3 rows shown)\n\nשאילתה:\nSELECT x FROM a UNION SELECT x FROM b ORDER BY x;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "<empty result>",
      "NULL",
      "1\n2\n3\n4",
      "0"
    ],
    "a": "C",
    "e": "UNION בלי ALL מסיר כפילויות."
  },
  {
    "t": 6,
    "q": "מה הפלט? (מלכודת: UNION ALL לא מסיר כפילויות)\n\nמצב טבלאות מלא לפני השאילתה:\n--- a ---\n| x |\n|---|\n| 1 |\n| 2 |\n| 2 |\n| 3 |\n(4 rows shown)\n\n--- b ---\n| x |\n|---|\n| 2 |\n| 2 |\n| 4 |\n(3 rows shown)\n\nשאילתה:\nSELECT x FROM a UNION ALL SELECT x FROM b ORDER BY x;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "0",
      "NULL",
      "1\n2\n2\n2\n2\n3\n4",
      "<empty result>"
    ],
    "a": "C",
    "e": "UNION ALL שומר כפילויות משני הצדדים."
  },
  {
    "t": 6,
    "q": "מה הפלט?\n\nמצב טבלאות מלא לפני השאילתה:\n--- a ---\n| x |\n|---|\n| 1 |\n| 2 |\n| 2 |\n| 3 |\n(4 rows shown)\n\n--- b ---\n| x |\n|---|\n| 2 |\n| 2 |\n| 4 |\n(3 rows shown)\n\nשאילתה:\nSELECT x FROM a INTERSECT SELECT x FROM b ORDER BY x;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "2",
      "0",
      "<empty result>",
      "NULL"
    ],
    "a": "A",
    "e": "INTERSECT מחזיר חיתוך ייחודי (distinct) של הערכים."
  },
  {
    "t": 6,
    "q": "מה הפלט? (מלכודת: COUNT(*) מול COUNT(col); LENGTH(NULL))\n\nמצב טבלאות מלא לפני השאילתה:\n--- t ---\n| s    |\n|------|\n| a    |\n|      |\n| NULL |\n| abc  |\n(4 rows shown)\n\nשאילתה:\nSELECT COUNT(*), COUNT(s), SUM(LENGTH(s)), AVG(LENGTH(s)) FROM t;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "<empty result>",
      "4|3|4|1.3333333333333333",
      "NULL",
      "0"
    ],
    "a": "B",
    "e": "COUNT(*) סופר שורות כולל NULL. COUNT(s) לא סופר NULL. LENGTH(NULL) הוא NULL ולכן SUM/AVG מתעלמים ממנו (SUM מתעלם, AVG מתעלם ב-sqlite כי NULL לא נכנס לחישוב)."
  },
  {
    "t": 7,
    "q": "מה הפלט בסוף הרצף?\n\nמצב טבלאות מלא לפני השאילתה:\n--- nums ---\n| n  |\n|----|\n| 11 |\n| 2  |\n(2 rows shown)\n\nשאילתה:\nSELECT n FROM nums ORDER BY n;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "NULL",
      "<empty result>",
      "2\n11",
      "0"
    ],
    "a": "C",
    "e": "עוקבים אחרי UPDATE ואז DELETE. שים/י לב ל-NULL ולתנאים."
  },
  {
    "t": 7,
    "q": "נניח הטבלה: CREATE TABLE t(id INTEGER PRIMARY KEY, v TEXT NOT NULL). מה יקרה בהרצה: INSERT INTO t(id,v) VALUES (1,NULL); ?",
    "o": [
      "יוכנס ערך v בתור מחרוזת 'NULL'",
      "הכנסה תיכשל בגלל NOT NULL constraint",
      "SQLite תחליף NULL במחרוזת ריקה '' אוטומטית",
      "SQLite תדלג על השורה בשקט"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 7,
    "q": "בהינתן employees מהשאלות הקודמות, כמה שורות ישתנו בפקודה: UPDATE employees SET salary = salary + 50 WHERE name = 'Dana'; ?",
    "o": [
      "1",
      "2",
      "3",
      "0 (כי יש NULL)"
    ],
    "a": "B",
    "e": "יש שתי שורות עם name='Dana'. אחת מהן עם salary NULL — ב-SQLite, NULL + 50 נשאר NULL, אבל השורה עדיין 'נפגעה' (עודכנה)."
  },
  {
    "t": 8,
    "q": "מה הפלט? (CROSS JOIN = מכפלה קרטזית)\n\nמצב טבלאות מלא לפני השאילתה:\n--- x ---\n| a |\n|---|\n| u |\n| v |\n(2 rows shown)\n\n--- y ---\n| b |\n|---|\n| 1 |\n| 2 |\n| 3 |\n(3 rows shown)\n\nשאילתה:\nSELECT a || b FROM x CROSS JOIN y ORDER BY a, b;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "<empty result>",
      "0",
      "u1\nu2\nu3\nv1\nv2\nv3",
      "NULL"
    ],
    "a": "C",
    "e": "פלט השאילתה נקבע לפי נתוני הטבלאות והתחביר המדויק."
  },
  {
    "t": 8,
    "q": "מה הפלט? (זוגות עובדים באותה מחלקה; שים/י לב לתנאי שמונע כפילויות)\n\nמצב טבלאות מלא לפני השאילתה:\n--- depts ---\n| id | name  |\n|----|-------|\n| 10 | R&D   |\n| 20 | Sales |\n| 30 | HR    |\n(3 rows shown)\n\n--- employees ---\n| id | name | dept_id | salary |\n|----|------|---------|--------|\n| 1  | Dana | 10      | 100    |\n| 2  | Eli  | 10      | 200    |\n| 3  | Noa  | 20      | 200    |\n| 4  | Avi  | NULL    | 150    |\n| 5  | Dana | 20      | NULL   |\n(5 rows shown)\n\nשאילתה:\nSELECT e1.name, e2.name FROM employees e1 JOIN employees e2 ON e1.dept_id = e2.dept_id AND e1.id < e2.id ORDER BY e1.id, e2.id;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "<empty result>",
      "Dana|Eli\nNoa|Dana",
      "0",
      "NULL"
    ],
    "a": "B",
    "e": "התנאי e1.id < e2.id מונע (A,B) וגם (B,A) ומונע התאמה של עובד לעצמו."
  },
  {
    "t": 9,
    "q": "איזה מצב הוא הדוגמה הכי קלאסית לבעיה שנרמול פותר?",
    "o": [
      "טבלה שבה מפתח ראשי הוא מספר שלם",
      "הטמעת רשימת ערכים בעמודה אחת (למשל 'math,cs,physics') שגורמת לבעיות עדכון/שאילתות",
      "טבלה עם הרבה אינדקסים",
      "טבלה שאין בה NULL בכלל"
    ],
    "a": "B",
    "e": "הפרת 1NF/ריבוי ערכים בעמודה גורמת לאנומליות. נרמול מפצל ליחסי-משנה."
  },
  {
    "t": 9,
    "q": "יש טבלה Enrollment(student_id, course_id, student_name, grade) והמפתח הראשי הוא (student_id, course_id). מה הבעיה כאן?",
    "o": [
      "אין בעיה — זה כבר 3NF",
      "student_name תלוי רק ב-student_id (תלות חלקית) ולכן זו הפרה של 2NF",
      "grade תלוי רק ב-course_id ולכן זו הפרה של BCNF",
      "צריך להפוך את grade ל-NULL כדי לתקן"
    ],
    "a": "B",
    "e": "שם הסטודנט תלוי בזהות הסטודנט בלבד ולא בכל המפתח המורכב, ולכן יש אנומליות בעדכון."
  },
  {
    "t": 10,
    "q": "איזה טיעון הוא הכי טוב נגד שימוש ב-SELECT * בפרויקט אמיתי?",
    "o": [
      "SQL לא מאפשר SELECT * עם WHERE",
      "SELECT * תמיד איטי יותר (בכל DB ובכל מצב)",
      "זה יוצר צימוד לשינויים בסכימה ועלול למשוך עמודות מיותרות (ביצועים/תחזוקה/אבטחה)",
      "SELECT * לא עובד עם JOIN"
    ],
    "a": "C",
    "e": ""
  },
  {
    "t": 10,
    "q": "מה הפלט? (שאלה קטנה כדי לחדד: * כולל את כל העמודות בסדר ההגדרה)\n\nמצב טבלאות מלא לפני השאילתה:\n--- demo ---\n| a | b |\n|---|---|\n| 1 | x |\n(1 rows shown)\n\nשאילתה:\nSELECT * FROM demo;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "1|x",
      "NULL",
      "<empty result>",
      "0"
    ],
    "a": "A",
    "e": "פלט השאילתה נקבע לפי נתוני הטבלאות והתחביר המדויק."
  },
  {
    "t": 11,
    "q": "מה הפלט? (תת-שאילתה עם NOT IN מלכודת NULL)\n\nמצב טבלאות מלא לפני השאילתה:\n--- r ---\n| x |\n|---|\n| 1 |\n| 2 |\n| 3 |\n(3 rows shown)\n\n--- s ---\n| x    |\n|------|\n| 2    |\n| NULL |\n(2 rows shown)\n\nשאילתה:\nSELECT x FROM r WHERE x NOT IN (SELECT x FROM s) ORDER BY x;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "1",
      "NULL",
      "0",
      "<empty result>"
    ],
    "a": "D",
    "e": "אם תת-השאילתה מכילה NULL, אז x NOT IN (...) נהיה UNKNOWN לכל x שלא שווה ל-2, ולכן מתקבלת תוצאה ריקה. זו מלכודת קלאסית."
  },
  {
    "t": 11,
    "q": "מה הפלט? (שאלה קשה: תת-שאילתה מתואמת + AVG מתעלם מ-NULL)\n\nמצב טבלאות מלא לפני השאילתה:\n--- depts ---\n| id | name  |\n|----|-------|\n| 10 | R&D   |\n| 20 | Sales |\n| 30 | HR    |\n(3 rows shown)\n\n--- employees ---\n| id | name | dept_id | salary |\n|----|------|---------|--------|\n| 1  | Dana | 10      | 100    |\n| 2  | Eli  | 10      | 200    |\n| 3  | Noa  | 20      | 200    |\n| 4  | Avi  | NULL    | 150    |\n| 5  | Dana | 20      | NULL   |\n(5 rows shown)\n\nשאילתה:\nSELECT id, name\n            FROM employees e\n            WHERE salary IS NOT NULL\n              AND salary > (\n                SELECT AVG(salary)\n                FROM employees e2\n                WHERE e2.dept_id = e.dept_id\n              )\n            ORDER BY id;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "0",
      "<empty result>",
      "2|Eli",
      "NULL"
    ],
    "a": "C",
    "e": "לכל עובד עם salary לא NULL בודקים מול ממוצע המחלקה שלו. למחלקה עם ממוצע NULL (אין משכורות) לא תהיה התאמה כי salary > NULL הוא UNKNOWN."
  },
  {
    "t": 11,
    "q": "מה הפלט?\n\nמצב טבלאות מלא לפני השאילתה:\n--- r ---\n| x |\n|---|\n| 1 |\n| 2 |\n| 3 |\n(3 rows shown)\n\n--- s ---\n| x    |\n|------|\n| 2    |\n| NULL |\n(2 rows shown)\n\nשאילתה:\nSELECT x FROM r WHERE NOT EXISTS (SELECT 1 FROM s WHERE s.x = r.x) ORDER BY x;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "NULL",
      "<empty result>",
      "0",
      "1\n3"
    ],
    "a": "D",
    "e": "EXISTS/NOT EXISTS מתמודדים יפה יותר עם NULL כי ההשוואה מתבצעת רק על התאמות; NULL לא 'מתאים' לשום דבר."
  },
  {
    "t": 12,
    "q": "מה הפלט? (שים/י לב: VIEW הוא שאילתה שמורצת בזמן SELECT)\n\nמצב טבלאות מלא לפני השאילתה:\n--- items ---\n| id | price |\n|----|-------|\n| 1  | 10    |\n| 2  | 20    |\n| 3  | 5     |\n(3 rows shown)\n\nשאילתה:\nSELECT id FROM expensive ORDER BY id;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "0",
      "NULL",
      "<empty result>",
      "2"
    ],
    "a": "D",
    "e": "VIEW אינו snapshot; הוא תלוי במצב הנוכחי של הטבלה בזמן הקריאה."
  },
  {
    "t": 12,
    "q": "איזה משפט הוא הכי נכון באופן כללי?",
    "o": [
      "אפשר תמיד UPDATE דרך VIEW בכל DB",
      "VIEW הוא תמיד טבלה פיזית שמעתיקים אליה נתונים",
      "לפעמים אפשר לעדכן דרך VIEW (updatable view), אבל זה תלוי במבנה ה-VIEW וב-DB",
      "VIEW תמיד מהיר יותר מ-SELECT רגיל כי הוא מקמפל את הנתונים"
    ],
    "a": "C",
    "e": ""
  },
  {
    "t": 4,
    "q": "מה הפלט? (מלכודת: CHECK ב-SQL מקבל NULL כ'לא נכשל')\n\nמצב טבלאות מלא לפני השאילתה:\n--- c ---\n| v    |\n|------|\n| 1    |\n| NULL |\n(2 rows shown)\n\nשאילתה:\nSELECT v FROM c ORDER BY v;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "NULL",
      "0",
      "<empty result>",
      "NULL\n1"
    ],
    "a": "D",
    "e": "ב-SQL, CHECK נכשל רק אם הביטוי הוא FALSE. אם הוא NULL/UNKNOWN — האילוץ לא נכשל."
  },
  {
    "t": 5,
    "q": "ב-SQLite, מה נכון לגבי AUTOINCREMENT?",
    "o": [
      "חייבים AUTOINCREMENT כדי לקבל ID אוטומטי",
      "AUTOINCREMENT מבטיח שלא ייעשה reuse לערכי ROWID שנמחקו, אבל יש לו מחיר/השפעה",
      "AUTOINCREMENT עובד גם על TEXT PRIMARY KEY",
      "AUTOINCREMENT גורם ל-IDs להיות רציפים בלי חורים תמיד"
    ],
    "a": "B",
    "e": "גם בלי AUTOINCREMENT, INTEGER PRIMARY KEY מייצר ID אוטומטי; AUTOINCREMENT מחמיר התנהגות reuse של ROWID."
  },
  {
    "t": 6,
    "q": "מה ההבדל הטיפוסי בין JOIN ... ON לבין JOIN ... USING(col) כאשר לשתי הטבלאות יש עמודה בשם col?",
    "o": [
      "USING מבצע CROSS JOIN ואז WHERE",
      "USING מאחד את עמודת col לתוצאה כעמודה אחת ולא שתיים (ומחייב שם עמודה זהה בשתי הטבלאות)",
      "ON אסור כשיש NULL",
      "אין שום הבדל בשום DB"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 1,
    "q": "מהו הדפוס הנכון ביותר למניעת דליפת משאבים (connection/statement/resultset) ב-Java?",
    "o": [
      "להסתמך על ה-GC שיסגור Connection",
      "try-with-resources",
      "לקרוא close() רק על ResultSet",
      "לא צריך לסגור Statement אם סוגרים Connection"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 2,
    "q": "ב-sqlite3, אם ביצעת INSERT ואחריו התוכנית הסתיימה בלי con.commit(), מה צפוי לקרות?",
    "o": [
      "הנתונים תמיד נשמרים כי SQLite כותב מייד",
      "בדרך כלל הנתונים לא יישמרו (תלוי ב-autocommit/טרנזקציה), ולכן צריך commit",
      "הנתונים נשמרים רק אם השתמשת ב-SELECT לפני",
      "זה תלוי אם הטבלה עם PRIMARY KEY"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 0,
    "q": "איזה משפט נכון?",
    "o": [
      "כל superkey הוא גם candidate key",
      "candidate key הוא superkey מינימלי (אין תת-קבוצה שהיא עדיין superkey)",
      "candidate key חייב להיות מספר שלם",
      "primary key חייב להיות היחיד בטבלה"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 5,
    "q": "מה הפלט? (מלכודת: כמה NULL מותרים ב-UNIQUE ב-SQLite)\n\nמצב טבלאות מלא לפני השאילתה:\n--- u ---\n| x    |\n|------|\n| NULL |\n| NULL |\n| 1    |\n(3 rows shown)\n\nשאילתה:\nSELECT COUNT(*) FROM u;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "<empty result>",
      "NULL",
      "3",
      "0"
    ],
    "a": "C",
    "e": "ב-SQLite (וברוב ה-DBs), UNIQUE מאפשר כמה NULL כי NULL לא שווה NULL."
  },
  {
    "t": 8,
    "q": "ב-SQLite (ברוב גרסאות הלימוד), אם אין RIGHT JOIN, מה הדרך הכי סטנדרטית לחקות אותו?",
    "o": [
      "אי אפשר לחקות RIGHT JOIN בכלל",
      "להחליף את סדר הטבלאות ולהשתמש ב-LEFT JOIN",
      "להשתמש ב-INTERSECT",
      "להוסיף DISTINCT"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 11,
    "q": "איזה משפט הכי נכון?",
    "o": [
      "NOT IN תמיד שקול ל-NOT EXISTS",
      "NOT IN יכול להחזיר תוצאה ריקה אם בתת-השאילתה יש NULL; NOT EXISTS לרוב מתנהג אינטואיטיבי יותר",
      "IN תמיד מהיר יותר מ-EXISTS",
      "EXISTS אסור לשימוש עם JOIN"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 6,
    "q": "מה הפלט?\n\nמצב טבלאות מלא לפני השאילתה:\n--- depts ---\n| id | name  |\n|----|-------|\n| 10 | R&D   |\n| 20 | Sales |\n| 30 | HR    |\n(3 rows shown)\n\n--- employees ---\n| id | name | dept_id | salary |\n|----|------|---------|--------|\n| 1  | Dana | 10      | 100    |\n| 2  | Eli  | 10      | 200    |\n| 3  | Noa  | 20      | 200    |\n| 4  | Avi  | NULL    | 150    |\n| 5  | Dana | 20      | NULL   |\n(5 rows shown)\n\nשאילתה:\nSELECT COUNT(DISTINCT name) FROM employees;\n\nמה יהיה הפלט המדויק?",
    "o": [
      "<empty result>",
      "0",
      "4",
      "NULL"
    ],
    "a": "C",
    "e": "Dana מופיעה פעמיים אבל נספרת פעם אחת."
  },
  {
    "t": 11,
    "q": "מה הפלט? (תת-שאילתה שמחזירה NULL גוררת השוואות ל-NULL)\n\nמצב טבלאות מלא לפני השאילתה:\n--- a1 ---\n| x |\n|---|\n| 1 |\n| 2 |\n(2 rows shown)\n\nשאילתה:\nSELECT x FROM a1 WHERE x > (SELECT MAX(NULL));\n\nמה יהיה הפלט המדויק?",
    "o": [
      "NULL",
      "<empty result>",
      "0",
      "1"
    ],
    "a": "B",
    "e": "MAX(NULL) הוא NULL, ולכן x > NULL הוא UNKNOWN ומסנן הכל."
  },
  {
    "t": 12,
    "q": "מה יקרה אם תשנה/תמחוק עמודה שעליה VIEW מסתמך?",
    "o": [
      "ה-VIEW מתעדכן אוטומטית תמיד",
      "ה-VIEW עלול להישבר (שגיאה בזמן שאילתה) כי הוא תלוי בהגדרה של העמודות/טבלאות",
      "ה-VIEW הופך לטבלה פיזית",
      "שום דבר; VIEW שומר נתונים"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 6,
    "q": "בשאילתה שמשלבת UNION ו-INTERSECT, מה נכון באופן כללי?",
    "o": [
      "SQLite תמיד מבצע משמאל לימין בלי קדימות",
      "יש קדימות לאופרטורים, ולכן כשרוצים התנהגות חד-משמעית משתמשים בסוגריים",
      "אי אפשר לשלב UNION ו-INTERSECT",
      "INTERSECT מסיר DISTINCT רק אם כותבים DISTINCT"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 6,
    "q": "בחר/י את המשפט הנכון לגבי DISTINCT ו-NULL ב-SQLite:",
    "o": [
      "DISTINCT מוחק תמיד כל שורה עם NULL",
      "DISTINCT מתייחס ל-NULL כשווה ל-NULL לצורך סילוק כפילויות בתוצאה",
      "DISTINCT עובד רק עם עמודה אחת",
      "DISTINCT חייב לבוא אחרי ORDER BY"
    ],
    "a": "B",
    "e": "בפרקטיקה של תוצאות שאילתה, DISTINCT מסיר כפילויות כולל שורות זהות עם NULL באותם מיקומים."
  },
  {
    "t": 6,
    "q": "מה נכון לגבי GROUP BY + HAVING + WHERE?",
    "o": [
      "HAVING רץ לפני WHERE",
      "WHERE מסנן שורות לפני קיבוץ, HAVING מסנן קבוצות אחרי GROUP BY",
      "WHERE ו-HAVING שקולים תמיד",
      "HAVING מותר רק עם COUNT(*)"
    ],
    "a": "B",
    "e": "סדר לוגי: FROM/JOIN -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT (בקירוב לוגי)."
  },
  {
    "t": 8,
    "q": "איזו טענה נכונה על LEFT JOIN?",
    "o": [
      "LEFT JOIN מחזיר רק רשומות שיש להן התאמה בשתי הטבלאות",
      "LEFT JOIN שומר את כל הרשומות מהטבלה השמאלית גם בלי התאמה",
      "LEFT JOIN זהה תמיד ל-CROSS JOIN",
      "LEFT JOIN מחייב USING ולא ON"
    ],
    "a": "B",
    "e": "זו ההגדרה של LEFT JOIN: שימור הצד השמאלי, ומילוי NULL בצד הימני כשאין התאמה."
  },
  {
    "t": 4,
    "q": "איזו הגדרת טבלה חוקית ומשקפת שימוש תקין ב-CREATE + טיפוסים + אילוצים ב-SQLite?",
    "o": [
      "CREATE TABLE t(id INTEGER PRIMARY KEY, name TEXT NOT NULL, score REAL);",
      "CREATE TABLE t(id ONLYINT PRIMARY KEY, name MUSTTEXT);",
      "CREATE TABLE t(id INTEGER PRIMARY KEY AUTOINCREMENT AUTOINCREMENT);",
      "CREATE TABLE t(id INTEGER PRIMARY KEY, , name TEXT);"
    ],
    "a": "A",
    "e": "A היא תחביר תקני."
  },
  {
    "t": 1,
    "q": "ב-Java עם JDBC, מה הכי בטוח ונכון כשמקבלים קלט משתמש לשאילתת SQL?",
    "o": [
      "לבנות מחרוזת עם + כדי שיהיה גמיש",
      "להשתמש ב-PreparedStatement עם פרמטרים",
      "להחליף גרשיים ידנית ולהמשיך עם String concatenation",
      "להשתמש ב-Statement רגיל תמיד"
    ],
    "a": "B",
    "e": "PreparedStatement מגן מפני SQL Injection ומטפל בפרמטרים נכון."
  },
  {
    "t": 2,
    "q": "ב-python sqlite3, מה הצורה התקינה לפרמטריזציה של ערך name?",
    "o": [
      "cur.execute(f\"SELECT * FROM users WHERE name='{name}'\")",
      "cur.execute(\"SELECT * FROM users WHERE name=?\", (name,))",
      "cur.execute(\"SELECT * FROM users WHERE name=%s\" % name)",
      "cur.execute(\"SELECT * FROM users WHERE name=$name\")"
    ],
    "a": "B",
    "e": "sqlite3 משתמש ב-placeholder של ?."
  },
  {
    "t": 3,
    "q": "ב-Railroad diagram, לולאה חוזרת בדרך כלל מייצגת:",
    "o": [
      "אלמנט שמותר להופיע 0 או יותר פעמים",
      "אלמנט שמותר להופיע בדיוק פעם אחת",
      "אלמנט שאסור להשתמש בו",
      "סוף קובץ"
    ],
    "a": "A",
    "e": "לולאה בתרשים דקדוק מייצגת חזרה."
  }
];
