// CSS3 Master Track Data (Noob to Pro Level)
window.cssTopicsData = [
  // ==========================================
  // 1. BEGINNER / NOOB (CSS FUNDAMENTALS)
  // ==========================================
  {
    title: "CSS Syntax & How to Link",
    category: "fundamentals",
    level: "beginner",
    hinglish: "CSS (Cascading Style Sheets) web page ko sundar banane ka kaam karta hai. Isme Selector aur Declaration block (Property: Value) hota hai. External CSS link karna best practice hai.",
    english: "Defines the fundamental syntax of CSS rules consisting of a selector and declaration block. External stylesheets via <link> are the industry standard.",
    code: `/* External CSS File (style.css) */
h1 {
  color: #6366f1;
  font-size: 2rem;
  text-align: center;
}`,
    preview: `<div style="text-align:center;"><h4 style="color:#6366f1; margin:0;">Styled Heading via CSS</h4><span style="font-size:0.75rem; color:#9ca3af;">selector { property: value; }</span></div>`,
    tip: "Hamesha external .css file banayein taaki ek hi stylesheet se multiple HTML pages style ho sakein.",
    tipType: "good"
  },
  {
    title: "Basic CSS Selectors",
    category: "selectors",
    level: "beginner",
    hinglish: "HTML elements ko target karne ke basic selectors: Element (tag name), Class (.classname), ID (#idname), aur Grouping (,).",
    english: "Core selectors used to target HTML elements: Element selectors, class selectors (.class), ID selectors (#id), and grouping selectors.",
    code: `/* 1. Element Selector */
p { color: #333; }

/* 2. Class Selector (Sabse zyada use hota hai) */
.card { border-radius: 8px; }

/* 3. ID Selector (Unique element ke liye) */
#header { background: #111; }

/* 4. Grouping Selector */
h1, h2, h3 { font-family: sans-serif; }`,
    preview: `<div style="display:flex; gap:8px; font-size:0.8rem;">
      <span style="padding:4px 8px; background:rgba(99,102,241,0.15); border:1px solid #6366f1; border-radius:4px; color:#818cf8;">.class</span>
      <span style="padding:4px 8px; background:rgba(16,185,129,0.15); border:1px solid #10b981; border-radius:4px; color:#34d399;">#id</span>
      <span style="padding:4px 8px; background:rgba(245,158,11,0.15); border:1px solid #f59e0b; border-radius:4px; color:#fbbf24;">element</span>
    </div>`,
    tip: "Styling ke liye hamesha Classes (.card) use karein, IDs (#) ko JavaScript hooks ke liye reserved rakhein.",
    tipType: "good"
  },
  {
    title: "The CSS Box Model",
    category: "box-model",
    level: "beginner",
    hinglish: "Har HTML element ek rectangular box hota hai jisme 4 layers hoti hain: Content (actual text/image), Padding (border ke andar ki space), Border (boundary), aur Margin (dusre elements se bahar ki doori).",
    english: "Every element in web design is a rectangular box comprising 4 concentric layers: Content, Padding, Border, and Margin.",
    code: `.box {
  width: 200px;
  padding: 20px;       /* Andar ki space */
  border: 2px solid #38bdf8; /* Boundary */
  margin: 15px;        /* Bahar ki space */
  box-sizing: border-box; /* Width calculation fix */
}`,
    preview: `<div style="margin:6px auto; padding:6px; border:2px dashed #38bdf8; background:rgba(56,189,248,0.1); text-align:center; max-width:240px; font-size:0.75rem;">
      <div style="background:rgba(99,102,241,0.2); padding:6px; border:1px solid #6366f1;">
        <span style="color:#c4b5fd;">[Content Area]</span>
      </div>
      <span style="color:#38bdf8; font-size:0.7rem;">Margin &bull; Border &bull; Padding &bull; Content</span>
    </div>`,
    tip: "Puri CSS ka sabse important rule: Hamesha apne project ke top par `* { box-sizing: border-box; }` set karein!",
    tipType: "good"
  },
  {
    title: "CSS Units: px, rem, em, %, vh, vw",
    category: "units",
    level: "beginner",
    hinglish: "Absolute units (px) fix size ke liye hoti hain. Relative units (rem = root html size, em = parent size, % = parent percentage, vh/vw = viewport screen height/width) responsive design ke liye best hain.",
    english: "Units measure length and size. Absolute units (px) are fixed; relative units (rem, em, %, vh, vw) adapt smoothly to screen sizes and user zoom settings.",
    code: `html { font-size: 16px; } /* 1rem = 16px */

.container {
  max-width: 90vw;   /* Viewport width ka 90% */
  min-height: 100vh; /* Puri screen height */
  font-size: 1.25rem; /* 16px * 1.25 = 20px */
  padding: 2em;      /* Current font size ka double */
}`,
    preview: `<div style="font-size:0.8rem; display:flex; flex-direction:column; gap:4px;">
      <div><code>16px</code> = Fixed pixels</div>
      <div><code>1.5rem</code> = Responsive root scaling (24px)</div>
      <div><code>50vw</code> = Half of total viewport screen width</div>
    </div>`,
    tip: "Font sizes aur spacing ke liye 'px' ki jagah hamesha 'rem' use karein taaki user accessibility scaling support ho sake.",
    tipType: "pro"
  },
  {
    title: "Colors, Opacity & Gradients",
    category: "colors",
    level: "beginner",
    hinglish: "CSS me colors dene ke 4 tarike: Named colors ('red'), HEX ('#6366f1'), RGB/RGBA ('rgba(99,102,241,0.5)'), aur modern HSL. Sath hi linear aur radial gradients se multi-color effect banta hai.",
    english: "CSS color systems including HEX, RGB/RGBA, HSL, and modern CSS gradients (linear-gradient, radial-gradient).",
    code: `.gradient-card {
  /* Solid fallback */
  background-color: #6366f1;
  /* Beautiful Modern Linear Gradient */
  background: linear-gradient(135deg, #6366f1 0%, #06b6d4 100%);
  color: #ffffff;
}`,
    preview: `<div style="background:linear-gradient(135deg, #6366f1 0%, #06b6d4 100%); padding:10px; border-radius:6px; color:#fff; text-align:center; font-weight:bold; font-size:0.85rem;">
      Linear Gradient Demo (#6366f1 &rarr; #06b6d4)
    </div>`,
    tip: "Gradients text par lagane ke liye `-webkit-background-clip: text; -webkit-text-fill-color: transparent;` use karein.",
    tipType: "pro"
  },
  {
    title: "Display Property: Block vs Inline vs Inline-Block",
    category: "fundamentals",
    level: "beginner",
    hinglish: "Block elements (div, p, h1) nayi line se shuru hote hain aur 100% width lete hain. Inline (span, a) sirf content jitni jagah lete hain. Inline-block dono ka faayda deta hai (ek line me width/height support).",
    english: "The display property controls element layout behavior: block starts on a new line; inline sits within text; inline-block allows width/height while sitting inline.",
    code: `.block-box { display: block; width: 100%; }
.inline-span { display: inline; /* width/height ignored */ }
.inline-btn  { display: inline-block; width: 120px; }`,
    preview: `<div style="font-size:0.8rem; display:flex; gap:6px; align-items:center;">
      <span style="background:rgba(99,102,241,0.2); padding:3px 6px; border:1px solid #6366f1;">Inline-block A</span>
      <span style="background:rgba(16,185,129,0.2); padding:3px 6px; border:1px solid #10b981;">Inline-block B</span>
    </div>`,
    tip: "Hide karne ke liye `display: none` DOM me jagah khatam kar deta hai, jabki `visibility: hidden` jagah reserve rakhta hai.",
    tipType: "good"
  },

  // ==========================================
  // 2. INTERMEDIATE (FLEXBOX, GRID, POSITIONING & RESPONSIVE)
  // ==========================================
  {
    title: "Flexbox: 1D Layout System (Rows & Columns)",
    category: "layout",
    level: "intermediate",
    hinglish: "Flexbox ek 1-Dimensional layout model hai. Kisi bhi container ko `display: flex` dekar uske children ko aasani se horizontally/vertically align kiya ja sakta hai.",
    english: "Flexible Box Layout (Flexbox) is a 1D layout model providing powerful alignment and space distribution among items in a row or column.",
    code: `.navbar {
  display: flex;
  justify-content: space-between; /* Horizontal spacing */
  align-items: center;         /* Vertical centering */
  gap: 1.5rem;                 /* Items ke bich ki space */
}`,
    preview: `<div style="display:flex; justify-content:space-between; align-items:center; background:#111; padding:6px 10px; border-radius:6px; border:1px solid #374151; font-size:0.8rem;">
      <strong style="color:#6366f1;">Logo</strong>
      <span style="color:#9ca3af;">Link 1 &bull; Link 2</span>
      <button style="padding:2px 8px; font-size:0.75rem;">Action</button>
    </div>`,
    tip: "Kisi bhi element ko bilkul center me lane ka 2-line code: `display: flex; justify-content: center; align-items: center;`",
    tipType: "pro"
  },
  {
    title: "Flex Child Properties (Grow, Shrink, Basis)",
    category: "layout",
    level: "intermediate",
    hinglish: "Flex items ki growth aur shrinking control karne ke liye: `flex-grow` (bachi huyi space lena), `flex-shrink` (zarurat padne par sikudna), aur `flex: 1` (equal width distribution).",
    english: "Controls sizing of individual flex children using flex-grow, flex-shrink, flex-basis, or the shorthand 'flex: 1'.",
    code: `.main-content {
  flex: 1; /* Bachi huyi saari screen space lega */
}
.sidebar {
  width: 250px;
  flex-shrink: 0; /* Sidebar kabhi sikudega nahi */
}`,
    preview: `<div style="display:flex; gap:6px; font-size:0.75rem;">
      <div style="flex:1; background:#1f2937; padding:4px; text-align:center; border-radius:4px; border:1px solid #4f46e5;">Main Area (flex: 1)</div>
      <div style="width:70px; background:#111; padding:4px; text-align:center; border-radius:4px; border:1px solid #374151;">Sidebar</div>
    </div>`,
    tip: "Shorthand `flex: 1;` use karein jiska matlab hota hai `flex: 1 1 0%` (auto fill space).",
    tipType: "good"
  },
  {
    title: "CSS Grid: 2D Layout System (Rows + Columns)",
    category: "layout",
    level: "intermediate",
    hinglish: "CSS Grid 2-Dimensional (rows aur columns dono) layout system hai. Dashboard, image galleries, aur complex web layouts ke liye Grid sabse behtareen hai.",
    english: "CSS Grid Layout is the most powerful 2-dimensional system in CSS, handling both columns and rows concurrently.",
    code: `.product-grid {
  display: grid;
  /* Screen ke hisab se automatic responsive columns */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}`,
    preview: `<div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:6px; font-size:0.75rem;">
      <div style="background:#1f2937; padding:6px; text-align:center; border-radius:4px;">Col 1</div>
      <div style="background:#1f2937; padding:6px; text-align:center; border-radius:4px;">Col 2</div>
      <div style="background:#1f2937; padding:6px; text-align:center; border-radius:4px;">Col 3</div>
    </div>`,
    tip: "`repeat(auto-fit, minmax(250px, 1fr))` se bina kisi media query ke responsive cards grid ban jati hai!",
    tipType: "pro"
  },
  {
    title: "CSS Positioning & Z-Index",
    category: "layout",
    level: "intermediate",
    hinglish: "Elements ki position control karne ke 5 modes: `static` (default), `relative` (apni jagah ke hisab se shift), `absolute` (parent relative ke hisab se free placement), `fixed` (screen par chipak jana), aur `sticky` (scroll hone par stick hona).",
    english: "Positioning schemes (static, relative, absolute, fixed, sticky) and stack order management via z-index.",
    code: `.parent-card {
  position: relative; /* Anchor point */
}
.badge-discount {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
}`,
    preview: `<div style="position:relative; background:#111; border:1px solid #374151; padding:12px; border-radius:6px; font-size:0.8rem;">
      <span>Card Body Content</span>
      <span style="position:absolute; top:4px; right:4px; background:#ef4444; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span>
    </div>`,
    tip: "Jab bhi kisi child par `position: absolute` lagayein, to uske parent par `position: relative` lagana na bhoolein.",
    tipType: "good"
  },
  {
    title: "Responsive Design & Media Queries",
    category: "responsive",
    level: "intermediate",
    hinglish: "Mobile, Tablet aur Desktop par alag-alag design dikhane ke liye `@media` queries use hoti hain. Mobile-First approach me pehle mobile ka code likhte hain phir `min-width` se desktop rules.",
    english: "Media queries enable content rendering tailored to various screen sizes, orientations, and resolutions.",
    code: `/* Mobile First Default */
.card-grid {
  grid-template-columns: 1fr;
}

/* Tablet & Desktop View */
@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}`,
    preview: `<div style="font-size:0.8rem; color:#38bdf8;">
      <code>@media (min-width: 768px) { ... }</code> (Mobile &rarr; Tablet &rarr; Desktop)
    </div>`,
    tip: "Hamesha Mobile-First (`min-width`) style follow karein, isse code clean aur fast rehta hai.",
    tipType: "pro"
  },
  {
    title: "Transitions & Transforms",
    category: "effects",
    level: "intermediate",
    hinglish: "Mouse hover karne par smooth animations create karta hai. `transition` property smooth change ka time batati hai, aur `transform` se rotate, scale (zoom), ya translate (move) hota hai.",
    english: "Transitions provide smooth value changes over time. Transforms modify coordinate space (scale, rotate, translate).",
    code: `.btn {
  background: #6366f1;
  transition: transform 0.2s ease, background-color 0.2s ease;
}
.btn:hover {
  background: #4f46e5;
  transform: translateY(-3px) scale(1.03);
}`,
    preview: `<button style="background:#6366f1; color:white; border:none; padding:6px 12px; border-radius:6px; cursor:pointer; transition:transform 0.2s; font-size:0.8rem;" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'">Hover to Scale Me!</button>`,
    tip: "Smoothness aur 60fps performance ke liye sirf `transform` aur `opacity` animate karein, width/height animate karne se bachein.",
    tipType: "pro"
  },

  // ==========================================
  // 3. PRO / ADVANCED (MODERN CSS & CUTTING EDGE)
  // ==========================================
  {
    title: "CSS Variables (Custom Properties)",
    category: "modern-css",
    level: "pro",
    hinglish: "Pure project me colors, spacing, aur fonts ko re-usable variables me store karne ka standard tarika. Dark mode toggle karne me sabse zyada use hota hai.",
    english: "Entities defined by CSS authors that contain specific values to be reused throughout a document with var().",
    code: `:root {
  --primary: #6366f1;
  --bg: #0f172a;
}

[data-theme="light"] {
  --bg: #ffffff;
}

body {
  background-color: var(--bg);
  color: var(--primary);
}`,
    preview: `<div style="padding:6px; background:var(--bg-primary); border:1px solid var(--accent-primary); border-radius:4px; font-size:0.8rem; color:var(--accent-primary);">
      Rendered using: <code>var(--accent-primary)</code>
    </div>`,
    tip: "JavaScript se bhi direct change kar sakte hain: `element.style.setProperty('--primary', '#10b981')`",
    tipType: "pro"
  },
  {
    title: "Keyframe Animations (@keyframes)",
    category: "modern-css",
    level: "pro",
    hinglish: "Complex multi-step animations banane ke liye `@keyframes` use hota hai jisme 0% se 100% tak ke intermediate states define kiye jate hain.",
    english: "Defines the stages and styles of the keyframes that make up an animation cycle in CSS.",
    code: `@keyframes pulseGlow {
  0%   { transform: scale(1); opacity: 0.8; }
  50%  { transform: scale(1.08); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
}

.glow-btn {
  animation: pulseGlow 2s infinite ease-in-out;
}`,
    preview: `<div style="display:inline-flex; align-items:center; gap:6px; background:rgba(99,102,241,0.2); border:1px solid #6366f1; padding:4px 10px; border-radius:9999px; font-size:0.75rem; color:#a5b4fc;">
      <span style="width:8px; height:8px; border-radius:50%; background:#10b981;"></span> Pulsing Keyframe Status
    </div>`,
    tip: "CPU par load kam karne ke liye `will-change: transform;` property ka use karein.",
    tipType: "pro"
  },
  {
    title: "The Relational ':has()' Parent Selector",
    category: "modern-css",
    level: "pro",
    hinglish: "CSS ka sabse revolutionary selector! Pehli baar bina JavaScript ke parent element ko style kiya ja sakta hai agar uske andar koi specific child maujood ho.",
    english: "The :has() CSS pseudo-class represents an element if any of the selectors passed as an argument match at least one child element.",
    code: `/* Agar card me image ho to padding kam kar do */
.card:has(img) {
  padding: 0.5rem;
}

/* Form validate hone par border green kar do */
form:has(input:invalid) button[type="submit"] {
  opacity: 0.5;
  pointer-events: none;
}`,
    preview: `<div style="font-size:0.8rem; color:#c084fc;">
      <code>.card:has(img) { ... }</code> &rarr; Parent styling based on child elements!
    </div>`,
    tip: "Modern browsers me fully baseline available hai. Complex JS DOM queries ki zarurat khatam kar deta hai.",
    tipType: "pro"
  },
  {
    title: "Container Queries (@container)",
    category: "modern-css",
    level: "pro",
    hinglish: "Media queries pure screen size ke hisab se style karti hain, jabki Container Queries element ke parent container ki width ke hisab se style karti hain! Reusable components ke liye game-changer.",
    english: "Enables applying styles to an element based on the size of the element's container rather than the viewport size.",
    code: `.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card-item {
    display: flex; /* Sidebar me 1 column, main area me 2 column automatic! */
  }
}`,
    preview: `<div style="font-size:0.8rem; color:#34d399;">
      <code>@container (min-width: 450px) { ... }</code> &rarr; Modular component-level responsiveness!
    </div>`,
    tip: "Component library banane ke liye media query se lakh guna behtar aur reusable pattern hai.",
    tipType: "pro"
  },
  {
    title: "Glassmorphism & Backdrop Filters",
    category: "modern-css",
    level: "pro",
    hinglish: "Modern frosted-glass (dhundhle kaanch) jaisa effect banane ke liye `backdrop-filter: blur()` aur semi-transparent RGBA background use kiya jata hai (jaise iOS / Windows 11 UI).",
    english: "Creates stunning frosted-glass aesthetics utilizing backdrop-filter blur and semi-transparent alpha backgrounds.",
    code: `.glass-panel {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}`,
    preview: `<div style="background:rgba(255,255,255,0.06); backdrop-filter:blur(8px); border:1px solid rgba(255,255,255,0.15); padding:8px 12px; border-radius:8px; font-size:0.8rem; color:#f8fafc;">
      Frosted Glass (Backdrop Blur: 16px)
    </div>`,
    tip: "Hamesha Safari browser support ke liye `-webkit-backdrop-filter` prefix zaroor likhein.",
    tipType: "pro"
  },
  {
    title: "CSS Clamp & Fluid Typography",
    category: "modern-css",
    level: "pro",
    hinglish: "`clamp(MIN, VAL, MAX)` se font size ya width screen size ke sath bina media queries ke smooth scale hoti hai. Minimum aur Maximum bounds fix rehte hain.",
    english: "Clamps a value between an upper and lower bound, enabling fluid typography and fluid layouts without stepped media queries.",
    code: `h1 {
  /* Min: 1.5rem (24px), Scaling: 4vw, Max: 3rem (48px) */
  font-size: clamp(1.5rem, 4vw, 3rem);
}`,
    preview: `<span style="font-size:clamp(0.9rem, 2.5vw, 1.25rem); font-weight:bold; color:#38bdf8;">Fluid Scaled Heading Text</span>`,
    tip: "Fluid typography se mobile se lekar 4K monitor tak bina kisi media query ke font perfectly scale hota hai.",
    tipType: "pro"
  }
];
