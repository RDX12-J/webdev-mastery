// Complete Full-Stack Web Dev Roadmap & Resources
window.roadmapTopicsData = [
  // ==========================================
  // 1. STEP-BY-STEP LEARNING ROADMAP
  // ==========================================
  {
    title: "Month 1: HTML5 & Modern CSS3 (Foundation)",
    category: "roadmap",
    level: "beginner",
    hinglish: "Pehle mahine me web development ki neev rakhein. HTML ke semantic tags, forms, aur SEO structure sikhein. Phir CSS Box Model, Flexbox, Grid aur Responsive Design (Media queries) se responsive landing pages banayein.",
    english: "Master the foundational building blocks of the web: semantic markup, accessible forms, modern CSS Flexbox/Grid, and responsive mobile-first layouts.",
    code: `/* Month 1 Target Projects */
1. Personal Portfolio Page (Pure HTML/CSS)
2. Responsive Product Landing Page
3. Documentation / Blog Layout with CSS Grid`,
    preview: `<div style="font-size:0.8rem; color:#10b981;">
      &#9989; Goal: Kisi bhi Figma design ko responsive HTML/CSS me convert karna seekhein.
    </div>`,
    tip: "Design ko copy karne ke liye pehle pen aur paper par layout ka rough wireframe banayein.",
    tipType: "good"
  },
  {
    title: "Month 2: Core JavaScript & DOM Manipulation",
    category: "roadmap",
    level: "beginner",
    hinglish: "Website me jaan phoonkne ke liye JavaScript seekhein. Variables, Data types, Functions, Arrays, Objects, DOM selection, aur Event Listeners ko master karein. Interactive apps banayein.",
    english: "Learn algorithmic thinking and interactive UI manipulation: variables, functions, array methods, DOM manipulation, and event handling.",
    code: `/* Month 2 Target Projects */
1. Interactive Calculator
2. To-Do List with LocalStorage persistence
3. Digital Clock & Quiz Game`,
    preview: `<div style="font-size:0.8rem; color:#38bdf8;">
      &#9989; Goal: Bina kisi framework ke pure Vanilla JavaScript me interactive apps banana.
    </div>`,
    tip: "Direct framework par na jayein; Vanilla JS ka strong base aapko top 1% developer banayega.",
    tipType: "pro"
  },
  {
    title: "Month 3: Advanced JS, Async/APIs & Git/GitHub",
    category: "roadmap",
    level: "intermediate",
    hinglish: "Asynchronous JavaScript (Promises, async/await, Fetch API) seekhein aur external REST APIs se live data mangwayein (jaise Weather app, Movies app). Sath hi Git aur GitHub se code track karna aur cloud par push karna seekhein.",
    english: "Master asynchronous workflows, REST APIs, JSON data processing, and collaborative version control using Git and GitHub.",
    code: `/* Month 3 Target Projects */
1. Weather App with Live OpenWeather API
2. Movie Search App with TMDB API
3. GitHub Profile Searcher`,
    preview: `<div style="font-size:0.8rem; color:#f59e0b;">
      &#9989; Goal: Git branches aur Remote GitHub collaboration me comfortable hona.
    </div>`,
    tip: "Har project ko GitHub par push karke uska clean README.md zaroor likhein.",
    tipType: "good"
  },
  {
    title: "Month 4: React.js & Tailwind CSS (Frontend Pro)",
    category: "roadmap",
    level: "intermediate",
    hinglish: "Modern industry standard frontend framework React aur utility CSS Tailwind seekhein. Components, Props, State, useEffect, React Router, aur Zustand se scalable Single Page Applications banayein.",
    english: "Adopt modern frontend engineering: component lifecycle, state management, routing, and rapid UI development with Tailwind CSS.",
    code: `/* Month 4 Target Projects */
1. E-Commerce Store with Shopping Cart (Zustand)
2. Social Media Feed / Dashboard
3. Crypto / Stock Tracker with Live Charts`,
    preview: `<div style="font-size:0.8rem; color:#c084fc;">
      &#9989; Goal: Fast, componentized, production-grade frontend apps banana.
    </div>`,
    tip: "Vite ka use karein aur reusable components banane ki aadat dalein.",
    tipType: "pro"
  },
  {
    title: "Month 5: Node.js, Express & Databases (Backend)",
    category: "roadmap",
    level: "pro",
    hinglish: "Server-side programming shuru karein. Node.js aur Express se RESTful APIs banayein, CORS aur middleware configure karein, aur PostgreSQL ya MongoDB database se connect karke User Authentication (JWT + Bcrypt) implement karein.",
    english: "Backend engineering: RESTful API design, middleware, database modeling (PostgreSQL/MongoDB), and secure JWT authentication.",
    code: `/* Month 5 Target Projects */
1. User Authentication API (Signup, Login, Protected Routes)
2. Notes App Backend with CRUD & Database
3. File Upload Service (Multer + Cloudinary)`,
    preview: `<div style="font-size:0.8rem; color:#10b981;">
      &#9989; Goal: Complete backend API architecture secure aur production-ready banana.
    </div>`,
    tip: "API endpoints ko test karne ke liye Postman ya Thunder Client extension use karein.",
    tipType: "pro"
  },
  {
    title: "Month 6: Full-Stack Project & Free Cloud Deployment",
    category: "roadmap",
    level: "pro",
    hinglish: "Frontend (React) aur Backend (Node/Express + DB) ko jodkar ek complete Full-Stack web application banayein. Uske baad use free cloud hosting (Vercel, Netlify, Render, Supabase) par live deploy karein!",
    english: "Bring everything together into an end-to-end full-stack web application, configured for CI/CD and deployed to production cloud platforms.",
    code: `/* Month 6 Capstone Project */
Full-Stack SaaS / E-Commerce / LMS Platform
- Frontend: React + Tailwind CSS on Vercel
- Backend: Node.js + Express on Render
- Database: PostgreSQL on Supabase / MongoDB Atlas`,
    preview: `<div style="font-size:0.8rem; color:#34d399;">
      &#9889; Capstone Goal: Live working website with custom domain and portfolio link!
    </div>`,
    tip: "Portfolio me 10 aadhe-adhure projects ki jagah 2-3 solid, deployed aur complete projects zyada impactful hote hain.",
    tipType: "pro"
  },

  // ==========================================
  // 2. DEVELOPER TOOLS & WORKFLOW
  // ==========================================
  {
    title: "VS Code Superpower Shortcuts",
    category: "tools",
    level: "beginner",
    hinglish: "Coding speed 3x badhane ke liye VS Code shortcuts: Multi-cursor editing, line duplicate karna, file search aur auto-formatting.",
    english: "Essential Visual Studio Code shortcuts to boost development speed, navigation, and code refactoring.",
    code: `Ctrl + P            // Quick Open File by name
Alt + Click         // Multi-Cursor editing (Multiple jagah ek sath type karein)
Alt + Shift + Down  // Duplicate current line down
Alt + Up / Down     // Move line up or down
Ctrl + /            // Toggle comment
Shift + Alt + F     // Auto format whole document (Prettier)`,
    preview: `<div style="font-size:0.75rem; font-family:monospace; color:#38bdf8;">
      [Alt + Click]: Multi-cursor editing &bull; [Ctrl + P]: Instant File Jumper
    </div>`,
    tip: "Emmet abbreviations jaise `div.card>h2+p` likhkar Tab dabane se pura HTML structure 1 second me generate ho jata hai!",
    tipType: "pro"
  },
  {
    title: "Chrome DevTools: Debugging Like a Pro",
    category: "tools",
    level: "intermediate",
    hinglish: "Browser ke andar F12 ya Right Click -> Inspect dabane par DevTools khulta hai. Elements tab (live CSS tweaks), Console (JS errors & logs), Network tab (API calls & load time), aur Application tab (LocalStorage & cookies).",
    english: "The in-browser suite for inspecting DOM/CSS, monitoring network waterfalls, profiling performance, and debugging JavaScript.",
    code: `// Key DevTools Panels:
1. Elements Tab   -> Live CSS & HTML inspection
2. Console Tab    -> console.log, console.table(), error stack traces
3. Network Tab    -> Check API status codes (200, 404, 500) and payloads
4. Application    -> Inspect localStorage, sessionStorage & Cookies`,
    preview: `<div style="font-size:0.8rem; color:#f59e0b;">
      F12 &rarr; [Elements] [Console] [Network] [Application]
    </div>`,
    tip: "`console.table(arrayOfObjects)` use karke data ko sundar table format me print kiya ja sakta hai!",
    tipType: "pro"
  },
  {
    title: "Free Cloud Deployment Platforms Guide",
    category: "tools",
    level: "intermediate",
    hinglish: "Apni websites aur APIs ko internet par bina kisi paise ke live host karne ke top platforms: Vercel/Netlify (Frontend), Render/Railway (Backend APIs), Supabase/Neon (PostgreSQL), MongoDB Atlas (NoSQL).",
    english: "Comprehensive guide to the best modern free-tier cloud platforms for hosting frontend web apps, backend APIs, and cloud databases.",
    code: `Frontend Static / SPA / Next.js:
- Vercel (vercel.com) -> Instant Git push deployments
- Netlify (netlify.com)
- GitHub Pages (For simple HTML/CSS/JS)

Backend Node APIs:
- Render.com (Free web services)
- Railway.app

Databases:
- Supabase (supabase.com) -> Free Cloud PostgreSQL + Auth
- MongoDB Atlas (mongodb.com) -> Free 512MB Cloud Database`,
    preview: `<div style="font-size:0.8rem; color:#10b981;">
      &#9729;&#65039; Vercel (Frontend) + Render (API) + Supabase (Database) = 100% Free Full-Stack Deployment!
    </div>`,
    tip: "Vercel me GitHub repo connect karne ke baad har 'git push' par automatic live deployment ho jata hai!",
    tipType: "pro"
  }
];
