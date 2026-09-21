// Frontend Frameworks (React & Modern Web) Track Data
window.frontendTopicsData = [
  // ==========================================
  // 1. BEGINNER / NOOB (REACT FUNDAMENTALS)
  // ==========================================
  {
    title: "Why React & Component-Driven UI?",
    category: "fundamentals",
    level: "beginner",
    hinglish: "Traditional HTML/JS me badi websites maintain karna mushkil ho jata hai. React UI ko chhote-chhote reusable 'Components' (jaise Button, Navbar, Card) me baant deta hai aur Virtual DOM ke zariye sirf badle huye part ko ultra-fast update karta hai.",
    english: "React is a component-based JavaScript library for building user interfaces. It uses a Virtual DOM to optimize re-renders efficiently.",
    code: `// Modern Quick Vite Setup
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev`,
    preview: `<div style="font-size:0.8rem; color:#06b6d4;">
      ⚛️ Component-Driven UI: [Navbar] + [Hero] + [CardList] + [Footer]
    </div>`,
    tip: "Purane `create-react-app` ki jagah modern projects hamesha `Vite` se start karein kyu ki ye 10x fast hota hai.",
    tipType: "pro"
  },
  {
    title: "JSX: JavaScript XML Syntax",
    category: "fundamentals",
    level: "beginner",
    hinglish: "JSX JavaScript ke andar direct HTML jaisa markup likhne ki suvidha deta hai. Rules: Hamesha ek single parent fragment `<> ... </>` hona chahiye, `class` ki jagah `className` use hota hai, aur `{variable}` se JS inject hoti hai.",
    english: "JSX is a syntax extension for JavaScript that looks like HTML. Requires single parent wrappers, 'className' instead of 'class', and curly braces for JS expressions.",
    code: `function WelcomeCard() {
  const userName = "Rahul";
  const unreadMessages = 5;

  return (
    <div className="card">
      <h2>Namaste, {userName}!</h2>
      <p>Aapke pas {unreadMessages} naye messages hain.</p>
    </div>
  );
}`,
    preview: `<div style="background:#111; border:1px solid #374151; padding:8px; border-radius:6px; font-size:0.8rem;">
      <strong style="color:#38bdf8;">Namaste, Rahul!</strong>
      <div style="color:#9ca3af; font-size:0.75rem;">Aapke pas 5 naye messages hain.</div>
    </div>`,
    tip: "JSX me koi bhi JavaScript expression likhne ke liye use curly braces `{expression}` me wrap karein.",
    tipType: "good"
  },
  {
    title: "Components & Props (Data Passing)",
    category: "components",
    level: "beginner",
    hinglish: "Props (Properties) ke zariye parent component se child component me data pass kiya jata hai (bilkul HTML attributes ki tarah). Props read-only (immutable) hote hain.",
    english: "Props allow passing data from parent to child components, functioning like custom HTML attributes.",
    code: `// Child Component
function UserBadge({ name, role }) {
  return (
    <div className="badge">
      <strong>{name}</strong> - <span>{role}</span>
    </div>
  );
}

// Parent Component
function App() {
  return (
    <div>
      <UserBadge name="Aman" role="Frontend Lead" />
      <UserBadge name="Priya" role="UI Designer" />
    </div>
  );
}`,
    preview: `<div style="display:flex; gap:6px; font-size:0.75rem;">
      <span style="background:rgba(6,182,212,0.2); padding:3px 8px; border-radius:4px; border:1px solid #06b6d4; color:#67e8f9;">Aman (Lead)</span>
      <span style="background:rgba(139,92,246,0.2); padding:3px 8px; border-radius:4px; border:1px solid #8b5cf6; color:#c4b5fd;">Priya (Designer)</span>
    </div>`,
    tip: "Props ko function arguments me hi destructure `{ name, role }` kar lena clean code standard hai.",
    tipType: "good"
  },

  // ==========================================
  // 2. INTERMEDIATE (STATE, HOOKS & TAILWIND)
  // ==========================================
  {
    title: "State Management with 'useState' Hook",
    category: "state",
    level: "intermediate",
    hinglish: "State component ki personal memory hoti hai. Normal variable change hone par screen update nahi hoti, lekin jab `useState` ka setter function call hota hai to React UI ko automatic re-render kar deta hai.",
    english: "The useState Hook declares a state variable that retains data between re-renders and triggers UI updates when mutated via its setter function.",
    code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}`,
    preview: `<div style="display:flex; align-items:center; gap:8px; font-size:0.8rem;">
      <span>Count: <strong id="demoReactCount" style="color:#38bdf8;">0</strong></span>
      <button onclick="const el = document.getElementById('demoReactCount'); el.textContent = parseInt(el.textContent)+1;" style="font-size:0.75rem; padding:2px 8px;">+1 Click</button>
    </div>`,
    tip: "State ko kabhi direct `count = count + 1` na karein, hamesha `setCount(prev => prev + 1)` setter function use karein.",
    tipType: "warning"
  },
  {
    title: "Side Effects & API Calls with 'useEffect'",
    category: "hooks",
    level: "intermediate",
    hinglish: "Component render hone ke baad hone wale kaam jaise API se data fetch karna, timers lagana, ya DOM title badalna `useEffect` me kiya jata hai. Empty dependency array `[]` ka matlab hai sirf component mount par ek baar chalega.",
    english: "Performs side-effects (data fetching, subscriptions, DOM mutation) after render. Dependency array controls when it re-executes.",
    code: `import { useState, useEffect } from 'react';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Component mount hone par API call
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []); // [] = Run once on mount

  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}`,
    preview: `<div style="font-size:0.75rem; color:#10b981;">
      <code>useEffect(() =&gt; { fetchApi(); }, []);</code> &bull; Lifecycle Data Fetching
    </div>`,
    tip: "Agar kisi variable par effect depend karta ho to use dependency array `[userId]` me pass karein, warna stale data ka bug banega.",
    tipType: "pro"
  },
  {
    title: "Rendering Lists & the 'key' Prop",
    category: "components",
    level: "intermediate",
    hinglish: "Arrays ko render karne ke liye `.map()` use hota hai. React ko batane ke liye ki koun-sa item add, remove ya move hua hai, har item par unique `key={item.id}` dena mandatory hota hai.",
    english: "Renders collections of data using map(). The unique 'key' prop helps React identify which items have changed, been added, or removed.",
    code: `const products = [
  { id: 101, title: "Laptop", price: 50000 },
  { id: 102, title: "Mouse", price: 1000 }
];

