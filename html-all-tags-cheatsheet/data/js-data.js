// JavaScript Master Track Data (Noob to Pro Level)
window.jsTopicsData = [
  // ==========================================
  // 1. BEGINNER / NOOB (JS FUNDAMENTALS)
  // ==========================================
  {
    title: "Variables: let, const vs var",
    category: "fundamentals",
    level: "beginner",
    hinglish: "Variables data ko store karne ke dabbe hote hain. Modern JS me hamesha 'const' (fix values) aur 'let' (badalne wali values) use karte hain. 'var' purana hai aur bugs paida karta hai kyu ki iska block scope nahi hota.",
    english: "Containers for storing data values. 'const' declares block-scoped read-only constants, 'let' declares mutable block-scoped variables, while 'var' is legacy function-scoped.",
    code: `const PI = 3.14159;    // Kabhi change nahi hoga
let score = 0;          // Value update ho sakti hai
score = 10;             // Valid

// ❌ Avoid using 'var' in modern JS
var oldWay = "Dangeous hoisting bugs!";`,
    preview: `<div style="font-size:0.8rem;">
      <div><code>const site = 'DevHub';</code> <span style="color:#10b981;">(Immutable)</span></div>
      <div><code>let counter = 1;</code> <span style="color:#38bdf8;">(Mutable)</span></div>
    </div>`,
    tip: "Default roop se hamesha 'const' use karein; sirf tab 'let' lagayein jab value ko re-assign karna ho.",
    tipType: "good"
  },
  {
    title: "Data Types: Primitives & Objects",
    category: "fundamentals",
    level: "beginner",
    hinglish: "JS me 7 Primitive types hote hain: String, Number, Boolean, Null, Undefined, Symbol, BigInt. Aur Non-Primitive me Objects aur Arrays aate hain.",
    english: "Primitive types (immutable: string, number, boolean, null, undefined, symbol, bigint) vs Reference types (mutable objects, arrays, functions).",
    code: `const name = "Rahul";       // String
const age = 22;             // Number
const isDeveloper = true;   // Boolean
const empty = null;         // Intentionally empty
let notAssigned;            // undefined

// Non-Primitive (Reference Types)
const skills = ["HTML", "CSS", "JS"]; // Array
const user = { id: 1, role: "Admin" }; // Object`,
    preview: `<div style="display:flex; gap:6px; flex-wrap:wrap; font-size:0.75rem;">
      <span style="background:rgba(99,102,241,0.2); padding:2px 6px; border-radius:4px;">String</span>
      <span style="background:rgba(16,185,129,0.2); padding:2px 6px; border-radius:4px;">Number</span>
      <span style="background:rgba(245,158,11,0.2); padding:2px 6px; border-radius:4px;">Boolean</span>
      <span style="background:rgba(139,92,246,0.2); padding:2px 6px; border-radius:4px;">Object</span>
    </div>`,
    tip: "`typeof null` return karta hai 'object' - ye JavaScript ka ek famous legacy bug hai!",
    tipType: "warning"
  },
  {
    title: "Comparison: '==' vs '===' (Strict Equality)",
    category: "fundamentals",
    level: "beginner",
    hinglish: "'==' (Loose equality) sirf value check karta hai aur type convert kar deta hai, jabki '===' (Strict equality) value aur data type dono check karta hai bina type coercion ke.",
    english: "'==' compares values after converting them to a common type (coercion); '===' strictly checks value AND data type without coercion.",
    code: `5 == "5";   // true  (Kyu ki type convert ho gaya)
5 === "5";  // false (Kyu ki Number !== String)

0 == false;  // true  (Confusing loose equality!)
0 === false; // false (Accurate strict check)`,
    preview: `<div style="font-size:0.8rem;">
      <div><code>5 == '5'</code> &rarr; <strong style="color:#f59e0b;">true</strong> (Loose)</div>
      <div><code>5 === '5'</code> &rarr; <strong style="color:#10b981;">false</strong> (Strict & Safe)</div>
    </div>`,
    tip: "Production code me hamesha '===' (Triple equals) use karein taaki hidden bugs se bachein.",
    tipType: "good"
  },
  {
    title: "Functions & Arrow Functions",
    category: "functions",
    level: "beginner",
    hinglish: "Re-usable code blocks. Regular function declaration hoisting support karti hai, jabki modern Arrow function `() => {}` concise hoti hai aur lexical 'this' bind karti hai.",
    english: "Functions are reusable blocks of code. Arrow functions provide a concise syntax and lexically bind the 'this' value.",
    code: `// 1. Traditional Function Declaration
function greet(name) {
  return "Namaste " + name;
}

// 2. Modern Arrow Function
const add = (a, b) => a + b;

// 3. Arrow Function with Body
const getStatus = (score) => {
  return score >= 40 ? "Pass" : "Fail";
};`,
    preview: `<div style="font-size:0.8rem;">
      <div><code>const multiply = (x, y) => x * y;</code></div>
      <div style="color:#10b981; margin-top:4px;">Result of multiply(4, 5) = 20</div>
    </div>`,
    tip: "Short one-liner calculations me arrow functions bina return keyword aur curly braces ke likhi ja sakti hain.",
    tipType: "pro"
  },
  {
    title: "Template Literals & String Interpolation",
    category: "fundamentals",
    level: "beginner",
    hinglish: "Backticks (``) ka use karke strings ke andar variables `${variable}` aur multi-line text bina '+' lagaye aasani se likha ja sakta hai.",
    english: "Template literals are string literals allowing embedded expressions using ${expr} and multi-line strings.",
    code: `const user = "Dhankhar";
const rank = 1;

// Purana clumsy tarika: "Hello " + user + ", Rank: " + rank
// Modern Template Literal:
const message = \`Namaste \${user}! Aapki rank #\${rank} hai.\`;`,
    preview: `<div style="font-size:0.8rem; color:#38bdf8;">
      Output: <em>Namaste Dhankhar! Aapki rank #1 hai.</em>
    </div>`,
    tip: "Backticks ke andar complex expressions jaise `${isLoggedIn ? 'Dashboard' : 'Login'}` bhi likh sakte hain.",
    tipType: "pro"
  },
  {
    title: "Conditionals & Ternary Operator",
    category: "fundamentals",
    level: "beginner",
    hinglish: "Decisions lene ke liye `if...else`, `switch`, aur short condition check karne ke liye Ternary Operator `condition ? trueValue : falseValue` use hota hai.",
    english: "Conditional statements (if/else, switch) and the ternary operator for concise inline branching.",
    code: `const age = 19;

// Traditional if-else
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible");
}

// Clean One-Liner Ternary Operator
const canVote = age >= 18 ? "Eligible" : "Not eligible";`,
    preview: `<div style="font-size:0.8rem;">
      <code>const access = age >= 18 ? 'Allowed' : 'Denied';</code>
      <div style="color:#a78bfa; margin-top:2px;">Age 19 &rarr; <strong>Allowed</strong></div>
    </div>`,
    tip: "Nested ternary operators padhne me mushkil hote hain, isliye simple true/false ke liye hi ternary use karein.",
    tipType: "good"
  },

  // ==========================================
  // 2. INTERMEDIATE (ARRAYS, OBJECTS, DOM & EVENTS)
  // ==========================================
  {
    title: "High-Order Array Methods (map, filter, reduce)",
    category: "arrays",
    level: "intermediate",
    hinglish: "Modern JavaScript ka backbone! `map()` har item ko transform karke naya array banata hai, `filter()` specific condition wale items chunta hai, aur `reduce()` pure array ko single value me aggregate karta hai.",
    english: "Essential functional array methods: map() transforms every element, filter() selects elements matching criteria, reduce() aggregates array to a single value.",
    code: `const numbers = [10, 20, 30, 40];

// 1. map() - Double all numbers
const doubled = numbers.map(num => num * 2); // [20, 40, 60, 80]

// 2. filter() - Numbers greater than 25
const filtered = numbers.filter(num => num > 25); // [30, 40]

// 3. reduce() - Sum of all numbers
const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 100`,
    preview: `<div style="font-size:0.75rem; display:flex; flex-direction:column; gap:2px;">
      <div>Original: <code>[10, 20, 30, 40]</code></div>
      <div>.filter(&gt;25): <span style="color:#10b981;">[30, 40]</span></div>
      <div>.reduce(sum): <span style="color:#38bdf8;">100</span></div>
    </div>`,
    tip: "Traditional `for` loops ki jagah `map` aur `filter` use karne se code declarative aur bug-free banta hai.",
    tipType: "pro"
  },
  {
    title: "Destructuring & Spread / Rest Operator",
    category: "objects",
    level: "intermediate",
    hinglish: "Destructuring se objects/arrays me se direct variables extract kar sakte hain. Spread operator `...` objects/arrays ko copy ya merge karta hai. Rest operator bache huye arguments ko collect karta hai.",
    english: "Destructuring unpacks values from arrays or properties from objects into distinct variables. The spread/rest operator (...) expands or gathers elements.",
    code: `const user = { name: "Aman", role: "Developer", city: "Delhi" };

// Object Destructuring
const { name, role } = user; // Aman, Developer

// Spread Operator (Cloning & Merging)
const updatedUser = { ...user, active: true };

// Array Spread
const frontend = ["HTML", "CSS"];
const fullstack = [...frontend, "Node.js", "MongoDB"];`,
    preview: `<div style="font-size:0.8rem; color:#c4b5fd;">
      <code>const { name, role } = user;</code> &rarr; Clean extracted variables
    </div>`,
    tip: "React me state update karte waqt spread operator `setUser({ ...prev, key: val })` standard pattern hai.",
    tipType: "pro"
  },
  {
    title: "DOM Selection & Manipulation",
    category: "dom",
    level: "intermediate",
    hinglish: "HTML elements ko JavaScript se access aur update karna. `document.querySelector()` se element pakadte hain, aur `textContent`, `innerHTML`, `classList.add/remove` se change karte hain.",
    english: "Techniques for selecting HTML nodes with querySelector and modifying textContent, innerHTML, styles, and class lists dynamically.",
    code: `// Select single element
const heading = document.querySelector("#main-title");

// Change text and styles
heading.textContent = "Welcome to Pro Web Dev!";
heading.style.color = "#6366f1";

// Add / Remove CSS classes (Best practice)
heading.classList.add("highlight", "active");
heading.classList.toggle("dark-mode");`,
    preview: `<button onclick="this.textContent = 'Updated via DOM!'; this.style.backgroundColor='#10b981';" style="font-size:0.8rem;">Click to Mutate DOM Element</button>`,
    tip: "Direct inline styles lagane ki bajaye `classList.add()` ya `classList.toggle()` se CSS classes apply karein.",
    tipType: "good"
  },
  {
    title: "Event Listeners & Event Object",
    category: "events",
    level: "intermediate",
    hinglish: "User actions (click, typing, form submit, mouse hover) ko sunne ke liye `addEventListener` lagate hain. `e.preventDefault()` form ka unwanted page reload rokta hai.",
    english: "Handling user interactions (clicks, keyboard, form submissions). Uses addEventListener and event.preventDefault().",
    code: `const myForm = document.querySelector("#loginForm");

myForm.addEventListener("submit", (event) => {
  // Page reload hone se roko
  event.preventDefault();

  const email = event.target.elements.email.value;
  console.log("Submitted email:", email);
});`,
    preview: `<div style="display:flex; gap:6px; align-items:center;">
      <input type="text" id="demoInput" placeholder="Type letters..." oninput="document.getElementById('demoPreview').textContent = this.value" style="font-size:0.75rem; padding:3px 6px;">
      <span id="demoPreview" style="font-size:0.8rem; color:#38bdf8; font-weight:bold;">Live text</span>
    </div>`,
    tip: "Ek hi element par multiple listeners lagaye ja sakte hain bina purane handlers ko overwrite kiye.",
    tipType: "good"
  },
  {
    title: "Browser Storage: LocalStorage & SessionStorage",
    category: "storage",
    level: "intermediate",
    hinglish: "User ke browser me data save karna bina database ke! LocalStorage tab tak data save rakhta hai jab tak delete na kiya jaye (Dark mode preference, login tokens). SessionStorage tab band hote hi clear ho jata hai.",
    english: "Client-side key-value storage. localStorage persists across browser restarts; sessionStorage clears when the tab is closed.",
    code: `// Save string data
localStorage.setItem("theme", "dark");

// Save complex Object using JSON
const profile = { name: "Aman", level: "Pro" };
localStorage.setItem("user", JSON.stringify(profile));

// Retrieve data
const savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser.name); // Aman`,
    preview: `<div style="font-size:0.8rem;">
      <button onclick="localStorage.setItem('demo_key', 'Active'); showToast('Stored in localStorage!');" style="font-size:0.75rem; padding:2px 8px;">Save LocalStorage</button>
    </div>`,
    tip: "Objects aur Arrays ko store karne ke liye hamesha `JSON.stringify()` aur retrieve karne ke liye `JSON.parse()` use karein.",
    tipType: "pro"
  },

  // ==========================================
  // 3. PRO / ADVANCED (ASYNC, FETCH, CLOSURES & EVENT LOOP)
  // ==========================================
  {
    title: "Promises & Asynchronous JavaScript",
    category: "async",
    level: "pro",
    hinglish: "Time-taking tasks (server API call, file download, database query) ko handle karne ke liye Promises use hote hain. Promise ke 3 states hote hain: Pending, Fulfilled (.then), aur Rejected (.catch).",
    english: "Represents the eventual completion (or failure) of an asynchronous operation and its resulting value.",
    code: `const checkServer = new Promise((resolve, reject) => {
  const isOnline = true;
  if (isOnline) {
    resolve("Server is healthy!");
  } else {
    reject("Server is down!");
  }
});

checkServer
  .then(data => console.log("Success:", data))
  .catch(err => console.error("Error:", err))
  .finally(() => console.log("Check complete."));`,
    preview: `<div style="font-size:0.8rem; color:#38bdf8;">
      Promise lifecycle: Pending &rarr; Fulfilled (.then) / Rejected (.catch)
    </div>`,
    tip: "Callback Hell se bachne ke liye Promises JavaScript ka sabse behtareen solution hai.",
    tipType: "good"
  },
  {
    title: "Async / Await & Error Handling (try...catch)",
    category: "async",
    level: "pro",
    hinglish: "Asynchronous code ko synchronous ki tarah clean aur readable banane ka modern syntax. `async` function ke andar `await` keyword Promise ke resolve hone ka wait karta hai bina pure browser ko freeze kiye.",
    english: "Syntactic sugar built on Promises, making asynchronous code look and behave like synchronous code.",
    code: `async function fetchUserData(userId) {
  try {
    console.log("Fetching user...");
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    if (!response.ok) throw new Error("User not found!");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Failure:", error.message);
  }
}`,
    preview: `<div style="font-size:0.8rem; color:#a78bfa;">
      <code>const res = await fetch(url); const data = await res.json();</code>
    </div>`,
    tip: "Hamesha `async/await` ko `try...catch` block ke andar wrap karein taaki network errors gracefully handle ho sakein.",
    tipType: "pro"
  },
  {
    title: "Fetch API & REST API Consumption",
    category: "async",
    level: "pro",
    hinglish: "Modern native browser method jisse kisi bhi remote server ya backend API ko GET, POST, PUT, DELETE HTTP requests bhejkar JSON data receive kiya jata hai.",
    english: "The native modern interface for fetching resources asynchronously across the network via HTTP.",
    code: `// Sending POST request with JSON payload
async function createPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "New Article", body: "Content here...", userId: 1 })
  });
  const newPost = await response.json();
  console.log("Created post ID:", newPost.id);
}`,
    preview: `<button onclick="fetch('https://jsonplaceholder.typicode.com/todos/1').then(r=>r.json()).then(d=>alert('Fetched: ' + d.title)).catch(e=>alert(e))" style="font-size:0.75rem;">Test Live API Fetch &rarr;</button>`,
    tip: "`fetch` sirf network failure par reject hota hai; agar server 404 ya 500 error de tab bhi ye resolve hota hai, isliye `response.ok` zaroor check karein.",
    tipType: "pro"
  },
  {
    title: "Modern ES Superpowers: Optional Chaining (?.) & Nullish (??)",
    category: "modern-js",
    level: "pro",
    hinglish: "`?.` (Optional Chaining) deeply nested objects me undefined check karta hai bina error throw kiye. `??` (Nullish Coalescing) default value tabhi deta hai jab variable `null` ya `undefined` ho (0 ya false par nahi).",
    english: "Optional chaining (?.) prevents 'cannot read property of undefined' crashes. Nullish coalescing (??) returns right operand only when left is null or undefined.",
    code: `const user = { name: "Aman", address: null };

// 1. Optional Chaining (No error thrown!)
const city = user?.address?.city; // undefined (Safe!)

// 2. Nullish Coalescing (Safe fallback)
const count = 0;
const finalCount = count ?? 10; // 0 (Kyu ki 0 valid number hai!)
const falsyFallback = count || 10; // 10 (Purane '||' ka bug!)`,
    preview: `<div style="font-size:0.8rem;">
      <code>0 ?? 10</code> = <strong style="color:#10b981;">0</strong> | <code>null ?? 10</code> = <strong style="color:#f59e0b;">10</strong>
    </div>`,
    tip: "Purane `||` operator ki jagah `??` use karein agar 0 ya false valid values ho sakti hain.",
    tipType: "pro"
  },
  {
    title: "Closures & Lexical Scoping",
    category: "advanced",
    level: "pro",
    hinglish: "Jab ek inner function apne parent (outer) function ke variables ko us function ke execute hokar khatam hone ke baad bhi yaad rakhta hai aur access kar sakta hai, use Closure kehte hain.",
    english: "A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment).",
    code: `function createCounter() {
  let count = 0; // Private variable
  return function() {
    count++;
    return count;
  };
}

const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3 (State is remembered!)`,
    preview: `<div style="font-size:0.8rem; color:#38bdf8;">
      Private data encapsulation & function factory via Closures.
    </div>`,
    tip: "React me `useState` hook internally closures ke principle par hi kaam karta hai!",
    tipType: "pro"
  },
  {
    title: "JavaScript Event Loop & Concurrency Model",
    category: "advanced",
    level: "pro",
    hinglish: "JavaScript single-threaded hai (ek time par ek kaam karti hai). Lekin Event Loop, Call Stack, Web APIs, Microtask Queue (Promises), aur Macrotask Queue (setTimeout) milkar ise non-blocking banate hain.",
    english: "The mechanism that orchestrates execution, events, and sub-tasks in JavaScript's single-threaded runtime environment.",
    code: `console.log("1. Start");

setTimeout(() => {
  console.log("4. Macrotask (setTimeout)");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Microtask (Promise)");
});

console.log("2. End");

// Output Order: 1 -> 2 -> 3 (Microtask pehle) -> 4`,
    preview: `<div style="font-size:0.75rem; background:#000; padding:6px; border-radius:4px; font-family:monospace; color:#38bdf8;">
      Call Stack &rarr; Microtask (Promises) &rarr; Macrotask (setTimeout)
    </div>`,
    tip: "Microtask Queue (Promises) hamesha Macrotask Queue (setTimeout/setInterval) se pehle execute hoti hai.",
    tipType: "pro"
  }
];
