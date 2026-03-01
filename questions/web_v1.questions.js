const defs = [
  {
    topic: "HTML סמנטיקה, מבנה מסמך, נגישות",
    items: [
      {
        q: "איזה משפט נכון ביותר לגבי `<main>`, `<section>`, `<article>`?",
        o: [
          "`<section>` מחליף תמיד `<div>` ולכן תמיד עדיף להשתמש בו",
          "`<article>` מיועד ליחידה עצמאית שניתנת לשיתוף/סינדיקציה, ו־`<section>` לחלוקה נושאית",
          "`<main>` מותר להופיע כמה פעמים ללא מגבלה",
          "`<article>` אסור להכיל כותרות"
        ],
        a: "B",
        e: "`article` הוא תוכן עצמאי; `section` הוא חלק נושאי במסמך."
      },
      {
        q: "איזה שימוש ב־ARIA הוא התקין ביותר?",
        o: [
          "להוסיף `role=\"button\"` על `<button>` כדי לחזק סמנטיקה",
          "להוסיף `aria-label` לכל אלמנט גם אם כבר יש טקסט נראה",
          "להוסיף ARIA רק כשאין אלמנט HTML סמנטי מקביל שמכסה את הצורך",
          "להחליף `<label for>` ב־`aria-label` בכל שדות הטופס"
        ],
        a: "C",
        e: "הכלל: קודם HTML סמנטי, ורק אז ARIA כשצריך."
      }
    ]
  },
  {
    topic: "HTML טפסים, ולידציה, attributes",
    items: [
      {
        q: "מה הפלט החזותי/לוגי?\n\n<form>\n  <input id=\"a\" type=\"number\" required min=\"10\" max=\"20\" value=\"9\">\n</form>\n<script>\n  console.log(a.checkValidity(), a.validationMessage.length > 0);\n</script>",
        o: [
          "`true false`",
          "`true true`",
          "`false true`",
          "זורק שגיאה כי `a` לא מוגדר"
        ],
        a: "C",
        e: "הערך 9 מפר את `min`, ולכן לא תקין ויש הודעת ולידציה."
      },
      {
        q: "מה נכון לגבי `name` בטפסים?",
        o: [
          "`id` מספיק תמיד; `name` לא רלוונטי לשליחה",
          "שדה ללא `name` לא יישלח כחלק מ־form submission",
          "`name` חייב להיות ייחודי בכל הדף, בדיוק כמו `id`",
          "`disabled` יישלח, אבל `readonly` לא"
        ],
        a: "B",
        e: "ב־submit נשלחים זוגות `name=value`; שדה בלי `name` לא נכלל."
      }
    ]
  },
  {
    topic: "HTML parsing, script loading, DOMContentLoaded",
    items: [
      {
        q: "מה הפלט?\n\n<script>\n  console.log('A');\n</script>\n<script defer src=\"x.js\"></script>\n<script>\n  console.log('B');\n</script>",
        o: [
          "תמיד `A B` ואז הקוד של `x.js` אחרי `DOMContentLoaded`",
          "`A`, ואז הקוד של `x.js`, ואז `B`",
          "`x.js` רץ לפני כל סקריפט inline",
          "בלתי מוגדר לפי התקן"
        ],
        a: "A",
        e: "`defer` לא חוסם parsing; סקריפטים inline רגילים ירוצו מיד, ו־defer אחרי parse ולפני `DOMContentLoaded`."
      },
      {
        q: "איזה משפט נכון ביותר על `async` מול `defer`?",
        o: [
          "`async` שומר סדר יחסי בין קבצים; `defer` לא",
          "`defer` מתאים לסקריפטים שתלויים זה בזה ושומרים סדר במסמך",
          "`async` מבטיח ריצה אחרי `DOMContentLoaded`",
          "שניהם חוסמים parsing באותה צורה"
        ],
        a: "B",
        e: "`defer` שומר סדר לפי הופעה במסמך; `async` לא."
      }
    ]
  },
  {
    topic: "CSS cascade, inheritance, computed values",
    items: [
      {
        q: "מה יופיע בצבע אדום?\n\n<style>\n  #x { color: red; }\n  .c { color: blue !important; }\n</style>\n<p id=\"x\" class=\"c\">Hi</p>",
        o: [
          "הטקסט יהיה אדום",
          "הטקסט יהיה כחול",
          "שקול ולכן דפדפן יבחר אקראית",
          "הצבע יישאר ברירת מחדל"
        ],
        a: "B",
        e: "`!important` גובר על כלל רגיל גם אם ל־ID יש ספציפיות גבוהה יותר."
      },
      {
        q: "מה נכון לגבי `inherit`, `initial`, `unset`, `revert`?",
        o: [
          "`unset` תמיד כמו `initial`",
          "`unset` מתנהג כ־`inherit` בתכונות יורשות וכ־`initial` באחרות",
          "`revert` זהה ל־`initial` בכל מצב",
          "`inherit` עובד רק על תכונות טקסט"
        ],
        a: "B",
        e: "זו ההגדרה המדויקת של `unset`."
      }
    ]
  },
  {
    topic: "CSS selectors specificity, combinators",
    items: [
      {
        q: "מה הפלט?\n\n<style>\n  #app .card p { color: green; }\n  .card p.note { color: orange; }\n</style>\n<div id=\"app\">\n  <div class=\"card\"><p class=\"note\">X</p></div>\n</div>",
        o: [
          "ירוק",
          "כתום",
          "שחור ברירת מחדל",
          "תלוי בדפדפן"
        ],
        a: "A",
        e: "`#app .card p` כולל ID ולכן ספציפיות גבוהה יותר מהכלל עם מחלקות בלבד."
      },
      {
        q: "איזה משפט נכון על ספציפיות?",
        o: [
          "`:not()` תמיד מוסיף ספציפיות 0",
          "`:where()` תורם ספציפיות רגילה לפי הארגומנט",
          "`:where(...)` תמיד ספציפיות 0 גם אם בפנים יש ID",
          "inline style חלש מ־ID selector"
        ],
        a: "C",
        e: "`:where()` מאופס ספציפיות; `:is()` ו־`:not()` לוקחים את המקסימום של הארגומנטים."
      }
    ]
  },
  {
    topic: "CSS layout: flex, grid, sizing",
    items: [
      {
        q: "מה הפלט החזותי?\n\n<style>\n  .wrap { display: flex; width: 300px; }\n  .a { flex: 1 1 0; }\n  .b { flex: 2 1 0; }\n</style>\n<div class=\"wrap\">\n  <div class=\"a\">A</div><div class=\"b\">B</div>\n</div>",
        o: [
          "A ו־B יקבלו 150px כל אחד",
          "A יקבל 100px ו־B יקבל 200px",
          "A יקבל 200px ו־B יקבל 100px",
          "לא ניתן לדעת בלי `min-width`"
        ],
        a: "B",
        e: "יחס `flex-grow` הוא 1:2 כשה־basis אפס."
      },
      {
        q: "ב־Grid, מה משמעות `grid-template-columns: repeat(3, minmax(100px, 1fr))`?",
        o: [
          "3 עמודות שתמיד בדיוק 100px",
          "3 עמודות שכל אחת לפחות 100px ויכולה להתרחב יחסית",
          "3 עמודות שיכולות לרדת גם מתחת ל־100px",
          "עמודה אחת דינמית ושלוש שורות"
        ],
        a: "B",
        e: "`minmax(100px, 1fr)` מציב רצפה של 100px ותקרה יחסית."
      }
    ]
  },
  {
    topic: "CSS pseudo-classes, pseudo-elements, stacking",
    items: [
      {
        q: "מה נכון לגבי `::before`?",
        o: [
          "הוא נוצר רק אם מוגדר `position: absolute`",
          "הוא לא קיים ב־DOM tree אבל כן משתתף ב־render tree",
          "אי אפשר לעצב אותו עם `color`",
          "הוא תמיד מעל הטקסט המקורי בלי קשר ל־z-index"
        ],
        a: "B",
        e: "Pseudo-element אינו צומת DOM אך נצבע ברינדור."
      },
      {
        q: "מה הפלט?\n\n<style>\n  .box { position: relative; z-index: 1; }\n  .box::before { content: ''; position: absolute; inset: 0; z-index: -1; }\n</style>",
        o: [
          "`::before` בהכרח מעל התוכן",
          "`::before` עשוי להופיע מאחורי תוכן `box` בתוך אותו stacking context",
          "`z-index` לא משפיע על pseudo-elements",
          "הקוד שגוי תחבירית"
        ],
        a: "B",
        e: "`z-index:-1` ממקם את ה־pseudo behind siblings באותו context."
      }
    ]
  },
  {
    topic: "JavaScript scope, hoisting, TDZ",
    items: [
      {
        q: "מה הפלט?\n\nconsole.log(typeof x);\nvar x = 1;\nconsole.log(typeof y);\nlet y = 2;",
        o: [
          "`undefined` ואז `undefined`",
          "`number` ואז `number`",
          "`undefined` ואז נזרקת שגיאת ReferenceError",
          "שתי שגיאות ReferenceError"
        ],
        a: "C",
        e: "`var` מאותחל ל־`undefined`; `let` ב־TDZ עד ההצהרה."
      },
      {
        q: "איזה משפט נכון על hoisting?",
        o: [
          "רק פונקציות hoisted; משתנים לא",
          "`let/const` לא hoisted כלל",
          "הצהרות `let/const` כן hoisted אבל לא מאותחלות ולכן TDZ",
          "`class` מתנהג כמו `var`"
        ],
        a: "C",
        e: "הקישור קיים מראש, אך אסור גישה לפני אתחול."
      }
    ]
  },
  {
    topic: "JavaScript == מול ===, coercion",
    items: [
      {
        q: "מה הפלט?\n\nconsole.log([] == ![]);\nconsole.log([] === ![]);",
        o: [
          "`true` ואז `true`",
          "`false` ואז `false`",
          "`true` ואז `false`",
          "`false` ואז `true`"
        ],
        a: "C",
        e: "`![]` הוא `false`; בהשוואה רופפת `[]` מומר ל־`''` ואז ל־0, כמו `false`."
      },
      {
        q: "איזו השוואה מחזירה `true`?",
        o: [
          "`NaN === NaN`",
          "`Object.is(NaN, NaN)`",
          "`0 === -0` הוא false",
          "`null == undefined` הוא false"
        ],
        a: "B",
        e: "`Object.is` מזהה `NaN` כשווה לעצמו ומבדיל בין `0` ל־`-0`."
      }
    ]
  },
  {
    topic: "JavaScript prototypes, inheritance, this",
    items: [
      {
        q: "מה הפלט?\n\nfunction A() {}\nA.prototype.x = 1;\nconst a = new A();\nA.prototype = { x: 2 };\nconsole.log(a.x);",
        o: [
          "1",
          "2",
          "undefined",
          "TypeError"
        ],
        a: "A",
        e: "האובייקט `a` קשור לפרוטוטייפ הישן שנוצר בזמן `new`."
      },
      {
        q: "איזה משפט נכון על שרשרת פרוטוטייפ?",
        o: [
          "`obj.hasOwnProperty(k)` מחפש גם בשרשרת",
          "`in` בודק רק own properties",
          "קריאת `obj.k` תחפש בשרשרת אם לא נמצא ב־own",
          "`Object.create(null)` יורש מ־`Object.prototype`"
        ],
        a: "C",
        e: "גישה למאפיין עוברת בשרשרת פרוטוטייפ עד `null`."
      }
    ]
  },
  {
    topic: "JavaScript promises, async/await",
    items: [
      {
        q: "מה הפלט?\n\nasync function f() {\n  return Promise.resolve(3);\n}\nf().then(v => console.log(v));\nconsole.log(1);",
        o: [
          "3 ואז 1",
          "1 ואז 3",
          "רק 1",
          "TypeError"
        ],
        a: "B",
        e: "`then` רץ כמיקרוטאסק אחרי סיום הקוד הסינכרוני."
      },
      {
        q: "מה נכון לגבי `await`?",
        o: [
          "`await` חוסם את ה־thread הראשי עד השלמת Promise",
          "`await` מותר רק בפונקציית generator",
          "`await` משהה את הפונקציה האסינכרונית ומחזיר שליטה ללולאת האירועים",
          "`await` תמיד מחזיר Promise, לא ערך"
        ],
        a: "C",
        e: "`await` לא חוסם thread; הוא מבצע suspension של ה־async function."
      }
    ]
  },
  {
    topic: "Event loop, microtasks, macrotasks",
    items: [
      {
        q: "מה סדר הפלט?\n\nconsole.log('A');\nsetTimeout(() => console.log('B'));\nPromise.resolve().then(() => console.log('C'));\nconsole.log('D');",
        o: [
          "A D C B",
          "A C D B",
          "A D B C",
          "C A D B"
        ],
        a: "A",
        e: "מיקרוטאסק (`then`) רץ לפני macrotask (`setTimeout`) אחרי ה־sync."
      },
      {
        q: "איזה משפט נכון ביותר?",
        o: [
          "התור של macrotasks מנוקה לפני microtasks",
          "אחרי כל macrotask, סביבת הריצה מרוקנת microtasks לפני ציור הבא",
          "`queueMicrotask` זהה ל־`setTimeout(..., 0)`",
          "Promise callbacks רצים בזמן parse של JS"
        ],
        a: "B",
        e: "זה המודל הסטנדרטי של loop בדפדפנים."
      }
    ]
  },
  {
    topic: "DOM APIs, events, delegation",
    items: [
      {
        q: "מה הפלט?\n\n<ul id=\"u\"><li id=\"a\">A</li></ul>\n<script>\n  u.addEventListener('click', e => console.log(e.target.id, e.currentTarget.id));\n  a.click();\n</script>",
        o: [
          "`u u`",
          "`a a`",
          "`a u`",
          "`u a`"
        ],
        a: "C",
        e: "`target` הוא מקור האירוע; `currentTarget` הוא האלמנט שעליו ה־listener רשום."
      },
      {
        q: "למה delegation על container יעיל?",
        o: [
          "כי הוא מונע bubbling",
          "כי צריך listener אחד גם לאלמנטים דינמיים שנוספים בעתיד",
          "כי הוא תמיד מהיר יותר בלי חריגים",
          "כי הוא מחייב `capture: true`"
        ],
        a: "B",
        e: "delegation מנצל bubbling ונותן כיסוי לאלמנטים עתידיים."
      }
    ]
  },
  {
    topic: "Web security, storage, same-origin",
    items: [
      {
        q: "איזה משפט נכון ביותר על `localStorage` מול Cookie?",
        o: [
          "`localStorage` נשלח אוטומטית בכל בקשת HTTP",
          "Cookie עם `HttpOnly` אינו נגיש ל־JavaScript בדפדפן",
          "Cookie תמיד מאובטח יותר מ־`localStorage` בכל תרחיש",
          "`sessionStorage` משותף בין כל הטאבים של אותו origin"
        ],
        a: "B",
        e: "`HttpOnly` חוסם גישה מ־JS, אבל Cookie כן נשלח בהתאם למדיניות."
      },
      {
        q: "מה נכון לגבי CORS?",
        o: [
          "CORS מונע מהשרת לקבל בקשות cross-origin",
          "CORS נאכף בעיקר בצד השרת של הדפדפן",
          "CORS הוא מנגנון אכיפה בדפדפן שמבוסס על כותרות תגובה מהשרת",
          "אם יש CORS, אין צורך בהגנות CSRF"
        ],
        a: "C",
        e: "השרת מצהיר במדיניות, והדפדפן אוכף אותה לקריאות JS."
      }
    ]
  },
  {
    topic: "Rendering performance, reflow, repaint",
    items: [
      {
        q: "איזה שינוי סביר יותר שיגרום ל־layout (reflow) מאשר repaint בלבד?",
        o: [
          "שינוי `color`",
          "שינוי `transform: translateX(...)`",
          "שינוי `width`",
          "שינוי `opacity`"
        ],
        a: "C",
        e: "`width` משפיע על גיאומטריה ולכן מפעיל layout."
      },
      {
        q: "מה נכון על batching של קריאות DOM?",
        o: [
          "קריאה ל־`offsetWidth` אחרי כתיבה לסטייל עלולה לגרום forced synchronous layout",
          "אין חשיבות לסדר read/write",
          "`requestAnimationFrame` מריץ קוד אחרי paint בלבד",
          "`documentFragment` תמיד איטי יותר מעדכונים ישירים"
        ],
        a: "A",
        e: "ערבוב write ואז read יכול לכפות חישוב layout מיידי."
      }
    ]
  },
  {
    topic: "Shadow DOM, slots, encapsulation",
    items: [
      {
        q: "מה הפלט?\n\nconst host = document.createElement('x-a');\nconst root = host.attachShadow({ mode: 'open' });\nroot.innerHTML = '<button id=\"b\">Go</button>';\nconsole.log(host.querySelector('#b'));\nconsole.log(host.shadowRoot.querySelector('#b').id);",
        o: [
          "`<button...>` ואז `b`",
          "`null` ואז `b`",
          "`null` ואז `null`",
          "שתי שגיאות כי Shadow DOM לא נתמך"
        ],
        a: "B",
        e: "`querySelector` על host לא חודר shadow tree; ב־`open` אפשר דרך `shadowRoot`."
      },
      {
        q: "איזה משפט נכון על `mode: 'closed'`?",
        o: [
          "הצללה סגורה מונעת לחלוטין אירועים לצאת החוצה",
          "ב־closed, `host.shadowRoot` מחזיר `null` לקוד חיצוני",
          "ב־closed אי אפשר להשתמש ב־`slot`",
          "ב־closed אי אפשר לעצב בכלל"
        ],
        a: "B",
        e: "closed מסתיר את הרפרנס לשורש, לא מבטל מנגנוני DOM אחרים."
      },
      {
        q: "מה נכון לגבי Event retargeting ב־Shadow DOM?",
        o: [
          "מאזין מחוץ לקומפוננטה תמיד יראה target פנימי אמיתי",
          "אירוע `composed: false` תמיד חוצה גבול shadow",
          "ביציאה מהצל, `event.target` יכול להיות ממופה ל־host",
          "retargeting קורה רק ב־closed mode"
        ],
        a: "C",
        e: "retargeting מסתיר פרטי פנימיים ומציג target בטוח כלפי חוץ."
      },
      {
        q: "מה הפלט?\n\nconst h = document.createElement('x-b');\nconst s = h.attachShadow({mode: 'open'});\ns.innerHTML = '<slot>fallback</slot>';\nconsole.log(s.textContent.trim());",
        o: [
          "מחרוזת ריקה",
          "`fallback`",
          "`slot`",
          "TypeError"
        ],
        a: "B",
        e: "כשאין light DOM children מתאימים, תוכן fallback של ה־slot מוצג."
      },
      {
        q: "איזה selector חוצה גבולות קומפוננטה בצורה תקנית לעיצוב מבחוץ?",
        o: [
          "`.my-el .inner-button`",
          "`my-el::part(button)` כאשר הקומפוננטה חושפת `part=\"button\"`",
          "`my-el >>> .inner-button`",
          "`my-el /deep/ .inner-button`"
        ],
        a: "B",
        e: "הדרך התקנית היום היא `::part`; סלקטורים חודרניים ישנים אינם תקניים."
      },
      {
        q: "מה נכון לגבי `:host`, `:host(...)`, `:host-context(...)`?",
        o: [
          "הם זמינים רק ב־light DOM stylesheets",
          "`:host` מגדיר סגנון לאלמנט המארח מתוך shadow stylesheet",
          "`:host-context` עובד בכל הדפדפנים באותה רמת תמיכה מלאה",
          "`:host(...)` יכול לבחור צאצא פנימי ללא קשר למארח"
        ],
        a: "B",
        e: "`:host` וגרסאותיו מיועדים לסגנון host מתוך ה־shadow tree."
      }
    ]
  }
];

export const TOPICS = defs.map((d) => d.topic);

export const QUESTIONS = defs.flatMap((d, tIndex) =>
  d.items.map((item) => ({
    t: tIndex,
    q: item.q,
    o: item.o,
    a: item.a,
    e: item.e
  }))
);
