// HTML5 Master Track Data (122 Tags: Basic to Pro)
window.htmlTagsData = [
  // ==========================================
  // 1. ROOT & DOCUMENT METADATA
  // ==========================================
  {
    tag: "<!DOCTYPE html>",
    category: "metadata",
    level: "beginner",
    void: true,
    hinglish: "HTML5 document declare karne ke liye sabse pehli line hoti hai. Ye browser ko batata hai ki page modern HTML standard follow kar raha hai.",
    english: "Declares that the document is written in HTML5. Informs browsers how to render the page in standard mode instead of quirks mode.",
    code: `<!DOCTYPE html>
<html lang="en">
  ...
</html>`,
    preview: `<span style="color:#9ca3af; font-style:italic;">Document declaration (Page ke top par hidden render hota hai)</span>`,
    tip: "Hamesha apne HTML file ke sabse first line (Line 1) par <!DOCTYPE html> likhna zaroori hai.",
    tipType: "good"
  },
  {
    tag: "<html>",
    category: "metadata",
    level: "beginner",
    void: false,
    hinglish: "Puri HTML webpage ka root (main parent) element hota hai. Saara code isi ke andar wrap hota hai.",
    english: "The root element of an HTML page. All other elements must be descendants of this tag.",
    code: `<html lang="hi">
  <head>...</head>
  <body>...</body>
</html>`,
    preview: `<div style="padding:4px 8px; background:rgba(255,255,255,0.05); border-radius:4px;">&lt;html lang="en"&gt; &rarr; Root container for entire web page</div>`,
    tip: "SEO aur accessibility ke liye hamesha lang attribute lagayein (e.g., lang='en' ya lang='hi').",
    tipType: "good"
  },
  {
    tag: "<head>",
    category: "metadata",
    level: "beginner",
    void: false,
    hinglish: "Webpage ki background information (metadata) jaise title, CSS links, scripts, aur SEO tags ko store karta hai. Iska content screen par direct render nahi hota.",
    english: "Container for metadata (document title, character set, styles, scripts, and other meta information). Not visible on page.",
    code: `<head>
  <meta charset="UTF-8">
  <title>Mera Webpage</title>
  <link rel="stylesheet" href="style.css">
</head>`,
    preview: `<span style="color:#9ca3af;">Metadata container (Screen par invisible rehta hai)</span>`,
    tip: "Saare external styles and meta charset ko head ke starting me place karein taaki page quickly render ho.",
    tipType: "good"
  },
  {
    tag: "<title>",
    category: "metadata",
    level: "beginner",
    void: false,
    hinglish: "Browser tab ke upar webpage ka title/naam dikhata hai. Search Engine Optimization (SEO) aur bookmarks ke liye bahut zaroori hai.",
    english: "Defines the title of the document shown in the browser's title bar or page tab. Critical for SEO.",
    code: `<title>HTML Tags Master Guide - Learn Web Dev</title>`,
    preview: `<div style="display:inline-flex; align-items:center; gap:6px; background:#374151; padding:4px 10px; border-radius:6px; font-size:0.8rem;">
      <span style="width:8px; height:8px; border-radius:50%; background:#ef4444;"></span>
      <span>Browser Tab: <strong>HTML Tags Master Guide</strong></span>
    </div>`,
    tip: "Title hamesha 50-60 characters ke andar rakhein taaki Google search me pura show ho.",
    tipType: "good"
  },
  {
    tag: "<meta>",
    category: "metadata",
    level: "intermediate",
    void: true,
    hinglish: "Webpage ke baare me data (metadata) provide karta hai: character set (UTF-8), mobile viewport settings, keywords, author, aur Social Media preview (Open Graph).",
    english: "Defines metadata such as character set, page description, viewport settings for responsive design, and SEO tags.",
    code: `<!-- Responsive mobile screen ke liye -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Charset support -->
<meta charset="UTF-8">`,
    preview: `<code style="font-size:0.75rem; color:#a5b4fc;">&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code>`,
    tip: "Mobile responsive website banane ke liye viewport meta tag mandatory hota hai.",
    tipType: "pro"
  },
  {
    tag: "<link>",
    category: "metadata",
    level: "beginner",
    void: true,
    hinglish: "External resources jaise CSS stylesheets, Google Fonts, aur website Favicons (logos) ko HTML page se jodta hai.",
    english: "Specifies relationships between the current document and an external resource, most commonly external CSS stylesheets.",
    code: `<link rel="stylesheet" href="styles.css">
<link rel="icon" type="image/x-icon" href="favicon.ico">`,
    preview: `<span style="color:#38bdf8;">Linked CSS/Favicon: [styles.css, favicon.ico]</span>`,
    tip: "rel='preload' attribute use karke aap important fonts ya hero images ko fast load karwa sakte hain.",
    tipType: "pro"
  },
  {
    tag: "<style>",
    category: "metadata",
    level: "beginner",
    void: false,
    hinglish: "HTML file ke andar direct internal CSS likhne ke liye use hota hai.",
    english: "Used to embed internal CSS style sheets directly within the HTML document.",
    code: `<style>
  body { background-color: #111; color: #fff; }
  h1 { color: #6366f1; }
</style>`,
    preview: `<div style="color:#818cf8; font-weight:bold;">Styled Text via internal &lt;style&gt; block</div>`,
    tip: "Production projects me alag external .css file banakar link karna better practice mana jata hai.",
    tipType: "warning"
  },
  {
    tag: "<script>",
    category: "metadata",
    level: "intermediate",
    void: false,
    hinglish: "Client-side JavaScript code ko HTML me run karne ya external .js file ko load karne ke liye use hota hai.",
    english: "Used to embed or reference client-side JavaScript execution code.",
    code: `<!-- External JS file with defer -->
<script src="app.js" defer></script>

<!-- Inline script -->
<script>
  console.log("Welcome to HTML Mastery!");
</script>`,
    preview: `<button onclick="alert('Script is working!')" style="font-size:0.75rem;">Test Script Event (Click Me)</button>`,
    tip: "External scripts me hamesha 'defer' ya 'async' attribute use karein taaki HTML parsing block na ho.",
    tipType: "pro"
  },
  {
    tag: "<noscript>",
    category: "metadata",
    level: "intermediate",
    void: false,
    hinglish: "Agar user ke browser me JavaScript disabled ho ya support na kare, to unhe backup message dikhane ke liye use hota hai.",
    english: "Defines alternative content for users that have disabled scripts in their browser or have a browser that doesn't support scripts.",
    code: `<noscript>
  <div class="alert">Kripya is website ko use karne ke liye JavaScript enable karein!</div>
</noscript>`,
    preview: `<div style="background:rgba(239,68,68,0.2); border:1px solid #ef4444; padding:4px 8px; border-radius:4px; font-size:0.8rem; color:#fca5a5;">Fallback text shown only if JS is turned off</div>`,
    tip: "Single Page Apps (SPAs) me SEO crawler aur accessibility ke liye noscript tag useful hota hai.",
    tipType: "good"
  },
  {
    tag: "<base>",
    category: "metadata",
    level: "pro",
    void: true,
    hinglish: "Page ke saare relative URLs aur link targets ke liye ek common base URL set kar deta hai.",
    english: "Specifies the base URL and/or target for all relative URLs in an entire document.",
    code: `<head>
  <base href="https://example.com/assets/" target="_blank">
</head>`,
    preview: `<code style="font-size:0.75rem; color:#a78bfa;">Base URL: https://example.com/assets/</code>`,
    tip: "Document me sirf ek hi <base> tag ho sakta hai aur wo <head> ke andar hona chahiye.",
    tipType: "warning"
  },
  {
    tag: "<body>",
    category: "metadata",
    level: "beginner",
    void: false,
    hinglish: "Webpage ka main visual container. Jo bhi text, images, videos, buttons aap screen par dekhte hain, wo sab <body> ke andar hota hai.",
    english: "Contains all the visible content of an HTML document, including text, hyperlinks, images, tables, and lists.",
    code: `<body>
  <h1>Namaste Duniya!</h1>
  <p>Ye mera pehla web page hai.</p>
</body>`,
    preview: `<div style="border:1px dashed #6366f1; padding:6px 10px; border-radius:6px;">Visible Body Screen Area</div>`,
    tip: "Pure HTML page me sirf ek hi <body> tag hota hai.",
    tipType: "good"
  },

  // ==========================================
  // 2. SEMANTIC LAYOUT & SECTIONS
  // ==========================================
  {
    tag: "<header>",
    category: "layout",
    level: "intermediate",
    void: false,
    hinglish: "Page ya kisi article ke top section (logo, site title, navigation menu, author info) ko represent karta hai.",
    english: "Represents introductory content or a set of navigational links for a page or section.",
    code: `<header>
  <h1>Mera Brand</h1>
  <nav><ul><li>Home</li><li>About</li></ul></nav>
</header>`,
    preview: `<div style="background:rgba(99,102,241,0.1); border:1px solid #6366f1; padding:8px; border-radius:6px; display:flex; justify-content:space-between; align-items:center;">
      <strong>MyLogo</strong> <span style="font-size:0.75rem; color:#9ca3af;">Home | About | Contact</span>
    </div>`,
    tip: "Header sirf page ke top par hi nahi, balki har <article> ya <section> ke andar bhi introductory block ban sakta hai.",
    tipType: "pro"
  },
  {
    tag: "<nav>",
    category: "layout",
    level: "intermediate",
    void: false,
    hinglish: "Website ke primary navigation links (jaise Home, Services, Contact, pagination) ko enclose karne ke liye semantic tag.",
    english: "Defines a section of navigation links. Screen readers use this to help blind users skip straight to navigation.",
    code: `<nav aria-label="Main Menu">
  <a href="#home">Home</a> |
  <a href="#about">About</a> |
  <a href="#contact">Contact</a>
</nav>`,
    preview: `<nav style="display:flex; gap:10px; font-size:0.85rem;"><a href="#" style="color:#38bdf8;">Home</a> &bull; <a href="#" style="color:#38bdf8;">Docs</a> &bull; <a href="#" style="color:#38bdf8;">Pricing</a></nav>`,
    tip: "Har link ko <nav> me wrap na karein; sirf major navigation blocks ke liye <nav> tag use karein.",
    tipType: "good"
  },
  {
    tag: "<main>",
    category: "layout",
    level: "intermediate",
    void: false,
    hinglish: "Webpage ke central, unique content ko wrap karta hai. Header, footer, aur sidebars iske bahar hone chahiye.",
    english: "Specifies the primary unique content of the document. Must not contain repeated header/footer items.",
    code: `<main>
  <h1>HTML Sikhne Ki Guide</h1>
  <p>Is page par sabhi basic se advance concepts hain...</p>
</main>`,
    preview: `<div style="border:1px solid #10b981; padding:8px; border-radius:6px; background:rgba(16,185,129,0.05);">&lt;main&gt; Page's Core Unique Content Area</div>`,
    tip: "Pure HTML page me sirf EK hi visible <main> tag hona chahiye, ye SEO aur Accessibility ke liye mandatory rule hai.",
    tipType: "pro"
  },
  {
    tag: "<section>",
    category: "layout",
    level: "intermediate",
    void: false,
    hinglish: "Page ke alag-alag thematic topics/sections ko divide karne ke liye use hota hai (jaise 'Features', 'Pricing', 'Reviews').",
    english: "Represents a standalone section of content that has a thematic grouping, typically with its own heading.",
    code: `<section>
  <h2>Features</h2>
  <p>Humari service ke top features ye hain...</p>
</section>`,
    preview: `<section style="border-left:3px solid #6366f1; padding-left:8px;"><h4 style="margin:0; color:#818cf8;">Pricing Section</h4><span style="font-size:0.75rem; color:#9ca3af;">Plans starting at ₹0</span></section>`,
    tip: "Section ke andar hamesha ek heading (h2-h6) zaroor honi chahiye, generic styling ke liye <div> use karein.",
    tipType: "good"
  },
  {
    tag: "<article>",
    category: "layout",
    level: "intermediate",
    void: false,
    hinglish: "Ek independent aur self-contained content unit (jaise blog post, news story, forum comment, product card).",
    english: "Specifies independent, self-contained content that can be distributed or reused independently (e.g. blog post, card).",
    code: `<article>
  <h3>HTML5 Kya Hai?</h3>
  <p>HTML5 web development ki modern foundation hai...</p>
</article>`,
    preview: `<article style="border:1px solid #374151; padding:8px; border-radius:6px; background:#111827;">
      <h5 style="margin:0 0 4px 0; color:#38bdf8;">Tech Blog Post #42</h5>
      <p style="margin:0; font-size:0.75rem; color:#9ca3af;">Independent distributable article card...</p>
    </article>`,
    tip: "Agar kisi component ko RSS feed me alag se bheja ja sake, to wo <article> kehlane ke kabil hai.",
    tipType: "pro"
  },
  {
    tag: "<aside>",
    category: "layout",
    level: "intermediate",
    void: false,
    hinglish: "Main content se related lekin alag content jaise sidebar, advertisements, related articles list, ya author bio.",
    english: "Defines content tangentially related to the content around it, often placed as a sidebar or callout box.",
    code: `<aside>
  <h4>Related Links</h4>
  <ul><li>CSS Basics</li><li>JavaScript Guide</li></ul>
</aside>`,
    preview: `<aside style="background:rgba(245,158,11,0.1); border:1px dashed #f59e0b; padding:6px 10px; border-radius:6px; font-size:0.8rem; color:#fde68a;">
      Sidebar Callout: <strong>Related Topics</strong>
    </aside>`,
    tip: "Callout quotes ya side notices ke liye <aside> perfect tag hai.",
    tipType: "good"
  },
  {
    tag: "<footer>",
    category: "layout",
    level: "intermediate",
    void: false,
    hinglish: "Page ya article ka bottom footer area jisme copyright, privacy policy, contact details, aur social links hote hain.",
    english: "Defines a footer for a document or section, typically containing author, copyright, and contact details.",
    code: `<footer>
  <p>&copy; 2026 Mera Brand. All rights reserved.</p>
  <a href="/privacy">Privacy Policy</a>
</footer>`,
    preview: `<footer style="border-top:1px solid #374151; padding-top:6px; font-size:0.75rem; color:#9ca3af; text-align:center;">
      &copy; 2026 Dev Portal | Terms &bull; Privacy
    </footer>`,
    tip: "Footer pure page ka bhi ho sakta hai aur kisi individual <article> card ka bhi.",
    tipType: "good"
  },
  {
    tag: "<address>",
    category: "layout",
    level: "intermediate",
    void: false,
    hinglish: "Website ke owner ya article ke author ki contact info (email, phone, physical address, social link) dene ke liye semantic tag.",
    english: "Supplies contact information for the author/owner of a document or an article.",
    code: `<address>
  Contact: <a href="mailto:admin@example.com">admin@example.com</a><br>
  New Delhi, India
</address>`,
    preview: `<address style="font-size:0.8rem; color:#9ca3af; font-style:normal;">Contact: <a href="#" style="color:#38bdf8;">help@example.com</a>, New Delhi</address>`,
    tip: "Sirf author ki contact info ke liye use karein, kisi random postal address ke liye nahi.",
    tipType: "warning"
  },
  {
    tag: "<h1> to <h6>",
    category: "layout",
    level: "beginner",
    void: false,
    hinglish: "Headings (Titles) banane ke liye tags. <h1> sabse bada aur important heading hota hai, aur <h6> sabse chhota.",
    english: "Heading levels 1 through 6, defining document hierarchy. H1 has the highest priority and H6 lowest.",
    code: `<h1>Main Page Title (H1)</h1>
<h2>Major Topic (H2)</h2>
<h3>Subtopic (H3)</h3>`,
    preview: `<div style="display:flex; flex-direction:column; gap:4px;">
      <span style="font-size:1.15rem; font-weight:800; color:#38bdf8;">H1 Heading Sample</span>
      <span style="font-size:0.95rem; font-weight:700; color:#818cf8;">H2 Subheading Sample</span>
      <span style="font-size:0.85rem; font-weight:600; color:#c084fc;">H3 Section Sample</span>
    </div>`,
    tip: "Page par hamesha sirf EK hi <h1> tag hona chahiye taaki Google SEO structure clear rahe.",
    tipType: "good"
  },
  {
    tag: "<hgroup>",
    category: "layout",
    level: "pro",
    void: false,
    hinglish: "Ek heading ko uske subtitle ya paragraph ke sath logically group karne ke liye modern HTML5 element.",
    english: "Groups a heading with subtitles, secondary headings, or an alternative title tag.",
    code: `<hgroup>
  <h2>Complete Web Dev</h2>
  <p>Zero se Hero banne ki guide</p>
</hgroup>`,
    preview: `<hgroup style="border-left:3px solid #8b5cf6; padding-left:8px;">
      <h4 style="margin:0; color:#c4b5fd;">Mastering HTML5</h4>
      <p style="margin:0; font-size:0.75rem; color:#9ca3af;">A complete modern guide</p>
    </hgroup>`,
    tip: "HTML5.2 specification me subtitle paragraphs ko <hgroup> me wrap karna fully valid standard hai.",
    tipType: "pro"
  },
  {
    tag: "<search>",
    category: "layout",
    level: "pro",
    void: false,
    hinglish: "Search bar ya filtering form ko represent karne ke liye modern semantic HTML tag (role='search' ki jagah native tag).",
    english: "Modern semantic container representing parts of the document specifically for searching or filtering.",
    code: `<search>
  <form action="/search">
    <input type="search" placeholder="Search tags...">
  </form>
</search>`,
    preview: `<div style="display:flex; gap:6px;">
      <input type="search" placeholder="Search preview..." style="padding:4px 8px; border-radius:4px; font-size:0.8rem; background:#111; border:1px solid #444; color:#fff;">
      <button style="padding:4px 8px; font-size:0.75rem;">Find</button>
    </div>`,
    tip: "Ye tag 2023 me Baseline HTML standard bana hai; screen readers automatically ise identify karte hain.",
    tipType: "pro"
  },

  // ==========================================
  // 3. TEXT & INLINE FORMATTING
  // ==========================================
  {
    tag: "<p>",
    category: "text",
    level: "beginner",
    void: false,
    hinglish: "Text ka paragraph likhne ke liye use hota hai. Browser iske upar aur niche automatic margin/space add karta hai.",
    english: "Defines a paragraph of text. Automatically provides vertical margins around content.",
    code: `<p>HTML ek markup language hai jisse web pages ka structure banta hai.</p>`,
    preview: `<p style="margin:0; font-size:0.85rem;">This is standard paragraph text with proper line-height.</p>`,
    tip: "Block elements jaise <div> ya <table> ko <p> ke andar nest na karein.",
    tipType: "good"
  },
  {
    tag: "<div>",
    category: "text",
    level: "beginner",
    void: false,
    hinglish: "Generic block-level division container. Jab koi specific semantic tag na mile aur CSS styling ya layout grouping karni ho tab use hota hai.",
    english: "Generic block-level container with no inherent semantic meaning. Used for CSS styling and layout grouping.",
    code: `<div class="card-box">
  <h3>Card Title</h3>
  <p>Card description text...</p>
</div>`,
    preview: `<div style="background:rgba(255,255,255,0.05); padding:6px 10px; border-radius:4px; border:1px dashed #666; font-size:0.8rem;">
      &lt;div&gt; Generic Block Box
    </div>`,
    tip: "Overuse ('Div Soup') se bachein. Agar semantic tag jaise <article> ya <section> fit ho to use pehle priority dein.",
    tipType: "warning"
  },
  {
    tag: "<span>",
    category: "text",
    level: "beginner",
    void: false,
    hinglish: "Generic inline-level container. Paragraph ya line ke kisi specific word/text ko style ya color dene ke liye use hota hai.",
    english: "Generic inline container for phrasing content, which doesn't inherently represent anything. Ideal for inline CSS styling.",
    code: `<p>Mera favourite color <span style="color:red; font-weight:bold;">Laal</span> hai.</p>`,
    preview: `<p style="margin:0; font-size:0.85rem;">Mera favorite color <span style="color:#ef4444; font-weight:bold;">Red</span> hai!</p>`,
    tip: "Span inline hota hai, isliye is par top/bottom margin tab tak apply nahi hoti jab tak display change na karein.",
    tipType: "good"
  },
  {
    tag: "<br>",
    category: "text",
    level: "beginner",
    void: true,
    hinglish: "Line break dene ke liye use hota hai (Enter key jaisa behavior). Iska koi closing tag nahi hota.",
    english: "Produces a single line break in text (carriage-return). It is an empty/void element.",
    code: `<p>Line 1<br>Line 2<br>Line 3</p>`,
    preview: `<div style="font-size:0.8rem; line-height:1.3;">Pehli Line<br><span style="color:#a78bfa;">Dusri Line (&lt;br&gt; ke baad)</span></div>`,
    tip: "Spacing aur margin badhane ke liye multiple <br> lagane ki bajaye CSS margin/padding use karein.",
    tipType: "warning"
  },
  {
    tag: "<hr>",
    category: "text",
    level: "beginner",
    void: true,
    hinglish: "Thematic break / Horizontal dividing line banane ke liye use hota hai jisse do alag topics alag dikhein.",
    english: "Represents a thematic break between paragraph-level elements (renders as a horizontal line by default).",
    code: `<p>Pehla chapter khatam.</p>
<hr>
<p>Dusra chapter shuru.</p>`,
    preview: `<div style="font-size:0.8rem;">Topic A <hr style="border:0; height:1px; background:#4f46e5; margin:4px 0;"> Topic B</div>`,
    tip: "Modern HTML5 me <hr> sirf line nahi balki story/content me topic change represent karta hai.",
    tipType: "good"
  },
  {
    tag: "<strong>",
    category: "text",
    level: "beginner",
    void: false,
    hinglish: "Text ko bold karta hai aur sath hi browser/screen reader ko batata hai ki ye important warning ya keyword hai.",
    english: "Indicates that its contents have strong importance, seriousness, or urgency (rendered in bold).",
    code: `<p><strong>Dhyan dein:</strong> Password kisi ke sath share na karein!</p>`,
    preview: `<span style="font-size:0.85rem;"><strong>Alert:</strong> Very important highlighted notice!</span>`,
    tip: "Sirf dikhane ke liye bold karna ho to <b> use karein, lekin importance dikhani ho to <strong> lagayein.",
    tipType: "good"
  },
  {
    tag: "<b>",
    category: "text",
    level: "beginner",
    void: false,
    hinglish: "Text ko visually bold karta hai bina kisi extra semantic importance ke (jaise product review me keyword highlights).",
    english: "Draws attention to the element's contents without conveying extra importance or urgency.",
    code: `<p>Ticket price is <b>₹500</b> only.</p>`,
    preview: `<span style="font-size:0.85rem;">Normal text with <b>Bold keyword</b> highlighted.</span>`,
    tip: "SEO aur screen readers ke liye <strong> zyada faydemand hota hai.",
    tipType: "warning"
  },
  {
    tag: "<em>",
    category: "text",
    level: "beginner",
    void: false,
    hinglish: "Text par emphasis (stress) dene ke liye use hota hai (Italic style me render hota hai). Screen readers is word par audio stress dete hain.",
    english: "Marks text that has stress emphasis, typically displayed in italic type.",
    code: `<p>Maine <em>kaha</em> tha ki time par aana!</p>`,
    preview: `<span style="font-size:0.85rem;">You <em>must</em> save your progress regularly.</span>`,
    tip: "Screen readers <em> word ko thoda zor dekar bolte hain.",
    tipType: "good"
  },
  {
    tag: "<i>",
    category: "text",
    level: "beginner",
    void: false,
    hinglish: "Text ko italic karta hai for alternate voice, technical terms, foreign words, ya FontAwesome icons ke liye.",
    english: "Represents a range of text with an alternate voice or mood, foreign words, technical terms, or icon fonts.",
    code: `<p>Species name is <i>Homo sapiens</i>.</p>`,
    preview: `<span style="font-size:0.85rem;">Scientific name: <i>Panthera leo</i> (Lion)</span>`,
    tip: "Web developers Font Awesome icons lagane ke liye <i> tag standard tarike se use karte hain.",
    tipType: "good"
  },
  {
    tag: "<mark>",
    category: "text",
    level: "intermediate",
    void: false,
    hinglish: "Text ko highlighter pen ki tarah background me highlight karta hai (search result matching me perfect).",
    english: "Represents text marked or highlighted for reference or notation purposes, due to its relevance in another context.",
    code: `<p>Search result me <mark>HTML</mark> tag match hua.</p>`,
    preview: `<span style="font-size:0.85rem;">Found 3 occurrences of <mark>Antigravity</mark> in document.</span>`,
    tip: "Search engines ke live query highlighter results me <mark> best tag hai.",
    tipType: "pro"
  },
  {
    tag: "<small>",
    category: "text",
    level: "beginner",
    void: false,
    hinglish: "Text ko chhota karta hai for side-comments, copyrights, legal terms, aur disclaimers.",
    english: "Represents side-comments and small print, such as copyright, disclaimer, or legal text.",
    code: `<p><small>&copy; 2026 Terms and conditions apply.</small></p>`,
    preview: `<small style="color:#9ca3af;">&copy; 2026 Dev Studio. All rights reserved.</small>`,
    tip: "Terms and condition links ya copyright text me ise semantic roop se lagayein.",
    tipType: "good"
  },
  {
    tag: "<del>",
    category: "text",
    level: "intermediate",
    void: false,
    hinglish: "Text par strikethrough line khichta hai aur batata hai ki ye text document se remove/delete ho chuka hai (jaise purani price).",
    english: "Represents a range of text that has been deleted from a document. Useful for showing discounted old prices.",
    code: `<p>Price: <del>₹999</del> ₹499</p>`,
    preview: `<span style="font-size:0.85rem;">Special Deal: <del style="color:#ef4444;">₹999</del> <strong style="color:#10b981;">₹499</strong></span>`,
    tip: "E-commerce websites me original price cut dikhane ke liye <del> standard semantic tag hai.",
    tipType: "good"
  },
  {
    tag: "<ins>",
    category: "text",
    level: "intermediate",
    void: false,
    hinglish: "Batata hai ki ye text document me naya add kiya gaya hai (underlined render hota hai). Aksar <del> ke sath use hota hai.",
    english: "Represents a range of text that has been added/inserted into a document.",
    code: `<p>Purana status: <del>Pending</del> <ins>Approved</ins></p>`,
    preview: `<span style="font-size:0.85rem;">Status: <del>Draft</del> <ins style="color:#10b981;">Published</ins></span>`,
    tip: "Document revision tracking aur blog update logs ke liye bahut useful hai.",
    tipType: "pro"
  },
  {
    tag: "<sub>",
    category: "text",
    level: "beginner",
    void: false,
    hinglish: "Subscript text (text ko normal baseline se thoda niche aur chhota karta hai), jaise chemical formula H₂O.",
    english: "Specifies inline text which should be displayed as subscript (e.g. chemical formulas like H₂O).",
    code: `<p>Paani ka formula: H<sub>2</sub>O</p>`,
    preview: `<span style="font-size:0.9rem;">Chemical Formula: H<sub>2</sub>O and CO<sub>2</sub></span>`,
    tip: "Science aur chemistry formulas render karne ke liye best tag hai.",
    tipType: "good"
  },
  {
    tag: "<sup>",
    category: "text",
    level: "beginner",
    void: false,
    hinglish: "Superscript text (text ko normal baseline se thoda upar aur chhota karta hai), jaise math powers (x²) ya footnotes.",
    english: "Specifies inline text which should be displayed as superscript (e.g. math powers like X² or 1st, 2nd).",
    code: `<p>Math equation: E = mc<sup>2</sup></p>`,
    preview: `<span style="font-size:0.9rem;">Math: (a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup></span>`,
    tip: "Dates (1<sup>st</sup>, 2<sup>nd</sup>) aur mathematical powers ke liye standard tag hai.",
    tipType: "good"
  },
  {
    tag: "<s>",
    category: "text",
    level: "intermediate",
    void: false,
    hinglish: "Text par strikethrough banata hai ye dikhane ke liye ki information ab accurate ya relevant nahi rahi.",
    english: "Renders text with a strikethrough to represent things that are no longer accurate or no longer relevant.",
    code: `<p><s>Offer ends on Monday</s> (Extended till Friday!)</p>`,
    preview: `<span style="font-size:0.85rem;"><s>Old Schedule</s> &rarr; Updated Schedule</span>`,
    tip: "Agar editorial document revision dikhana ho to <del> use karein, baaki inaccurate info ke liye <s>.",
    tipType: "warning"
  },
  {
    tag: "<u>",
    category: "text",
    level: "intermediate",
    void: false,
    hinglish: "Text ke niche underline banata hai (unarticulated annotation jaise spelling mistake ya proper name).",
    english: "Represents an unarticulated, non-textual annotation (such as labeling a misspelled word).",
    code: `<p>This is a <u>mispelled</u> word.</p>`,
    preview: `<span style="font-size:0.85rem;">Grammar alert: Check this <u>worrd</u> spelling.</span>`,
    tip: "Users underline ko hyperlink samajh sakte hain, isliye styling me dhyan rakhein.",
    tipType: "warning"
  },
  {
    tag: "<pre>",
    category: "text",
    level: "beginner",
    void: false,
    hinglish: "Preformatted text. Iske andar likhe gaye spaces, tabs, aur line breaks bilkul waise hi render hote hain jaise aapne code me type kiye the.",
    english: "Represents preformatted text which is to be presented exactly as written in the HTML file (preserves spaces and line breaks).",
    code: `<pre>
  Line 1   (3 spaces)
  Line 2   (preserved!)
</pre>`,
    preview: `<pre style="font-size:0.75rem; background:#000; padding:4px 8px; border-radius:4px; margin:0; color:#38bdf8;">Item    Price   Qty
Mango   ₹50     2kg</pre>`,
    tip: "Code snippets render karne ke liye <pre><code>...</code></pre> best practice hai.",
    tipType: "good"
  },
  {
    tag: "<blockquote>",
    category: "text",
    level: "intermediate",
    void: false,
    hinglish: "Kisi dusre source ya author ka quotation (bada quote) display karne ke liye use hota hai (left margin ke sath).",
    english: "Indicates that the enclosed text is an extended quotation from another source.",
    code: `<blockquote cite="https://example.com/quote">
  "Knowledge is power."
</blockquote>`,
    preview: `<blockquote style="border-left:3px solid #6366f1; padding-left:10px; margin:0; font-style:italic; font-size:0.85rem; color:#cbd5e1;">
      "Simplicity is the soul of efficiency." — Austin Freeman
    </blockquote>`,
    tip: "Author/source ka URL cite attribute me pass karna good semantic practice hai.",
    tipType: "good"
  },
  {
    tag: "<q>",
    category: "text",
    level: "intermediate",
    void: false,
    hinglish: "Chhota inline quotation. Browser iske dono taraf automatically quotation marks (\" \") laga deta hai.",
    english: "Indicates that the enclosed text is a short inline quotation. Automatically inserts quote marks.",
    code: `<p>APJ Abdul Kalam ne kaha: <q>Sapne wo nahi jo sote huye dekhe jayein...</q></p>`,
    preview: `<span style="font-size:0.85rem;">He said, <q>Never stop learning.</q></span>`,
    tip: "Manual quote marks lagane ki bajaye <q> use karein taaki locale ke hisab se smart quotes ban sakein.",
    tipType: "pro"
  },
  {
    tag: "<cite>",
    category: "text",
    level: "intermediate",
    void: false,
    hinglish: "Kisi creative work (jaise book, movie, research paper, geet) ke title/name ko refer karne ke liye use hota hai.",
    english: "Used to describe a reference to a creative work (book, paper, essay, poem, score, film, song).",
    code: `<p>Maine <cite>The Alchemist</cite> novel padhi hai.</p>`,
    preview: `<span style="font-size:0.85rem;">Author of <cite style="color:#38bdf8;">Clean Code</cite> is Robert C. Martin.</span>`,
    tip: "Kisi insaan ke naam ke liye <cite> use na karein, sirf unke kaam/book/film ke title ke liye karein.",
    tipType: "warning"
  },
  {
    tag: "<abbr>",
    category: "text",
    level: "intermediate",
    void: false,
    hinglish: "Abbreviation ya acronym (short forms) define karta hai. Mouse hover karne par title me full form popup hota hai.",
    english: "Represents an abbreviation or acronym. Shows full expansion on hover via title attribute.",
    code: `<abbr title="HyperText Markup Language">HTML</abbr>`,
    preview: `<span style="font-size:0.85rem;">We build sites using <abbr title="HyperText Markup Language" style="cursor:help; border-bottom:1px dotted #818cf8; color:#818cf8;">HTML</abbr> and CSS. (Hover over it)</span>`,
    tip: "Accessibility aur screen readers ke liye har short form me <abbr title='...'> lagana helpful hota hai.",
    tipType: "pro"
  },
  {
    tag: "<time>",
    category: "text",
    level: "intermediate",
    void: false,
    hinglish: "Date aur time ko machine-readable format me display karta hai jisse search engines aur calendar apps samajh sakein.",
    english: "Represents a specific period in time or a date, readable by search engines and calendar software via datetime.",
    code: `<time datetime="2026-09-02">2 September 2026</time>`,
    preview: `<span style="font-size:0.85rem;">Published on: <time datetime="2026-09-02" style="color:#a78bfa; font-weight:600;">2 Sep 2026</time></span>`,
    tip: "Blog post dates me datetime='YYYY-MM-DD' attribute SEO indexing ke liye crucial hota hai.",
    tipType: "pro"
  },
  {
    tag: "<code>",
    category: "text",
    level: "beginner",
    void: false,
    hinglish: "Computer programming code snippet ko monospace font me inline display karne ke liye use hota hai.",
    english: "Displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code.",
    code: `<p>Variable declare karne ke liye <code>const pi = 3.14;</code> likhein.</p>`,
    preview: `<span style="font-size:0.85rem;">Call <code style="background:#000; color:#38bdf8; padding:2px 6px; border-radius:4px; font-size:0.8rem;">git status</code> in terminal.</span>`,
    tip: "Multi-line code blocks ke liye <pre><code>...</code></pre> format use karein.",
    tipType: "good"
  },
  {
    tag: "<kbd>",
    category: "text",
    level: "intermediate",
    void: false,
    hinglish: "Keyboard input shortcuts (jaise Ctrl + C, Enter) ko visually key button style me represent karta hai.",
    english: "Represents a span of inline text denoting textual user input from a keyboard or voice command.",
    code: `<p>Copy karne ke liye <kbd>Ctrl</kbd> + <kbd>C</kbd> dabayein.</p>`,
    preview: `<span style="font-size:0.85rem;">Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</span>`,
    tip: "Documentation aur tutorial websites me keyboard shortcuts batane ke liye best UI tag hai.",
    tipType: "pro"
  },
  {
    tag: "<samp>",
    category: "text",
    level: "intermediate",
    void: false,
    hinglish: "Computer program, script, ya terminal se aane wale sample output ko display karta hai.",
    english: "Used to enclose inline text which represents sample (or quoted) output from a computer program.",
    code: `<samp>Error 404: File Not Found</samp>`,
    preview: `<samp style="background:#000; color:#f87171; padding:2px 6px; border-radius:4px; font-size:0.8rem;">[SUCCESS]: 200 OK</samp>`,
    tip: "Console aur command line tutorial logs show karne ke liye perfect tag hai.",
    tipType: "pro"
  },
  {
    tag: "<var>",
    category: "text",
    level: "intermediate",
    void: false,
    hinglish: "Mathematical expression ya programming code ke variable name ko italicized format me represent karta hai.",
    english: "Represents the name of a variable in a mathematical expression or a programming context.",
    code: `<p>Area formula: <var>A</var> = &pi; &times; <var>r</var><sup>2</sup></p>`,
    preview: `<span style="font-size:0.85rem;">In equation, <var style="color:#38bdf8; font-weight:600;">x</var> denotes distance.</span>`,
    tip: "Math formulas aur scientific documentation me variables ke liye use hota hai.",
    tipType: "good"
  },
  {
    tag: "<dfn>",
    category: "text",
    level: "pro",
    void: false,
    hinglish: "Kisi term ki formal definition jaha pehli baar introduce ho rahi ho, us defining instance ko mark karta hai.",
    english: "Used to indicate the term that is being defined within the context of a definition phrase or sentence.",
    code: `<p><dfn>API</dfn> do software applications ke bich communication ka bridge hota hai.</p>`,
    preview: `<span style="font-size:0.85rem;"><dfn style="font-weight:bold; color:#a78bfa;">CSS</dfn> stands for Cascading Style Sheets.</span>`,
    tip: "Glossaries aur dictionary apps banane ke liye perfect semantic element.",
    tipType: "pro"
  },
  {
    tag: "<bdo>",
    category: "text",
    level: "pro",
    void: false,
    hinglish: "Bi-Directional Override: Text ki normal writing direction ko zabardasti change karta hai (LTR se RTL ya RTL se LTR).",
    english: "Bi-Directional Override tag. Overrides the current directionality of text (e.g. renders text in reverse if rtl).",
    code: `<bdo dir="rtl">Ye text ulti taraf se likha aayega</bdo>`,
    preview: `<bdo dir="rtl" style="color:#38bdf8; font-size:0.85rem;">Reverse direction text preview</bdo>`,
    tip: "Arabic, Urdu, Hebrew jaise right-to-left scripts ke custom orientation ke liye use hota hai.",
    tipType: "pro"
  },
  {
    tag: "<bdi>",
    category: "text",
    level: "pro",
    void: false,
    hinglish: "Bi-Directional Isolation: Kisi dynamic user-generated text ko isolate karta hai taaki wo aas-paas ke text ki direction kharab na kare.",
    english: "Bi-Directional Isolation. Tells the browser's bidirectional algorithm to treat the text in isolation from surroundings.",
    code: `<p>User: <bdi>مرحبا</bdi> ne comment kiya.</p>`,
    preview: `<span style="font-size:0.85rem;">User <bdi style="color:#a78bfa; font-weight:bold;">علي</bdi> posted: 5 points</span>`,
    tip: "International multilingual websites aur user comments display karte waqt layout break hone se bachata hai.",
    tipType: "pro"
  },
  {
    tag: "<ruby>",
    category: "text",
    level: "pro",
    void: false,
    hinglish: "East Asian (Japanese Kanji, Chinese Hanzi) characters ke upar pronunciation guides/furigana dikhane ke liye use hota hai.",
    english: "Used to present small annotations or pronunciation guides above characters (common in Japanese Kanji/Chinese).",
    code: `<ruby>
  漢 <rt>かん</rt>
  字 <rt>じ</rt>
</ruby>`,
    preview: `<ruby style="font-size:1.1rem; color:#f9fafb;">漢<rt style="font-size:0.65rem; color:#38bdf8;">kan</rt>字<rt style="font-size:0.65rem; color:#38bdf8;">ji</rt></ruby>`,
    tip: "Language learning apps me words ke upar pronunciation dikhane ke liye awesome tag hai.",
    tipType: "pro"
  },
  {
    tag: "<rt>",
    category: "text",
    level: "pro",
    void: false,
    hinglish: "<ruby> element ke andar aane wala actual pronunciation text provide karta hai.",
    english: "Embraces pronunciation details for ruby annotations.",
    code: `<ruby>明日 <rt>ashita</rt></ruby>`,
    preview: `<ruby style="font-size:1rem;">Tokyo <rt style="font-size:0.65rem; color:#10b981;">とうきょう</rt></ruby>`,
    tip: "Hamesha <ruby> element ke andar hi use karein.",
    tipType: "good"
  },
  {
    tag: "<rp>",
    category: "text",
    level: "pro",
    void: false,
    hinglish: "Agar user ka browser <ruby> support na kare, to fallback parenthesis () dikhane ke liye use hota hai.",
    english: "Provides parentheses around a ruby text component of a ruby annotation, to be shown by browsers that lack support.",
    code: `<ruby>漢 <rp>(</rp><rt>kan</rt><rp>)</rp></ruby>`,
    preview: `<span style="font-size:0.8rem; color:#9ca3af;">Fallback brackets for older browsers without ruby engine</span>`,
    tip: "Graceful degradation ke liye ruby tags me rp tag include karna recommend kiya jata hai.",
    tipType: "pro"
  },
  {
    tag: "<data>",
    category: "text",
    level: "pro",
    void: false,
    hinglish: "Screen par readable text dikhata hai aur sath me machine-readable value (value attribute) attach karta hai.",
    english: "Links a given piece of content with a machine-readable translation via its value attribute.",
    code: `<p>Product: <data value="SKU-8921">Wireless Mouse</data></p>`,
    preview: `<span style="font-size:0.85rem;">Item: <data value="SKU-999" style="color:#10b981; font-weight:600;">Gaming Headset</data></span>`,
    tip: "Search crawlers aur internal scripts ke liye data attribute binding ka clean standard tarika hai.",
    tipType: "pro"
  },
  {
    tag: "<wbr>",
    category: "text",
    level: "intermediate",
    void: true,
    hinglish: "Word Break Opportunity: Browser ko batata hai ki agar screen chhoti ho to bohot lambe word ya URL ko yaha se tod kar nayi line me wrap kiya ja sakta hai.",
    english: "Specifies where in a text it would be ok to add a line-break if needed on smaller screens.",
    code: `<p>Super<wbr>cali<wbr>fragi<wbr>listic<wbr>expiali<wbr>docious</p>`,
    preview: `<span style="font-size:0.8rem; word-break:break-all;">very<wbr>long<wbr>domain<wbr>name<wbr>.com</span>`,
    tip: "Mobile screen par long URLs ya file paths overflow hone se rokne ke liye <wbr> sabse clean solution hai.",
    tipType: "pro"
  },

  // ==========================================
  // 4. LISTS
  // ==========================================
  {
    tag: "<ul>",
    category: "lists",
    level: "beginner",
    void: false,
    hinglish: "Unordered list (bullet points wali list) create karta hai. Iska order fix nahi hota.",
    english: "Represents an unordered list of items, typically rendered as a bulleted list.",
    code: `<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>`,
    preview: `<ul style="margin:0; padding-left:18px; font-size:0.85rem;"><li>React</li><li>Next.js</li></ul>`,
    tip: "CSS me list-style: none karke navigation menus banane ke liye sabse common tag hai.",
    tipType: "good"
  },
  {
    tag: "<ol>",
    category: "lists",
    level: "beginner",
    void: false,
    hinglish: "Ordered list (numbering wali list: 1, 2, 3 ya A, B, C) banata hai jisme steps ya ranking matter karti hai.",
    english: "Represents an ordered list of items, typically rendered as a numbered list. Supports type and start attributes.",
    code: `<ol start="1">
  <li>First Step</li>
  <li>Second Step</li>
</ol>`,
    preview: `<ol style="margin:0; padding-left:18px; font-size:0.85rem;"><li>Plan Code</li><li>Build UI</li></ol>`,
    tip: "reversed attribute lagakar aap 3, 2, 1 ulti counting wali list bhi bana sakte hain.",
    tipType: "pro"
  },
  {
    tag: "<li>",
    category: "lists",
    level: "beginner",
    void: false,
    hinglish: "List Item: Kisi bhi <ul> ya <ol> ke andar individual item define karta hai.",
    english: "Used to represent an item in a list. Must be contained in a parent element: <ol>, <ul>, or <menu>.",
    code: `<li>Web Development</li>`,
    preview: `<span style="font-size:0.85rem;">&bull; Individual &lt;li&gt; list bullet</span>`,
    tip: "<li> hamesha <ul> ya <ol> ke direct child ke roop me hona chahiye.",
    tipType: "good"
  },
  {
    tag: "<dl>",
    category: "lists",
    level: "intermediate",
    void: false,
    hinglish: "Description / Definition list banata hai jisme har item ka ek Name/Term (<dt>) aur uska Description (<dd>) hota hai.",
    english: "Represents a description list of groups of terms (<dt>) and descriptions (<dd>). Perfect for glossaries or key-value data.",
    code: `<dl>
  <dt>HTML</dt>
  <dd>Webpage structure markup language</dd>
</dl>`,
    preview: `<dl style="margin:0; font-size:0.8rem;"><dt style="font-weight:bold; color:#38bdf8;">RAM</dt><dd style="margin-left:12px; color:#9ca3af;">Random Access Memory</dd></dl>`,
    tip: "Metadata, product specs (Size: XL, Color: Blue), aur FAQs ke liye <ul> se zyada semantic hai.",
    tipType: "pro"
  },
  {
    tag: "<dt>",
    category: "lists",
    level: "intermediate",
    void: false,
    hinglish: "Description list me Term ya Concept ka naam define karta hai.",
    english: "Specifies a term in a description or definition list (<dl>).",
    code: `<dt>CSS</dt>`,
    preview: `<dt style="font-weight:bold; color:#818cf8; font-size:0.85rem;">JavaScript</dt>`,
    tip: "Ek <dt> ke multiple <dd> descriptions bhi ho sakte hain.",
    tipType: "good"
  },
  {
    tag: "<dd>",
    category: "lists",
    level: "intermediate",
    void: false,
    hinglish: "Description list me diye gaye term ka explanation ya description provide karta hai.",
    english: "Provides the description, definition, or value for the preceding term (<dt>) in a description list.",
    code: `<dd>Webpage styling language</dd>`,
    preview: `<dd style="margin:0; font-size:0.8rem; color:#9ca3af;">High-level versatile programming language.</dd>`,
    tip: "Screen readers term aur definition ke relationship ko accurately read karte hain.",
    tipType: "good"
  },
  {
    tag: "<menu>",
    category: "lists",
    level: "intermediate",
    void: false,
    hinglish: "Interactive commands ya toolbar buttons ki list banane ke liye semantic tag (modern HTML me <ul> ka semantic sibling).",
    english: "Semantic alternative to <ul> for representing a toolbar or interactive list of menu command items.",
    code: `<menu>
  <li><button>Copy</button></li>
  <li><button>Paste</button></li>
</menu>`,
    preview: `<menu style="display:flex; gap:6px; list-style:none; padding:0; margin:0;"><button style="font-size:0.75rem;">Cut</button><button style="font-size:0.75rem;">Copy</button></menu>`,
    tip: "Application toolbars aur action menus ke liye standard semantic tag hai.",
    tipType: "pro"
  },

  // ==========================================
  // 5. LINKS & NAVIGATION
  // ==========================================
  {
    tag: "<a>",
    category: "links",
    level: "beginner",
    void: false,
    hinglish: "Anchor / Hyperlink tag. Isse dusre webpage par ja sakte hain, same page ke section par jump kar sakte hain, ya email/phone call kar sakte hain.",
    english: "Creates a hyperlink to other web pages, files, locations within the same page, email addresses, or phone calls.",
    code: `<!-- External link -->
<a href="https://google.com" target="_blank" rel="noopener">Google</a>
<!-- Phone & Email -->
<a href="tel:+919876543210">Call Us</a>
<a href="mailto:info@site.com">Email Us</a>`,
    preview: `<div style="display:flex; gap:10px; font-size:0.85rem;">
      <a href="#" style="color:#38bdf8; text-decoration:underline;">Clickable Web Link</a>
      <a href="#" style="color:#10b981;">Email Link &rarr;</a>
    </div>`,
    tip: "target='_blank' ke sath security ke liye hamesha rel='noopener noreferrer' zaroor lagayein.",
    tipType: "good"
  },

  // ==========================================
  // 6. IMAGES & MULTIMEDIA
  // ==========================================
  {
    tag: "<img>",
    category: "media",
    level: "beginner",
    void: true,
    hinglish: "Webpage par image (photo) display karta hai. Iska src (source link) aur alt (alternative text) attribute mandatory hota hai.",
    english: "Embeds an image into the document. Requires 'src' and 'alt' attributes. Supports loading='lazy' for fast performance.",
    code: `<img src="avatar.jpg" alt="User Profile Photo" width="200" height="200" loading="lazy">`,
    preview: `<div style="display:inline-flex; align-items:center; gap:8px; background:#111; padding:6px 10px; border-radius:6px; border:1px solid #374151;">
      <div style="width:28px; height:28px; background:linear-gradient(45deg, #6366f1, #06b6d4); border-radius:50%;"></div>
      <span style="font-size:0.8rem;">Image preview (avatar.png)</span>
    </div>`,
    tip: "Webpage speed fast rakhne ke liye loading='lazy' aur width/height attributes zaroor dein taaki CLS (layout shift) na ho.",
    tipType: "pro"
  },
  {
    tag: "<picture>",
    category: "media",
    level: "pro",
    void: false,
    hinglish: "Responsive images ke liye modern tag. Alag-alag screen sizes (Mobile vs Desktop) ya image formats (AVIF, WebP, JPG) ke hisab se best image load karta hai.",
    english: "Container that provides multiple image sources (<source>) for art direction and modern image format fallbacks (AVIF/WebP).",
    code: `<picture>
  <source media="(min-width: 800px)" srcset="desktop-banner.webp">
  <source media="(min-width: 400px)" srcset="tablet-banner.webp">
  <img src="fallback-mobile.jpg" alt="Responsive Banner">
</picture>`,
    preview: `<div style="border:1px dashed #8b5cf6; padding:6px 10px; border-radius:4px; font-size:0.8rem; color:#c4b5fd;">
      &lt;picture&gt; Responsive Art Direction [AVIF &rarr; WebP &rarr; JPG]
    </div>`,
    tip: "Modern formats (AVIF/WebP) load karke website ka loading time 70% tak kam kar sakte hain.",
    tipType: "pro"
  },
  {
    tag: "<source>",
    category: "media",
    level: "intermediate",
    void: true,
    hinglish: "<picture>, <video>, ya <audio> elements ke liye multiple media files specify karta hai.",
    english: "Specifies multiple media resources for <picture>, <audio>, and <video> elements.",
    code: `<source src="song.ogg" type="audio/ogg">
<source src="song.mp3" type="audio/mpeg">`,
    preview: `<code style="font-size:0.75rem; color:#a5b4fc;">&lt;source src="clip.webm" type="video/webm"&gt;</code>`,
    tip: "Browser pehla compatible source select karke play kar deta hai.",
    tipType: "good"
  },
  {
    tag: "<audio>",
    category: "media",
    level: "intermediate",
    void: false,
    hinglish: "Sound/music audio play karne ke liye native HTML5 player. Isme controls attribute se play/pause button aate hain.",
    english: "Used to embed sound content in documents. Can contain one or more audio sources via <source> or src.",
    code: `<audio controls>
  <source src="podcast.mp3" type="audio/mpeg">
  Aapka browser audio support nahi karta.
</audio>`,
    preview: `<audio controls style="height:32px; max-width:260px; filter:invert(0.9);"><source src="" type="audio/mpeg"></audio>`,
    tip: "controls attribute zaroor lagayein warna player browser me invisible rahega.",
    tipType: "good"
  },
  {
    tag: "<video>",
    category: "media",
    level: "intermediate",
    void: false,
    hinglish: "Video player embed karta hai. Isme controls, autoplay, muted, loop, aur poster attributes milte hain.",
    english: "Embeds a media player which supports video playback through native HTML5 controls.",
    code: `<video width="320" height="240" controls poster="thumbnail.jpg">
  <source src="video.mp4" type="video/mp4">
</video>`,
    preview: `<div style="background:#000; width:100%; max-width:240px; height:60px; border-radius:6px; display:flex; align-items:center; justify-content:center; gap:8px; font-size:0.8rem; border:1px solid #374151;">
      <span>&#9658;</span> <span>Native Video Player</span>
    </div>`,
    tip: "Autoplay lagane par 'muted' attribute lagana zaroori hai, warna modern browsers video play nahi hone denge.",
    tipType: "pro"
  },
  {
    tag: "<track>",
    category: "media",
    level: "pro",
    void: true,
    hinglish: "Video aur audio ke sath subtitles, closed captions, ya chapters (.vtt format) sync karne ke liye use hota hai.",
    english: "Used as a child of <audio> and <video>. Lets you specify timed text tracks (subtitles, captions, chapter headings).",
    code: `<video controls>
  <source src="movie.mp4" type="video/mp4">
  <track src="subs_hi.vtt" kind="subtitles" srclang="hi" label="Hindi Subtitles" default>
</video>`,
    preview: `<span style="font-size:0.8rem; color:#38bdf8;">[CC Subtitles Track: Hindi / English .vtt enabled]</span>`,
    tip: "Deaf aur multilingual users ki accessibility ke liye track subtitles add karna best practice hai.",
    tipType: "pro"
  },
  {
    tag: "<figure>",
    category: "media",
    level: "intermediate",
    void: false,
    hinglish: "Kisi image, diagram, code snippet, ya photo ko uske caption (<figcaption>) ke sath ek self-contained card me wrap karta hai.",
    english: "Represents self-contained content, potentially with an optional caption specified using <figcaption>.",
    code: `<figure>
  <img src="chart.png" alt="Sales Chart">
  <figcaption>Fig 1: 2026 Ka Growth Chart</figcaption>
</figure>`,
    preview: `<figure style="margin:0; border:1px solid #374151; padding:6px; border-radius:6px; background:#111827;">
      <div style="height:35px; background:#1f2937; display:flex; align-items:center; justify-content:center; font-size:0.75rem; border-radius:4px;">Chart Illustration</div>
      <figcaption style="font-size:0.75rem; color:#9ca3af; margin-top:4px; text-align:center;">Fig 1.1: System Architecture Diagram</figcaption>
    </figure>`,
    tip: "Articles me images aur diagrams ko hamesha <figure> me wrap karein.",
    tipType: "good"
  },
  {
    tag: "<figcaption>",
    category: "media",
    level: "intermediate",
    void: false,
    hinglish: "<figure> element ke andar di gayi image ya code block ka caption / label define karta hai.",
    english: "Represents a caption or legend describing the rest of the contents of its parent <figure> element.",
    code: `<figcaption>Figure 1: HTML5 Architecture</figcaption>`,
    preview: `<figcaption style="font-size:0.75rem; color:#a78bfa; font-style:italic;">Photo: Beautiful Sunset in Manali</figcaption>`,
    tip: "Hamesha <figure> ke first ya last child ke roop me hi rakhein.",
    tipType: "good"
  },
  {
    tag: "<map>",
    category: "media",
    level: "pro",
    void: false,
    hinglish: "Image Map banata hai jisme ek single image ke alag-alag areas/hisson ko clickable links banaya ja sakta hai.",
    english: "Used with <area> elements to define an image map (a clickable link area on specific coordinates of an image).",
    code: `<map name="workmap">
  <area shape="rect" coords="34,44,270,350" href="laptop.html" alt="Laptop">
</map>`,
    preview: `<div style="font-size:0.8rem; color:#38bdf8;">Interactive Clickable Image Regions (Image Map)</div>`,
    tip: "Image me usemap='#workmap' attribute lagana padta hai tabhi map connect hota hai.",
    tipType: "pro"
  },
  {
    tag: "<area>",
    category: "media",
    level: "pro",
    void: true,
    hinglish: "<map> ke andar individual clickable geometric shape (circle, rect, poly) aur uske coordinates define karta hai.",
    english: "Defines an area inside an image map that has predefined clickable zones. Always nested inside <map>.",
    code: `<area shape="circle" coords="100,100,50" href="circle.html" alt="Circle Button">`,
    preview: `<code style="font-size:0.75rem; color:#f59e0b;">&lt;area shape="circle" coords="100,100,50"&gt;</code>`,
    tip: "alt attribute provide karna mandatory hai screen readers ke liye.",
    tipType: "warning"
  },

  // ==========================================
  // 7. EMBEDDED CONTENT & GRAPHICS
  // ==========================================
  {
    tag: "<iframe>",
    category: "embedded",
    level: "intermediate",
    void: false,
    hinglish: "Inline Frame: Kisi dusre webpage, YouTube video, ya Google Map ko apni website ke andar embed karne ke liye use hota hai.",
    english: "Represents a nested browsing context, embedding another HTML page into the current one (e.g. YouTube, Maps).",
    code: `<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" width="560" height="315" title="YouTube video player" frameborder="0" allowfullscreen></iframe>`,
    preview: `<div style="border:1px solid #374151; padding:8px; border-radius:6px; background:#111; text-align:center; font-size:0.8rem;">
      <span style="color:#ef4444;">&#9654; YouTube / Map Embedded Iframe Container</span>
    </div>`,
    tip: "Security ke liye hamesha sandbox attribute aur title attribute zaroor include karein.",
    tipType: "good"
  },
  {
    tag: "<canvas>",
    category: "embedded",
    level: "pro",
    void: false,
    hinglish: "JavaScript ke through dynamic 2D/3D graphics, games, charts, aur image animations draw karne ke liye blank drawing board provide karta hai.",
    english: "Used to draw graphics on the fly via JavaScript (HTML5 Canvas 2D API / WebGL for 3D graphics and games).",
    code: `<canvas id="gameCanvas" width="300" height="150"></canvas>
<script>
  const ctx = document.getElementById('gameCanvas').getContext('2d');
  ctx.fillStyle = '#6366f1';
  ctx.fillRect(10, 10, 80, 80);
</script>`,
    preview: `<canvas id="demoCanvas" width="180" height="40" style="background:#030712; border:1px solid #374151; border-radius:4px;"></canvas>`,
    tip: "Data charts (Chart.js) aur browser games canvas par hi banaye jate hain.",
    tipType: "pro"
  },
  {
    tag: "<svg>",
    category: "embedded",
    level: "pro",
    void: false,
    hinglish: "Scalable Vector Graphics (SVG) container. Iske vectors kisi bhi screen ya zoom level par kabhi pixelate (dhundhle) nahi hote.",
    english: "Container for SVG graphics. Resolution-independent XML-based vector format that scales infinitely without blur.",
    code: `<svg width="100" height="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" stroke="#6366f1" stroke-width="4" fill="#38bdf8" />
</svg>`,
    preview: `<svg width="40" height="40" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" stroke="#6366f1" stroke-width="8" fill="#38bdf8" />
    </svg>`,
    tip: "Modern web me icons aur sharp logos ke liye PNG ki jagah inline SVG best choice hai.",
    tipType: "pro"
  },
  {
    tag: "<embed>",
    category: "embedded",
    level: "intermediate",
    void: true,
    hinglish: "External application, multimedia, ya interactive plugin (jaise PDF reader ya media stream) ko embed karne ke liye void element.",
    english: "Embeds external content (such as a PDF, multimedia file, or browser plugin) at the specified point in the document.",
    code: `<embed type="application/pdf" src="resume.pdf" width="300" height="200">`,
    preview: `<div style="border:1px dashed #6b7280; padding:4px 8px; font-size:0.75rem; border-radius:4px;">Embedded PDF Container (resume.pdf)</div>`,
    tip: "PDF files embed karne ke liye <embed> ya <iframe> widely used hai.",
    tipType: "good"
  },
  {
    tag: "<object>",
    category: "embedded",
    level: "intermediate",
    void: false,
    hinglish: "External resource (jaise PDF, SVG, audio/video) ko wrap karta hai aur fallback content support deta hai agar resource load na ho.",
    english: "Represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.",
    code: `<object data="document.pdf" type="application/pdf" width="300" height="200">
  <p>Aapka browser PDF viewer support nahi karta. <a href="document.pdf">Download karein</a></p>
</object>`,
    preview: `<span style="font-size:0.8rem; color:#9ca3af;">&lt;object&gt; Container with fallback download link</span>`,
    tip: "Fallback content provide karne ke liye <object> tag <embed> se behtar mana jata hai.",
    tipType: "good"
  },
  {
    tag: "<param>",
    category: "embedded",
    level: "pro",
    void: true,
    hinglish: "<object> tag ke andar parameter/settings pass karne ke liye use hota hai.",
    english: "Defines parameters for plugins invoked by <object> elements.",
    code: `<object data="app.swf">
  <param name="autoplay" value="true">
</object>`,
    preview: `<code style="font-size:0.75rem; color:#9ca3af;">&lt;param name="autoplay" value="true"&gt;</code>`,
    tip: "Modern HTML5 me mostly native audio/video controls use hote hain.",
    tipType: "warning"
  },
  {
    tag: "<math>",
    category: "embedded",
    level: "pro",
    void: false,
    hinglish: "Mathematical Markup Language (MathML) ka root element. Complex math equations aur formulas ko native web format me render karta hai.",
    english: "The top-level element in MathML. Used to write mathematical formulas and equations directly in HTML.",
    code: `<math>
  <mrow>
    <msup><mi>x</mi><mn>2</mn></msup>
    <mo>+</mo>
    <msup><mi>y</mi><mn>2</mn></msup>
    <mo>=</mo>
    <msup><mi>r</mi><mn>2</mn></msup>
  </mrow>
</math>`,
    preview: `<math style="font-size:1.1rem; color:#38bdf8;"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></math>`,
    tip: "Modern browsers (Chrome 109+, Firefox, Safari) me MathML fully supported hai.",
    tipType: "pro"
  },

  // ==========================================
  // 8. TABLES
  // ==========================================
  {
    tag: "<table>",
    category: "tables",
    level: "intermediate",
    void: false,
    hinglish: "Tabular data (rows aur columns me structured information jaise marksheet, pricing plans, schedule) display karne ke liye main container.",
    english: "Represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns.",
    code: `<table>
  <tr><th>Name</th><th>Role</th></tr>
  <tr><td>Aman</td><td>Developer</td></tr>
</table>`,
    preview: `<table>
      <tr><th>Name</th><th>Score</th></tr>
      <tr><td>Rahul</td><td>95</td></tr>
    </table>`,
    tip: "Page ka layout (design) banane ke liye table ka use na karein; tables sirf data ke liye hoti hain.",
    tipType: "warning"
  },
  {
    tag: "<caption>",
    category: "tables",
    level: "intermediate",
    void: false,
    hinglish: "Table ka title / heading provide karta hai. Ye table ke upar center me render hota hai aur screen readers ke liye zaroori hai.",
    english: "Specifies the title or caption of a table. Must be the first child of a <table> element.",
    code: `<table>
  <caption>Quarterly Sales Report 2026</caption>
  ...
</table>`,
    preview: `<span style="font-size:0.8rem; font-weight:bold; color:#a78bfa;">Table Caption: Monthly Expenses</span>`,
    tip: "Accessibility standard WCAG ke mutabiq tables me <caption> lagana strongly recommended hai.",
    tipType: "good"
  },
  {
    tag: "<thead>",
    category: "tables",
    level: "intermediate",
    void: false,
    hinglish: "Table ke header rows (titles) ko group karta hai. Print karte waqt ya scroll karte waqt header ko sticky banane me madad karta hai.",
    english: "Groups header content in an HTML table. Can be used with CSS to keep header rows sticky on long tables.",
    code: `<thead>
  <tr>
    <th>ID</th>
    <th>Product</th>
    <th>Price</th>
  </tr>
</thead>`,
    preview: `<div style="font-size:0.8rem; background:#1f2937; padding:4px 8px; border-radius:4px; font-weight:bold; color:#38bdf8;">[THEAD]: Columns [ID | Product | Price]</div>`,
    tip: "Table structure ko clean aur semantic banane ke liye <thead> zaroor use karein.",
    tipType: "good"
  },
  {
    tag: "<tbody>",
    category: "tables",
    level: "intermediate",
    void: false,
    hinglish: "Table ke actual data rows (body content) ko wrap karta hai.",
    english: "Groups the body content in an HTML table (the main rows containing table data).",
    code: `<tbody>
  <tr>
    <td>#1</td>
    <td>Laptop</td>
    <td>₹55,000</td>
  </tr>
</tbody>`,
    preview: `<div style="font-size:0.8rem; color:#9ca3af; padding:4px 8px;">[TBODY]: Main data records contained here</div>`,
    tip: "Browser automatically <tbody> add kar deta hai agar aap skip kar dein, par explicitly likhna best practice hai.",
    tipType: "good"
  },
  {
    tag: "<tfoot>",
    category: "tables",
    level: "intermediate",
    void: false,
    hinglish: "Table ke footer rows (jaise Total, Average, Grand Total calculations) ko group karta hai.",
    english: "Groups the footer content in an HTML table, ideal for summary rows, grand totals, and footnotes.",
    code: `<tfoot>
  <tr>
    <td colspan="2">Total</td>
    <td>₹55,000</td>
  </tr>
</tfoot>`,
    preview: `<div style="font-size:0.8rem; border-top:1px solid #4f46e5; padding:4px 8px; font-weight:bold; color:#10b981;">Total: ₹1,50,000 (TFOOT)</div>`,
    tip: "Grand total aur calculations hamesha <tfoot> me rakhein.",
    tipType: "good"
  },
  {
    tag: "<tr>",
    category: "tables",
    level: "intermediate",
    void: false,
    hinglish: "Table Row: Table ke andar ek horizontal row create karta hai.",
    english: "Defines a row of cells in an HTML table.",
    code: `<tr>
  <td>Data 1</td>
  <td>Data 2</td>
</tr>`,
    preview: `<div style="display:flex; border:1px solid #374151; font-size:0.8rem;"><span style="flex:1; padding:3px 6px; border-right:1px solid #374151;">Col A</span><span style="flex:1; padding:3px 6px;">Col B</span></div>`,
    tip: "TableRow ke andar sirf <th> ya <td> hi valid children ho sakte hain.",
    tipType: "good"
  },
  {
    tag: "<th>",
    category: "tables",
    level: "intermediate",
    void: false,
    hinglish: "Table Header Cell: Row ya column ke title ko bold aur centered format me render karta hai (semantic heading).",
    english: "Defines a header cell in a table. Text is bold and centered by default with scope attribute support.",
    code: `<th scope="col">Username</th>`,
    preview: `<span style="font-weight:bold; background:rgba(255,255,255,0.1); padding:2px 8px; border-radius:3px; font-size:0.8rem;">Status (TH)</span>`,
    tip: "scope='col' ya scope='row' lagane se screen readers visually impaired logo ko correctly read karke sunate hain.",
    tipType: "pro"
  },
  {
    tag: "<td>",
    category: "tables",
    level: "intermediate",
    void: false,
    hinglish: "Table Data Cell: Table ke andar normal information/value store karta hai.",
    english: "Defines a standard data cell in an HTML table that contains data.",
    code: `<td>Active</td>`,
    preview: `<span style="padding:2px 8px; font-size:0.8rem; color:#9ca3af;">Row Value (TD)</span>`,
    tip: "colspan aur rowspan attributes se aap multiple columns ya rows ko merge kar sakte hain.",
    tipType: "good"
  },
  {
    tag: "<colgroup>",
    category: "tables",
    level: "pro",
    void: false,
    hinglish: "Table ke columns ko logically group karta hai taaki pure column par ek sath CSS background ya width lagayi ja sake.",
    english: "Specifies a group of one or more columns in a table for structural styling.",
    code: `<colgroup>
  <col span="2" style="background-color: rgba(99,102,241,0.1);">
  <col style="background-color: rgba(16,185,129,0.1);">
</colgroup>`,
    preview: `<div style="font-size:0.75rem; color:#38bdf8;">&lt;colgroup&gt; Batch column styling applied</div>`,
    tip: "Har <td> par separate CSS lagane ki bajaye colgroup se performance aur clean code dono banta hai.",
    tipType: "pro"
  },
  {
    tag: "<col>",
    category: "tables",
    level: "pro",
    void: true,
    hinglish: "<colgroup> ke andar individual column ke properties (jaise width, background) define karta hai.",
    english: "Defines properties for a column within a <colgroup> element.",
    code: `<col span="1" class="highlight-column">`,
    preview: `<code style="font-size:0.75rem; color:#a78bfa;">&lt;col span="1" width="120px"&gt;</code>`,
    tip: "Ye void element hai, iska closing tag nahi hota.",
    tipType: "pro"
  },

  // ==========================================
  // 9. FORMS & USER INPUTS
  // ==========================================
  {
    tag: "<form>",
    category: "forms",
    level: "beginner",
    void: false,
    hinglish: "User input form container. Isme inputs, buttons, checkboxes hote hain jo server par submit kiye jate hain (action aur method attributes).",
    english: "Represents a document section containing interactive controls for submitting information to a web server.",
    code: `<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  <button type="submit">Submit</button>
</form>`,
    preview: `<form onsubmit="event.preventDefault();" style="display:flex; gap:6px;">
      <input type="text" placeholder="Type here..." style="font-size:0.8rem; padding:3px 6px;">
      <button type="submit">Send</button>
    </form>`,
    tip: "Data security ke liye sensitive info (password, payments) hamesha method='POST' se submit karein.",
    tipType: "good"
  },
  {
    tag: "<input>",
    category: "forms",
    level: "beginner",
    void: true,
    hinglish: "Sabse powerful aur versatile form element! Type attribute change karke text, password, email, checkbox, radio, color, range, date etc ban jata hai.",
    english: "The most versatile form element, used to create interactive controls based on the 'type' attribute.",
    code: `<input type="text" placeholder="Username">
<input type="password" placeholder="Secret">
<input type="color">
<input type="range" min="0" max="100">`,
    preview: `<div style="display:flex; flex-direction:column; gap:6px;">
      <input type="text" placeholder="Username input" style="font-size:0.8rem;">
      <div style="display:flex; gap:8px; align-items:center;">
        <input type="range" min="0" max="100" value="70" style="width:120px;">
        <input type="color" value="#6366f1" style="height:28px; width:40px; padding:0; border:none; cursor:pointer;">
      </div>
    </div>`,
    tip: "HTML5 validation attributes (required, pattern, min, max) use karke bina JS ke client-side check kar sakte hain.",
    tipType: "good"
  },
  {
    tag: "<label>",
    category: "forms",
    level: "beginner",
    void: false,
    hinglish: "Form input ka caption/label. Label par click karne se connected input box automatic focus ya select ho jata hai (for attribute ya wrapping ke zariye).",
    english: "Represents a caption for an item in a user interface. Clicking the label activates the associated input.",
    code: `<label for="terms">
  <input type="checkbox" id="terms"> I agree to terms
</label>`,
    preview: `<label style="display:flex; align-items:center; gap:6px; cursor:pointer; font-size:0.85rem;">
      <input type="checkbox" checked> <span>Click label text to toggle checkbox</span>
    </label>`,
    tip: "Accessibility ka golden rule: Har <input> ke sath ek connected <label> hona mandatory hai.",
    tipType: "good"
  },
  {
    tag: "<textarea>",
    category: "forms",
    level: "beginner",
    void: false,
    hinglish: "Multi-line text input box jisme user lamba message, comment, ya feedback type kar sakta hai.",
    english: "Represents a multi-line plain-text editing control, ideal for comments, feedback, or messages.",
    code: `<textarea name="feedback" rows="4" cols="50" placeholder="Apna feedback likhein..."></textarea>`,
    preview: `<textarea rows="2" style="width:100%; font-size:0.8rem; background:#111; border:1px solid #444; color:#fff; border-radius:4px; padding:4px;" placeholder="Write multi-line comment..."></textarea>`,
    tip: "Layout break hone se bachane ke liye CSS me 'resize: vertical;' lagana recommend kiya jata hai.",
    tipType: "good"
  },
  {
    tag: "<button>",
    category: "forms",
    level: "beginner",
    void: false,
    hinglish: "Clickable button. Isme type='submit', type='button', ya type='reset' hota hai. Iske andar text ke sath images ya icons bhi daal sakte hain.",
    english: "Represents a clickable button, used to submit forms or anywhere in a document for accessible button functionality.",
    code: `<button type="button" onclick="sayHello()">Click Me</button>
<button type="submit">Submit Form</button>`,
    preview: `<div style="display:flex; gap:6px;">
      <button type="button" onclick="alert('Button clicked!')">Action Button</button>
      <button type="button" style="background:#10b981;">Success</button>
    </div>`,
    tip: "Hamesha type='button' explicitly likhein agar aapko form submit hone se rokna ho.",
    tipType: "good"
  },
  {
    tag: "<select>",
    category: "forms",
    level: "beginner",
    void: false,
    hinglish: "Dropdown list create karta hai jisme user options me se koi ek ya multiple options chun sakta hai.",
    english: "Represents a control that provides a menu of options (a dropdown select menu).",
    code: `<select name="city" id="city">
  <option value="delhi">Delhi</option>
  <option value="mumbai">Mumbai</option>
  <option value="bangalore">Bangalore</option>
</select>`,
    preview: `<select style="font-size:0.8rem;">
      <option>Python</option>
      <option selected>JavaScript</option>
      <option>Go</option>
    </select>`,
    tip: "multiple attribute lagakar users ko ek sath multiple items select karne ki permission de sakte hain.",
    tipType: "good"
  },
  {
    tag: "<optgroup>",
    category: "forms",
    level: "intermediate",
    void: false,
    hinglish: "Dropdown select menu ke andar options ko logical categories/groups me divide karta hai.",
    english: "Creates a grouping of options within a <select> element with a visual category label.",
    code: `<select>
  <optgroup label="Frontend">
    <option>HTML</option>
    <option>CSS</option>
  </optgroup>
  <optgroup label="Backend">
    <option>Node.js</option>
    <option>Python</option>
  </optgroup>
</select>`,
    preview: `<select style="font-size:0.8rem;">
      <optgroup label="Cars"><option>Tesla</option><option>BMW</option></optgroup>
      <optgroup label="Bikes"><option>Yamaha</option></optgroup>
    </select>`,
    tip: "Badi lists (jaise desh aur unke states) ko organize karne ke liye best UX feature hai.",
    tipType: "good"
  },
  {
    tag: "<option>",
    category: "forms",
    level: "beginner",
    void: false,
    hinglish: "<select>, <optgroup>, ya <datalist> ke andar ek individual choice/item define karta hai.",
    english: "Defines an item contained in a <select>, an <optgroup>, or a <datalist> element.",
    code: `<option value="in" selected>India</option>`,
    preview: `<span style="font-size:0.85rem; color:#38bdf8;">&lt;option value="delhi"&gt;Delhi&lt;/option&gt;</span>`,
    tip: "selected attribute lagane se wo item by default choose rehta hai.",
    tipType: "good"
  },
  {
    tag: "<fieldset>",
    category: "forms",
    level: "intermediate",
    void: false,
    hinglish: "Form ke related input fields ko ek bordered box ke andar group karta hai (jaise 'Personal Details', 'Payment Info').",
    english: "Used to group several controls and labels within a web form with a surrounding visual border.",
    code: `<fieldset>
  <legend>Login Details</legend>
  <input type="email" placeholder="Email">
</fieldset>`,
    preview: `<fieldset style="border:1px solid #4f46e5; border-radius:6px; padding:6px 10px; margin:0;">
      <legend style="padding:0 6px; font-size:0.75rem; color:#818cf8; font-weight:bold;">User Profile</legend>
      <span style="font-size:0.75rem; color:#9ca3af;">Grouped input fields container</span>
    </fieldset>`,
    tip: "disabled attribute lagane se fieldset ke andar ke saare inputs ek click me disable ho jate hain.",
    tipType: "pro"
  },
  {
    tag: "<legend>",
    category: "forms",
    level: "intermediate",
    void: false,
    hinglish: "<fieldset> box ke border par caption/title define karta hai.",
    english: "Represents a caption for the content of its parent <fieldset> element.",
    code: `<legend>Billing Address</legend>`,
    preview: `<span style="font-size:0.8rem; font-weight:bold; color:#10b981;">Legend: Personal Information</span>`,
    tip: "Hamesha <fieldset> ka sabse pehla child element hona chahiye.",
    tipType: "good"
  },
  {
    tag: "<datalist>",
    category: "forms",
    level: "pro",
    void: false,
    hinglish: "<input> box ke liye native autocomplete suggestion options provide karta hai. User chahe to list me se select kare ya naya text type kare.",
    english: "Contains a set of <option> elements that represent the pre-defined options for an <input> control (autocomplete).",
    code: `<input list="browsers" placeholder="Choose browser...">
<datalist id="browsers">
  <option value="Google Chrome">
  <option value="Mozilla Firefox">
  <option value="Brave">
</datalist>`,
    preview: `<div style="font-size:0.8rem;">
      <input list="sample-browsers" placeholder="Type 'Ch' or 'Fi'..." style="font-size:0.8rem; padding:3px 6px;">
      <datalist id="sample-browsers">
        <option value="Chrome">
        <option value="Firefox">
        <option value="Edge">
      </datalist>
    </div>`,
    tip: "External dropdown library ke bina native fast autocomplete banane ka sabse lightweight tarika hai.",
    tipType: "pro"
  },
  {
    tag: "<output>",
    category: "forms",
    level: "pro",
    void: false,
    hinglish: "Form calculation ya script execution ka live result display karne ke liye semantic element (jaise live slider total).",
    english: "A container element into which a site or app can inject the results of a calculation or the outcome of a user action.",
    code: `<form oninput="result.value = parseInt(a.value) + parseInt(b.value)">
  <input type="range" id="a" value="50"> +
  <input type="number" id="b" value="10"> =
  <output name="result" for="a b">60</output>
</form>`,
    preview: `<div style="display:flex; align-items:center; gap:8px; font-size:0.85rem;">
      <span>Slider:</span>
      <input type="range" id="demoRange" min="0" max="100" value="45" oninput="document.getElementById('demoOut').value = this.value">
      <output id="demoOut" style="font-weight:bold; color:#38bdf8;">45</output>%
    </div>`,
    tip: "Screen readers <output> tag ko aria-live region ki tarah announce karte hain jab value change hoti hai.",
    tipType: "pro"
  },
  {
    tag: "<meter>",
    category: "forms",
    level: "pro",
    void: false,
    hinglish: "Kisi known range ke andar scalar measurement dikhane ke liye gauge (jaise disk space usage, battery level, password strength).",
    english: "Represents either a scalar value within a known range or a fractional value (e.g. disk usage, quiz score).",
    code: `<label for="disk">Storage:</label>
<meter id="disk" value="75" min="0" max="100" low="30" high="80" optimum="20">75%</meter>`,
    preview: `<div style="display:flex; flex-direction:column; gap:4px; font-size:0.8rem;">
      <span>Disk Usage: <strong>75%</strong></span>
      <meter value="0.75" low="0.3" high="0.8" optimum="0.2" style="width:100%;"></meter>
    </div>`,
    tip: "Progress bar ke liye ise use na karein; meter tab use hota hai jab maximum limit aur standard range pehle se pata ho.",
    tipType: "good"
  },
  {
    tag: "<progress>",
    category: "forms",
    level: "intermediate",
    void: false,
    hinglish: "Kisi task ke completion ka progress bar display karta hai (jaise file download percentage, form step progress).",
    english: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    code: `<label for="file">Downloading:</label>
<progress id="file" value="70" max="100">70%</progress>`,
    preview: `<div style="display:flex; flex-direction:column; gap:4px; font-size:0.8rem;">
      <span>Download: <strong>65%</strong></span>
      <progress value="65" max="100" style="width:100%;"></progress>
    </div>`,
    tip: "Agar value attribute omit kar dein (<progress></progress>), to ye indeterminate loading animation ban jata hai.",
    tipType: "pro"
  },

  // ==========================================
  // 10. INTERACTIVE & WEB COMPONENTS (PRO LEVEL)
  // ==========================================
  {
    tag: "<details>",
    category: "interactive",
    level: "pro",
    void: false,
    hinglish: "Bina kisi JavaScript ke native accordion / collapsible dropdown create karta hai. Click karne par content expand/collapse hota hai.",
    english: "Creates a native disclosure widget in which information is visible only when the widget is toggled into an 'open' state.",
    code: `<details>
  <summary>Kya HTML sikhna aasan hai?</summary>
  <p>Haan! HTML web development ki sabse basic aur easy language hai.</p>
</details>`,
    preview: `<details>
      <summary>Click to reveal secret FAQ answer</summary>
      <p style="margin:6px 0 0 0; color:#38bdf8;">HTML5 has built-in interactive accordions without a single line of JS!</p>
    </details>`,
    tip: "FAQs aur documentation accordions ke liye best zero-JS native solution.",
    tipType: "pro"
  },
  {
    tag: "<summary>",
    category: "interactive",
    level: "pro",
    void: false,
    hinglish: "<details> disclosure element ka visible heading/label define karta hai jiske bagal me arrow icon hota hai.",
    english: "Specifies a summary, caption, or legend for a <details> element's disclosure box.",
    code: `<summary>More Details Dekhein</summary>`,
    preview: `<summary style="font-weight:bold; color:#818cf8; cursor:pointer; font-size:0.85rem;">&#9654; Clickable summary heading</summary>`,
    tip: "Hamesha <details> ka sabse pehla child element hona zaroori hai.",
    tipType: "good"
  },
  {
    tag: "<dialog>",
    category: "interactive",
    level: "pro",
    void: false,
    hinglish: "Modern native popup / modal box! JavaScript ke .showModal() method se open hota hai aur automatically dark backdrop aur focus lock provide karta hai.",
    english: "Represents a modal or non-modal dialog box or other interactive component, such as an alert, inspector, or subwindow.",
    code: `<dialog id="myModal">
  <h3>Hello Modal!</h3>
  <p>Native HTML5 modal popup without any library.</p>
  <button onclick="this.closest('dialog').close()">Close</button>
</dialog>
<button onclick="document.getElementById('myModal').showModal()">Open Dialog</button>`,
    preview: `<button type="button" onclick="alert('Native <dialog> triggered! It has built-in .showModal(), ::backdrop styling, and Esc-key closing support.')" style="font-size:0.8rem;">
      Launch Modal Demo &rarr;
    </button>`,
    tip: "::backdrop pseudo-element se dialog ke peeche ka background blur ya dark style kiya ja sakta hai.",
    tipType: "pro"
  },
  {
    tag: "<template>",
    category: "interactive",
    level: "pro",
    void: false,
    hinglish: "Client-side HTML template. Iska content page load par render nahi hota, balki JavaScript ke zariye dynamically clone karke page me insert kiya jata hai.",
    english: "Holds client-side content that is not rendered when a page loads, but can subsequently be instantiated at runtime via JavaScript.",
    code: `<template id="cardTemplate">
  <div class="user-card">
    <h4 class="name"></h4>
  </div>
</template>`,
    preview: `<span style="color:#9ca3af; font-size:0.8rem; font-style:italic;">Inert Template element (Hidden from DOM until cloned by JS)</span>`,
    tip: "React/Vue jaisi fast dynamic rendering vanilla JavaScript me karne ke liye <template> best tag hai.",
    tipType: "pro"
  },
  {
    tag: "<slot>",
    category: "interactive",
    level: "pro",
    void: false,
    hinglish: "Web Components aur Shadow DOM ka placeholder jisme custom HTML markup inject/project kiya ja sakta hai.",
    english: "A placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees.",
    code: `<template id="my-card">
  <div class="card">
    <slot name="card-title">Default Title</slot>
  </div>
</template>`,
    preview: `<span style="color:#a78bfa; font-size:0.8rem;">[Web Components &lt;slot&gt; placeholder]</span>`,
    tip: "Custom Web Components (HTML5 custom elements) build karte waqt flexible reusable components banane me use hota hai.",
    tipType: "pro"
  },

  // ==========================================
  // 11. OBSOLETE & DEPRECATED TAGS (AVOID IN MODERN WEB)
  // ==========================================
  {
    tag: "<marquee>",
    category: "deprecated",
    level: "deprecated",
    void: false,
    hinglish: "Text ko screen par automatic scroll ya slide karta tha. Ab ye DEPRECATED ho chuka hai kyu ki ye accessibility ke khilaf hai.",
    english: "Obsolete. Causes text to scroll horizontally across the screen. Deprecated in HTML5; use CSS animations instead.",
    code: `<!-- ❌ Do NOT use in modern HTML -->
<marquee>Breaking News: HTML5 is awesome!</marquee>

<!-- ✅ Modern CSS Replacement: -->
<div class="scrolling-ticker">Breaking News...</div>`,
    preview: `<div style="background:rgba(239,68,68,0.1); border:1px solid #ef4444; padding:4px 8px; border-radius:4px; font-size:0.75rem; color:#fca5a5;">
      [DEPRECATED]: Use CSS keyframe animations instead!
    </div>`,
    tip: "Kyu avoid karein: Users ise pause nahi kar sakte aur screen readers ke liye reading issue create karta hai.",
    tipType: "danger"
  },
  {
    tag: "<center>",
    category: "deprecated",
    level: "deprecated",
    void: false,
    hinglish: "Content ko center align karne ke liye use hota tha. Ab obsolete hai; iski jagah CSS Flexbox ya Grid use karein.",
    english: "Obsolete. Used to center text or content horizontally. Deprecated in favor of CSS 'text-align: center' or Flexbox.",
    code: `<!-- ❌ Deprecated -->
<center>Text in center</center>

<!-- ✅ Modern CSS -->
<div style="text-align: center;">Text in center</div>`,
    preview: `<div style="text-align:center; font-size:0.8rem; color:#fca5a5;">[Modern CSS]: display:flex; justify-content:center;</div>`,
    tip: "Kyu avoid karein: HTML sirf content structure ke liye hona chahiye, visual alignment CSS ka kaam hai.",
    tipType: "danger"
  },
  {
    tag: "<font>",
    category: "deprecated",
    level: "deprecated",
    void: false,
    hinglish: "Text ka color, size, aur font-face badalne ke liye use hota tha. Ab obsolete hai; CSS use karein.",
    english: "Obsolete. Defines font face, color, and size for text. Deprecated in HTML 4.01 and obsolete in HTML5; use CSS.",
    code: `<!-- ❌ Deprecated -->
<font size="3" color="red">Purana tarika</font>

<!-- ✅ Modern CSS -->
<span style="color: red; font-size: 16px;">Naya standard</span>`,
    preview: `<span style="color:#ef4444; font-size:0.8rem;">[Obsolete]: Replaced by CSS font-family and color</span>`,
    tip: "Modern web me inline styling ki jagah CSS classes use karni chahiye.",
    tipType: "danger"
  },
  {
    tag: "<blink>",
    category: "deprecated",
    level: "deprecated",
    void: false,
    hinglish: "Text ko baar-baar blink (on/off) karwata tha. Ye user experience aur epilepsy/seizure ke liye khatarnak hone ki wajah se poori tarah remove kar diya gaya hai.",
    english: "Obsolete and non-standard. Caused text to flash/blink repeatedly. Removed from modern web standards.",
    code: `<!-- ❌ Completely Obsolete -->
<blink>Blinking Text</blink>`,
    preview: `<span style="color:#ef4444; font-size:0.8rem; font-weight:bold;">[REMOVED]: Do not use blink!</span>`,
    tip: "Accessibility and user health: Blinking elements can trigger photosensitive epileptic seizures.",
    tipType: "danger"
  },
  {
    tag: "<strike>",
    category: "deprecated",
    level: "deprecated",
    void: false,
    hinglish: "Text par strikethrough line khichta tha. Iski jagah ab semantic tags <del> ya <s> use hote hain.",
    english: "Obsolete. Renders text with a strikethrough. Deprecated in favor of semantic <del> or <s> tags.",
    code: `<!-- ❌ Deprecated -->
<strike>Old Price</strike>

<!-- ✅ Modern Standard -->
<del>Old Price</del> or <s>Old Info</s>`,
    preview: `<span style="font-size:0.8rem; color:#fca5a5;">Replaced by &lt;del&gt; and &lt;s&gt;</span>`,
    tip: "Semantic web me <strike> ka koi meaning nahi tha, isliye <del> aur <s> banaye gaye.",
    tipType: "danger"
  },
  {
    tag: "<big>",
    category: "deprecated",
    level: "deprecated",
    void: false,
    hinglish: "Text ka font size ek step bada karta tha. Deprecated hai; iski jagah CSS font-size use karein.",
    english: "Obsolete. Renders text in a bigger font size. Deprecated in HTML5 in favor of CSS font-size.",
    code: `<!-- ❌ Deprecated -->
<big>Bada text</big>

<!-- ✅ Modern CSS -->
<span style="font-size: 1.25rem;">Bada text</span>`,
    preview: `<span style="font-size:0.8rem; color:#fca5a5;">Replaced by CSS font-size</span>`,
    tip: "Styling ke liye HTML tags ki jagah CSS use karein.",
    tipType: "danger"
  },
  {
    tag: "<tt>",
    category: "deprecated",
    level: "deprecated",
    void: false,
    hinglish: "Teletype text (monospaced typewriter style). Deprecated hai; iski jagah <code>, <kbd>, ya <samp> use karein.",
    english: "Obsolete. Rendered text in teletype (monospaced) font. Replaced by <code>, <kbd>, <samp>, or CSS font-family.",
    code: `<!-- ❌ Deprecated -->
<tt>print('Hello')</tt>

<!-- ✅ Modern HTML5 -->
<code>print('Hello')</code>`,
    preview: `<span style="font-size:0.8rem; color:#fca5a5;">Replaced by &lt;code&gt; and &lt;kbd&gt;</span>`,
    tip: "Programming text ke liye <code> tag hi standard hai.",
    tipType: "danger"
  },
  {
    tag: "<frameset>",
    category: "deprecated",
    level: "deprecated",
    void: false,
    hinglish: "Puri screen ko alag-alag frames me divide karta tha. Obsolete ho chuka hai; modern responsive web me iski jagah CSS Grid aur Flexbox use hote hain.",
    english: "Obsolete. Used to contain a set of <frame> elements. Completely obsolete in HTML5; use CSS Grid/Flexbox and <iframe>.",
    code: `<!-- ❌ Obsolete -->
<frameset cols="25%,75%">
  <frame src="menu.html">
  <frame src="content.html">
</frameset>`,
    preview: `<span style="color:#ef4444; font-size:0.75rem;">[OBSOLETE]: Replaced by CSS Grid and Flexbox layouts</span>`,
    tip: "Frameset se SEO, URL bookmarking, aur mobile responsiveness destroy ho jati thi.",
    tipType: "danger"
  },
  {
    tag: "<frame>",
    category: "deprecated",
    level: "deprecated",
    void: true,
    hinglish: "<frameset> ke andar individual frame window define karta tha. HTML5 me fully unsupported hai.",
    english: "Obsolete. Defined one particular window (frame) within a <frameset>. Removed in HTML5.",
    code: `<!-- ❌ Obsolete -->
<frame src="nav.html">`,
    preview: `<span style="color:#ef4444; font-size:0.75rem;">[OBSOLETE]: Do not use</span>`,
    tip: "Agar kisi external page ko embed karna ho to <iframe> use karein.",
    tipType: "danger"
  },
  {
    tag: "<noframes>",
    category: "deprecated",
    level: "deprecated",
    void: false,
    hinglish: "Jab user ka browser frameset support na kare to fallback text dikhata tha. Ab frameset ke sath ye bhi obsolete hai.",
    english: "Obsolete. Provided fallback content for browsers that do not support <frame> tags.",
    code: `<noframes>Aapka browser frames support nahi karta.</noframes>`,
    preview: `<span style="color:#ef4444; font-size:0.75rem;">[OBSOLETE]: Removed from modern web</span>`,
    tip: "Modern HTML me frameset ka koi role nahi hai.",
    tipType: "danger"
  },
  {
    tag: "<applet>",
    category: "deprecated",
    level: "deprecated",
    void: false,
    hinglish: "Java Applets ko webpage me run karta tha. Security risks aur browser plugins band hone ki wajah se obsolete ho chuka hai.",
    english: "Obsolete. Used to embed a Java applet. Modern browsers do not support Java plugins; use <object> or WebAssembly/JS.",
    code: `<!-- ❌ Obsolete -->
<applet code="Game.class" width="300" height="300"></applet>`,
    preview: `<span style="color:#ef4444; font-size:0.75rem;">[OBSOLETE]: Java browser plugins no longer exist</span>`,
    tip: "Modern web me interactive games aur apps JavaScript aur WebAssembly se bante hain.",
    tipType: "danger"
  }
];
