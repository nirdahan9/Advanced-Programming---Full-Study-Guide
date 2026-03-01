export const TOPICS = [
  "❏ Where does python fall within the family of programming languages (interpreted, duck typing, community-development).",
  "❏ Variables (int, float, str, bool, type(), type conversion).",
  "❏ Arithmetic operations (+, -, * , /, **, %, //), comparison operations (and, or, not, ==), logical operations, bitwise operations, complex numbers, bases (0x, 0b).",
  "❏ _ (last result, also used as “don’t care”).",
  "❏ print() and input().",
  "❏ Indentation matters.",
  "❏ if, elif, else",
  "❏ while",
  "❏ Strings: Different ways to define: ‘’, “”, ‘‘‘’’’, “““”””, raw strings, f-strings.",
  "❏ Indexing and slicing, len().",
  "❏ Useful string methods: upper(), lower(), +, find(), replace(), index(), count(), split(), join().",
  "❏ Lists: Can contain different types, how to create, slicing, list(), +, in, append(), insert(), remove(), pop(), sort(), sorted(), zip().",
  "❏ Python's memory model. Everything is an object. Mutable vs. immutable, tuple: an immutable list, list2=list1 vs copy().",
  "❏ for, continue, break, for-else. Iteration over strings and lists. range(), enumerate().",
  "❏ List comprehension.",
  "❏ Dictionaries: how to create, [] vs. get(), how to iterate, keys(), values(), items(), in, keys must be immutable, dictionary comprehension.",
  "❏ Sets. How to create and iterate. Set operations. Set comprehension.",
  "❏ Short-circuiting. all(), any().",
  "❏ Functions: def, return, default values, docstring, multiple retvals, pass. Local vs. global variables. Pass by value vs. pass by reference (Python: by reference). lambda.",
  "❏ If __name__ == ‘__main__’",
  "❏ Good programming practices. PEP-8 (and what are PEPs).",
  "❏ Errors. Exceptions: try, except, finally. Exception types. LBYL vs. EAFP.",
  "❏ Generators. yield. Generator expressions. Generators as iterators.",
  "❏ Decorators. Passing functions as parameters.",
  "❏ pip and venv.",
  "❏ Working with files. with.",
  "❏ Variable number of function arguments.",
  "❏ Packing and unpacking.",
  "❏ import",
  "❏ Classes: how to define, instantiate, call methods, __init__, __str__, __repr__, operator overloading, self, @staticmethod, @classmethod. Using dunder methods to extend functionality.",
  "❏ Iterable and iterator. __iter__.",
  "❏ Name mangling using __",
  "❏ Composition vs. inheritance. (This is not python specific, but we discussed it in the context of python.)",
  "❏ Pythonic idioms.",
  "❏ Magic commands.",
  "❏ Metaclasses: type, __new__, __init__, custom class creation flow."
];