function Catalog() {
  return (
    <div>
      {products.map(item => (
        <div key={item.id} className="item">
          <h4>{item.title}</h4>
          <span>₹{item.price}</span>
        </div>
      ))}
    </div>
  );
}`,
    preview: `<div style="font-size:0.75rem; color:#9ca3af;">
      &bull; Item #101: Laptop &bull; Item #102: Mouse (Key-indexed Virtual DOM reconciliation)
    </div>`,
    tip: "Key me array index `(item, index) => <div key={index}>` lagane se bachein agar list sort ya delete ho sakti ho; hamesha unique ID use karein.",
    tipType: "warning"
  },
  {
    title: "Tailwind CSS: Utility-First Styling",
    category: "styling",
    level: "intermediate",
    hinglish: "Tailwind CSS ek utility-first framework hai jisme alag se CSS file likhne ki bajaye pre-made utility classes (jaise `flex`, `p-4`, `bg-indigo-600`, `rounded-xl`, `hover:scale-105`) direct HTML/JSX me lagayi ja sakti hain.",
    english: "A utility-first CSS framework packed with classes that can be composed to build any design directly in your markup.",
    code: `// Modern Tailwind Component
<button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200 hover:scale-105">
  Tailwind Button
</button>`,
    preview: `<button style="padding:6px 14px; background:#4f46e5; color:#fff; border:none; border-radius:6px; font-weight:600; font-size:0.8rem; box-shadow:0 4px 10px rgba(79,70,229,0.3);">
      px-4 py-2 bg-indigo-600 rounded-lg
    </button>`,
    tip: "Tailwind se alag-alag CSS naming conflicts khatam ho jate hain aur production bundle size bohot chhota hota hai.",
    tipType: "pro"
  },

  // ==========================================
  // 3. PRO / ADVANCED (GLOBAL STATE, ROUTING & NEXT.JS)
  // ==========================================
  {
    title: "Global State Management (Zustand & Context API)",
    category: "advanced",
    level: "pro",
    hinglish: "Jab data (jaise Cart items, User login session) ko 10 alag-alag components me pass karna ho to 'Prop Drilling' se bachne ke liye Global State (Zustand ya React Context) use kiya jata hai.",
    english: "Avoids prop-drilling by creating a centralized global state store accessible by any component in the application tree.",
    code: `// Lightweight Zustand Store (Modern Industry Standard)
import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  clearCart: () => set({ cart: [] }),
}));

// Kisi bhi component me direct use karein:
function CartButton() {
  const { cart } = useCartStore();
  return <span>Cart Items: {cart.length}</span>;
}`,
    preview: `<div style="font-size:0.8rem; color:#38bdf8;">
      Global Store &rarr; [Navbar] [CartModal] [CheckoutPage] synchronized!
    </div>`,
    tip: "Purane complex Redux boilerplate ki jagah modern projects me `Zustand` fast aur 10 guna lightweight alternative hai.",
    tipType: "pro"
  },
  {
    title: "Client-Side Routing: React Router",
    category: "advanced",
    level: "pro",
    hinglish: "Single Page Application (SPA) me bina page reload kiye URL change karna aur naye pages dikhana (Home, About, Dashboard) React Router ke zariye hota hai.",
    english: "Enables client-side navigation between views in a React Single Page Application without reloading the entire browser page.",
    code: `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}`,
    preview: `<div style="font-size:0.8rem; color:#c084fc;">
      <code>&lt;Routes&gt; &lt;Route path="/about" element={...} /&gt; &lt;/Routes&gt;</code> (Zero Reload Routing)
    </div>`,
    tip: "Links ke liye standard `<a href='...'>` ki jagah `<Link to='...'>` use karein taaki SPA page refresh na ho.",
    tipType: "good"
  },
  {
    title: "Next.js & Server-Side Rendering (SSR / SSG)",
    category: "advanced",
    level: "pro",
    hinglish: "React by default browser me render hota hai (Client-Side Rendering), jisse SEO weak ho sakta hai. Next.js server par pehle se HTML generate karta hai (SSR/SSG), jisse Google SEO aur initial load speed superfast ho jati hai.",
    english: "Next.js is the full-stack React framework providing Server-Side Rendering (SSR), Static Site Generation (SSG), API routes, and advanced SEO optimization.",
    code: `// Next.js App Router Server Component
export default async function BlogPage() {
  // Server-side direct DB/API fetch!
  const posts = await getDatabasePosts();

  return (
    <main>
      <h1>Server Rendered Blog (SEO Ready!)</h1>
      {posts.map(p => <article key={p.id}>{p.title}</article>)}
    </main>
  );
}`,
    preview: `<div style="font-size:0.8rem; color:#34d399;">
      &#9889; Server Component: HTML pre-rendered on server &rarr; Instant 100/100 Lighthouse SEO
    </div>`,
    tip: "Production enterprise websites, blogs aur e-commerce ke liye Next.js modern industry standard hai.",
    tipType: "pro"
  }
];
