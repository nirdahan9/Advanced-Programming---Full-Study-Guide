const defs = [
  {
    topic: "Web: HTTP, HTTPS, URLs",
    items: [
      {
        q: "איזה משפט מדויק ביותר?",
        o: [
          "HTTPS הוא פרוטוקול נפרד לחלוטין מ־HTTP ואין בו HTTP כלל",
          "HTTPS הוא HTTP מעל TLS, ולכן מצפין תעבורה ומוודא זהות שרת (בהינתן PKI תקין)",
          "HTTP שולח רק HTML ולכן כמעט לא רלוונטי ל־API",
          "URL חייב לכלול תמיד query string"
        ],
        a: "B",
        e: "HTTPS = HTTP over TLS."
      },
      {
        q: "מה הפלט הלוגי?\n\nconst u = new URL('https://example.com:8443/a/b?x=1#top');\nconsole.log(u.protocol, u.host, u.pathname, u.search, u.hash);",
        o: [
          "`https: example.com /a/b x=1 top`",
          "`https: example.com:8443 /a/b ?x=1 #top`",
          "`https example.com:8443 a/b ?x=1 #top`",
          "TypeError"
        ],
        a: "B",
        e: "`host` כולל פורט, `search` כולל `?`, `hash` כולל `#`."
      },
      {
        q: "איזה URL הוא מוחלט (absolute) תקין?",
        o: [
          "`/docs/api`",
          "`docs/api`",
          "`https://site.dev/docs/api`",
          "`#section2`"
        ],
        a: "C",
        e: "Absolute URL כולל scheme ו־host."
      }
    ]
  },
  {
    topic: "Web: Network traffic, protocols, Wireshark",
    items: [
      {
        q: "מה נכון ביותר לגבי Wireshark?",
        o: [
          "הוא כלי debugging ל־CSS בלבד",
          "הוא packet analyzer לצפייה וניתוח תעבורת רשת ברמת פרוטוקולים",
          "הוא מחליף דפדפן DevTools בכל מה שקשור ל־DOM",
          "הוא עובד רק על UDP"
        ],
        a: "B",
        e: "Wireshark מנתח חבילות ופרוטוקולים."
      },
      {
        q: "מה ההבדל המדויק ביותר בין Network tab בדפדפן לבין packet sniffer?",
        o: [
          "שניהם מציגים בדיוק אותה שכבה ואותו מידע",
          "Network tab ממוקד בבקשות אפליקטיביות של הדף; sniffer יכול להראות תעבורה רחבה יותר ברמות נמוכות",
          "Network tab תמיד עדיף לאבחון TLS handshake",
          "sniffer לא יכול להציג HTTP בכלל"
        ],
        a: "B",
        e: "כלי דפדפן ממוקד באפליקציה; sniffer רחב יותר ברשת."
      },
      {
        q: "בחקירת איטיות, איזה צעד הכי יעיל ראשון?",
        o: [
          "למחוק cache שרת מייד",
          "להשוות זמני DNS/connect/TTFB/waterfall ואז לבדוק retransmissions/latency",
          "להחליף framework",
          "להוסיף עוד console.log בקוד פרודקשן"
        ],
        a: "B",
        e: "מתחילים במדידה שכבתית לפני שינויים ארכיטקטוניים."
      }
    ]
  },

  {
    topic: "HTML: Tags (core elements)",
    items: [
      {
        q: "איזה משפט נכון ביותר?",
        o: [
          "`<div>` עדיף תמיד על אלמנטים סמנטיים",
          "`<img>` לא צריך `alt` אף פעם",
          "`<label for>` משפר נגישות וקליקביליות לשדה קלט",
          "`<nav>` מיועד רק לתפריט mobile"
        ],
        a: "C",
        e: "`label` מקשר טקסט לשדה ומשפר UX ונגישות."
      },
      {
        q: "מה הפלט?\n\n<div>one <span>two</span> three</div>\n<script>\n  const d = document.querySelector('div');\n  console.log(d.textContent.trim().replace(/\s+/g, ' '));\n</script>",
        o: [
          "`onetwothree`",
          "`one two three`",
          "`one <span>two</span> three`",
          "`two`"
        ],
        a: "B",
        e: "`textContent` מחזיר טקסט בלבד כולל רווחים/שבירות."
      },
      {
        q: "איזה אלמנט נכון ביותר לייצוג כותרת ראשית במסמך?",
        o: [
          "`<h1>`",
          "`<strong>`",
          "`<title>` בגוף הדף",
          "`<p role='heading'>` תמיד עדיף"
        ],
        a: "A",
        e: "כותרות מסמך מייצגים עם h1..h6."
      }
    ]
  },
  {
    topic: "HTML: IDs",
    items: [
      {
        q: "איזה משפט נכון לגבי `id`?",
        o: [
          "`id` יכול להופיע כמה פעמים ואין לכך משמעות",
          "`id` אמור להיות ייחודי במסמך",
          "אי אפשר להשתמש ב־`id` כסלקטור CSS",
          "`id` לא נגיש ל־JS"
        ],
        a: "B",
        e: "ייחודיות `id` חשובה ל־DOM/CSS/נגישות."
      },
      {
        q: "מה הפלט?\n\n<div id='x'></div>\n<div id='x'></div>\n<script>\n  console.log(document.getElementById('x') !== null, document.querySelectorAll('#x').length);\n</script>",
        o: [
          "`false 0`",
          "`true 1`",
          "`true 2`",
          "TypeError"
        ],
        a: "C",
        e: "מבנה לא תקין (כפילויות), אך APIs עדיין יחזירו אלמנטים."
      },
      {
        q: "מה עדיף לקישור `label` לשדה input?",
        o: [
          "להסתמך על placeholder בלבד",
          "`for` ב־label ל־`id` של ה־input",
          "רק aria-label בלי label נראה",
          "onclick על parent div"
        ],
        a: "B",
        e: "`for/id` הוא הדפוס התקני והברור."
      }
    ]
  },
  {
    topic: "HTML: Classes",
    items: [
      {
        q: "איזה משפט נכון על `class`?",
        o: [
          "מותר ערך אחד בלבד",
          "מחלקות מופרדות ברווח ואלמנט יכול לשאת כמה מחלקות",
          "מחלקה חייבת להיות ייחודית כמו `id`",
          "אי אפשר לשנות class ב־JS"
        ],
        a: "B",
        e: "`class` הוא רשימת tokens."
      },
      {
        q: "מה הפלט?\n\n<div id='a' class='x y'></div>\n<script>\n  const el = document.getElementById('a');\n  el.classList.toggle('y');\n  el.classList.add('z');\n  console.log(el.className.split(/\\s+/).sort().join(','));\n</script>",
        o: [
          "`x,y,z`",
          "`x,z`",
          "`y,z`",
          "`x,y`"
        ],
        a: "B",
        e: "`y` הוסר ב־toggle ואז `z` נוסף."
      },
      {
        q: "איזה שימוש יציב יותר ל־styling ארוך טווח?",
        o: [
          "סלקטורים על תגיות בלבד",
          "מחלקות משמעותיות לפי קומפוננטה/מצב",
          "inline style לכל אלמנט",
          "שמות class אקראיים ידניים בכל מקום"
        ],
        a: "B",
        e: "מחלקות עקביות תומכות תחזוקה."
      }
    ]
  },
  {
    topic: "HTML: Attributes",
    items: [
      {
        q: "מה נכון לגבי boolean attributes (כמו `disabled`, `checked`)?",
        o: [
          "רק `disabled=\"true\"` נחשב",
          "עצם קיום התכונה מפעיל אותה",
          "חייבים ערך `1`",
          "לא רלוונטי ב־HTML5"
        ],
        a: "B",
        e: "ב־boolean attribute עצם הנוכחות משמעותית."
      },
      {
        q: "מה הפלט?\n\n<input id='i' disabled>\n<script>\n  const el = i;\n  console.log(el.hasAttribute('disabled'), el.getAttribute('disabled') === '');\n</script>",
        o: [
          "`false false`",
          "`true false`",
          "`true true`",
          "TypeError"
        ],
        a: "C",
        e: "Boolean attribute ללא ערך מפורש נשמר כערך ריק."
      },
      {
        q: "איזה attribute מתאים לשמירת מידע custom עבור JS בלי להמציא attributes לא תקניים?",
        o: [
          "`meta-*`",
          "`data-*`",
          "`custom-*`",
          "`js-*`"
        ],
        a: "B",
        e: "לכך מיועד מנגנון `data-*`."
      }
    ]
  },
  {
    topic: "HTML: Semantic HTML",
    items: [
      {
        q: "איזה מבנה סמנטי נכון יותר לדף תוכן?",
        o: [
          "`<div id='top'>...` בלבד",
          "`<header>`, `<main>`, `<article>/<section>`, `<footer>`",
          "`<table>` לכל layout",
          "רק `<span>` כדי לשמור דף קל"
        ],
        a: "B",
        e: "אלמנטים סמנטיים משפרים מבנה ונגישות."
      },
      {
        q: "איזה משפט נכון?",
        o: [
          "סמנטיקה לא משפיעה כלל על קוראי מסך",
          "`<nav>` מתאים לאזורי ניווט משמעותיים",
          "`<aside>` חייב להיות מוסתר",
          "`<main>` מיועד רק ל־mobile"
        ],
        a: "B",
        e: "`nav` מייצג בלוק ניווט."
      },
      {
        q: "מה השימוש המדויק ביותר ב־`<article>`?",
        o: [
          "יחידת תוכן עצמאית שניתן להפיץ בנפרד",
          "רשימת לינקים צדדית בלבד",
          "אלמנט לעיצוב בלבד",
          "תחליף ל־`script`"
        ],
        a: "A",
        e: "`article` מייצג תוכן עצמאי."
      }
    ]
  },
  {
    topic: "HTML: Page as a tree (DOM)",
    items: [
      {
        q: "מה נכון לגבי DOM tree?",
        o: [
          "כל צומת חייב להיות אלמנט",
          "טקסטים הם text nodes ב־DOM",
          "ל־DOM אין יחס הורה/ילד",
          "DOM נוצר רק אחרי load מלא של תמונות"
        ],
        a: "B",
        e: "DOM כולל סוגי nodes שונים, כולל טקסט."
      },
      {
        q: "מה הפלט?\n\n<div id='p'>a<span>b</span>c</div>\n<script>\n  console.log(p.childNodes.length, p.children.length);\n</script>",
        o: [
          "`1 1`",
          "`3 1`",
          "`3 3`",
          "`2 1`"
        ],
        a: "B",
        e: "`childNodes` כולל text nodes; `children` רק elements."
      },
      {
        q: "איזה API מחזיר element parent (לא text node)?",
        o: [
          "`parentNode`",
          "`parentElement`",
          "`firstChild`",
          "`nodeValue`"
        ],
        a: "B",
        e: "`parentElement` מחזיר אלמנט הורה או null."
      }
    ]
  },
  {
    topic: "HTML: Tables",
    items: [
      {
        q: "איזה משפט נכון על טבלאות?",
        o: [
          "טבלאות מיועדות ל־layout מודרני כללי",
          "טבלאות מיועדות לנתונים טבלאיים",
          "`<th>` הוא אלמנט עיצוב בלבד",
          "`<caption>` אסור לשימוש"
        ],
        a: "B",
        e: "Table semantics לנתונים, לא layout כללי."
      },
      {
        q: "מה נכון לגבי נגישות בטבלאות מורכבות?",
        o: [
          "להימנע מ־`scope` תמיד",
          "להשתמש ב־`th`, `scope` ולעיתים `headers/id`",
          "לשים הכל בתוך `<td>` כדי לפשט",
          "אין השפעה לקוראי מסך"
        ],
        a: "B",
        e: "תיוג כותרות חשוב להבנת הקשרים."
      },
      {
        q: "מה הפלט?\n\n<table><tr><td>1</td><td>2</td></tr></table>\n<script>\n  console.log(document.querySelectorAll('table td').length);\n</script>",
        o: [
          "1",
          "2",
          "0",
          "TypeError"
        ],
        a: "B",
        e: "יש שני תאי `td`."
      }
    ]
  },
  {
    topic: "HTML: Forms, GET vs POST",
    items: [
      {
        q: "איזה משפט מדויק ביותר?",
        o: [
          "GET מתאים תמיד לקבצים גדולים",
          "POST לעולם לא יכול לשאת query string",
          "GET מצרף נתונים ל־URL; POST שולח בגוף בקשה (בדרך כלל)",
          "אין הבדל בין GET ל־POST בקאשינג ושיתוף לינק"
        ],
        a: "C",
        e: "זה ההבדל המרכזי ברמת שימוש נפוץ."
      },
      {
        q: "מה הפלט/התנהגות?\n\n<form method='get' action='/search'>\n  <input name='q' value='dom'>\n</form>",
        o: [
          "בשליחה תיווצר בקשה ל־`/search?q=dom`",
          "תמיד תיווצר בקשת POST",
          "שדה `q` לא יישלח בלי id",
          "נזרקת שגיאה"
        ],
        a: "A",
        e: "ב־GET ערכים נשלחים כחלק מה־URL."
      },
      {
        q: "איזה שדה לא יישלח ב־submit?",
        o: [
          "`<input name='a' value='1'>`",
          "`<input name='b' disabled value='2'>`",
          "`<textarea name='c'>x</textarea>`",
          "`<select name='d'><option selected>v</option></select>`"
        ],
        a: "B",
        e: "`disabled` לא נשלח."
      }
    ]
  },

  {
    topic: "JavaScript: Page loading order",
    items: [
      {
        q: "איזה משפט נכון ביותר על `defer`?",
        o: [
          "חוסם parsing כמו script רגיל",
          "רץ אחרי parse ולפני `DOMContentLoaded`",
          "רץ רק אחרי `load`",
          "לא מוריד קבצים במקביל"
        ],
        a: "B",
        e: "`defer` מוריד במקביל ומבצע בסוף parse."
      },
      {
        q: "מה הסדר?\n\n<script>console.log('A')</script>\n<script defer src='x.js'></script>\n<script>console.log('B')</script>",
        o: [
          "A ואז B, ואז x.js",
          "A ואז x.js ואז B",
          "x.js ואז A ואז B",
          "בלתי מוגדר תמיד"
        ],
        a: "A",
        e: "inline רגיל רץ מיד; defer בסוף parse."
      },
      {
        q: "איזה משפט נכון על `async`?",
        o: [
          "שומר סדר בין קבצים",
          "לא שומר סדר יחסי ורץ כשההורדה מסתיימת",
          "תמיד אחרי `DOMContentLoaded`",
          "מבטל parser"
        ],
        a: "B",
        e: "`async` לא שומר סדר בין סקריפטים."
      }
    ]
  },
  {
    topic: "JavaScript: Basic operations",
    items: [
      {
        q: "מה הפלט?\n\nconsole.log(2 + '3' * 2);",
        o: [
          "`46`",
          "`8`",
          "`236`",
          "`NaN`"
        ],
        a: "B",
        e: "`'3'*2` נותן 6 ואז 2+6 = 8."
      },
      {
        q: "מה הפלט?\n\nconsole.log(Boolean('0'), Boolean(0));",
        o: [
          "`false false`",
          "`true false`",
          "`true true`",
          "`false true`"
        ],
        a: "B",
        e: "מחרוזת לא ריקה truthy; המספר 0 falsy."
      },
      {
        q: "איזו פעולה מחזירה `NaN`?",
        o: [
          "`Number(' 12 ')`",
          "`Number('12px')`",
          "`Number('0b11')`",
          "`Number('')`"
        ],
        a: "B",
        e: "`12px` לא מספר תקף ל־`Number`."
      }
    ]
  },
  {
    topic: "JavaScript: alert/prompt/console",
    items: [
      {
        q: "איזה משפט נכון ביותר?",
        o: [
          "`prompt()` מחזיר תמיד number",
          "`alert()` מחזיר את הטקסט שהוצג",
          "`prompt()` מחזיר string או `null`",
          "`console.error` עוצר הרצה כמו throw"
        ],
        a: "C",
        e: "זה טיפוס הערך התקני של `prompt`."
      },
      {
        q: "מה הפלט?\n\nconst v = null;\nconsole.log(typeof v);",
        o: [
          "`null`",
          "`object`",
          "`undefined`",
          "`string`"
        ],
        a: "B",
        e: "quirk היסטורי ידוע ב־JS."
      },
      {
        q: "איזה שימוש נכון יותר ל־debugging ייצור?",
        o: [
          "להשאיר `alert` בזרימת משתמש",
          "להשתמש ב־`console.*` ו־log levels מבוקרים",
          "להחליף כל error ב־`console.log`",
          "להדפיס סיסמאות ל־console"
        ],
        a: "B",
        e: "trace מבוקר עדיף, ללא דליפת מידע רגיש."
      }
    ]
  },
  {
    topic: "JavaScript: var vs let",
    items: [
      {
        q: "מה הפלט?\n\nfor (var i = 0; i < 2; i++) setTimeout(() => console.log(i));",
        o: [
          "`0 1`",
          "`2 2`",
          "`1 2`",
          "שגיאת תחביר"
        ],
        a: "B",
        e: "`var` ב־function scope ולכן ערך סופי 2."
      },
      {
        q: "מה הפלט?\n\nfor (let i = 0; i < 2; i++) setTimeout(() => console.log(i));",
        o: [
          "`2 2`",
          "`0 1`",
          "`1 1`",
          "`0 0`"
        ],
        a: "B",
        e: "`let` יוצר binding נפרד לכל איטרציה."
      },
      {
        q: "איזה משפט נכון?",
        o: [
          "`var` הוא block scoped",
          "`let` ניתן להצהרה חוזרת באותו בלוק",
          "`var` חשוף מחוץ לבלוק if/for",
          "`let` מאותחל ל־`undefined` ונגיש לפני ההצהרה"
        ],
        a: "C",
        e: "`var` לא מכבד block scope."
      }
    ]
  },
  {
    topic: "JavaScript: == vs ===",
    items: [
      {
        q: "מה הפלט?\n\nconsole.log('5' == 5, '5' === 5);",
        o: [
          "`false false`",
          "`true true`",
          "`true false`",
          "`false true`"
        ],
        a: "C",
        e: "`==` עם coercion; `===` ללא coercion."
      },
      {
        q: "מה מחזיר true?",
        o: [
          "`null === undefined`",
          "`null == undefined`",
          "`0 == false == ''` תמיד בטוח לשימוש",
          "`NaN == NaN`"
        ],
        a: "B",
        e: "ב־`==` רק הזוג הזה שווה ביניהם."
      },
      {
        q: "מה הפלט?\n\nconsole.log([] == 0, [] === 0);",
        o: [
          "`true false`",
          "`false false`",
          "`true true`",
          "`false true`"
        ],
        a: "A",
        e: "`[]` ב־`==` עובר coercion ל־0."
      }
    ]
  },
  {
    topic: "JavaScript: Scoping",
    items: [
      {
        q: "מה הפלט?\n\nlet x = 1;\n{ let x = 2; }\nconsole.log(x);",
        o: [
          "1",
          "2",
          "undefined",
          "ReferenceError"
        ],
        a: "A",
        e: "`let` פנימי לא דורס outer scope."
      },
      {
        q: "מה הפלט?\n\nconst x = 10;\nfunction f(){ console.log(x); }\nfunction g(){ const x = 20; f(); }\ng();",
        o: [
          "10",
          "20",
          "undefined",
          "ReferenceError"
        ],
        a: "A",
        e: "Lexical scope נקבע בהגדרה, לא בקריאה."
      },
      {
        q: "איזה משפט נכון?",
        o: [
          "JS משתמש ב־dynamic scoping",
          "Closures שומרים גישה ל־lexical environment",
          "scope קיים רק לפונקציות לא לבלוקים",
          "`const` גלובלי הופך אוטומטית ל־`window` property"
        ],
        a: "B",
        e: "זה עקרון closure."
      }
    ]
  },
  {
    topic: "JavaScript: Hoisting",
    items: [
      {
        q: "מה הפלט?\n\nconsole.log(a);\nvar a = 3;",
        o: [
          "3",
          "undefined",
          "ReferenceError",
          "TypeError"
        ],
        a: "B",
        e: "`var` מוכרז ומאותחל ל־undefined."
      },
      {
        q: "מה הפלט?\n\nconsole.log(b);\nlet b = 3;",
        o: [
          "undefined",
          "3",
          "ReferenceError",
          "TypeError"
        ],
        a: "C",
        e: "`let` ב־TDZ לפני ההצהרה."
      },
      {
        q: "מה הפלט?\n\nf();\nfunction f(){ console.log('ok'); }",
        o: [
          "ok",
          "ReferenceError",
          "TypeError",
          "אין פלט"
        ],
        a: "A",
        e: "Function declaration hoisted עם גוף."
      }
    ]
  },
  {
    topic: "JavaScript: use strict",
    items: [
      {
        q: "איזה משפט נכון ביותר?",
        o: [
          "`use strict` מאפשר משתנים גלובליים implicit",
          "`use strict` מחמיר שגיאות שבלעדיו היו התנהגות שקטה",
          "`use strict` מבטל TDZ",
          "`use strict` אסור ב־ES modules"
        ],
        a: "B",
        e: "strict mode מזהה בעיות מוקדם יותר."
      },
      {
        q: "מה קורה ב־strict?\n\n'use strict';\nx = 1;",
        o: [
          "יוצר גלובלי `x`",
          "זורק ReferenceError",
          "זורק SyntaxError בהכרח",
          "מתעלם"
        ],
        a: "B",
        e: "השמה למזהה לא מוכרז אסורה."
      },
      {
        q: "מה ערך `this` בפונקציה רגילה שנקראת ישירות תחת strict mode?",
        o: [
          "`window`",
          "`globalThis`",
          "`undefined`",
          "האובייקט של המודול"
        ],
        a: "C",
        e: "ב־strict אין binding אוטומטי לגלובלי."
      }
    ]
  },
  {
    topic: "JavaScript: Classes, prototype model, Object.getPrototypeOf",
    items: [
      {
        q: "מה נכון ביותר?",
        o: [
          "`class` ב־JS יוצר מודל ירושה נפרד מ־prototype",
          "`class` הוא sugar מעל prototype-based inheritance",
          "methods במחלקה הם own properties על כל מופע",
          "אי אפשר להשתמש ב־`extends`"
        ],
        a: "B",
        e: "המודל נשאר prototype-based."
      },
      {
        q: "מה הפלט?\n\nclass A {}\nconst a = new A();\nconsole.log(Object.getPrototypeOf(a) === A.prototype);",
        o: [
          "true",
          "false",
          "undefined",
          "TypeError"
        ],
        a: "A",
        e: "prototype של מופע הוא `A.prototype`."
      },
      {
        q: "מה הפלט?\n\nclass A { static s(){ return 1; } m(){ return 2; } }\nconsole.log(typeof A.s, typeof A.prototype.m, typeof (new A()).s);",
        o: [
          "`function function function`",
          "`function function undefined`",
          "`undefined function function`",
          "`function undefined function`"
        ],
        a: "B",
        e: "`static` על המחלקה, לא על המופע."
      }
    ]
  },
  {
    topic: "JavaScript: Arrow functions",
    items: [
      {
        q: "איזה משפט נכון ביותר על arrow function?",
        o: [
          "יש לה `this` דינמי לפי הקריאה",
          "אין לה `this` משלה; היא לוכדת lexically",
          "אפשר להשתמש בה כ־constructor עם `new`",
          "יש לה `arguments` משלה כמו פונקציה רגילה"
        ],
        a: "B",
        e: "Arrow לוכדת `this` מהסביבה."
      },
      {
        q: "מה הפלט?\n\nconst obj = { x: 7, f: () => this.x, g(){ return this.x; } };\nconsole.log(obj.f(), obj.g());",
        o: [
          "`7 7`",
          "`undefined 7`",
          "`7 undefined`",
          "`undefined undefined`"
        ],
        a: "B",
        e: "ב־arrow, `this` לא נקשר ל־`obj`."
      },
      {
        q: "מה הפלט?\n\nconst f = (a) => ({ a });\nconsole.log(f(3).a);",
        o: [
          "3",
          "undefined",
          "`{a:3}`",
          "SyntaxError"
        ],
        a: "A",
        e: "סוגריים עגולים סביב object literal מחזירים אובייקט."
      }
    ]
  },
  {
    topic: "JavaScript: DOM access and manipulation",
    items: [
      {
        q: "מה הפלט?\n\n<div id='r'></div>\n<script>\n  r.innerHTML = '<p>A</p><p>B</p>';\n  console.log(r.children.length, r.querySelectorAll('p').length);\n</script>",
        o: [
          "`1 1`",
          "`2 2`",
          "`2 1`",
          "`0 2`"
        ],
        a: "B",
        e: "נוצרו שני אלמנטים `p`."
      },
      {
        q: "איזה API בטוח יותר מהזרקת HTML גולמי כשמכניסים טקסט משתמש?",
        o: [
          "`innerHTML = userInput`",
          "`outerHTML = userInput`",
          "`textContent = userInput`",
          "`insertAdjacentHTML`"
        ],
        a: "C",
        e: "`textContent` מונע פירוש כ־HTML."
      },
      {
        q: "איזה משפט נכון?",
        o: [
          "`querySelectorAll` מחזיר תמיד live collection",
          "`getElementsByClassName` מחזיר live collection",
          "`children` מחזיר snapshot סטטי",
          "`NodeList` תמיד live"
        ],
        a: "B",
        e: "זה הבדל חשוב מול `querySelectorAll` (סטטי)."
      }
    ]
  },
  {
    topic: "JavaScript: Events",
    items: [
      {
        q: "מה הפלט?\n\n<div id='p'><button id='c'>X</button></div>\n<script>\n  p.addEventListener('click', () => console.log('P'));\n  c.addEventListener('click', () => console.log('C'));\n  c.click();\n</script>",
        o: [
          "`P` בלבד",
          "`C` בלבד",
          "`C` ואז `P`",
          "`P` ואז `C`"
        ],
        a: "C",
        e: "ברירת מחדל bubbling מהילד להורה."
      },
      {
        q: "מה נכון לגבי `event.preventDefault()`?",
        o: [
          "עוצר bubbling",
          "מבטל פעולה ברירת מחדל אם האירוע cancelable",
          "מסיר את כל listeners",
          "זהה ל־`stopPropagation`"
        ],
        a: "B",
        e: "זו מטרת `preventDefault`."
      },
      {
        q: "איזה משפט נכון לגבי delegation?",
        o: [
          "מחייב capture בלבד",
          "עובד כי אירועים מבעבעים מהילד להורה",
          "לא עובד על אלמנטים דינמיים",
          "תמיד איטי יותר"
        ],
        a: "B",
        e: "delegation נשען על bubbling."
      }
    ]
  },
  {
    topic: "JavaScript: Changing style via JS",
    items: [
      {
        q: "מה הפלט?\n\n<div id='x' style='width:100px'></div>\n<script>\n  x.style.width = '120px';\n  console.log(x.style.width);\n</script>",
        o: [
          "`100px`",
          "`120`",
          "`120px`",
          "`''`"
        ],
        a: "C",
        e: "`style` משקף inline style הנוכחי."
      },
      {
        q: "איזה API מחזיר computed style בפועל אחרי cascade?",
        o: [
          "`el.style`",
          "`getComputedStyle(el)`",
          "`el.classList`",
          "`document.styleSheets`"
        ],
        a: "B",
        e: "Computed style נגיש דרך API זה."
      },
      {
        q: "מה עדיף לרוב לניהול state עיצובי מורכב?",
        o: [
          "כתיבה מרובה ל־`style` בכל שורה",
          "החלפת classes ולתת ל־CSS לטפל בכללים",
          "שינוי HTML tags בזמן ריצה",
          "שימוש ב־`!important` בכל כלל"
        ],
        a: "B",
        e: "Class toggling לרוב נקי ותחזוקתי יותר."
      }
    ]
  },
  {
    topic: "JavaScript: Server-side vs Client-side scripting",
    items: [
      {
        q: "איזה משפט נכון ביותר?",
        o: [
          "קוד client-side יכול לגשת ישירות למסד נתונים פנימי בלי API",
          "קוד server-side רץ אצל המשתמש בדפדפן",
          "קוד client-side רץ בדפדפן; server-side רץ בשרת",
          "אין הבדל אבטחתי בין השניים"
        ],
        a: "C",
        e: "זו ההבחנה הבסיסית."
      },
      {
        q: "מה נכון לגבי סודות (secrets) כמו API keys רגישים?",
        o: [
          "בטוח לשים ב־frontend כי הוא מיניפייד",
          "צריך לשמור בשרת ולא לחשוף לקליינט",
          "אפשר להצפין ב־JS ולשלוח לקליינט",
          "לא רלוונטי אם משתמשים ב־HTTPS"
        ],
        a: "B",
        e: "קוד קליינט חשוף למשתמש."
      },
      {
        q: "איזה רכיב טיפוסי מטפל באימות והרשאות עסקיות קריטיות?",
        o: [
          "CSS",
          "Client-side בלבד",
          "Server-side",
          "Service Worker בלבד"
        ],
        a: "C",
        e: "אכיפה אמינה נעשית בשרת."
      }
    ]
  },
  {
    topic: "JavaScript: Promise, async, await",
    items: [
      {
        q: "מה הפלט?\n\nPromise.resolve().then(() => console.log(2));\nconsole.log(1);",
        o: [
          "2 ואז 1",
          "1 ואז 2",
          "1 בלבד",
          "2 בלבד"
        ],
        a: "B",
        e: "Callback של promise רץ כמיקרוטאסק."
      },
      {
        q: "מה הפלט?\n\nasync function f(){ throw new Error('x'); }\nf().catch(() => console.log('caught'));",
        o: [
          "נזרקת שגיאה לא נלכדת",
          "`caught`",
          "אין פלט",
          "SyntaxError"
        ],
        a: "B",
        e: "שגיאה ב־async הופכת ל־rejected promise."
      },
      {
        q: "איזה משפט נכון על `await` בתוך `try/catch`?",
        o: [
          "`catch` לא יכול לתפוס rejection",
          "`await` על rejected promise יזרוק חריגה בתוך הפונקציה",
          "`await` זמין רק ב־top-level script רגיל",
          "`await` מחזיר תמיד rejected"
        ],
        a: "B",
        e: "כך מטפלים בשגיאות async בסגנון סינכרוני."
      }
    ]
  },
  {
    topic: "JavaScript: Shadow DOM",
    items: [
      {
        q: "מה הפלט?\n\nconst host = document.createElement('x-a');\nconst root = host.attachShadow({ mode: 'open' });\nroot.innerHTML = '<button id=\"b\">Go</button>';\nconsole.log(host.querySelector('#b'));\nconsole.log(host.shadowRoot.querySelector('#b').id);",
        o: [
          "`<button...>` ואז `b`",
          "`null` ואז `b`",
          "`null` ואז `null`",
          "TypeError"
        ],
        a: "B",
        e: "שאילתה על host לא חודרת shadow tree."
      },
      {
        q: "מה נכון לגבי `mode: 'closed'`?",
        o: [
          "מונע bubbling של כל אירוע",
          "`host.shadowRoot` יהיה `null` לקוד חיצוני",
          "אוסר slots",
          "אוסר CSS בתוך shadow"
        ],
        a: "B",
        e: "closed מסתיר reference חיצוני."
      },
      {
        q: "מה נכון לגבי retargeting של אירועים?",
        o: [
          "מאזין חיצוני תמיד רואה target פנימי אמיתי",
          "`event.target` עשוי להיות ממופה ל־host מחוץ לצל",
          "retargeting קורה רק ב־Firefox",
          "זה קורה רק ב־closed"
        ],
        a: "B",
        e: "זה חלק ממנגנון encapsulation."
      },
      {
        q: "מה הפלט?\n\nconst h = document.createElement('x-b');\nconst s = h.attachShadow({mode: 'open'});\ns.innerHTML = '<slot>fallback</slot>';\nconsole.log(s.textContent.trim());",
        o: [
          "`fallback`",
          "מחרוזת ריקה",
          "`slot`",
          "TypeError"
        ],
        a: "A",
        e: "ללא light DOM תואם, fallback מוצג."
      },
      {
        q: "איזו דרך תקנית לעיצוב פנימי מתוך חוץ?",
        o: [
          "`my-el >>> .inner`",
          "`my-el /deep/ .inner`",
          "`my-el::part(btn)` כשהקומפוננטה חושפת `part`",
          "`.my-el .inner` תמיד עובד"
        ],
        a: "C",
        e: "`::part` הוא המנגנון התקני."
      },
      {
        q: "מה נכון על `:host` בתוך stylesheet של shadow root?",
        o: [
          "בוחר צאצאים ב־light DOM",
          "מיועד לעצב את host element",
          "לא נתמך עם class selectors",
          "שווה ל־`*`"
        ],
        a: "B",
        e: "`:host` פונה לאלמנט המארח עצמו."
      }
    ]
  },

  {
    topic: "CSS: Selectors and combinators",
    items: [
      {
        q: "איזה selector בוחר `li` שהם צאצאים ישירים של `ul`?",
        o: [
          "`ul li`",
          "`ul > li`",
          "`ul + li`",
          "`ul ~ li`"
        ],
        a: "B",
        e: "`>` הוא child combinator."
      },
      {
        q: "מה הפלט החזותי?\n\n<style>\n  .a + .b { color: red; }\n</style>\n<p class='a'>1</p><p class='b'>2</p><p class='b'>3</p>",
        o: [
          "רק `2` אדום",
          "`2` ו־`3` אדום",
          "רק `3` אדום",
          "אף אחד לא אדום"
        ],
        a: "A",
        e: "`+` בוחר sibling מיידי בלבד."
      },
      {
        q: "איזה selector בוחר כל `p` שבא אחרי `h2` באותו הורה?",
        o: [
          "`h2 > p`",
          "`h2 + p`",
          "`h2 ~ p`",
          "`h2 p`"
        ],
        a: "C",
        e: "`~` הוא general sibling combinator."
      }
    ]
  },
  {
    topic: "CSS: Specificity",
    items: [
      {
        q: "איזה כלל מנצח ללא `!important`?",
        o: [
          "`.card p`",
          "`#app p`",
          "`p.note`",
          "`article p`"
        ],
        a: "B",
        e: "ID selector ספציפי יותר."
      },
      {
        q: "מה נכון לגבי `:where()`?",
        o: [
          "לוקח ספציפיות מקסימלית מהארגומנטים",
          "תמיד ספציפיות 0",
          "לא נתמך ב־modern browsers",
          "מוסיף נקודת ספציפיות אחת"
        ],
        a: "B",
        e: "`:where` מאופס ספציפיות."
      },
      {
        q: "מה הפלט?\n\n<style>\n  #x { color: green; }\n  .a { color: red !important; }\n</style>\n<p id='x' class='a'>T</p>",
        o: [
          "ירוק",
          "אדום",
          "שחור",
          "תלוי סדר בלבד"
        ],
        a: "B",
        e: "`!important` גובר על כלל רגיל גם עם ID."
      }
    ]
  },
  {
    topic: "CSS: Pseudo-classes and pseudo-elements",
    items: [
      {
        q: "איזה משפט נכון?",
        o: [
          "`::before` הוא צומת DOM אמיתי",
          "`:hover` הוא pseudo-element",
          "`::before` ו־`::after` דורשים לרוב `content` כדי להיראות",
          "`::first-line` עובד רק על span"
        ],
        a: "C",
        e: "ללא `content` לרוב לא יוצג תוכן generated."
      },
      {
        q: "מה הפלט החזותי?\n\n<style>\n  a:visited { color: purple; }\n  a:hover { color: orange; }\n</style>",
        o: [
          "`visited` לעולם לא חל",
          "במצב hover יוחל כלל hover אם מתאים",
          "שני הכללים בלתי חוקיים",
          "רק a:link מותר"
        ],
        a: "B",
        e: "Pseudo-classes חלות לפי מצב אינטראקציה."
      },
      {
        q: "איזה selector תקין ל־pseudo-element?",
        o: [
          "`p:first-line`",
          "`p::first-line`",
          "`p:::first-line`",
          "`::p-first-line`"
        ],
        a: "B",
        e: "התחביר המודרני עם `::`."
      }
    ]
  },
  {
    topic: "CSS: Box model (margin, padding, box-sizing)",
    items: [
      {
        q: "מה הרוחב החיצוני?\n\n.box { width: 200px; padding: 20px; border: 10px solid; box-sizing: content-box; }",
        o: [
          "200px",
          "240px",
          "260px",
          "300px"
        ],
        a: "C",
        e: "200 + 20*2 + 10*2 = 260."
      },
      {
        q: "מה הרוחב החיצוני אם `box-sizing: border-box` באותם ערכים?",
        o: [
          "200px",
          "240px",
          "260px",
          "280px"
        ],
        a: "A",
        e: "ב־border-box, ה־width כולל padding+border."
      },
      {
        q: "מה נכון לגבי margin collapse?",
        o: [
          "קורה גם אופקית",
          "קורה בין margins אנכיים בתנאים מסוימים",
          "לא קורה בכלל ב־CSS מודרני",
          "קורה רק עם `position:absolute`"
        ],
        a: "B",
        e: "Margin collapse הוא תופעה אנכית בעיקר."
      }
    ]
  },
  {
    topic: "CSS: Layout (position, flexbox, grid)",
    items: [
      {
        q: "איזה משפט נכון על `position: absolute`?",
        o: [
          "נמדד תמיד ביחס ל־viewport",
          "נמדד ביחס ל־containing block הקרוב (positioned ancestor)",
          "תמיד נשאר בזרימה הרגילה",
          "שקול ל־`fixed`"
        ],
        a: "B",
        e: "Absolute יוצא מהזרימה ונמדד יחסית ל־ancestor מתאים."
      },
      {
        q: "מה הפלט החזותי?\n\n.wrap{display:flex;width:300px}.a{flex:1}.b{flex:2}",
        o: [
          "A=100px, B=200px",
          "A=150px, B=150px",
          "A=200px, B=100px",
          "לא ניתן לחשב"
        ],
        a: "A",
        e: "יחס grow של 1:2."
      },
      {
        q: "מה נכון לגבי Grid `1fr 2fr`?",
        o: [
          "fr הוא px קבוע",
          "העמודה השנייה תקבל בערך פי 2 מהחלל הפנוי ביחס לראשונה",
          "fr עובד רק בשורות",
          "אי אפשר לשלב fr עם minmax"
        ],
        a: "B",
        e: "`fr` מחלק חלל פנוי באופן יחסי."
      }
    ]
  },
  {
    topic: "CSS: Media queries",
    items: [
      {
        q: "איזה media query נכון ל־viewport ברוחב עד 768px?",
        o: [
          "`@media (max-width: 768px)`",
          "`@media width < 768`",
          "`@media (screen <= 768px)`",
          "`@media only max-width 768px`"
        ],
        a: "A",
        e: "זה תחביר תקני נפוץ."
      },
      {
        q: "מה נכון לגבי mobile-first?",
        o: [
          "כותבים רק `max-width` תמיד",
          "בסיס לסמארטפון ואז מרחיבים עם `min-width`",
          "אסור להשתמש ב־media queries",
          "mobile-first מחייב Grid"
        ],
        a: "B",
        e: "זה דפוס תכנון רספונסיבי מקובל."
      },
      {
        q: "מה הפלט החזותי?\n\n<style>\n  .x { display:block; }\n  @media (max-width: 600px){ .x { display:none; } }\n</style>",
        o: [
          "ב־500px האלמנט מוסתר",
          "ב־500px האלמנט גלוי",
          "הכלל שגוי תחבירית",
          "תמיד מוסתר"
        ],
        a: "A",
        e: "query חל עד רוחב 600 כולל."
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
