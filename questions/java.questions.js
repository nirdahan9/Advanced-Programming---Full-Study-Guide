export const TOPICS = [
  "Basic Java from intro class",
  "Primitive data types, endianness, literals, references",
  "Primitive vs reference types",
  "Object oriented programming",
  "Classes / Class / instanceof",
  "Definition vs instantiation",
  "Constructors / default constructor",
  "new + initialization order",
  "Interfaces",
  "Abstract classes",
  "Fields and methods",
  "Access control",
  "Static fields/methods",
  "Overloading vs overriding",
  "Inheritance",
  "Polymorphism",
  "@Override",
  "Casting (narrowing/widening)",
  "this, super",
  "Generics, erasure",
  "Collections",
  "Comparable + Arrays.sort",
  "Iterators",
  "Enums",
  "Exceptions",
  "try-with-resources",
  "Nested classes",
  "Anonymous classes",
  "Lambda expressions",
  "Streams & files",
  "String / StringBuilder",
  "final",
  "toString()",
  "System.out.println()",
  "Memory: stack vs heap",
  "Compile-time vs runtime errors",
  "Good programming practices",
  "SOLID",
  "Design Patterns",
  "How text is stored in files",
  "Text encodings: UTF-8, UTF-16",
  "CRLF vs LF",
  "Reading hex dumps"
];