export const QUESTIONS = [
  {
    "t": 0,
    "q": "Which statement is the MOST accurate?",
    "o": [
      "Python is compiled directly to native machine code ahead-of-time, so it’s not interpreted",
      "Duck typing means the *runtime behavior* depends on what operations an object supports, not its declared type",
      "Python’s reference implementation can’t have a bytecode layer",
      "Community-development means the language has no spec and therefore has no defined behavior"
    ],
    "a": "B",
    "e": "Duck typing focuses on capabilities (methods/operations), not declared types."
  },
  {
    "t": 0,
    "q": "CPython is best described as:",
    "o": [
      "A pure interpreter that directly interprets source without any compilation step",
      "A VM that typically compiles source to bytecode (.pyc) and executes it",
      "An ahead-of-time compiler like gcc",
      "A JIT-only runtime (no interpreter)"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 1,
    "q": "What prints?\n\nx = 1\ny = True\nprint(type(x + y), x + y)\n",
    "o": [
      "<class 'int'> 2",
      "<class 'bool'> True",
      "<class 'int'> True",
      "TypeError"
    ],
    "a": "A",
    "e": "In Python, bool is a subclass of int; True behaves like 1 in arithmetic."
  },
  {
    "t": 1,
    "q": "What prints?\n\nprint(int('08'))\n",
    "o": [
      "8",
      "0",
      "ValueError",
      "8.0"
    ],
    "a": "A",
    "e": ""
  },
  {
    "t": 1,
    "q": "Which expressions raise ValueError?",
    "o": [
      "int('3.0')",
      "int(3.0)",
      "float('nan')",
      "bool('False')"
    ],
    "a": "A",
    "e": "int('3.0') fails; int(3.0) works; float('nan') works; bool('False') is True because non-empty string."
  },
  {
    "t": 2,
    "q": "What prints?\n\nprint(1 < 2 == 2)\n",
    "o": [
      "True",
      "False",
      "TypeError",
      "Depends"
    ],
    "a": "A",
    "e": "Chained comparisons: 1 < 2 and 2 == 2."
  },
  {
    "t": 2,
    "q": "What prints?\n\nprint(0 or 2 and 3)\n",
    "o": [
      "0",
      "2",
      "3",
      "True"
    ],
    "a": "C",
    "e": "'and' binds tighter than 'or': 2 and 3 -> 3; 0 or 3 -> 3."
  },
  {
    "t": 2,
    "q": "What prints?\n\nprint(-7 // 3)\n",
    "o": [
      "-2",
      "-3",
      "2",
      "3"
    ],
    "a": "B",
    "e": "// is floor division, toward -∞."
  },
  {
    "t": 2,
    "q": "What prints?\n\nprint(-7 % 3)\n",
    "o": [
      "-1",
      "1",
      "2",
      "0"
    ],
    "a": "C",
    "e": "Python ensures: a == (a//b)*b + (a%b) with a%b having sign of divisor."
  },
  {
    "t": 2,
    "q": "What prints?\n\nprint(True & False, True and False)\n",
    "o": [
      "False False",
      "0 False",
      "False 0",
      "TypeError"
    ],
    "a": "A",
    "e": ""
  },
  {
    "t": 2,
    "q": "What prints?\n\nprint(0b1010 + 0x10)\n",
    "o": [
      "20",
      "26",
      "32",
      "Error"
    ],
    "a": "B",
    "e": "0b1010=10, 0x10=16 -> 26."
  },
  {
    "t": 2,
    "q": "What prints?\n\nprint((1+2j) * (1-2j))\n",
    "o": [
      "5",
      "5+0j",
      "1+4j",
      "Error"
    ],
    "a": "B",
    "e": "(a+bi)(a-bi)=a^2+b^2."
  },
  {
    "t": 3,
    "q": "In normal Python scripts (not REPL), the name '_' is:",
    "o": [
      "A built-in that always contains the last expression result",
      "Just a conventional variable name unless overridden",
      "A keyword you can’t assign to",
      "Automatically optimized away by the compiler"
    ],
    "a": "B",
    "e": "In CPython REPL '_' is special, but in scripts it's just a normal name (unless something like gettext installs _()."
  },
  {
    "t": 4,
    "q": "What prints (exactly)?\n\nprint(1, 2, 3, sep='-', end='!')\n",
    "o": [
      "1-2-3!",
      "1 2 3!",
      "1-2-3\n!",
      "TypeError"
    ],
    "a": "A",
    "e": ""
  },
  {
    "t": 5,
    "q": "Which causes an IndentationError?",
    "o": [
      "Mixing tabs and spaces inconsistently in the same block",
      "Using 2 spaces instead of 4 spaces",
      "Indenting a continuation line inside parentheses",
      "Using a blank line inside an indented block"
    ],
    "a": "A",
    "e": ""
  },
  {
    "t": 6,
    "q": "What prints?\n\nx = []\nif x: print('T')\nelse: print('F')\n",
    "o": [
      "T",
      "F",
      "[]",
      "Error"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 7,
    "q": "What prints?\n\ni = 0\nwhile i < 3:\n    i += 1\n    if i == 2:\n        break\nelse:\n    print('E')\nprint('D')\n",
    "o": [
      "E\nD",
      "D",
      "E",
      "Nothing"
    ],
    "a": "B",
    "e": "The else runs only if the loop didn't break."
  },
  {
    "t": 8,
    "q": "Which literal evaluates to a string containing two characters: backslash and n?",
    "o": [
      "'\\\\n'",
      "'\\n'",
      "r'\\n'.encode()",
      "'\\x0a'"
    ],
    "a": "A",
    "e": "'\\\\n' is a two-character string (backslash + n). '\\n' and '\\x0a' are newline, and encode() returns bytes."
  },
  {
    "t": 8,
    "q": "What prints?\n\nx = 1\nprint(f'{x} {x:=3} {x}')\n",
    "o": [
      "1 3 3",
      "1 1 3",
      "1 3 1",
      "SyntaxError"
    ],
    "a": "A",
    "e": "The assignment expression (:=) updates x during formatting."
  },
  {
    "t": 8,
    "q": "Which literals produce the SAME string value?",
    "o": [
      "'\\\\n' and r'\\n'",
      "'\\n' and '\\\\n'",
      "'\\n' and r'\\n'",
      "'\\x0a' and '\\\\n'"
    ],
    "a": "A",
    "e": "'\\\\n' and r'\\n' are both backslash+n. '\\n' and '\\x0a' are newline characters."
  },
  {
    "t": 9,
    "q": "What prints?\n\ns = 'abcdef'\nprint(s[1:5:2])\n",
    "o": [
      "bd",
      "bdf",
      "bce",
      "Error"
    ],
    "a": "A",
    "e": ""
  },
  {
    "t": 9,
    "q": "What prints?\n\nprint('abcd'[::-2])\n",
    "o": [
      "dc",
      "db",
      "ca",
      "Error"
    ],
    "a": "B",
    "e": "Indices: a b c d; step -2 gives d then b."
  },
  {
    "t": 10,
    "q": "What prints?\n\nprint('abc'.find('x'), end=' ')\nprint('abc'.index('x'))\n",
    "o": [
      "-1 then ValueError",
      "-1 -1",
      "ValueError then -1",
      "TypeError"
    ],
    "a": "A",
    "e": ""
  },
  {
    "t": 10,
    "q": "What prints?\n\nprint(','.join('ab'))\n",
    "o": [
      "a,b",
      "ab",
      "a,,b",
      "Error"
    ],
    "a": "A",
    "e": "Iterating over string yields characters."
  },
  {
    "t": 11,
    "q": "What prints?\n\na = [1, 2]\nb = a\nb += [3]\nprint(a, b)\n",
    "o": [
      "[1, 2] [1, 2, 3]",
      "[1, 2, 3] [1, 2, 3]",
      "[1, 2] [1, 2]",
      "Error"
    ],
    "a": "B",
    "e": "b is a; in-place extend via += mutates the list."
  },
  {
    "t": 11,
    "q": "Which is correct?",
    "o": [
      "list.sort() returns a new sorted list",
      "sorted(list) sorts in place and returns None",
      "list.sort() sorts in place and returns None; sorted(list) returns a new list",
      "Both always mutate the input list"
    ],
    "a": "C",
    "e": ""
  },
  {
    "t": 11,
    "q": "What prints?\n\nz = zip([1,2], [3,4])\nprint(list(z))\nprint(list(z))\n",
    "o": [
      "[(1,3),(2,4)] then [(1,3),(2,4)]",
      "[(1,3),(2,4)] then []",
      "[] then []",
      "Error"
    ],
    "a": "B",
    "e": "zip returns an iterator; once consumed, it's empty."
  },
  {
    "t": 12,
    "q": "What prints?\n\ntup = ([1,2],)\ntup[0].append(3)\nprint(tup)\n",
    "o": [
      "([1, 2],)",
      "([1, 2, 3],)",
      "TypeError",
      "Error"
    ],
    "a": "B",
    "e": "Tuple is immutable, but it can contain mutable objects."
  },
  {
    "t": 12,
    "q": "What prints?\n\na = [[1], [2]]\nb = a.copy()\nb[0].append(9)\nprint(a)\n",
    "o": [
      "[[1], [2]]",
      "[[1, 9], [2]]",
      "[[1], [2, 9]]",
      "Error"
    ],
    "a": "B",
    "e": "list.copy() is shallow; inner lists are shared."
  },
  {
    "t": 13,
    "q": "What prints?\n\nfor i in range(3):\n    if i == 3:\n        break\nelse:\n    print('E')\n",
    "o": [
      "E",
      "Nothing",
      "3",
      "Error"
    ],
    "a": "A",
    "e": "No break happens, so else runs."
  },
  {
    "t": 13,
    "q": "What prints?\n\nprint(list(enumerate('ab', 1)))\n",
    "o": [
      "[(0, 'a'), (1, 'b')]",
      "[(1, 'a'), (2, 'b')]",
      "[(1, 'a'), (1, 'b')]",
      "Error"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 14,
    "q": "What prints in Python 3?\n\nx = 10\n_ = [x for x in range(3)]\nprint(x)\n",
    "o": [
      "0",
      "2",
      "10",
      "NameError"
    ],
    "a": "C",
    "e": "In Python 3, the comprehension variable is local to the comprehension."
  },
  {
    "t": 15,
    "q": "What prints?\n\nd = {}\nprint(d.get('x'), end=' ')\nprint(d['x'])\n",
    "o": [
      "None then KeyError",
      "KeyError then None",
      "None None",
      "Error"
    ],
    "a": "A",
    "e": ""
  },
  {
    "t": 15,
    "q": "Which can be a dict key?",
    "o": [
      "[]",
      "{}",
      "()",
      "set()"
    ],
    "a": "C",
    "e": "Keys must be hashable (immutable in practice): tuple is hashable if its elements are hashable."
  },
  {
    "t": 16,
    "q": "What is the type of {} ?",
    "o": [
      "set",
      "dict",
      "list",
      "tuple"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 16,
    "q": "What prints?\n\nprint({1,2,3} & {2,3,4})\n",
    "o": [
      "{1}",
      "{2, 3}",
      "{4}",
      "Error"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 17,
    "q": "What prints?\n\ndef f():\n    print('F')\n    return True\nprint(False and f())\n",
    "o": [
      "F\nFalse",
      "False",
      "F\nTrue",
      "True"
    ],
    "a": "B",
    "e": "False and ... short-circuits; f() is not called."
  },
  {
    "t": 17,
    "q": "Which is True?",
    "o": [
      "all([])",
      "any([])",
      "both",
      "neither"
    ],
    "a": "A",
    "e": "Vacuous truth: all([]) == True, any([]) == False."
  },
  {
    "t": 18,
    "q": "What prints?\n\ndef f(x, acc=[]):\n    acc.append(x)\n    return acc\nprint(f(1))\nprint(f(2))\n",
    "o": [
      "[1] then [2]",
      "[1] then [1, 2]",
      "[1, 2] then [1, 2]",
      "Error"
    ],
    "a": "B",
    "e": "Default arg evaluated once; list is shared across calls."
  },
  {
    "t": 18,
    "q": "When a Python function returns multiple values (e.g., return a, b), it actually returns:",
    "o": [
      "A list",
      "A tuple",
      "Two separate registers",
      "A dict"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 18,
    "q": "What prints?\n\nx = 1\ndef g():\n    x = x + 1\ng()\n",
    "o": [
      "2",
      "1",
      "UnboundLocalError",
      "NameError"
    ],
    "a": "C",
    "e": "Assignment makes x local; reading it before assignment => UnboundLocalError."
  },
  {
    "t": 19,
    "q": "The main purpose of if __name__ == '__main__' is to:",
    "o": [
      "Make the program run faster",
      "Prevent code from running on import, enabling reuse and tests",
      "Enable type annotations",
      "Make functions global"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 20,
    "q": "PEP is best described as:",
    "o": [
      "A runtime optimization flag",
      "A proposal document describing Python design changes / standards",
      "A linter built into CPython",
      "A package manager"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 21,
    "q": "What prints?\n\ntry:\n    1/0\nexcept ZeroDivisionError:\n    print('E')\nfinally:\n    print('F')\n",
    "o": [
      "E\nF",
      "F\nE",
      "E",
      "F"
    ],
    "a": "A",
    "e": ""
  },
  {
    "t": 21,
    "q": "Which statement about `raise X from Y` is correct?",
    "o": [
      "It suppresses X",
      "It sets the __cause__ to Y, making traceback clearer about the original error",
      "It makes X a subclass of Y",
      "It prevents finally from running"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 22,
    "q": "What prints?\n\ng = (i*i for i in range(3))\nprint(next(g), list(g))\n",
    "o": [
      "0 [0, 1, 4]",
      "0 [1, 4]",
      "0 [0, 1]",
      "Error"
    ],
    "a": "B",
    "e": "next consumed 0; remaining are 1 and 4."
  },
  {
    "t": 23,
    "q": "If you stack decorators:\n\n@d1\n@d2\ndef f(): ...\n\nWhich is applied first?",
    "o": [
      "d1 then d2",
      "d2 then d1",
      "Depends",
      "Neither"
    ],
    "a": "B",
    "e": "Equivalent to f = d1(d2(f))."
  },
  {
    "t": 24,
    "q": "What is the main purpose of venv?",
    "o": [
      "Speed up Python execution",
      "Create isolated package environments to avoid dependency conflicts",
      "Compile Python into C",
      "Replace pip"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 25,
    "q": "Why is `with open(...) as f:` preferred?",
    "o": [
      "It auto-closes the file even if an exception occurs",
      "It reads the whole file into memory",
      "It makes I/O asynchronous",
      "It disables buffering"
    ],
    "a": "A",
    "e": ""
  },
  {
    "t": 26,
    "q": "What prints?\n\ndef f(*args, **kwargs):\n    print(args, kwargs)\nf(1, 2, a=3)\n",
    "o": [
      "(1, 2) {'a': 3}",
      "[1, 2] {'a': 3}",
      "(1, 2, 3) {}",
      "Error"
    ],
    "a": "A",
    "e": ""
  },
  {
    "t": 27,
    "q": "What prints?\n\na, *b, c = [1,2,3,4]\nprint(a, b, c)\n",
    "o": [
      "1 [2, 3] 4",
      "1 (2, 3) 4",
      "1 [2, 3, 4] Error",
      "Error"
    ],
    "a": "A",
    "e": ""
  },
  {
    "t": 28,
    "q": "When you import the same module twice in the same process (normally):",
    "o": [
      "It executes the module code twice",
      "It executes once and reuses the cached module object from sys.modules",
      "It always raises ImportError",
      "It reloads from disk automatically"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 29,
    "q": "Which is most accurate?",
    "o": [
      "__str__ is for developers; __repr__ for end-users",
      "__repr__ ideally is unambiguous and for debugging; __str__ is user-friendly",
      "They must be identical",
      "Only __str__ is used by print()"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 29,
    "q": "What prints?\n\nclass A:\n    def __init__(self, x): self.x = x\n    def __add__(self, other): return A(self.x + other.x)\n    def __repr__(self): return f'A({self.x})'\nprint(A(1) + A(2))\n",
    "o": [
      "3",
      "A(3)",
      "A(1)A(2)",
      "TypeError"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 29,
    "q": "Which is true?",
    "o": [
      "@staticmethod receives cls automatically",
      "@classmethod receives cls automatically; @staticmethod receives nothing automatically",
      "Both receive self",
      "Neither can be called on the class"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 30,
    "q": "Which is true?",
    "o": [
      "Every iterable is an iterator",
      "An iterator must implement __next__ and usually returns itself from __iter__",
      "An iterator can be restarted automatically",
      "range is an iterator"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 31,
    "q": "What prints?\n\nclass A:\n    def __init__(self):\n        self.__x = 1\na = A()\nprint(hasattr(a, '__x'), hasattr(a, '_A__x'))\n",
    "o": [
      "True False",
      "False True",
      "True True",
      "False False"
    ],
    "a": "B",
    "e": "__x is mangled to _A__x."
  },
  {
    "t": 32,
    "q": "Which is a typical reason to prefer composition?",
    "o": [
      "It avoids tight coupling to a base class and allows behavior to be swapped",
      "It makes method dispatch static",
      "It prevents object creation",
      "It guarantees better performance"
    ],
    "a": "A",
    "e": ""
  },
  {
    "t": 33,
    "q": "What prints?\n\nprint([i for i in range(5) if i%2])\n",
    "o": [
      "[1, 3]",
      "[0, 2, 4]",
      "[True, True]",
      "Error"
    ],
    "a": "A",
    "e": ""
  },
  {
    "t": 34,
    "q": "In Jupyter/IPython, a 'magic command' (like %time) is:",
    "o": [
      "A Python keyword",
      "An IPython/Jupyter feature, not standard Python syntax",
      "A pip package required for any script",
      "A CPython bytecode instruction"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 12,
    "q": "What prints?\n\na = [1,2]\nb = [1,2]\nprint(a == b, a is b)\n",
    "o": [
      "True True",
      "True False",
      "False True",
      "False False"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 18,
    "q": "What prints?\n\nfuncs = [lambda: i for i in range(3)]\nprint([f() for f in funcs])\n",
    "o": [
      "[0, 1, 2]",
      "[2, 2, 2]",
      "[3, 3, 3]",
      "Error"
    ],
    "a": "B",
    "e": "Lambdas capture i by reference (late binding); it ends at 2."
  },
  {
    "t": 21,
    "q": "What prints?\n\ndef f():\n    try:\n        return 1\n    finally:\n        return 2\nprint(f())\n",
    "o": [
      "1",
      "2",
      "None",
      "Error"
    ],
    "a": "B",
    "e": "return in finally overrides the try's return."
  },
  {
    "t": 22,
    "q": "Which is true?",
    "o": [
      "List comprehension is lazy like generator expression",
      "Generator expression is lazy and produces values on demand",
      "Generator expression stores all values in memory",
      "They are identical in memory behavior"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 23,
    "q": "Why use functools.wraps in a decorator?",
    "o": [
      "To make it run faster",
      "To preserve wrapped function metadata like __name__ and __doc__",
      "To allow multiple return values",
      "To enable async"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 25,
    "q": "What prints?\n\nimport io\nb = io.BytesIO(b'hi')\nprint(b.read())\n",
    "o": [
      "hi",
      "b'hi'",
      "'hi'",
      "Error"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 15,
    "q": "In CPython 3.7+ (and language spec 3.7+), dict iteration order is:",
    "o": [
      "Undefined",
      "Sorted by key",
      "Insertion order",
      "Randomized per run"
    ],
    "a": "C",
    "e": ""
  },
  {
    "t": 2,
    "q": "What prints?\n\nprint(1 == 2 < 3)\n",
    "o": [
      "True",
      "False",
      "TypeError",
      "Depends"
    ],
    "a": "B",
    "e": "Equivalent to (1 == 2) and (2 < 3) => False."
  },
  {
    "t": 1,
    "q": "What prints?\n\nprint(0.1 + 0.2 == 0.3)\n",
    "o": [
      "True",
      "False",
      "TypeError",
      "Depends"
    ],
    "a": "B",
    "e": "Floating point precision."
  },
  {
    "t": 10,
    "q": "What prints?\n\ns = 'ab'\ns[0] = 'z'\n",
    "o": [
      "'zb'",
      "TypeError",
      "IndexError",
      "Nothing"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 11,
    "q": "What prints?\n\na = [[]] * 3\na[0].append(1)\nprint(a)\n",
    "o": [
      "[[1], [], []]",
      "[[1], [1], [1]]",
      "[[], [], []]",
      "Error"
    ],
    "a": "B",
    "e": "All three elements reference the same inner list."
  },
  {
    "t": 15,
    "q": "What prints?\n\nprint({i: i*i for i in range(3)})\n",
    "o": [
      "{0: 0, 1: 1, 2: 4}",
      "{1: 1, 2: 4, 3: 9}",
      "Error",
      "Depends"
    ],
    "a": "A",
    "e": ""
  },
  {
    "t": 16,
    "q": "What prints?\n\nprint(len({1,1,True}))\n",
    "o": [
      "1",
      "2",
      "3",
      "Error"
    ],
    "a": "A",
    "e": "True == 1 so they collapse in a set."
  },
  {
    "t": 18,
    "q": "What prints?\n\ndef f(x):\n    print('f', x)\n    return x\ndef g(a, b):\n    return a\nprint(g(f(1), f(2)))\n",
    "o": [
      "f 1\nf 2\n1",
      "f 2\nf 1\n1",
      "f 1\n1",
      "Error"
    ],
    "a": "A",
    "e": "Arguments are evaluated left-to-right before the call."
  },
  {
    "t": 22,
    "q": "What prints?\n\ndef gen():\n    yield from [1, 2]\nprint(list(gen()))\n",
    "o": [
      "[1, 2]",
      "[(1, 2)]",
      "[2, 1]",
      "Error"
    ],
    "a": "A",
    "e": ""
  },
  {
    "t": 28,
    "q": "If module A does `from B import x`, and later B changes B.x, A.x:",
    "o": [
      "Automatically updates",
      "Keeps its own binding unless re-imported/reloaded",
      "Becomes None",
      "Raises ImportError"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 29,
    "q": "What prints?\n\nclass A:\n    def f(self):\n        return 1\na = A()\nm = a.f\nprint(m())\n",
    "o": [
      "1",
      "TypeError",
      "<function ...>",
      "Error"
    ],
    "a": "A",
    "e": ""
  },
  {
    "t": 30,
    "q": "What prints?\n\nit = iter([1,2])\nprint(next(it), next(it))\n",
    "o": [
      "1 2",
      "2 1",
      "1 1",
      "StopIteration"
    ],
    "a": "A",
    "e": ""
  },
  {
    "t": 33,
    "q": "What prints?\n\na, b = b, a\n",
    "o": [
      "Swaps a and b (if they exist)",
      "SyntaxError",
      "NameError always",
      "No-op"
    ],
    "a": "A",
    "e": "Assuming a and b are defined earlier; this is Pythonic swapping."
  },
  {
    "t": 7,
    "q": "In a robust input loop, which style is considered more 'Pythonic' for validation?",
    "o": [
      "LBYL: check everything with if before attempting",
      "EAFP: attempt conversion and catch exceptions",
      "Never validate input",
      "Use recursion only"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 25,
    "q": "What is the risk of relying on the default encoding in open('file.txt')?",
    "o": [
      "No risk; encoding is always UTF-8",
      "It depends on OS/user locale and may break reading/writing non-ASCII",
      "It makes reads slower only",
      "It disables buffering"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 27,
    "q": "What prints?\n\nprint({**{'a': 1}, **{'a': 2}}['a'])\n",
    "o": [
      "1",
      "2",
      "KeyError",
      "Error"
    ],
    "a": "B",
    "e": "Later keys override earlier ones."
  },
  {
    "t": 21,
    "q": "Which except order is correct?",
    "o": [
      "except Exception then except ValueError",
      "except ValueError then except Exception",
      "Order doesn’t matter",
      "Python always picks the most specific at runtime"
    ],
    "a": "B",
    "e": "Put more specific exceptions first."
  },
  {
    "t": 14,
    "q": "Which is valid syntax?",
    "o": [
      "[x if x%2==0 for x in range(5)]",
      "[x if x%2==0 else -x for x in range(5)]",
      "[x for x in range(5) else -x]",
      "[if x%2==0: x else: -x for x in range(5)]"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 15,
    "q": "What happens if you add keys to a dict while iterating over it?",
    "o": [
      "Always safe",
      "Raises RuntimeError (dictionary changed size during iteration)",
      "Silently ignores new keys",
      "Only affects performance"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 16,
    "q": "Which can be used as a dict key to represent an unordered set of items?",
    "o": [
      "set",
      "list",
      "frozenset",
      "dict"
    ],
    "a": "C",
    "e": ""
  },
  {
    "t": 18,
    "q": "Python type hints are:",
    "o": [
      "Enforced at runtime by default",
      "Mostly for tooling/static analysis; runtime enforcement needs extra tooling",
      "Illegal in CPython",
      "Only comments"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 23,
    "q": "What prints?\n\ndef counter():\n    n = 0\n    def deco(f):\n        def w():\n            nonlocal n\n            n += 1\n            return n\n        return w\n    return deco\n@counter()\ndef f():\n    pass\nprint(f(), f())\n",
    "o": [
      "1 2",
      "0 1",
      "2 1",
      "Error"
    ],
    "a": "A",
    "e": ""
  },
  {
    "t": 11,
    "q": "What prints?\n\na = [1,2,3]\na.remove(2)\nprint(a)\n",
    "o": [
      "[1, 2, 3]",
      "[1, 3]",
      "[2, 3]",
      "Error"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 11,
    "q": "What prints?\n\na = [1,2,3]\nprint(a.pop(), a)\n",
    "o": [
      "1 [2, 3]",
      "3 [1, 2]",
      "3 [1, 2, 3]",
      "Error"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 10,
    "q": "What prints?\n\nprint(' a  b '.split())\n",
    "o": [
      "['', 'a', '', 'b', '']",
      "['a', 'b']",
      "[' a  b ']",
      "Error"
    ],
    "a": "B",
    "e": "split() without sep collapses whitespace."
  },
  {
    "t": 17,
    "q": "What prints?\n\ndef f(x):\n    print(x)\n    return x\nprint(any(f(x) for x in [0,0,1,0]))\n",
    "o": [
      "0\n0\n1\nTrue",
      "0\n0\n1\n0\nTrue",
      "0\n0\n1\nFalse",
      "True"
    ],
    "a": "A",
    "e": "Stops after first truthy (1)."
  },
  {
    "t": 22,
    "q": "Calling next(it) on an exhausted iterator raises:",
    "o": [
      "StopIteration",
      "IndexError",
      "KeyError",
      "None"
    ],
    "a": "A",
    "e": ""
  },
  {
    "t": 18,
    "q": "How to fix the late-binding issue in `[lambda: i for i in range(3)]`?",
    "o": [
      "Use i as a default arg: lambda i=i: i",
      "Use global i",
      "Use __del__",
      "Impossible"
    ],
    "a": "A",
    "e": ""
  },
  {
    "t": 2,
    "q": "What prints?\n\nimport math\nprint(float('nan') == float('nan'))\n",
    "o": [
      "True",
      "False",
      "Error",
      "Depends"
    ],
    "a": "B",
    "e": "NaN is not equal to itself."
  },
  {
    "t": 21,
    "q": "`except Exception as e:` binds e to:",
    "o": [
      "A copy of the exception message",
      "The caught exception instance",
      "The exception type",
      "A traceback-only object"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 25,
    "q": "What prints?\n\nclass C:\n    def __enter__(self):\n        print('E')\n        return self\n    def __exit__(self, exc_type, exc, tb):\n        print('X')\n\nwith C():\n    print('B')\n",
    "o": [
      "E\nB\nX",
      "B\nE\nX",
      "E\nX\nB",
      "Error"
    ],
    "a": "A",
    "e": ""
  },
  {
    "t": 29,
    "q": "An object is considered False in boolean context if:",
    "o": [
      "It defines __bool__ returning False, or __len__ returning 0",
      "It has no attributes",
      "Its id() is 0",
      "It is immutable"
    ],
    "a": "A",
    "e": ""
  },
  {
    "t": 18,
    "q": "What prints?\n\ndef f(x, acc=[]):\n    acc.append(x)\n    return acc\nprint(bool(f(0)), bool(f(0)))\n",
    "o": [
      "False False",
      "True True",
      "True False",
      "False True"
    ],
    "a": "B",
    "e": "f(0) returns a non-empty list after append, so it's truthy both times."
  },
  {
    "t": 22,
    "q": "What prints?\n\ng = (i for i in range(4))\na = sum(g)\nb = sum(g)\nprint(a, b)\n",
    "o": [
      "6 6",
      "6 0",
      "4 0",
      "0 6"
    ],
    "a": "B",
    "e": "The generator is exhausted after the first sum."
  },
  {
    "t": 15,
    "q": "What prints?\n\nd = {'a': 1, 'b': 2}\nd['a'] = 3\nd['c'] = 4\nprint(list(d.keys()))\n",
    "o": [
      "['a', 'b', 'c']",
      "['b', 'a', 'c']",
      "['a', 'c', 'b']",
      "Order is undefined"
    ],
    "a": "A",
    "e": "Overwriting doesn't move the key; insertion order preserved."
  },
  {
    "t": 21,
    "q": "What prints?\n\na = []\ntry:\n    a.append('T')\n    1/0\nexcept ZeroDivisionError:\n    a.append('E')\nfinally:\n    a.append('F')\nprint(''.join(a))\n",
    "o": [
      "TEF",
      "TFE",
      "ETF",
      "EF"
    ],
    "a": "A",
    "e": ""
  },
  {
    "t": 11,
    "q": "What prints?\n\na = [1,2,3,4]\na[1:3] = ['x']\nprint(a)\n",
    "o": [
      "[1, 'x', 4]",
      "[1, 'x', 3, 4]",
      "[1, 2, 'x', 4]",
      "Error"
    ],
    "a": "A",
    "e": "Slice assignment replaces the slice; lengths may change."
  },
  {
    "t": 27,
    "q": "What prints?\n\na = [1,2,3]\nb = [0, *a, 4]\nprint(b)\n",
    "o": [
      "[0, 1, 2, 3, 4]",
      "[0, [1, 2, 3], 4]",
      "[1, 2, 3, 4]",
      "Error"
    ],
    "a": "A",
    "e": ""
  },
  {
    "t": 29,
    "q": "What prints?\n\nclass A:\n    @classmethod\n    def f(cls):\n        return cls.__name__\nclass B(A):\n    pass\nprint(A.f(), B.f())\n",
    "o": [
      "A B",
      "A A",
      "B B",
      "Error"
    ],
    "a": "A",
    "e": ""
  },
  {
    "t": 30,
    "q": "What prints?\n\nclass C:\n    def __iter__(self):\n        return iter([1,2])\nprint(list(C()))\n",
    "o": [
      "[1, 2]",
      "<iterable>",
      "Error",
      "[]"
    ],
    "a": "A",
    "e": ""
  },
  {
    "t": 31,
    "q": "What prints?\n\nclass A:\n    def __init__(self):\n        self.__x = 1\nclass B(A):\n    def __init__(self):\n        super().__init__()\n        self.__x = 2\nb = B()\nprint(b._A__x, b._B__x)\n",
    "o": [
      "1 2",
      "2 1",
      "2 2",
      "Error"
    ],
    "a": "A",
    "e": "Each class mangles separately."
  },
  {
    "t": 2,
    "q": "What prints?\n\nd = {True: 'T', 1: 'one'}\nprint(len(d), d[True])\n",
    "o": [
      "2 T",
      "2 one",
      "1 T",
      "1 one"
    ],
    "a": "D",
    "e": "True and 1 are equal & hash-equal, so the second key overwrites."
  },
  {
    "t": 18,
    "q": "What prints?\n\nfuncs = [lambda i=i: i for i in range(3)]\nprint([f() for f in funcs])\n",
    "o": [
      "[0, 1, 2]",
      "[2, 2, 2]",
      "[3, 3, 3]",
      "Error"
    ],
    "a": "A",
    "e": ""
  },
  {
    "t": 23,
    "q": "What prints?\n\ndef deco(f):\n    return lambda x: f(x) + 1\n@deco\ndef g(x):\n    return x * 2\nprint(g(3))\n",
    "o": [
      "6",
      "7",
      "8",
      "Error"
    ],
    "a": "B",
    "e": ""
  },
  {
    "t": 25,
    "q": "What prints?\n\nclass C:\n    def __enter__(self):\n        print('E')\n        return self\n    def __exit__(self, exc_type, exc, tb):\n        print('X')\n        return True\nwith C():\n    print('B')\n    1/0\nprint('A')\n",
    "o": [
      "E\nB\nX\nA",
      "E\nB\nA",
      "E\nB\nX",
      "Error"
    ],
    "a": "A",
    "e": "Returning True from __exit__ suppresses the exception."
  },
  {
    "t": 17,
    "q": "What prints?\n\ndef f(x):\n    print(x)\n    return x\nprint(all(f(x) for x in [1,1,0,1]))\n",
    "o": [
      "1\n1\n0\nFalse",
      "1\n1\n0\n1\nFalse",
      "1\n1\nFalse",
      "False"
    ],
    "a": "A",
    "e": "Stops at first falsy (0)."
  },
  {
    "t": 11,
    "q": "What prints?\n\na = [1,2]\nb = a\na = a + [3]\nprint(a, b)\n",
    "o": [
      "[1, 2, 3] [1, 2, 3]",
      "[1, 2, 3] [1, 2]",
      "[1, 2] [1, 2, 3]",
      "Error"
    ],
    "a": "B",
    "e": "a + [3] creates a new list; b still points at the old list."
  },
  {
    "t": 22,
    "q": "What prints?\n\ng = (i for i in range(3))\nprint(tuple(g), list(g))\n",
    "o": [
      "(0, 1, 2) []",
      "(0, 1, 2) [0, 1, 2]",
      "() [0, 1, 2]",
      "Error"
    ],
    "a": "A",
    "e": ""
  },
  {
    "t": 0,
    "q": "Duck typing means that an object can be used if:",
    "o": [
      "It inherits from a specific base class",
      "It has the required behavior/methods at runtime",
      "It was annotated with the right type hint",
      "It was created in the same module"
    ],
    "a": "B",
    "e": "In duck typing, capability matters more than declared type."
  },
  {
    "t": 1,
    "q": "What prints?\n\nprint(bool(0), bool(\"0\"), bool(\"\"))\n",
    "o": [
      "False True False",
      "False False False",
      "True True False",
      "True False True"
    ],
    "a": "A",
    "e": "Non-empty strings are truthy; 0 and empty string are falsy."
  },
  {
    "t": 1,
    "q": "What is the type of `3/1` in Python 3?",
    "o": [
      "int",
      "float",
      "Fraction",
      "Depends on platform"
    ],
    "a": "B",
    "e": "`/` always returns float in Python 3."
  },
  {
    "t": 2,
    "q": "What prints?\n\nprint(2 ** 3 ** 2)\n",
    "o": [
      "64",
      "512",
      "256",
      "Error"
    ],
    "a": "B",
    "e": "Exponentiation is right-associative: 2 ** (3 ** 2)."
  },
  {
    "t": 2,
    "q": "What prints?\n\nprint(~5)\n",
    "o": [
      "-6",
      "6",
      "-5",
      "4"
    ],
    "a": "A",
    "e": "Bitwise not: ~n == -(n+1)."
  },
  {
    "t": 3,
    "q": "In unpacking, `_` is commonly used to:",
    "o": [
      "Store the previous REPL value",
      "Mark values you intentionally ignore",
      "Create private variables",
      "Freeze a variable"
    ],
    "a": "B",
    "e": "`_` is a naming convention for throwaway values."
  },
  {
    "t": 4,
    "q": "What prints?\n\nname = \"Dana\"\nprint(f\"Hello, {name}!\")\n",
    "o": [
      "Hello, Dana!",
      "Hello, {name}!",
      "Hello Dana",
      "TypeError"
    ],
    "a": "A",
    "e": "f-string interpolation inserts the value of `name`."
  },
  {
    "t": 5,
    "q": "Which statement is true about indentation?",
    "o": [
      "Only tabs are valid",
      "Only 4 spaces are valid syntax",
      "Consistent indentation is syntactically required",
      "Indentation only affects style, not syntax"
    ],
    "a": "C",
    "e": "Block structure is defined by indentation."
  },
  {
    "t": 6,
    "q": "What prints?\n\nx = 7\nif x % 2:\n    print(\"odd\")\nelse:\n    print(\"even\")\n",
    "o": [
      "odd",
      "even",
      "7",
      "Error"
    ],
    "a": "A",
    "e": "7 % 2 is 1 (truthy)."
  },
  {
    "t": 7,
    "q": "What prints?\n\nn = 3\nwhile n:\n    n -= 1\nprint(n)\n",
    "o": [
      "3",
      "1",
      "0",
      "-1"
    ],
    "a": "C",
    "e": "Loop decrements until n becomes 0."
  },
  {
    "t": 8,
    "q": "Which string literal avoids interpreting backslashes as escapes?",
    "o": [
      "f\"...\"",
      "r\"...\"",
      "\"...\"",
      "b\"...\""
    ],
    "a": "B",
    "e": "Raw strings treat backslashes literally (with some edge cases)."
  },
  {
    "t": 8,
    "q": "What prints?\n\npath = r\"C:\\new\\test\"\nprint(path)\n",
    "o": [
      "C:\\new\\test",
      "C:\n ew\\test",
      "C:new:test",
      "Error"
    ],
    "a": "A",
    "e": "Raw string keeps backslashes as literal characters."
  },
  {
    "t": 9,
    "q": "What prints?\n\ns = \"python\"\nprint(s[-1], s[-3])\n",
    "o": [
      "n h",
      "p t",
      "n t",
      "h n"
    ],
    "a": "A",
    "e": "Negative indices count from the end."
  },
  {
    "t": 9,
    "q": "What prints?\n\nprint(\"abcdef\"[::3])\n",
    "o": [
      "abc",
      "ad",
      "cf",
      "af"
    ],
    "a": "B",
    "e": "Step 3 from index 0 gives a,d."
  },
  {
    "t": 10,
    "q": "What prints?\n\nprint(\"banana\".count(\"an\"))\n",
    "o": [
      "1",
      "2",
      "3",
      "0"
    ],
    "a": "B",
    "e": "Non-overlapping occurrences: \"an\" appears twice."
  },
  {
    "t": 10,
    "q": "What prints?\n\nprint(\"abc\".replace(\"\", \"-\"))\n",
    "o": [
      "-a-b-c-",
      "abc-",
      "-abc",
      "Error"
    ],
    "a": "A",
    "e": "Replacing empty string inserts between boundaries."
  },
  {
    "t": 11,
    "q": "What prints?\n\na = [3,1,2]\nprint(sorted(a), a)\n",
    "o": [
      "[1, 2, 3] [3, 1, 2]",
      "[1, 2, 3] [1, 2, 3]",
      "[3, 1, 2] [1, 2, 3]",
      "Error"
    ],
    "a": "A",
    "e": "`sorted` returns new list and leaves original unchanged."
  },
  {
    "t": 11,
    "q": "What prints?\n\na = [1,2]\na.insert(1, 9)\nprint(a)\n",
    "o": [
      "[1, 9, 2]",
      "[9, 1, 2]",
      "[1, 2, 9]",
      "Error"
    ],
    "a": "A",
    "e": "insert(index, value) inserts before the index."
  },
  {
    "t": 12,
    "q": "What prints?\n\na = (1,2,3)\nb = a\na += (4,)\nprint(a, b)\n",
    "o": [
      "(1, 2, 3, 4) (1, 2, 3)",
      "(1, 2, 3, 4) (1, 2, 3, 4)",
      "(1, 2, 3) (1, 2, 3, 4)",
      "Error"
    ],
    "a": "A",
    "e": "Tuple concatenation creates a new tuple object."
  },
  {
    "t": 12,
    "q": "`is` checks:",
    "o": [
      "Value equality",
      "Object identity",
      "Hash equality",
      "Type compatibility"
    ],
    "a": "B",
    "e": "Use `==` for value equality, `is` for identity."
  },
  {
    "t": 13,
    "q": "What prints?\n\nfor i in range(3):\n    if i == 1:\n        continue\n    print(i, end=\" \")\n",
    "o": [
      "0 1 2",
      "0 2",
      "1 2",
      "0 1"
    ],
    "a": "B",
    "e": "continue skips printing when i==1."
  },
  {
    "t": 13,
    "q": "What prints?\n\nfor i, ch in enumerate(\"cat\", start=1):\n    if i == 2:\n        break\nelse:\n    print(\"done\")\nprint(i, ch)\n",
    "o": [
      "done\n3 t",
      "2 a",
      "1 c",
      "Error"
    ],
    "a": "B",
    "e": "Loop breaks at i=2; else does not run."
  },
  {
    "t": 14,
    "q": "What prints?\n\nnums = [x*x for x in range(5) if x % 2 == 0]\nprint(nums)\n",
    "o": [
      "[0, 1, 4, 9, 16]",
      "[0, 4, 16]",
      "[1, 9]",
      "Error"
    ],
    "a": "B",
    "e": "Only even x values are included."
  },
  {
    "t": 14,
    "q": "Generator expressions are created with:",
    "o": [
      "[ ... ]",
      "{ ... }",
      "( ... )",
      "< ... >"
    ],
    "a": "C",
    "e": "Parentheses with expression syntax create a generator expression."
  },
  {
    "t": 15,
    "q": "What prints?\n\nd = {\"a\": 1}\nprint(d.get(\"b\", 99))\n",
    "o": [
      "None",
      "99",
      "KeyError",
      "0"
    ],
    "a": "B",
    "e": "`get` returns default when key is missing."
  },
  {
    "t": 15,
    "q": "What prints?\n\nd = {\"x\": 1, \"y\": 2}\nprint(list(d.items()))\n",
    "o": [
      "[(\"x\", 1), (\"y\", 2)]",
      "[\"x\", \"y\"]",
      "[1,2]",
      "Order is undefined"
    ],
    "a": "A",
    "e": "`.items()` yields `(key, value)` pairs in insertion order."
  },
  {
    "t": 16,
    "q": "What prints?\n\na = {1,2,3}\nb = {3,4}\nprint(a | b)\n",
    "o": [
      "{1,2}",
      "{3}",
      "{1,2,3,4}",
      "Error"
    ],
    "a": "C",
    "e": "`|` is union."
  },
  {
    "t": 16,
    "q": "What prints?\n\nprint({x for x in [1,1,2,2,3]})\n",
    "o": [
      "[1,2,3]",
      "{1,2,3}",
      "(1,2,3)",
      "Error"
    ],
    "a": "B",
    "e": "Set comprehension deduplicates."
  },
  {
    "t": 17,
    "q": "What prints?\n\nprint(any([0, \"\", None, 5]))\n",
    "o": [
      "False",
      "True",
      "None",
      "Error"
    ],
    "a": "B",
    "e": "`any` returns True if at least one element is truthy (5)."
  },
  {
    "t": 17,
    "q": "What prints?\n\nprint(all([1, 2, 3, \"x\"]))\n",
    "o": [
      "False",
      "True",
      "\"x\"",
      "Error"
    ],
    "a": "B",
    "e": "All elements are truthy."
  },
  {
    "t": 18,
    "q": "What prints?\n\ndef f(a, b=10):\n    return a + b\nprint(f(5), f(5, 1))\n",
    "o": [
      "15 6",
      "15 15",
      "6 15",
      "Error"
    ],
    "a": "A",
    "e": "Default used when second arg is omitted."
  },
  {
    "t": 18,
    "q": "What prints?\n\ndef f():\n    return 1, 2\na, b = f()\nprint(a+b)\n",
    "o": [
      "12",
      "3",
      "(1,2)",
      "Error"
    ],
    "a": "B",
    "e": "Multiple return values are tuple-unpacked."
  },
  {
    "t": 19,
    "q": "When a module is imported, `__name__` inside that module is usually:",
    "o": [
      "\"__main__\"",
      "The module name",
      "None",
      "The package name always"
    ],
    "a": "B",
    "e": "Only the entry script gets `__main__`."
  },
  {
    "t": 20,
    "q": "PEP 8 mainly provides:",
    "o": [
      "Interpreter bytecode format",
      "Style guidelines for Python code",
      "Dependency locking",
      "Unit testing framework"
    ],
    "a": "B",
    "e": "PEP 8 is the style guide for Python code."
  },
  {
    "t": 21,
    "q": "What prints?\n\ntry:\n    int(\"x\")\nexcept ValueError:\n    print(\"bad\")\n",
    "o": [
      "bad",
      "ValueError traceback",
      "nothing",
      "TypeError"
    ],
    "a": "A",
    "e": "`int(\"x\")` raises `ValueError` and is caught."
  },
  {
    "t": 21,
    "q": "EAFP means:",
    "o": [
      "Check everything before acting",
      "Ask forgiveness: try operation and handle exceptions",
      "Avoid exceptions entirely",
      "Use finally without except"
    ],
    "a": "B",
    "e": "EAFP is an idiomatic Python style."
  },
  {
    "t": 22,
    "q": "What prints?\n\ndef g():\n    yield 1\n    yield 2\nprint(next(g()))\n",
    "o": [
      "1",
      "2",
      "[1,2]",
      "Error"
    ],
    "a": "A",
    "e": "A fresh generator yields 1 first."
  },
  {
    "t": 22,
    "q": "What prints?\n\ng = (x for x in range(2))\nprint(list(g), list(g))\n",
    "o": [
      "[0,1] [0,1]",
      "[0,1] []",
      "[] []",
      "Error"
    ],
    "a": "B",
    "e": "Generators are exhausted after first full iteration."
  },
  {
    "t": 23,
    "q": "A decorator is:",
    "o": [
      "A special class keyword",
      "A callable that receives a function and returns a callable",
      "A type hint syntax",
      "A context manager only"
    ],
    "a": "B",
    "e": "Decorators wrap/replace callable behavior."
  },
  {
    "t": 23,
    "q": "What prints?\n\ndef deco(f):\n    def w():\n        return \"[\" + f() + \"]\"\n    return w\n@deco\ndef hi():\n    return \"hi\"\nprint(hi())\n",
    "o": [
      "hi",
      "[hi]",
      "(hi)",
      "Error"
    ],
    "a": "B",
    "e": "Decorator wraps output with brackets."
  },
  {
    "t": 24,
    "q": "`pip` is primarily used to:",
    "o": [
      "Run Python bytecode",
      "Install/manage Python packages",
      "Create classes automatically",
      "Control indentation"
    ],
    "a": "B",
    "e": "pip is the package installer for Python."
  },
  {
    "t": 24,
    "q": "Why use virtual environments?",
    "o": [
      "To make Python syntax shorter",
      "To isolate dependencies per project",
      "To avoid writing tests",
      "To replace imports"
    ],
    "a": "B",
    "e": "Isolation prevents dependency conflicts across projects."
  },
  {
    "t": 25,
    "q": "What prints?\n\nfrom pathlib import Path\np = Path(\"a\") / \"b\"\nprint(str(p).endswith(\"b\"))\n",
    "o": [
      "True",
      "False",
      "Error",
      "None"
    ],
    "a": "A",
    "e": "Path composition with `/` creates platform path ending with b."
  },
  {
    "t": 25,
    "q": "Inside `with open(...) as f:`, file close happens:",
    "o": [
      "Only on success",
      "Never automatically",
      "On block exit, even with exceptions",
      "Only if `flush()` is called"
    ],
    "a": "C",
    "e": "Context manager guarantees cleanup in `__exit__`."
  },
  {
    "t": 26,
    "q": "What prints?\n\ndef f(*args):\n    print(len(args))\nf(1,2,3,4)\n",
    "o": [
      "3",
      "4",
      "1",
      "Error"
    ],
    "a": "B",
    "e": "All positional args are packed into tuple `args`."
  },
  {
    "t": 26,
    "q": "What prints?\n\ndef f(**kwargs):\n    print(sorted(kwargs))\nf(b=2, a=1)\n",
    "o": [
      "[\"a\", \"b\"]",
      "[1,2]",
      "(\"a\",\"b\")",
      "Error"
    ],
    "a": "A",
    "e": "`kwargs` is a dict; sorting gives ordered keys."
  },
  {
    "t": 27,
    "q": "What prints?\n\nvals = (1,2,3)\na, b, c = vals\nprint(a+b+c)\n",
    "o": [
      "6",
      "123",
      "(1,2,3)",
      "Error"
    ],
    "a": "A",
    "e": "Tuple unpacking assigns each element."
  },
  {
    "t": 27,
    "q": "What prints?\n\ndef f(a,b,c):\n    return a*b*c\nnums = [2,3,4]\nprint(f(*nums))\n",
    "o": [
      "24",
      "9",
      "234",
      "Error"
    ],
    "a": "A",
    "e": "`*nums` unpacks into positional args."
  },
  {
    "t": 28,
    "q": "What prints?\n\nimport math\nimport math\nprint(\"math\" in globals())\n",
    "o": [
      "True",
      "False",
      "Error",
      "Depends"
    ],
    "a": "A",
    "e": "Imported module name is bound in globals."
  },
  {
    "t": 28,
    "q": "What does `import package.module as m` bind?",
    "o": [
      "Only package",
      "Only module object as m",
      "Both names package and m always",
      "Nothing until first use"
    ],
    "a": "B",
    "e": "Alias receives the imported module object."
  },
  {
    "t": 29,
    "q": "What prints?\n\nclass P:\n    def __str__(self):\n        return \"S\"\n    def __repr__(self):\n        return \"R\"\np = P()\nprint(str(p), repr(p))\n",
    "o": [
      "S R",
      "R S",
      "S S",
      "R R"
    ],
    "a": "A",
    "e": "`str` uses `__str__`; `repr` uses `__repr__`."
  },
  {
    "t": 29,
    "q": "What prints?\n\nclass C:\n    @staticmethod\n    def f(x):\n        return x+1\nprint(C.f(2))\n",
    "o": [
      "2",
      "3",
      "TypeError",
      "Error"
    ],
    "a": "B",
    "e": "Static method does not receive self/cls automatically."
  },
  {
    "t": 30,
    "q": "An iterable must provide:",
    "o": [
      "Only __next__",
      "Only __iter__ returning iterator",
      "Both __len__ and __getitem__ always",
      "A `yield` keyword"
    ],
    "a": "B",
    "e": "`iter(obj)` calls `obj.__iter__()` (or legacy sequence protocol)."
  },
  {
    "t": 30,
    "q": "What prints?\n\nit = iter(\"ab\")\nprint(next(it), next(it))\n",
    "o": [
      "a b",
      "b a",
      "a a",
      "Error"
    ],
    "a": "A",
    "e": "String iterator yields chars in order."
  },
  {
    "t": 31,
    "q": "Name mangling of `__x` is mainly intended to:",
    "o": [
      "Provide strong security",
      "Avoid accidental name collisions in subclasses",
      "Make attribute private to OS",
      "Speed up attribute access"
    ],
    "a": "B",
    "e": "It is collision-avoidance, not true access control."
  },
  {
    "t": 31,
    "q": "What attribute name does `__x` in class `A` mangle to?",
    "o": [
      "__x",
      "_A__x",
      "A__x",
      "_x_A"
    ],
    "a": "B",
    "e": "Python rewrites double-leading-underscore names as `_ClassName__name`."
  },
  {
    "t": 32,
    "q": "Composition means:",
    "o": [
      "Class A always extends B",
      "Object contains/uses other objects to delegate behavior",
      "No objects are created",
      "Methods must be static"
    ],
    "a": "B",
    "e": "Composition models has-a relationships."
  },
  {
    "t": 32,
    "q": "Inheritance is usually best when relationship is:",
    "o": [
      "has-a",
      "uses-a",
      "is-a",
      "part-of-file-system"
    ],
    "a": "C",
    "e": "Inheritance should model substitutable is-a relationships."
  },
  {
    "t": 33,
    "q": "Pythonic swap is:",
    "o": [
      "tmp=a; a=b; b=tmp",
      "swap(a,b)",
      "a,b = b,a",
      "a <-> b"
    ],
    "a": "C",
    "e": "Tuple unpacking makes swapping concise and clear."
  },
  {
    "t": 33,
    "q": "Pythonic way to iterate index+value is:",
    "o": [
      "for i in range(len(x)): ...",
      "for i,v in enumerate(x): ...",
      "for v in x with i++",
      "while with manual counter only"
    ],
    "a": "B",
    "e": "`enumerate` is the idiomatic approach."
  },
  {
    "t": 34,
    "q": "In IPython, `%time` is:",
    "o": [
      "Standard Python syntax",
      "A magic command available in IPython/Jupyter",
      "A pip package",
      "A decorator"
    ],
    "a": "B",
    "e": "Magic commands are shell features of interactive environments."
  },
  {
    "t": 34,
    "q": "`%%time` (cell magic) applies to:",
    "o": [
      "Only next expression token",
      "Entire current cell",
      "Only function definitions",
      "Only imports"
    ],
    "a": "B",
    "e": "Double-percent magics operate on a whole cell."
  },
  {
    "t": 35,
    "q": "Which statement is MOST accurate about metaclasses in Python?",
    "o": [
      "A metaclass creates instances of normal classes",
      "A metaclass creates classes, similarly to how a class creates instances",
      "Metaclasses only work with abstract base classes",
      "Metaclasses are only available in Python 2"
    ],
    "a": "B",
    "e": "`type` is the default metaclass; it constructs class objects."
  },
  {
    "t": 35,
    "q": "What prints?\n\nclass A:\n    pass\nprint(type(A) is type)\n",
    "o": [
      "True",
      "False",
      "TypeError",
      "Depends on interpreter"
    ],
    "a": "A",
    "e": "By default, user-defined classes are instances of `type`."
  },
  {
    "t": 35,
    "q": "In a custom metaclass, which hook receives `(mcls, name, bases, namespace)` and typically returns the new class object?",
    "o": [
      "`__call__`",
      "`__iter__`",
      "`__new__`",
      "`__getattribute__`"
    ],
    "a": "C",
    "e": "Metaclass `__new__` is responsible for class creation."
  },
  {
    "t": 35,
    "q": "What prints?\n\nclass Meta(type):\n    def __new__(mcls, name, bases, ns):\n        ns['flag'] = 42\n        return super().__new__(mcls, name, bases, ns)\n\nclass C(metaclass=Meta):\n    pass\n\nprint(C.flag)\n",
    "o": [
      "AttributeError",
      "42",
      "None",
      "0"
    ],
    "a": "B",
    "e": "The metaclass injects `flag` into the class namespace before class construction."
  },
  {
    "t": 35,
    "q": "What is the best explanation for using metaclasses in production code?",
    "o": [
      "For rare framework-level class customization (validation, registration, API contracts)",
      "To replace all decorators",
      "To speed up every function call",
      "To avoid inheritance completely"
    ],
    "a": "A",
    "e": "Metaclasses are powerful but advanced; typical usage is framework-level class construction control."
  },
  {
    "t": 35,
    "q": "What prints?\n\nclass M(type):\n    pass\n\nclass A(metaclass=M):\n    pass\n\na = A()\nprint(type(A) is M, type(a) is A)\n",
    "o": [
      "True True",
      "True False",
      "False True",
      "False False"
    ],
    "a": "A",
    "e": "`A` is an instance of metaclass `M`; instance `a` is an instance of class `A`."
  },
  {
    "t": 35,
    "q": "When both `__init_subclass__` and a custom metaclass are possible, which is generally simpler for basic subclass validation?",
    "o": [
      "`__init_subclass__` is usually simpler",
      "Metaclass is always required",
      "Only decorators can validate subclasses",
      "Neither can access subclass attributes"
    ],
    "a": "A",
    "e": "For many subclass checks, `__init_subclass__` is easier and less invasive than a full metaclass."
  },
  {
    "t": 35,
    "q": "What happens when inheriting from two bases with incompatible metaclasses?",
    "o": [
      "Python silently picks one metaclass at random",
      "Python raises a metaclass conflict `TypeError`",
      "It works only if both bases are abstract",
      "It always falls back to `type`"
    ],
    "a": "B",
    "e": "Python requires a compatible metaclass resolution; otherwise class creation fails with `TypeError`."
  }
];