export const QUESTIONS = [
  {
    "t": 0,
    "q": "A method receives an array and needs to compute a value for each element and stop early once a condition is met. Which control-structure choice best reflects *intent* and reduces bug risk?",
    "o": [
      "A loop that iterates over the array and uses early exit (break/return) when the condition is met",
      "Nested loops even if the problem is single-pass, because nesting is more general",
      "Recursion, because recursion is always clearer than loops",
      "A fixed number of iterations (e.g., for i=0..9) so behavior is predictable"
    ],
    "a": "A",
    "e": "A single-pass loop with early exit matches the problem model and reduces accidental extra work/complexity."
  },
  {
    "t": 0,
    "q": "מה יהיה הפלט?\n\nint x = 1;\nfor (int i = 0; i < 3; i++) {\n    x = x++ + ++x;\n}\nSystem.out.println(x);",
    "o": [
      "7",
      "8",
      "9",
      "התנהגות לא מוגדרת/שגיאה"
    ],
    "a": "B",
    "e": "x++ מחזיר ערך קודם ואז מגדיל; ++x מגדיל ואז מחזיר. בסוף כל איטרציה x נהיה: 1->3->5->8, ולכן מודפס 8."
  },
  {
    "t": 1,
    "q": "Endianness matters most when:",
    "o": [
      "Interpreting multi-byte data across a wire/file format or between different systems",
      "Comparing two Java strings for equality",
      "Choosing between int and long in arithmetic",
      "Calling a virtual method through a reference"
    ],
    "a": "A",
    "e": "Endianness is about byte order in multi-byte representations, relevant at boundaries (files/network/protocols)."
  },
  {
    "t": 1,
    "q": "מה יהיה הפלט?\n\nint a = 010;\nint b = 0b10;\nint c = 0x10;\nSystem.out.println(a + b + c);",
    "o": [
      "20",
      "26",
      "28",
      "18"
    ],
    "a": "B",
    "e": "010 הוא אוקטלי = 8, 0b10 = 2, 0x10 = 16 => סהכ 26."
  },
  {
    "t": 2,
    "q": "Which statement best captures the *conceptual* difference between primitives and references in Java?",
    "o": [
      "Primitives *are the value*, references *point to an object*; assignment copies the value vs copies the reference",
      "Primitives live on the heap and references live on the stack",
      "Primitives can be null but references cannot",
      "References are faster because they are smaller"
    ],
    "a": "A",
    "e": "The key difference is value vs reference semantics; location details (stack/heap) are an implementation detail and not strictly true as phrased."
  },
  {
    "t": 2,
    "q": "מה יהיה הפלט?\n\nint[] a = {1,2};\nint[] b = a;\nb[0] = 9;\nSystem.out.println(a[0]);",
    "o": [
      "1",
      "2",
      "9",
      "שגיאת קומפילציה"
    ],
    "a": "C",
    "e": "העתקה של reference (a ו-b מצביעים לאותו מערך), לכן שינוי דרך b משפיע על a."
  },
  {
    "t": 3,
    "q": "Which option best explains how encapsulation protects invariants?",
    "o": [
      "By forcing state changes through methods that can validate and preserve rules (e.g., non-negative balance)",
      "By making all fields public so bugs are easier to spot",
      "By replacing constructors with static fields",
      "By preventing inheritance entirely"
    ],
    "a": "A",
    "e": "Encapsulation creates a controlled API boundary where invariants can be enforced before state changes."
  },
  {
    "t": 3,
    "q": "מתי polymorphism עדיף על if/else ארוך לפי type?",
    "o": [
      "כשרוצים להוסיף סוגים חדשים בלי לשנות את הקוד הקורא (Open/Closed)",
      "כשרוצים פחות מחלקות בכל מחיר",
      "כשאין בכלל התנהגות שונה בין סוגים",
      "רק כשעובדים עם מחלקות final"
    ],
    "a": "A",
    "e": "פולימורפיזם מעביר אחריות למחלקות עצמן ומקטין שינויי רוחב כשמוסיפים סוג חדש."
  },
  {
    "t": 4,
    "q": "You want code that behaves differently for different runtime types, but you also want it to be extensible. Which approach usually best aligns with polymorphism?",
    "o": [
      "Prefer virtual dispatch (overriding) over long instanceof chains",
      "Prefer instanceof chains because they are explicit and therefore safer",
      "Prefer comparing Class objects with == because it avoids virtual calls",
      "Prefer using reflection for all dispatch"
    ],
    "a": "A",
    "e": "Overriding moves type-specific logic into the type itself; instanceof chains grow and violate open/closed as types expand."
  },
  {
    "t": 4,
    "q": "מה יהיה הפלט?\n\nObject o = null;\nSystem.out.println(o instanceof String);",
    "o": [
      "true",
      "false",
      "NullPointerException",
      "שגיאת קומפילציה"
    ],
    "a": "B",
    "e": "instanceof על null מחזיר false (לא זורק חריגה)."
  },
  {
    "t": 5,
    "q": "Which is the best explanation of why 'defining a class' and 'instantiating an object' are separated concepts?",
    "o": [
      "A class defines a reusable blueprint; many instances can exist with different state and lifetimes",
      "Instantiation is required for compilation; definitions are only for the JVM",
      "Definition allocates memory; instantiation only assigns values",
      "They are separated mainly to make syntax shorter"
    ],
    "a": "A",
    "e": "A single definition enables any number of objects; object lifetimes/state are independent."
  },
  {
    "t": 5,
    "q": "מה יהיה הפלט?\n\nclass A { static int c = 0; A(){ c++; } }\n// ...\nnew A(); new A();\nSystem.out.println(A.c);",
    "o": [
      "0",
      "1",
      "2",
      "שגיאת קומפילציה"
    ],
    "a": "C",
    "e": "כל אינסטנס מריץ constructor שמגדיל מונה סטטי משותף."
  },
  {
    "t": 6,
    "q": "When does Java generate a default (no-arg) constructor?",
    "o": [
      "Only when you declare no constructors at all",
      "Always, even if you declare other constructors",
      "Only when the class is abstract",
      "Only when all fields are initialized inline"
    ],
    "a": "A",
    "e": "As soon as you declare any constructor, you take responsibility for providing needed ones (including no-arg if required)."
  },
  {
    "t": 6,
    "q": "יש למחלקה שדה final ללא אתחול inline. האם עדיין יכולה להיווצר default constructor אוטומטית?",
    "o": [
      "כן, תמיד — final לא משנה",
      "לא; גם אם אין constructors, הקומפיילר לא יכול לייצר ctor שלא מאתחל final",
      "כן, אבל רק אם השדה הוא reference",
      "כן, אבל רק אם המחלקה abstract"
    ],
    "a": "B",
    "e": "הקומפיילר מייצר default ctor רק אם אין ctor מוגדר, אבל הוא עדיין חייב להיות חוקי — שדה final חייב לקבל ערך (inline/initializer/constructor)."
  },
  {
    "t": 7,
    "q": "Which initialization order is conceptually correct for constructing a subclass object?",
    "o": [
      "Allocate object → superclass init/constructor chain → subclass init/constructor",
      "Subclass constructor runs fully before any superclass logic",
      "Static initializers run on every object creation",
      "Field initializers always run after constructor body"
    ],
    "a": "A",
    "e": "Construction flows top-down through superclass initialization before subclass body logic."
  },
  {
    "t": 7,
    "q": "מה יהיה הפלט?\n\nclass P {\n  static { System.out.print(\"S1 \"); }\n  { System.out.print(\"I1 \"); }\n  P(){ System.out.print(\"C1 \"); }\n}\nclass C extends P {\n  static { System.out.print(\"S2 \"); }\n  { System.out.print(\"I2 \"); }\n  C(){ System.out.print(\"C2 \"); }\n}\npublic class X { public static void main(String[] a){ new C(); } }",
    "o": [
      "S1 S2 I1 C1 I2 C2",
      "S2 S1 I2 C2 I1 C1",
      "S1 I1 C1 S2 I2 C2",
      "S1 S2 I2 C2 I1 C1"
    ],
    "a": "A",
    "e": "Static init runs once in superclass->subclass order, then instance init: super instance init+ctor, then subclass init+ctor."
  },
  {
    "t": 8,
    "q": "Choose the most accurate conceptual statement about interfaces:",
    "o": [
      "They define a contract (capability) that multiple unrelated classes can implement",
      "They are the same as abstract classes but faster",
      "They mainly exist because Java prevents multiple inheritance of fields",
      "They can store per-instance mutable state"
    ],
    "a": "A",
    "e": "Interfaces express a capability/contract independent of class hierarchy; many types can implement the same contract."
  },
  {
    "t": 8,
    "q": "מה הסיכון העיקרי בהוספת default method ל-interface קיים בספרייה ציבורית?",
    "o": [
      "זה יכול לשבור בינארית כל קוד קיים",
      "זה עלול ליצור ambiguity אם מחלקה מממשת שני interfaces עם אותו default method",
      "זה הופך את הקוד לבלתי ניתן ל-JIT",
      "אין שום סיכון"
    ],
    "a": "B",
    "e": "default methods נותנים תאימות מקורית, אבל יכולים ליצור התנגשות כאשר יש שתי ברירות מחדל זהות."
  },
  {
    "t": 9,
    "q": "When is an abstract class typically a better fit than an interface?",
    "o": [
      "When you want to share common state/implementation and enforce partial behavior",
      "When you need multiple inheritance of implementations",
      "When you want to prevent polymorphism",
      "When you only want constants"
    ],
    "a": "A",
    "e": "Abstract classes can share implementation/state and define a partial template; interfaces are best for pure capability contracts."
  },
  {
    "t": 9,
    "q": "מה יהיה הפלט?\n\nabstract class A {\n  A(){ f(); }\n  abstract void f();\n}\nclass B extends A {\n  int x = 1;\n  void f(){ System.out.print(x); }\n}\npublic class X { public static void main(String[] a){ new B(); } }",
    "o": [
      "0",
      "1",
      "NullPointerException",
      "שגיאת קומפילציה"
    ],
    "a": "A",
    "e": "בזמן הרצת A() מתבצעת קריאה דינמית ל-B.f(), אבל x עדיין לא אותחל (ערך ברירת מחדל 0)."
  },
  {
    "t": 10,
    "q": "Why are public mutable fields often considered a design smell?",
    "o": [
      "They bypass validation/invariants and lock callers to internal representation",
      "They make code too object-oriented",
      "They disable polymorphism automatically",
      "They prevent JIT optimization"
    ],
    "a": "A",
    "e": "Methods preserve encapsulation and allow API evolution without breaking callers."
  },
  {
    "t": 10,
    "q": "מה יהיה הפלט?\n\nclass A { int v = 1; }\nclass B extends A { int v = 2; }\nA x = new B();\nSystem.out.println(x.v);",
    "o": [
      "1",
      "2",
      "שגיאת קומפילציה",
      "תלוי ב-JVM"
    ],
    "a": "A",
    "e": "שדות לא עוברים overriding אלא hiding; גישה לשדה נקבעת לפי הטיפוס הסטטי (A)."
  },
  {
    "t": 11,
    "q": "You want to allow subclasses in other packages to see a member, but prevent unrelated classes in other packages. Which access level fits?",
    "o": [
      "public",
      "protected",
      "package-private",
      "private"
    ],
    "a": "B",
    "e": "protected allows access in subclasses (even across packages) while blocking other external classes."
  },
  {
    "t": 11,
    "q": "למה package-private יכול להיות כלי טוב להנדסת תוכנה?",
    "o": [
      "זה מאפשר encapsulation ברמת 'מודול' (package) בלי לחשוף API ציבורי",
      "זה מונע לחלוטין ירושה",
      "זה הופך קוד למהיר יותר",
      "זה מאפשר גישה מכל מקום כמו public"
    ],
    "a": "A",
    "e": "אפשר לחשוף רכיבים פנימיים לשימוש בתוך package (למשל טסטים/מימושים) בלי להפוך אותם ל-public."
  },
  {
    "t": 12,
    "q": "Which statement best explains what static members represent?",
    "o": [
      "State/behavior associated with the class itself, shared by all instances",
      "State/behavior copied into each object at construction",
      "A way to make methods virtual",
      "A way to make members thread-safe"
    ],
    "a": "A",
    "e": "static belongs to the class, not to individual objects; all instances see the same static field/method."
  },
  {
    "t": 12,
    "q": "מה יהיה הפלט?\n\nclass A { static void f(){ System.out.print(\"A\"); } }\nclass B extends A { static void f(){ System.out.print(\"B\"); } }\nA x = new B();\nx.f();",
    "o": [
      "A",
      "B",
      "שגיאת קומפילציה",
      "תלוי בזמן ריצה"
    ],
    "a": "A",
    "e": "static methods לא עוברים overriding; הקריאה נקבעת לפי הטיפוס הסטטי (A)."
  },
  {
    "t": 13,
    "q": "What is the key conceptual difference between overloading and overriding?",
    "o": [
      "Overloading is chosen at compile-time based on parameter types; overriding is chosen at runtime based on the actual object type",
      "Overloading changes return type only; overriding changes parameters",
      "Overloading works only with static methods; overriding works only with instance methods",
      "There is no difference"
    ],
    "a": "A",
    "e": "Overload resolution is compile-time; override dispatch is runtime (dynamic dispatch)."
  },
  {
    "t": 13,
    "q": "מה יהיה הפלט?\n\nclass A { String f(Object o){ return \"O\"; } String f(String s){ return \"S\"; } }\nSystem.out.println(new A().f(null));",
    "o": [
      "O",
      "S",
      "NullPointerException",
      "שגיאת קומפילציה"
    ],
    "a": "B",
    "e": "overloading נבחר בקומפילציה; null תואם לשניהם, והטיפוס הספציפי יותר הוא String."
  },
  {
    "t": 14,
    "q": "Which statement best captures inheritance vs composition?",
    "o": [
      "Inheritance models is-a but overuse can create brittle coupling; composition is often more flexible",
      "Composition always violates polymorphism",
      "Inheritance is only for code reuse and never for modeling",
      "Composition cannot delegate behavior"
    ],
    "a": "A",
    "e": "Use inheritance for true is-a relationships; otherwise composition often reduces coupling."
  },
  {
    "t": 14,
    "q": "איזה מצב הכי מפר את Liskov Substitution Principle (LSP)?",
    "o": [
      "Subclass מחזק תנאים מוקדמים (preconditions) ביחס ל-superclass",
      "Subclass מוסיף מתודה חדשה",
      "Subclass עושה override ל-toString",
      "Subclass מוסיף שדה private"
    ],
    "a": "A",
    "e": "אם לקוח שמצפה ל-superclass כבר לא יכול להשתמש ב-subclass בלי להכיר תנאים חדשים — נשבר עקרון ההחלפה."
  },
  {
    "t": 15,
    "q": "Why is polymorphism useful in large systems?",
    "o": [
      "It lets you program to abstractions so new implementations can be added without changing calling code",
      "It makes all code run faster",
      "It eliminates the need for unit tests",
      "It prevents runtime errors"
    ],
    "a": "A",
    "e": "It decouples callers from concrete implementations, reducing the blast radius of change."
  },
  {
    "t": 15,
    "q": "מה יהיה הפלט?\n\nclass A { String f(){ return \"A\"; } }\nclass B extends A { String f(){ return \"B\"; } }\nA x = new B();\nSystem.out.println(x.f());",
    "o": [
      "A",
      "B",
      "שגיאת קומפילציה",
      "NullPointerException"
    ],
    "a": "B",
    "e": "קריאה למתודה instance היא דינמית (runtime dispatch) ולכן תופעל B.f()."
  },
  {
    "t": 16,
    "q": "What is the main value of the @Override annotation?",
    "o": [
      "It asks the compiler to verify you actually override a superclass/interface method (avoids accidental overload)",
      "It makes the method run faster",
      "It changes visibility automatically",
      "It enables reflection"
    ],
    "a": "A",
    "e": "It turns a subtle bug (typo/signature mismatch) into a compile error."
  },
  {
    "t": 16,
    "q": "למה @Override 'מציל' מבלבול עם autoboxing?",
    "o": [
      "כי הוא מונע כל סוג של boxing",
      "כי הוא יגרום לשגיאת קומפילציה אם חתימת המתודה לא תואמת (למשל int vs Integer כשציפית override)",
      "כי הוא משנה את מעטפת ה-Integer",
      "כי הוא מוסיף equals/hashCode אוטומטית"
    ],
    "a": "B",
    "e": "קל להתבלבל ולחשוב שעושים override אבל למעשה עושים overload (למשל חילופי טיפוסים). @Override הופך את זה לשגיאה."
  },
  {
    "t": 17,
    "q": "You have a variable declared as a superclass type that actually refers to a subclass object. Which statement is correct?",
    "o": [
      "Overridden method calls still dispatch to the subclass implementation even without casting",
      "You must cast to call any method defined in the superclass",
      "Casting changes which overridden method implementation will run",
      "Widening casts can throw ClassCastException"
    ],
    "a": "A",
    "e": "Dynamic dispatch uses the runtime object type; casting only affects which members the compiler lets you access."
  },
  {
    "t": 17,
    "q": "מה יהיה הפלט?\n\nclass A { String f(Object o){ return \"AO\"; } }\nclass B extends A { String f(String s){ return \"BS\"; } }\nA x = new B();\nSystem.out.println(x.f(\"hi\"));",
    "o": [
      "AO",
      "BS",
      "שגיאת קומפילציה",
      "תלוי בזמן ריצה"
    ],
    "a": "A",
    "e": "בחירה של overload נעשית לפי טיפוס סטטי של המקבל (A) והחתימות הנראות ממנו; לכן נבחר f(Object)."
  },
  {
    "t": 18,
    "q": "What is the key risk of calling an overridable method from a superclass constructor?",
    "o": [
      "Subclass override may run before subclass fields are initialized",
      "super() will be skipped automatically",
      "The method becomes static at runtime",
      "It causes mandatory StackOverflowError"
    ],
    "a": "A",
    "e": "Dynamic dispatch can invoke subclass logic too early, before subclass state is ready."
  },
  {
    "t": 18,
    "q": "מה יהיה הפלט?\n\nclass A { int x = 1; void f(int x){ this.x = x; } }\nA a = new A(); a.f(7); System.out.println(a.x);",
    "o": [
      "1",
      "7",
      "0",
      "שגיאת קומפילציה"
    ],
    "a": "B",
    "e": "this.x מפנה לשדה; הפרמטר x מסתיר אותו. ההשמה מעדכנת את השדה ל-7."
  },
  {
    "t": 19,
    "q": "What is a practical implication of type erasure in Java generics?",
    "o": [
      "You generally can't check parameterized types at runtime (e.g., instanceof List<String>)",
      "Generic types create a separate class per type argument at runtime",
      "Generics guarantee zero runtime casts",
      "Type erasure means generics work only for primitives"
    ],
    "a": "A",
    "e": "At runtime, List<String> and List<Integer> look like List; some checks and reified operations aren't possible."
  },
  {
    "t": 19,
    "q": "למה List<Integer> לא ניתנת להמרה ל-List<Number> למרות ש-Integer הוא Number?",
    "o": [
      "כי ג'נריקס ב-Java הם invariant כדי למנוע הכנסת טיפוס לא תואם (type safety)",
      "כי type erasure מוחק את Integer",
      "כי Integer הוא final",
      "כי List הוא interface"
    ],
    "a": "A",
    "e": "אם זה היה מותר, אפשר היה להוסיף Double ל-List<Number> ואז להתפוצץ כשמניחים Integer. משתמשים ב-wildcards (? extends/? super)."
  },
  {
    "t": 20,
    "q": "You need fast membership tests (contains) and don't care about ordering. Which is usually the best default choice?",
    "o": [
      "ArrayList",
      "LinkedList",
      "HashSet",
      "TreeMap"
    ],
    "a": "C",
    "e": "HashSet is optimized for membership queries via hashing; lists are O(n) contains, TreeMap is for key->value and sorting."
  },
  {
    "t": 20,
    "q": "You need to preserve insertion order when iterating over unique elements. Which fits?",
    "o": [
      "HashSet",
      "LinkedHashSet",
      "TreeSet",
      "ArrayList"
    ],
    "a": "B",
    "e": "LinkedHashSet preserves insertion order while still providing set semantics."
  },
  {
    "t": 20,
    "q": "You need key->value lookup and also need keys sorted by natural order. Which Map?",
    "o": [
      "HashMap",
      "LinkedHashMap",
      "TreeMap",
      "ArrayList"
    ],
    "a": "C",
    "e": "TreeMap maintains keys in sorted (navigable) order."
  },
  {
    "t": 20,
    "q": "Why must `equals()` and `hashCode()` be consistent for keys in HashMap/HashSet?",
    "o": [
      "Otherwise equal objects may land in different buckets, breaking contains/get/remove behavior",
      "Otherwise TreeMap cannot sort keys",
      "Because hashCode is used only for logging",
      "Because equals is ignored in hash-based collections"
    ],
    "a": "A",
    "e": "Hash collections first choose bucket by hashCode and then compare by equals."
  },
  {
    "t": 20,
    "q": "מה יהיה הפלט?\n\nSet<Integer> s = new HashSet<>();\ns.add(1); s.add(1);\nSystem.out.println(s.size());",
    "o": [
      "0",
      "1",
      "2",
      "תלוי ב-hash"
    ],
    "a": "B",
    "e": "Set לא מאפשר כפילויות לפי equals/hashCode ולכן הגודל נשאר 1."
  },
  {
    "t": 20,
    "q": "מה יהיה הפלט?\n\nMap<String,Integer> m = new HashMap<>();\nm.put(\"a\", 1);\nm.put(new String(\"a\"), 2);\nSystem.out.println(m.get(\"a\"));",
    "o": [
      "1",
      "2",
      "null",
      "שגיאת קומפילציה"
    ],
    "a": "B",
    "e": "String.equals משווה תוכן, לכן המפתח השני דורס את הראשון והערך נהיה 2."
  },
  {
    "t": 20,
    "q": "What is a real risk with autounboxing in collections?",
    "o": [
      "Unboxing a null wrapper (e.g., Integer) throws NullPointerException",
      "Autounboxing converts every int to long",
      "Boxed values bypass equals()",
      "Autoboxing disables generics"
    ],
    "a": "A",
    "e": "Collections hold references; a null wrapper unboxed to primitive causes NPE."
  },
  {
    "t": 21,
    "q": "Arrays.sort(array) needs to compare elements. Which design best supports sorting custom objects by a 'natural order'?",
    "o": [
      "Implement Comparable<T> consistently with equals (when appropriate)",
      "Override toString() to return a sortable string",
      "Use instanceof to compare types",
      "Make all fields public"
    ],
    "a": "A",
    "e": "Comparable defines a natural ordering; consistency avoids weird behavior in sorted collections/algorithms."
  },
  {
    "t": 21,
    "q": "איזו בעיה נוצרת אם compareTo לא עקבי עם equals?",
    "o": [
      "אין בעיה בכלל",
      "מבני נתונים ממוינים (כמו TreeSet/TreeMap) יכולים 'לאבד' פריטים שנחשבים שווים לפי compareTo",
      "זה גורם ל-ClassCastException תמיד",
      "זה שובר autoboxing"
    ],
    "a": "B",
    "e": "TreeSet/TreeMap משתמשים בהשוואה כדי לקבוע ייחודיות. אם compareTo מחזיר 0 לשני אובייקטים שונים לפי equals, אחד מהם יידרס."
  },
  {
    "t": 22,
    "q": "Why do many collections expose Iterators rather than exposing their internal structure?",
    "o": [
      "To separate traversal from representation and allow safe removal during iteration via iterator.remove()",
      "Because iterators are faster than arrays",
      "Because Java doesn’t support loops",
      "To allow modifying a collection while iterating with no constraints"
    ],
    "a": "A",
    "e": "Iterators decouple representation from traversal and provide controlled modification semantics."
  },
  {
    "t": 22,
    "q": "למה ConcurrentModificationException קיימת?",
    "o": [
      "כדי להבטיח thread-safety",
      "כדי לגלות מהר (fail-fast) שינוי מבני בזמן איטרציה שעלול להוביל לבאגים",
      "כי Iterator תמיד שומר עותק של האוסף",
      "כי remove() לא נתמך"
    ],
    "a": "B",
    "e": "רוב האוספים הם fail-fast: שינוי מבני חיצוני בזמן איטרציה עלול לגרום להתנהגות לא צפויה."
  },
  {
    "t": 23,
    "q": "Why are enums often preferable to int constants for representing a fixed set of states?",
    "o": [
      "They provide type safety and can bundle behavior/data per constant",
      "They use less memory than ints",
      "They can change at runtime",
      "They avoid the need for switch"
    ],
    "a": "A",
    "e": "Enums prevent invalid values and can carry behavior, improving domain modeling."
  },
  {
    "t": 23,
    "q": "מה יהיה הפלט?\n\nenum E { A, B }\nSystem.out.println(E.A == E.valueOf(\"A\"));",
    "o": [
      "true",
      "false",
      "NullPointerException",
      "שגיאת קומפילציה"
    ],
    "a": "A",
    "e": "enum constants הם singletons, ולכן השוואה ב-== עובדת."
  },
  {
    "t": 24,
    "q": "When is propagating (`throws`) usually preferable to catching locally?",
    "o": [
      "When the current layer cannot recover meaningfully and caller has better context",
      "Always, because catch should never be used",
      "Only for RuntimeException",
      "Only inside constructors"
    ],
    "a": "A",
    "e": "Catch where you can add value (recover/translate); otherwise propagate."
  },
  {
    "t": 24,
    "q": "מה יהיה הפלט?\n\ntry {\n  throw new RuntimeException();\n} catch (Exception e) {\n  System.out.print(\"C\");\n} finally {\n  System.out.print(\"F\");\n}",
    "o": [
      "C",
      "F",
      "CF",
      "FC"
    ],
    "a": "C",
    "e": "catch רץ ואז finally תמיד רץ בסוף."
  },
  {
    "t": 25,
    "q": "What problem does try-with-resources primarily solve?",
    "o": [
      "Reliable resource cleanup even when exceptions happen",
      "Faster file reading",
      "Avoiding checked exceptions",
      "Enabling random access"
    ],
    "a": "A",
    "e": "It ensures close() is called (suppressed exceptions handled) even when execution exits via exception."
  },
  {
    "t": 25,
    "q": "מה נכון לגבי חריגות עם try-with-resources?",
    "o": [
      "אם close() זורק חריגה, היא מחליפה תמיד את חריגת ה-body",
      "חריגה מה-close יכולה להיות suppressed על חריגת ה-body",
      "אין מצב לשתי חריגות",
      "close() לא נקרא אם יש חריגה"
    ],
    "a": "B",
    "e": "במקרה של חריגה ב-body ועוד חריגה ב-close, החריגה מה-close נכנסת כ-suppressed על הראשית."
  },
  {
    "t": 26,
    "q": "Which nested class type does *not* require an instance of the outer class?",
    "o": [
      "Static nested class",
      "Inner (non-static) class",
      "Anonymous class declared inside instance method",
      "Local inner class declared inside instance method"
    ],
    "a": "A",
    "e": "Static nested classes are associated with the outer class, not with an outer object instance."
  },
  {
    "t": 26,
    "q": "מה יהיה הפלט?\n\nclass Outer { int x=1; class Inner { int x=2; void p(){ System.out.println(x + \" \" + Outer.this.x); } } }\nnew Outer().new Inner().p();",
    "o": [
      "1 1",
      "2 1",
      "2 2",
      "1 2"
    ],
    "a": "B",
    "e": "x בתוך Inner מסתיר את x של Outer; Outer.this.x מפנה לשדה החיצוני."
  },
  {
    "t": 27,
    "q": "When is an anonymous class preferable to a lambda?",
    "o": [
      "When you need to extend a class or define extra state/initializer in the inline type",
      "When you need less bytecode at all costs",
      "When implementing primitive arithmetic",
      "Only when using checked exceptions"
    ],
    "a": "A",
    "e": "Anonymous classes can model richer inline types than lambdas."
  },
  {
    "t": 28,
    "q": "A lambda in Java is best described as:",
    "o": [
      "An implementation of a functional interface, enabling passing behavior as a value",
      "A way to create a new class file",
      "A macro expanded at compile-time",
      "A replacement for generics"
    ],
    "a": "A",
    "e": "Java lambdas target functional interfaces; they represent behavior passed around."
  },
  {
    "t": 28,
    "q": "מה ההבדל לגבי this בתוך lambda לעומת anonymous class?",
    "o": [
      "ב-lambda this מצביע לאובייקט הלמבדה",
      "ב-lambda this הוא ה-this של המחלקה העוטפת, ואילו ב-anonymous class this הוא של המחלקה האנונימית",
      "אין הבדל",
      "this אסור בשניהם"
    ],
    "a": "B",
    "e": "למבדה לא יוצרת 'this' חדש באותו אופן; anonymous class כן יוצרת מופע עם this משלה."
  },
  {
    "t": 29,
    "q": "When reading text, why is using a Reader/Writer often more appropriate than InputStream/OutputStream directly?",
    "o": [
      "Readers/Writers handle character decoding/encoding (charset) rather than raw bytes",
      "Readers are always faster",
      "InputStreams can’t read from files",
      "Writers automatically compress data"
    ],
    "a": "A",
    "e": "Text needs character encoding/decoding; Readers/Writers sit on top of byte streams with a charset."
  },
  {
    "t": 29,
    "q": "מה יהיה הפלט?\n\nSystem.out.print((char)('A' + 1));\nSystem.out.print((byte)257);",
    "o": [
      "B1",
      "B-1",
      "B257",
      "שגיאת קומפילציה"
    ],
    "a": "B",
    "e": "'A'+1 הוא 'B'. byte הוא 8-bit חתום: 257 mod 256 = 1, אבל כ-byte זה 1 (טעות נפוצה: כאן באמת יוצא 1)."
  },
  {
    "t": 29,
    "q": "Why does buffering often improve I/O performance?",
    "o": [
      "It reduces the number of expensive system calls by batching reads/writes",
      "It changes endianness",
      "It prevents exceptions",
      "It makes data immutable"
    ],
    "a": "A",
    "e": "Batching reduces overhead; flush pushes buffered output to the underlying stream/device."
  },
  {
    "t": 29,
    "q": "What is the main conceptual difference between sequential stream access and random access (RandomAccessFile)?",
    "o": [
      "Random access lets you read/write at arbitrary positions (seek) rather than consuming data in order",
      "Random access is only for text",
      "Sequential streams can’t be closed",
      "Random access avoids buffering"
    ],
    "a": "A",
    "e": "Random access supports positioning (seek) which is useful for indexes, headers, and in-place updates."
  },
  {
    "t": 30,
    "q": "Why is StringBuilder recommended for repeated concatenation in a loop?",
    "o": [
      "Strings are immutable; repeated concatenation creates many intermediate objects",
      "StringBuilder is immutable",
      "String concatenation is illegal in Java",
      "StringBuilder stores characters as bytes"
    ],
    "a": "A",
    "e": "Immutability means each concat creates a new String; StringBuilder mutates an internal buffer."
  },
  {
    "t": 30,
    "q": "מה יהיה הפלט?\n\nString a = \"hi\";\nString b = \"h\" + \"i\";\nString c = new String(\"hi\");\nSystem.out.print((a==b) + \" \" + (a==c));",
    "o": [
      "true true",
      "true false",
      "false true",
      "false false"
    ],
    "a": "B",
    "e": "קונקטנציה של ליטרלים מתקפלת בזמן קומפילציה ומאונטרנת; new String יוצר אובייקט חדש ולכן == יהיה false."
  },
  {
    "t": 31,
    "q": "Which statement about `final` is correct?",
    "o": [
      "`final` reference can't be reassigned; `final` method can't be overridden; `final` class can't be extended",
      "`final` reference makes the object immutable",
      "`final` method cannot be overloaded",
      "`final` class cannot define constructors"
    ],
    "a": "A",
    "e": "`final` restricts reassignment/inheritance/overriding, not necessarily object mutability."
  },
  {
    "t": 31,
    "q": "מה יהיה הפלט?\n\nfinal int[] a = {1};\na[0] = 9;\nSystem.out.println(a[0]);",
    "o": [
      "שגיאת קומפילציה",
      "1",
      "9",
      "NullPointerException"
    ],
    "a": "C",
    "e": "final מונע השמה מחדש של reference, לא שינוי של תוכן אובייקט בר-שינוי."
  },
  {
    "t": 32,
    "q": "Which `toString()` guideline is best for production debugging/logging?",
    "o": [
      "Include key identifying state concisely and avoid secrets/heavy computation",
      "Dump every nested field recursively for completeness",
      "Throw exception if object is partially initialized",
      "Return random UUID each call"
    ],
    "a": "A",
    "e": "Good `toString()` should be stable, useful, and safe."
  },
  {
    "t": 32,
    "q": "מה יהיה הפלט?\n\nclass A { }\nSystem.out.println(new A());",
    "o": [
      "תמיד 'A'",
      "מחרוזת בסגנון A@<hex> (ברירת מחדל של Object.toString)",
      "null",
      "שגיאת קומפילציה"
    ],
    "a": "B",
    "e": "Object.toString ברירת מחדל: getClass().getName() + '@' + Integer.toHexString(hashCode())."
  },
  {
    "t": 34,
    "q": "Which explanation best matches stack vs heap in Java?",
    "o": [
      "Stack holds call frames/local references; heap holds objects with longer lifetimes managed by GC",
      "Heap is for primitives only; stack is for objects",
      "Stack is shared across threads; heap is per thread",
      "Stack is for files; heap is for sockets"
    ],
    "a": "A",
    "e": "The stack is thread-local call frames; the heap is where objects live and GC manages lifetime."
  },
  {
    "t": 34,
    "q": "מה יהיה הפלט?\n\nstatic void f(int[] a){ a = new int[]{9}; }\npublic static void main(String[] args){ int[] x = {1}; f(x); System.out.println(x[0]); }",
    "o": [
      "1",
      "9",
      "שגיאת קומפילציה",
      "NullPointerException"
    ],
    "a": "A",
    "e": "ה-reference מועבר לפי ערך (copy). שינוי ההצבעה המקומית לא משנה את x, ולכן נשאר 1."
  },
  {
    "t": 35,
    "q": "Which is the best example of a runtime error (not compile-time)?",
    "o": [
      "ClassCastException when downcasting to an incompatible type",
      "A missing semicolon",
      "Using an undefined variable",
      "Two methods with same signature in one class"
    ],
    "a": "A",
    "e": "Runtime errors happen during execution (e.g., bad casts); syntax/name errors are caught by the compiler."
  },
  {
    "t": 35,
    "q": "מה נכון לגבי checked exceptions?",
    "o": [
      "הן תמיד מתרחשות בזמן קומפילציה",
      "הקומפיילר דורש טיפול (catch/throws) אבל החריגה עצמה היא runtime אירוע",
      "הן תמיד RuntimeException",
      "אי אפשר לזרוק אותן"
    ],
    "a": "B",
    "e": "הבדיקה היא בזמן קומפילציה, אבל ההתרחשות תמיד בזמן ריצה."
  },
  {
    "t": 36,
    "q": "Which statement best reflects a mature DRY tradeoff?",
    "o": [
      "Avoiding tiny duplication can be worse than adding premature abstraction and coupling",
      "Any duplication is always a design failure",
      "DRY applies only to comments",
      "DRY is mainly a performance optimization"
    ],
    "a": "A",
    "e": "Over-abstraction can hurt clarity; small duplication is sometimes the better tradeoff."
  },
  {
    "t": 36,
    "q": "מתי 'כפילויות' יכולות להיות דווקא סבירות?",
    "o": [
      "כשזה מונע coupling בין מודולים לא קשורים וכל כפילות קטנה וברורה",
      "אף פעם; DRY תמיד מוחלט",
      "כשזה משפר ביצועים",
      "רק כשזה בתוך loop"
    ],
    "a": "A",
    "e": "לפעמים abstraction מוקדם מדי מייצר תלות/מורכבות. כפילות קטנה יכולה להיות מחיר זול לעומת קישור לא נכון."
  },
  {
    "t": 37,
    "q": "Which pairing most directly reduces change ripple in large systems?",
    "o": [
      "SRP + DIP: small focused modules depending on abstractions",
      "LSP + making everything static",
      "ISP + exposing all fields public",
      "OCP + never refactoring"
    ],
    "a": "A",
    "e": "SRP reduces reasons-to-change; DIP decouples policy from details."
  },
  {
    "t": 37,
    "q": "איזו פעולה הכי תואמת Dependency Inversion Principle (DIP)?",
    "o": [
      "High-level module מייבא ישירות concrete DBClient",
      "שני הצדדים תלויים ב-abstraction (interface) וה-concrete ממומש בהזרקה (DI)",
      "למחוק interfaces כי הם מיותרים",
      "לקרוא ל-singleton כדי לקבל dependency"
    ],
    "a": "B",
    "e": "DIP: תלות באבסטרקציות, לא בפרטים. DI היא טכניקת מימוש נפוצה."
  },
  {
    "t": 38,
    "q": "Which statement captures both value and tradeoff of Strategy pattern?",
    "o": [
      "It replaces growing conditionals with interchangeable algorithms, at the cost of extra indirection/classes",
      "It guarantees fewer classes than any alternative",
      "It removes the need for interfaces",
      "It is only for UI code"
    ],
    "a": "A",
    "e": "Patterns solve recurring design problems but usually add structure/indirection."
  },
  {
    "t": 38,
    "q": "מה הטעות הכי נפוצה עם Design Patterns?",
    "o": [
      "להשתמש בהם כדי לפתור בעיה אמיתית שעולה מהקוד",
      "להחיל pattern מראש (over-engineering) במקום להקשיב לבעיה",
      "לתעד למה בחרנו pattern",
      "לסרב להשתמש בהם בכלל"
    ],
    "a": "B",
    "e": "Patterns הם כלי. שימוש מוקדם מדי מוסיף מורכבות בלי ערך."
  },
  {
    "t": 0,
    "q": "Which loop choice best communicates intent for a single pass with optional early stop?",
    "o": [
      "for/while with break/return",
      "Always nested loops",
      "Always recursion",
      "Fixed-iteration loop"
    ],
    "a": "A",
    "e": "Control flow should mirror problem constraints."
  },
  {
    "t": 1,
    "q": "Why can endianness bugs be hard to spot?",
    "o": [
      "Values seem fine locally but break across binary boundaries",
      "Because Java randomizes bytes",
      "Because Strings are little-endian",
      "Because JVM forbids byte order conversion"
    ],
    "a": "A",
    "e": "It appears mainly during serialization/protocol interop."
  },
  {
    "t": 2,
    "q": "After `int[] b = a;`, changing `b[0]` affects `a[0]` because:",
    "o": [
      "Both variables hold same array reference",
      "Arrays are copied on assignment",
      "Primitive promotion occurs",
      "JIT rewrites code"
    ],
    "a": "A",
    "e": "Reference assignment points both names to same object."
  },
  {
    "t": 3,
    "q": "A core OOP benefit in large systems is:",
    "o": [
      "Decoupling callers from concrete implementations",
      "Zero runtime errors",
      "No need for tests",
      "Automatic thread-safety"
    ],
    "a": "A",
    "e": "Abstractions reduce ripple effects."
  },
  {
    "t": 4,
    "q": "When `instanceof` chains grow, best refactor is often:",
    "o": [
      "Move behavior to polymorphic overrides",
      "Add reflection everywhere",
      "Use static methods",
      "Compare class names as strings"
    ],
    "a": "A",
    "e": "Polymorphism scales better than type-switching."
  },
  {
    "t": 5,
    "q": "`class C {}` vs `new C()` difference is:",
    "o": [
      "Blueprint definition vs runtime object creation",
      "Both allocate objects",
      "Both are compile-time only",
      "No difference"
    ],
    "a": "A",
    "e": "Definition and instantiation are separate concepts."
  },
  {
    "t": 6,
    "q": "If class defines any constructor, default no-arg constructor:",
    "o": [
      "Is not auto-generated",
      "Is always auto-generated",
      "Is generated only for public classes",
      "Is generated only if fields are final"
    ],
    "a": "A",
    "e": "You must explicitly provide needed constructors."
  },
  {
    "t": 7,
    "q": "In subclass creation, superclass constructor executes:",
    "o": [
      "Before subclass constructor body",
      "After subclass constructor body",
      "Only when fields are final",
      "Never if no-arg ctor exists"
    ],
    "a": "A",
    "e": "Initialization flows from super to sub."
  },
  {
    "t": 8,
    "q": "Interfaces are best viewed as:",
    "o": [
      "Behavior contracts/capabilities",
      "State containers",
      "Performance optimizers",
      "Constructor templates"
    ],
    "a": "A",
    "e": "They define what, not how."
  },
  {
    "t": 9,
    "q": "Abstract class fits best when you need:",
    "o": [
      "Shared implementation + partial contract",
      "Multiple class inheritance",
      "No polymorphism",
      "Only constants"
    ],
    "a": "A",
    "e": "Abstract classes can hold state and concrete code."
  },
  {
    "t": 10,
    "q": "Why prefer methods over public mutable fields?",
    "o": [
      "Validation and invariant enforcement",
      "Faster syntax",
      "Mandatory for inheritance",
      "Needed for GC"
    ],
    "a": "A",
    "e": "Methods preserve encapsulation boundaries."
  },
  {
    "t": 11,
    "q": "Best access for internal helper in same package only:",
    "o": [
      "package-private",
      "public",
      "protected",
      "private"
    ],
    "a": "A",
    "e": "Package-private hides API outside package."
  },
  {
    "t": 12,
    "q": "Static method dispatch is based on:",
    "o": [
      "Reference static type",
      "Runtime object type",
      "Interface hierarchy",
      "JIT profile"
    ],
    "a": "A",
    "e": "Static methods are hidden, not overridden."
  },
  {
    "t": 13,
    "q": "Overload resolution happens at:",
    "o": [
      "Compile time",
      "Runtime only",
      "Link time only",
      "GC phase"
    ],
    "a": "A",
    "e": "Compiler picks signature; runtime picks overrides."
  },
  {
    "t": 14,
    "q": "LSP violation example:",
    "o": [
      "Subclass strengthens preconditions",
      "Subclass adds utility method",
      "Subclass adds private field",
      "Subclass overrides toString"
    ],
    "a": "A",
    "e": "Clients expecting supertype behavior can break."
  },
  {
    "t": 15,
    "q": "Polymorphism mainly enables:",
    "o": [
      "Open/closed extension of behavior",
      "Faster bytecode always",
      "Removal of interfaces",
      "No exceptions"
    ],
    "a": "A",
    "e": "Callers depend on abstractions."
  },
  {
    "t": 16,
    "q": "`@Override` is most useful because it:",
    "o": [
      "Turns signature mismatch into compile error",
      "Optimizes method dispatch",
      "Changes visibility",
      "Adds annotations at runtime only"
    ],
    "a": "A",
    "e": "Prevents accidental overload mistakes."
  },
  {
    "t": 17,
    "q": "Widening primitive conversion (e.g., int->long) is generally:",
    "o": [
      "Implicit and safe from ClassCastException",
      "Always explicit",
      "Runtime-polymorphic",
      "Related to overriding dispatch"
    ],
    "a": "A",
    "e": "Reference casts differ from primitive widening."
  },
  {
    "t": 18,
    "q": "`super(...)` in constructor must appear:",
    "o": [
      "As first statement",
      "Anywhere before return",
      "Only in abstract classes",
      "Only in default constructors"
    ],
    "a": "A",
    "e": "Constructor chaining rule."
  },
  {
    "t": 19,
    "q": "`instanceof List<String>` is invalid mainly due:",
    "o": [
      "Type erasure",
      "Missing wildcard",
      "Autoboxing",
      "Final class restriction"
    ],
    "a": "A",
    "e": "Generic type args are not reified at runtime."
  },
  {
    "t": 20,
    "q": "Need insertion order + unique elements:",
    "o": [
      "LinkedHashSet",
      "HashSet",
      "TreeSet",
      "ArrayList"
    ],
    "a": "A",
    "e": "LinkedHashSet preserves insertion order."
  },
  {
    "t": 21,
    "q": "For natural ordering of custom class, implement:",
    "o": [
      "Comparable<T>",
      "Runnable",
      "Cloneable",
      "Serializable"
    ],
    "a": "A",
    "e": "Comparable defines intrinsic sort order."
  },
  {
    "t": 22,
    "q": "Safe element removal while iterating is done via:",
    "o": [
      "Iterator.remove()",
      "Collection.remove() directly in loop",
      "index-- trick on Set",
      "Stream.forEach remove"
    ],
    "a": "A",
    "e": "Iterator controls concurrent modification semantics."
  },
  {
    "t": 23,
    "q": "Enum constants are typically compared with:",
    "o": [
      "==",
      "equals only",
      "compareTo only",
      "hashCode only"
    ],
    "a": "A",
    "e": "Enums are singletons per constant."
  },
  {
    "t": 24,
    "q": "`finally` block typically runs:",
    "o": [
      "Whether exception was thrown or not",
      "Only if catch runs",
      "Only if no return statement",
      "Only for checked exceptions"
    ],
    "a": "A",
    "e": "Finally is cleanup-oriented."
  },
  {
    "t": 25,
    "q": "With try-with-resources, close exceptions are often:",
    "o": [
      "Suppressed under primary exception",
      "Always primary",
      "Ignored completely",
      "Compile-time only"
    ],
    "a": "A",
    "e": "Primary exception keeps context; close failures are suppressed."
  },
  {
    "t": 26,
    "q": "Static nested class has direct access to outer instance fields:",
    "o": [
      "No, unless via explicit outer reference",
      "Always yes",
      "Only protected fields",
      "Only final fields"
    ],
    "a": "A",
    "e": "It is nested by scope, not bound to instance."
  },
  {
    "t": 27,
    "q": "Anonymous class can do what lambda cannot (directly)?",
    "o": [
      "Define its own additional fields/initializers",
      "Implement functional interface",
      "Be passed as argument",
      "Capture effectively final local"
    ],
    "a": "A",
    "e": "Anonymous class defines an actual class body."
  },
  {
    "t": 28,
    "q": "A Java lambda targets:",
    "o": [
      "Functional interface (single abstract method)",
      "Any abstract class",
      "Any interface with defaults",
      "Only Comparator"
    ],
    "a": "A",
    "e": "SAM conversion rule."
  },
  {
    "t": 29,
    "q": "Buffered I/O improves performance by:",
    "o": [
      "Reducing expensive system calls",
      "Changing byte order",
      "Avoiding exceptions",
      "Skipping charset conversion"
    ],
    "a": "A",
    "e": "Batching read/write operations reduces overhead."
  },
  {
    "t": 30,
    "q": "String is immutable means:",
    "o": [
      "Operations create new String values",
      "References cannot change",
      "String cannot be interned",
      "String cannot be compared"
    ],
    "a": "A",
    "e": "Immutability is about object state, not variable reassignment."
  },
  {
    "t": 31,
    "q": "`final` class implication:",
    "o": [
      "Cannot be extended",
      "Cannot have methods",
      "Cannot be instantiated",
      "Cannot implement interfaces"
    ],
    "a": "A",
    "e": "Final class blocks inheritance."
  },
  {
    "t": 32,
    "q": "Default Object.toString format is roughly:",
    "o": [
      "ClassName@hexHash",
      "JSON",
      "memory-pointer-only",
      "null"
    ],
    "a": "A",
    "e": "Class name + hash representation."
  },
  {
    "t": 33,
    "q": "`System.out.println(obj)` internally routes through:",
    "o": [
      "String conversion (`String.valueOf`) ",
      "Binary serialization",
      "Reflection invoke all getters",
      "hashCode only"
    ],
    "a": "A",
    "e": "It calls toString unless object is null."
  },
  {
    "t": 34,
    "q": "In Java, objects are generally allocated on:",
    "o": [
      "Heap",
      "Stack",
      "Method area only",
      "Register file"
    ],
    "a": "A",
    "e": "Heap hosts object lifetimes managed by GC."
  },
  {
    "t": 35,
    "q": "Syntax errors are detected at:",
    "o": [
      "Compile time",
      "Runtime only",
      "GC time",
      "Linker merge"
    ],
    "a": "A",
    "e": "Compiler catches syntax and type issues early."
  },
  {
    "t": 36,
    "q": "A practical clean-code tradeoff:",
    "o": [
      "Prefer readability over clever abstraction when uncertain",
      "Always DRY no exceptions",
      "No comments ever",
      "Always one-liners"
    ],
    "a": "A",
    "e": "Maintainability depends on clarity and context."
  },
  {
    "t": 37,
    "q": "DIP-friendly architecture usually depends on:",
    "o": [
      "Interfaces/abstractions injected into high-level modules",
      "Concrete singletons everywhere",
      "Static utility coupling",
      "Reflection-only wiring"
    ],
    "a": "A",
    "e": "Abstractions decouple policy from detail."
  },
  {
    "t": 38,
    "q": "Pattern misuse often appears as:",
    "o": [
      "Applying patterns before a real problem emerges",
      "Documenting tradeoffs",
      "Refactoring duplicated conditional logic",
      "Encapsulating variability"
    ],
    "a": "A",
    "e": "Pattern-first design can over-engineer simple cases."
  },
  {
    "t": 0,
    "q": "Which statement about loop invariants is most useful for avoiding off-by-one bugs?",
    "o": [
      "Define a condition that stays true before/after each iteration",
      "Always prefer while over for",
      "Avoid break statements entirely",
      "Use recursion to remove boundaries"
    ],
    "a": "A",
    "e": "Loop invariants help reason about boundaries and correctness."
  },
  {
    "t": 1,
    "q": "Numeric literal `1_000_000` in Java means:",
    "o": [
      "One million with digit separators",
      "Syntax error because underscores are forbidden",
      "A binary literal",
      "A long only if suffixed"
    ],
    "a": "A",
    "e": "Underscores are allowed separators inside numeric literals."
  },
  {
    "t": 2,
    "q": "Which assignment copies object contents, not reference, by default?",
    "o": [
      "None of the reference assignments do",
      "Any assignment to array variable",
      "Any assignment to class type",
      "All assignments in Java are deep-copy"
    ],
    "a": "A",
    "e": "Java assignment of references copies the reference, not object state."
  },
  {
    "t": 3,
    "q": "Best OOP move when behavior varies by type and keeps growing:",
    "o": [
      "Introduce abstraction + subtype implementations",
      "Add one giant switch in every caller",
      "Use global flags for each type",
      "Duplicate conditionals in multiple classes"
    ],
    "a": "A",
    "e": "Polymorphism localizes variation."
  },
  {
    "t": 4,
    "q": "`obj.getClass()==Base.class` differs from `obj instanceof Base` because:",
    "o": [
      "getClass equality excludes subclasses; instanceof includes them",
      "They are always equivalent",
      "instanceof ignores null checks",
      "getClass triggers class loading only"
    ],
    "a": "A",
    "e": "Exact-class check vs hierarchy check."
  },
  {
    "t": 5,
    "q": "Class loading without creating object can still happen when:",
    "o": [
      "Accessing a static member",
      "Calling instance method",
      "Reading instance field",
      "Using local variable"
    ],
    "a": "A",
    "e": "Static access can trigger class initialization."
  },
  {
    "t": 6,
    "q": "If class has only constructor `C(int x)`, then `new C()` is:",
    "o": [
      "Compile-time error unless no-arg constructor is declared",
      "Valid due to default constructor",
      "Valid for public classes only",
      "Valid if field initializers exist"
    ],
    "a": "A",
    "e": "No-arg is not auto-added once any constructor exists."
  },
  {
    "t": 7,
    "q": "In instance initialization, field initializers execute:",
    "o": [
      "Before constructor body of that class",
      "After constructor body",
      "Only for final fields",
      "Only once per class load"
    ],
    "a": "A",
    "e": "Instance field initializers run as part of construction before body."
  },
  {
    "t": 8,
    "q": "Two interfaces define same default method. Implementing class must:",
    "o": [
      "Override to resolve conflict",
      "Nothing; JVM picks one",
      "Mark class final",
      "Use super.super call"
    ],
    "a": "A",
    "e": "Diamond default conflict requires explicit override."
  },
  {
    "t": 9,
    "q": "Calling abstract/overridable method from abstract superclass constructor is risky because:",
    "o": [
      "Subclass state may be uninitialized",
      "Abstract methods cannot be called at all",
      "It deadlocks classloader",
      "JVM replaces method with no-op"
    ],
    "a": "A",
    "e": "Dynamic dispatch can run subclass code too early."
  },
  {
    "t": 10,
    "q": "Method-based API allows future internal representation change because:",
    "o": [
      "Callers depend on behavior contract, not field layout",
      "JVM auto-migrates fields",
      "It disables reflection",
      "It freezes semantics"
    ],
    "a": "A",
    "e": "Encapsulation decouples consumers from internals."
  },
  {
    "t": 11,
    "q": "`private` member is visible to:",
    "o": [
      "Only within the declaring class",
      "All classes in same package",
      "Subclasses only",
      "Same module only"
    ],
    "a": "A",
    "e": "Private scope is class-only."
  },
  {
    "t": 12,
    "q": "Static field increments in constructor represent:",
    "o": [
      "Shared class counter across instances",
      "Independent per-instance counters",
      "Thread-local counters",
      "Compile-time constants only"
    ],
    "a": "A",
    "e": "Static state is shared by all instances."
  },
  {
    "t": 13,
    "q": "Overloading with `f(Object)` and `f(String)` called by `f(null)` resolves to:",
    "o": [
      "f(String)",
      "f(Object)",
      "Ambiguous always",
      "Runtime-dependent"
    ],
    "a": "A",
    "e": "Most specific applicable overload is chosen at compile time."
  },
  {
    "t": 14,
    "q": "Composition over inheritance is favored when:",
    "o": [
      "Reuse is needed without strict is-a relation",
      "You need polymorphism",
      "You need constructors",
      "You need packages"
    ],
    "a": "A",
    "e": "Composition reduces hierarchy coupling."
  },
  {
    "t": 15,
    "q": "Given `Base b = new Child();`, overridden instance method call uses:",
    "o": [
      "Child implementation",
      "Base implementation",
      "Depends on cast at callsite",
      "Depends on JVM vendor"
    ],
    "a": "A",
    "e": "Dynamic dispatch uses runtime object type."
  },
  {
    "t": 16,
    "q": "Missing `@Override` can hide bug where method actually:",
    "o": [
      "Overloads instead of overrides",
      "Becomes static",
      "Becomes final",
      "Is inlined incorrectly"
    ],
    "a": "A",
    "e": "Annotation asks compiler to verify true override."
  },
  {
    "t": 17,
    "q": "Narrowing primitive conversion may cause:",
    "o": [
      "Data loss/truncation",
      "ClassCastException",
      "Method override change",
      "Boxing elimination"
    ],
    "a": "A",
    "e": "Primitive narrowing can lose magnitude/precision."
  },
  {
    "t": 18,
    "q": "Using `this(...)` and `super(...)` in same constructor is:",
    "o": [
      "Illegal: only one constructor invocation first",
      "Required together",
      "Allowed in any order",
      "Allowed only with final fields"
    ],
    "a": "A",
    "e": "Exactly one constructor-chaining call as first statement."
  },
  {
    "t": 19,
    "q": "`List<? extends Number>` allows:",
    "o": [
      "Reading as Number but not adding arbitrary Number",
      "Adding Integer freely",
      "Adding Double freely",
      "No reads at all"
    ],
    "a": "A",
    "e": "Producer-extends: safe read, restricted write."
  },
  {
    "t": 20,
    "q": "For LRU-like iteration order in map by insertion/access semantics, best candidate:",
    "o": [
      "LinkedHashMap",
      "HashMap",
      "TreeMap",
      "ConcurrentSkipListMap"
    ],
    "a": "A",
    "e": "LinkedHashMap supports predictable iteration order."
  },
  {
    "t": 21,
    "q": "Comparator vs Comparable key distinction:",
    "o": [
      "Comparator external strategy; Comparable intrinsic natural order",
      "Comparator only for primitives",
      "Comparable works only in arrays",
      "They are identical APIs"
    ],
    "a": "A",
    "e": "Different ownership of ordering logic."
  },
  {
    "t": 22,
    "q": "Iterator fail-fast behavior means:",
    "o": [
      "Detect concurrent structural modification quickly, not guarantee safety",
      "Collection is thread-safe",
      "No mutation allowed ever",
      "Iterator clones collection always"
    ],
    "a": "A",
    "e": "It is a bug-detection aid."
  },
  {
    "t": 23,
    "q": "Enum constructor visibility is effectively:",
    "o": [
      "Private (cannot be public/protected externally instantiated)",
      "Public",
      "Package-private only",
      "Configurable by caller"
    ],
    "a": "A",
    "e": "Enum instances are fixed constants created by JVM."
  },
  {
    "t": 24,
    "q": "Catching broad `Exception` at low level is usually bad because:",
    "o": [
      "It can swallow context and recovery strategy decisions",
      "It improves type safety",
      "It prevents stack traces",
      "It is required by JVM"
    ],
    "a": "A",
    "e": "Catch at boundary where handling policy is meaningful."
  },
  {
    "t": 25,
    "q": "Resources in try-with-resources are closed in:",
    "o": [
      "Reverse declaration order",
      "Declaration order",
      "Random order",
      "Only first resource closes"
    ],
    "a": "A",
    "e": "Later-opened resources close first."
  },
  {
    "t": 26,
    "q": "Inner (non-static) class instance retains:",
    "o": [
      "Reference to enclosing outer instance",
      "Copy of all outer fields",
      "No relation to outer object",
      "Only static outer members"
    ],
    "a": "A",
    "e": "Inner class has implicit outer reference."
  },
  {
    "t": 27,
    "q": "`this` inside anonymous class refers to:",
    "o": [
      "Anonymous class instance",
      "Enclosing class instance always",
      "Static context",
      "Lambda target"
    ],
    "a": "A",
    "e": "Anonymous class creates its own `this`."
  },
  {
    "t": 28,
    "q": "Lambda can capture local variable only if variable is:",
    "o": [
      "Effectively final",
      "Public",
      "Static",
      "Volatile"
    ],
    "a": "A",
    "e": "Captured locals cannot be reassigned after capture."
  },
  {
    "t": 29,
    "q": "Choosing InputStream vs Reader primarily depends on:",
    "o": [
      "Whether data is bytes or characters",
      "File size only",
      "OS endianness only",
      "Whether path is absolute"
    ],
    "a": "A",
    "e": "Character APIs handle encoding/decoding."
  },
  {
    "t": 30,
    "q": "StringBuilder is not thread-safe counterpart is usually:",
    "o": [
      "StringBuffer",
      "StringJoiner",
      "Formatter",
      "CharBuffer"
    ],
    "a": "A",
    "e": "StringBuffer provides synchronized mutable string operations."
  },
  {
    "t": 31,
    "q": "`final` method in base class prevents subclasses from:",
    "o": [
      "Overriding that method",
      "Calling that method",
      "Overloading that method",
      "Inheriting that method"
    ],
    "a": "A",
    "e": "Method remains callable/inheritable, just not overridable."
  },
  {
    "t": 32,
    "q": "A poor `toString()` implementation commonly causes:",
    "o": [
      "Leaking secrets in logs",
      "Compile-time error",
      "GC failure",
      "Classloader deadlock"
    ],
    "a": "A",
    "e": "Never include passwords/tokens/sensitive internals."
  },
  {
    "t": 33,
    "q": "`System.out` type is:",
    "o": [
      "PrintStream",
      "OutputStream",
      "BufferedWriter",
      "Console"
    ],
    "a": "A",
    "e": "`println` methods are defined on PrintStream."
  },
  {
    "t": 34,
    "q": "Local primitive variable lifetime is typically tied to:",
    "o": [
      "Method call frame on stack",
      "Heap object lifetime",
      "Classloader lifetime",
      "Thread group lifetime"
    ],
    "a": "A",
    "e": "Locals live within stack frame scope."
  },
  {
    "t": 35,
    "q": "`NullPointerException` is classified as:",
    "o": [
      "Runtime error (unchecked)",
      "Compile-time error",
      "Linker error",
      "Checked exception"
    ],
    "a": "A",
    "e": "NPE occurs during execution."
  },
  {
    "t": 36,
    "q": "Meaningful comments should mostly explain:",
    "o": [
      "Why (intent/tradeoff), not obvious what",
      "Every syntax token",
      "Only variable names",
      "Only public classes"
    ],
    "a": "A",
    "e": "Good naming + code show what; comments capture rationale."
  },
  {
    "t": 37,
    "q": "Interface Segregation Principle suggests:",
    "o": [
      "Prefer focused interfaces over fat ones",
      "Use one giant interface",
      "Avoid interfaces",
      "Depend on concrete classes"
    ],
    "a": "A",
    "e": "Clients should not depend on methods they do not use."
  },
  {
    "t": 38,
    "q": "Builder pattern primarily helps when:",
    "o": [
      "Constructing complex objects with many optional parameters",
      "Needing runtime inheritance",
      "Replacing polymorphism",
      "Avoiding constructors entirely"
    ],
    "a": "A",
    "e": "Builder improves readability and construction control."
  },
  {
    "t": 0,
    "q": "מה יהיה הפלט?\n\nint x=1;\nfor(int i=0;i<2;i++) x = x++ + ++x;\nSystem.out.println(x);",
    "o": [
      "5",
      "4",
      "6",
      "שגיאת קומפילציה"
    ],
    "a": "A",
    "e": "איטרציה 1: 1->3, איטרציה 2: 3->5."
  },
  {
    "t": 1,
    "q": "מה יודפס?\n\nint n = 0xA + 010 + 0b10;\nSystem.out.println(n);",
    "o": [
      "20",
      "18",
      "16",
      "22"
    ],
    "a": "A",
    "e": "10 + 8 + 2 = 20."
  },
  {
    "t": 2,
    "q": "מה יהיה הפלט?\n\nint[] a={1};\nint[] b=a;\nb[0]=7;\nSystem.out.println(a[0]);",
    "o": [
      "7",
      "1",
      "0",
      "שגיאת קומפילציה"
    ],
    "a": "A",
    "e": "אותו מערך דרך שני references."
  },
  {
    "t": 3,
    "q": "מה יהיה הפלט?\n\nclass A{String f(){return \"A\";}}\nclass B extends A{String f(){return \"B\";}}\nA x=new B();\nSystem.out.println(x.f());",
    "o": [
      "B",
      "A",
      "שגיאת קומפילציה",
      "NullPointerException"
    ],
    "a": "A",
    "e": "dynamic dispatch."
  },
  {
    "t": 4,
    "q": "מה יודפס?\n\nObject o=null;\nSystem.out.println(o instanceof String);",
    "o": [
      "false",
      "true",
      "NullPointerException",
      "שגיאת קומפילציה"
    ],
    "a": "A",
    "e": "instanceof על null מחזיר false."
  },
  {
    "t": 5,
    "q": "מה יהיה הפלט?\n\nclass C{static int c; C(){c++;}}\nnew C(); new C();\nSystem.out.println(C.c);",
    "o": [
      "2",
      "1",
      "0",
      "שגיאת קומפילציה"
    ],
    "a": "A",
    "e": "מונה סטטי מצטבר."
  },
  {
    "t": 6,
    "q": "מה יקרה?\n\nclass C{ C(int x){} }\nnew C();",
    "o": [
      "שגיאת קומפילציה",
      "מתקמפל ומדפיס 0",
      "RuntimeException",
      "תלוי JVM"
    ],
    "a": "A",
    "e": "אין ctor ללא פרמטרים."
  },
  {
    "t": 7,
    "q": "מה יודפס?\n\nclass P{P(){System.out.print(\"P\");}}\nclass C extends P{C(){System.out.print(\"C\");}}\nnew C();",
    "o": [
      "PC",
      "CP",
      "C",
      "P"
    ],
    "a": "A",
    "e": "super ctor קודם."
  },
  {
    "t": 8,
    "q": "מה הפלט?\n\ninterface I{ default int f(){return 5;} }\nclass A implements I{}\nSystem.out.println(new A().f());",
    "o": [
      "5",
      "0",
      "שגיאת קומפילציה",
      "null"
    ],
    "a": "A",
    "e": "default method."
  },
  {
    "t": 9,
    "q": "מה יודפס?\n\nabstract class A{A(){System.out.print(\"A\");}}\nclass B extends A{B(){System.out.print(\"B\");}}\nnew B();",
    "o": [
      "AB",
      "BA",
      "A",
      "B"
    ],
    "a": "A",
    "e": "שרשרת בנאים."
  },
  {
    "t": 10,
    "q": "מה הפלט?\n\nclass A{int v=1;}\nclass B extends A{int v=2;}\nA x=new B();\nSystem.out.println(x.v);",
    "o": [
      "1",
      "2",
      "שגיאת קומפילציה",
      "תלוי ריצה"
    ],
    "a": "A",
    "e": "field hiding לפי טיפוס סטטי."
  },
  {
    "t": 11,
    "q": "מה יודפס?\n\nclass A{ private int x=9; void p(){System.out.println(x);} }\nnew A().p();",
    "o": [
      "9",
      "0",
      "שגיאת קומפילציה",
      "NullPointerException"
    ],
    "a": "A",
    "e": "private נגיש במחלקה עצמה."
  },
  {
    "t": 12,
    "q": "מה הפלט?\n\nclass A{ static int c=1;}\nA a1=new A(); A a2=new A(); a1.c=8;\nSystem.out.println(a2.c);",
    "o": [
      "8",
      "1",
      "0",
      "שגיאת קומפילציה"
    ],
    "a": "A",
    "e": "שדה סטטי משותף."
  },
  {
    "t": 13,
    "q": "מה יודפס?\n\nclass X{ String f(Object o){return \"O\";} String f(String s){return \"S\";} }\nSystem.out.println(new X().f(null));",
    "o": [
      "S",
      "O",
      "Ambiguous",
      "שגיאת ריצה"
    ],
    "a": "A",
    "e": "נבחר overload ספציפי יותר."
  },
  {
    "t": 14,
    "q": "מה הפלט?\n\nclass A{String f(){return \"A\";}}\nclass B extends A{String f(){return super.f()+\"B\";}}\nSystem.out.println(new B().f());",
    "o": [
      "AB",
      "BA",
      "B",
      "A"
    ],
    "a": "A",
    "e": "שימוש ב-super."
  },
  {
    "t": 15,
    "q": "מה יודפס?\n\nclass A{String f(){return \"A\";}}\nclass B extends A{String f(){return \"B\";}}\nA y=new B();\nSystem.out.println(y.f());",
    "o": [
      "B",
      "A",
      "שגיאת קומפילציה",
      "null"
    ],
    "a": "A",
    "e": "פולימורפיזם."
  },
  {
    "t": 16,
    "q": "מה קורה?\n\nclass A{ void f(int x){} }\nclass B extends A{ @Override void f(Integer x){} }",
    "o": [
      "שגיאת קומפילציה",
      "מתקמפל",
      "אזהרה בלבד",
      "RuntimeException"
    ],
    "a": "A",
    "e": "לא override אמיתי."
  },
  {
    "t": 17,
    "q": "מה הפלט?\n\nlong x=10;\nint y=(int)x;\nSystem.out.println(y);",
    "o": [
      "10",
      "0",
      "ClassCastException",
      "שגיאת קומפילציה"
    ],
    "a": "A",
    "e": "narrowing מפורש."
  },
  {
    "t": 18,
    "q": "מה יודפס?\n\nclass A{int x=1; void f(int x){this.x=x;}}\nA a=new A(); a.f(7);\nSystem.out.println(a.x);",
    "o": [
      "7",
      "1",
      "0",
      "שגיאת קומפילציה"
    ],
    "a": "A",
    "e": "this.x לשדה."
  },
  {
    "t": 19,
    "q": "מה יקרה?\n\nList<String> a = new ArrayList<>();\nList<Object> b = a;",
    "o": [
      "שגיאת קומפילציה",
      "מתקמפל",
      "RuntimeException",
      "אזהרה בלבד"
    ],
    "a": "A",
    "e": "invariance."
  },
  {
    "t": 20,
    "q": "מה יודפס?\n\nSet<Integer> s=new HashSet<>();\ns.add(1); s.add(1); s.add(2);\nSystem.out.println(s.size());",
    "o": [
      "2",
      "3",
      "1",
      "0"
    ],
    "a": "A",
    "e": "Set ללא כפילויות."
  },
  {
    "t": 21,
    "q": "מה הפלט?\n\nInteger[] a={3,1,2}; Arrays.sort(a);\nSystem.out.println(Arrays.toString(a));",
    "o": [
      "[1, 2, 3]",
      "[3, 2, 1]",
      "[1, 3, 2]",
      "שגיאת קומפילציה"
    ],
    "a": "A",
    "e": "natural order."
  },
  {
    "t": 22,
    "q": "מה יקרה?\n\nList<Integer> l=new ArrayList<>(List.of(1,2,3));\nfor(Integer x:l){ if(x==2) l.remove(x); }",
    "o": [
      "ConcurrentModificationException",
      "מדפיס 1 2 3",
      "שגיאת קומפילציה",
      "לא קורה כלום"
    ],
    "a": "A",
    "e": "fail-fast iterator."
  },
  {
    "t": 23,
    "q": "מה יודפס?\n\nenum E{A,B}\nSystem.out.println(E.A==E.valueOf(\"A\"));",
    "o": [
      "true",
      "false",
      "NullPointerException",
      "שגיאת קומפילציה"
    ],
    "a": "A",
    "e": "enum constants singleton."
  },
  {
    "t": 24,
    "q": "מה הפלט?\n\ntry{throw new RuntimeException();}\ncatch(Exception e){System.out.print(\"C\");}\nfinally{System.out.print(\"F\");}",
    "o": [
      "CF",
      "FC",
      "C",
      "F"
    ],
    "a": "A",
    "e": "catch ואז finally."
  },
  {
    "t": 25,
    "q": "מה יודפס?\n\nclass R implements AutoCloseable{public void close(){System.out.print(\"X\");}}\ntry(R r=new R()){System.out.print(\"B\");}",
    "o": [
      "BX",
      "XB",
      "B",
      "X"
    ],
    "a": "A",
    "e": "close בסיום try."
  },
  {
    "t": 26,
    "q": "מה הפלט?\n\nclass O{ static class N{ int f(){return 5;} } }\nSystem.out.println(new O.N().f());",
    "o": [
      "5",
      "0",
      "שגיאת קומפילציה",
      "NullPointerException"
    ],
    "a": "A",
    "e": "static nested class."
  },
  {
    "t": 27,
    "q": "מה יודפס?\n\nRunnable r=new Runnable(){public void run(){System.out.print(this!=null);}};\nr.run();",
    "o": [
      "true",
      "false",
      "שגיאת קומפילציה",
      "NullPointerException"
    ],
    "a": "A",
    "e": "this של anonymous class."
  },
  {
    "t": 28,
    "q": "מה יהיה הפלט?\n\nRunnable r=()->System.out.print(\"L\");\nr.run();",
    "o": [
      "L",
      "lambda",
      "true",
      "שגיאת קומפילציה"
    ],
    "a": "A",
    "e": "lambda מפעילה run."
  },
  {
    "t": 29,
    "q": "מה יודפס?\n\nSystem.out.print((char)('A'+1));\nSystem.out.print((byte)257);",
    "o": [
      "B1",
      "B-1",
      "B257",
      "שגיאת קומפילציה"
    ],
    "a": "A",
    "e": "257 כ-byte הוא 1."
  },
  {
    "t": 30,
    "q": "מה הפלט?\n\nString a=\"hi\"; String b=\"h\"+\"i\";\nSystem.out.print(a==b);",
    "o": [
      "true",
      "false",
      "NullPointerException",
      "שגיאת קומפילציה"
    ],
    "a": "A",
    "e": "constant folding + string pool."
  },
  {
    "t": 31,
    "q": "מה יודפס?\n\nfinal int[] a={1};\na[0]=9;\nSystem.out.println(a[0]);",
    "o": [
      "9",
      "1",
      "שגיאת קומפילציה",
      "NullPointerException"
    ],
    "a": "A",
    "e": "final על reference."
  },
  {
    "t": 32,
    "q": "מה הפלט?\n\nclass A{}\nSystem.out.println(new A().toString().contains(\"@\"));",
    "o": [
      "true",
      "false",
      "שגיאת קומפילציה",
      "NullPointerException"
    ],
    "a": "A",
    "e": "Object.toString כולל @."
  },
  {
    "t": 33,
    "q": "מה יודפס?\n\nObject o=null;\nSystem.out.println(o);",
    "o": [
      "null",
      "NullPointerException",
      "שגיאת קומפילציה",
      "ריק"
    ],
    "a": "A",
    "e": "String.valueOf(null)."
  },
  {
    "t": 34,
    "q": "מה הפלט?\n\nstatic void f(int[] a){ a=new int[]{9}; }\nint[] x={1}; f(x); System.out.println(x[0]);",
    "o": [
      "1",
      "9",
      "0",
      "שגיאת קומפילציה"
    ],
    "a": "A",
    "e": "pass-by-value של reference."
  },
  {
    "t": 35,
    "q": "מה יקרה?\n\nint x=Integer.parseInt(\"x\");",
    "o": [
      "NumberFormatException בזמן ריצה",
      "שגיאת קומפילציה",
      "ClassCastException",
      "NullPointerException"
    ],
    "a": "A",
    "e": "מתקמפל ונכשל בריצה."
  },
  {
    "t": 36,
    "q": "מה הפלט?\n\nint a=1,b=1;\nSystem.out.println(a+b);",
    "o": [
      "2",
      "11",
      "שגיאת קומפילציה",
      "תלוי JVM"
    ],
    "a": "A",
    "e": "קריאות בסיסית ונכונה."
  },
  {
    "t": 37,
    "q": "מה יודפס?\n\ninterface Repo{String get();}\nclass MemRepo implements Repo{public String get(){return \"ok\";}}\nRepo r=new MemRepo();\nSystem.out.println(r.get());",
    "o": [
      "ok",
      "Repo",
      "null",
      "שגיאת קומפילציה"
    ],
    "a": "A",
    "e": "DIP דרך abstraction."
  },
  {
    "t": 38,
    "q": "מה הפלט?\n\ninterface S{int calc(int x);}\nclass Add1 implements S{public int calc(int x){return x+1;}}\nSystem.out.println(new Add1().calc(4));",
    "o": [
      "5",
      "4",
      "1",
      "שגיאת קומפילציה"
    ],
    "a": "A",
    "e": "Strategy בסיסי."
  },
  {
    "t": 40,
    "q": "A file's raw bytes are exactly: 41 0A 42. Which claim is guaranteed true *without assuming any charset*?",
    "o": [
      "The file length is exactly 3 bytes",
      "The file always contains 3 characters",
      "The file must be valid UTF-8 text",
      "The middle byte is always interpreted as '\\n' by every parser"
    ],
    "a": "A",
    "e": "Bytes are the only guaranteed storage fact. Character count/meaning depends on decoding and parser rules."
  },
  {
    "t": 40,
    "q": "למה אי אפשר להסיק בוודאות 'מספר תווים' רק מגודל קובץ טקסט בבייטים?",
    "o": [
      "כי תווים תמיד נדחסים בצורה אקראית",
      "כי בקידודים נפוצים יש תווים שיכולים לתפוס מספר בייטים שונה (ולעיתים גם BOM)",
      "כי מערכת הקבצים לא שומרת בייטים, רק מילים",
      "כי Java תמיד שומרת String כ-UTF-16 על הדיסק"
    ],
    "a": "B",
    "e": "גודל קובץ הוא בבייטים; מיפוי לבסיס תווים תלוי קידוד (למשל UTF-8/UTF-16) ולעיתים בסימון BOM."
  },
  {
    "t": 41,
    "q": "מה נכון לגבי המחרוזת Java: String s = \"🙂\"; ?",
    "o": [
      "s.length() == 1, וב-UTF-8 היא תופסת 2 בייטים",
      "s.length() == 2, וב-UTF-8 היא תופסת 4 בייטים",
      "s.length() == 2, וב-UTF-16BE היא תופסת 2 בייטים",
      "s.length() == 4, וב-UTF-8 היא תופסת 4 בייטים"
    ],
    "a": "B",
    "e": "האמוג'י הוא קוד-פוינט מחוץ ל-BMP: ב-Java הוא זוג surrogate (length=2), וב-UTF-8 מקודד ל-4 בייטים."
  },
  {
    "t": 41,
    "q": "Hex dump מתחיל ב: EF BB BF 41 0A. מה הפירוש הסביר ביותר?",
    "o": [
      "UTF-16LE עם BOM ואחריו 'A'",
      "UTF-8 עם BOM, ואז 'A' ואז LF",
      "Latin-1 עם תו לא-חוקי בתחילה",
      "ASCII טהור בלי BOM"
    ],
    "a": "B",
    "e": "EF BB BF הוא BOM של UTF-8. אחריו 41='A' ו-0A הוא LF."
  },
  {
    "t": 42,
    "q": "בקובץ יש 200 שבירות שורה. ממירים אותו מ-LF ל-CRLF בלבד (התוכן האחר זהה). בכמה בייטים הקובץ גדל?",
    "o": [
      "0",
      "100",
      "200",
      "400"
    ],
    "a": "C",
    "e": "כל שבירת שורה עוברת מ-1 בייט (LF) ל-2 בייטים (CRLF), כלומר תוספת של בייט אחד לכל שבירה."
  },
  {
    "t": 42,
    "q": "מה נכון לגבי BufferedReader.readLine() כשהקובץ מכיל שורות שמסתיימות ב-LF או ב-CRLF?",
    "o": [
      "המתודה מחזירה את השורה כולל תווי הסיום",
      "המתודה מסירה את תווי סוף השורה ולכן אי אפשר לדעת ממנה בלבד אם המקור היה LF או CRLF",
      "CRLF יגרום תמיד ל-\r להישאר בסוף המחרוזת",
      "המתודה תיכשל על קובץ עם סוף שורה מעורב"
    ],
    "a": "B",
    "e": "readLine קוראת שורה בלי מחזירי השורה, ולכן אובד מידע על סוג סיום השורה אם לא קוראים בייטים גולמיים."
  },
  {
    "t": 43,
    "q": "נתון hex dump: 41 00 42 00 0A 00. מה הפענוח הסביר ביותר?",
    "o": [
      "ASCII: \"A\\0B\\0\\n\\0\"",
      "UTF-16BE: \"AB\\n\"",
      "UTF-16LE: \"AB\\n\"",
      "UTF-8 תקין: \"AB\\n\""
    ],
    "a": "C",
    "e": "הדפוס של בייט אפס אחרי כל תו ASCII מעיד לרוב על UTF-16LE עבור תווים לטיניים פשוטים."
  },
  {
    "t": 43,
    "q": "Hex dump: 48 65 6C 6C 6F 0D 0A 57 6F 72 6C 64. איזה משפט הכי מדויק?",
    "o": [
      "זה טקסט ASCII/UTF-8: שתי שורות, עם מפריד CRLF בין Hello ל-World",
      "זה UTF-16LE של המילה HelloWorld",
      "זה מכיל תו NUL ולכן אינו טקסט",
      "זה בהכרח קובץ בינארי ולא ניתן להצגה"
    ],
    "a": "A",
    "e": "הבייטים 0D 0A הם CRLF. שאר הבייטים הם אותיות ASCII תקינות (שתואמות גם UTF-8)."
  }
];
