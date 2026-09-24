// Master Portal Engine for Full-Stack Web Development Learning Portal
// Coordinates HTML, CSS, JavaScript, Git, Frontend/React, Backend, and Roadmap

// Module Configurations
const TRACKS_CONFIG = {
  html: {
    id: 'html',
    name: 'HTML5 Master Track',
    shortName: 'HTML5',
    icon: '📄',
    badge: '122 Tags: Basic to Pro',
    heroTitle: 'HTML5 Tags: <span>Basic to Pro Level</span> Tak',
    heroDesc: 'HTML ke sabhi 122 tags ka complete interactive sangrah. Har tag ka Hinglish explanation, code syntax, copy button, aur live interactive preview.',
    getData: () => window.htmlTagsData || []
  },
  css: {
    id: 'css',
    name: 'CSS3 Styling & Layouts Track',
    shortName: 'CSS3',
    icon: '🎨',
    badge: 'Styling, Flexbox, Grid & Modern CSS',
    heroTitle: 'CSS3 Styling: <span>Noob to Pro Level</span> Tak',
    heroDesc: 'CSS ke basic selectors, Box Model, Units se lekar Flexbox, CSS Grid, Transitions, Keyframe Animations, :has() aur Container Queries tak ka complete guide.',
    getData: () => window.cssTopicsData || []
  },
  js: {
    id: 'js',
    name: 'JavaScript (JS) Master Track',
    shortName: 'JavaScript',
    icon: '⚡',
    badge: 'Core Syntax, DOM, Async & ES6+',
    heroTitle: 'JavaScript: <span>Beginner to Pro Level</span> Tak',
    heroDesc: 'Variables, Functions, Arrays, Objects, DOM manipulation, Events, Promises, Async/Await, Fetch API, Closures aur Event Loop ka complete interactive guide.',
    getData: () => window.jsTopicsData || []
  },
  git: {
    id: 'git',
    name: 'Git & GitHub Track',
    shortName: 'Git & GitHub',
    icon: '🐙',
    badge: 'Version Control, Branching & PRs',
    heroTitle: 'Git & GitHub: <span>Commands to Pro Collaboration</span> Tak',
    heroDesc: 'git init, commit, branching, merging, remote push/pull, merge conflicts resolve karna, PR workflow aur git stash ka complete practical guide.',
    getData: () => window.gitTopicsData || []
  },
  frontend: {
    id: 'frontend',
    name: 'React & Modern Frontend Track',
    shortName: 'React & Frontend',
    icon: '⚛️',
    badge: 'Vite, Components, Hooks & Tailwind',
    heroTitle: 'React & Frontend: <span>Component to Full App</span> Tak',
    heroDesc: 'JSX, Components, Props, useState, useEffect, Lists & Keys, Tailwind CSS, Zustand Global Store, aur Next.js SSR concepts ka complete guide.',
    getData: () => window.frontendTopicsData || []
  },
  backend: {
    id: 'backend',
    name: 'Backend & APIs Track',
    shortName: 'Backend & APIs',
    icon: '🛠️',
    badge: 'HTTP, Node.js, Express & DBs',
    heroTitle: 'Backend & APIs: <span>Client-Server to REST APIs</span> Tak',
    heroDesc: 'HTTP Methods, Status Codes, JSON, Node.js, Express CRUD API, Middleware, CORS, PostgreSQL/MongoDB, JWT Auth aur WebSockets ka complete guide.',
    getData: () => window.backendTopicsData || []
  },
  roadmap: {
    id: 'roadmap',
    name: 'Full Stack Roadmap & Dev Tools',
    shortName: 'Roadmap & Tools',
    icon: '🗺️',
    badge: '6-Month Roadmap & Cloud Hosting',
    heroTitle: 'Web Dev Roadmap: <span>Step-By-Step Zero to Job-Ready</span> Tak',
    heroDesc: 'Month 1 se Month 6 tak ka complete roadmap, VS Code shortcuts, Chrome DevTools mastery, aur 100% free cloud deployment platforms ki list.',
    getData: () => window.roadmapTopicsData || []
  }
};

// Application State
let currentTrack = 'html';
let currentCategory = 'all';
let currentLevel = 'all';
let searchQuery = '';
let activePlaygroundMode = 'html';

const PLAYGROUND_PRESETS = {
  html: {
    label: 'HTML',
    code: `<h1>Hello World</h1>\n<p>Welcome to Web Development</p>\n<button>Click Me</button>`
  },
  css: {
    label: 'CSS',
    code: `<div class="box">Hello</div>\n<style>\n  body {\n    display: grid;\n    place-items: center;\n    min-height: 100vh;\n    background: linear-gradient(135deg, #0f172a, #1d4ed8);\n    font-family: Arial, sans-serif;\n    margin: 0;\n  }\n\n  .box {\n    width: 220px;\n    height: 100px;\n    display: grid;\n    place-items: center;\n    background: linear-gradient(135deg, #22c55e, #0ea5e9);\n    color: white;\n    border-radius: 18px;\n    font-size: 1.6rem;\n    font-weight: 700;\n    box-shadow: 0 18px 30px rgba(0, 0, 0, 0.2);\n  }\n</style>`
  },
  js: {
    label: 'JavaScript',
    code: `const name = "Rishabh";\nconsole.log("Hello " + name);\nconsole.log("Website is ready!");`
  }
};

// DOM Elements
const trackNav = document.getElementById('trackNav');
const heroBadge = document.getElementById('heroBadge');
const heroTitle = document.getElementById('heroTitle');
const heroDesc = document.getElementById('heroDesc');
const searchInput = document.getElementById('searchInput');
const categoryFiltersContainer = document.getElementById('categoryFilters');
const tagsGrid = document.getElementById('tagsGrid');
const resultsCount = document.getElementById('resultsCount');
const resetBtn = document.getElementById('resetFilters');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const backToTopBtn = document.getElementById('backToTopBtn');
const playgroundEditor = document.getElementById('playgroundEditor');
const playgroundFrame = document.getElementById('playgroundFrame');
const playgroundOutput = document.getElementById('playgroundOutput');
const playgroundError = document.getElementById('playgroundError');
const playgroundTabs = document.querySelectorAll('.playground-tab');

// Stat Counters
const totalCountEl = document.getElementById('totalCount');
const beginnerCountEl = document.getElementById('beginnerCount');
const intermediateCountEl = document.getElementById('intermediateCount');
const proCountEl = document.getElementById('proCount');
const deprecatedCountEl = document.getElementById('deprecatedCount');

// Initialize Track Navigation Tabs
function initTrackNav() {
  if (!trackNav) return;
  trackNav.innerHTML = Object.values(TRACKS_CONFIG).map(track => {
    const data = track.getData();
    const count = data.length;
    return `
      <button 
        class="track-tab ${track.id === currentTrack ? 'active' : ''}" 
        data-track-id="${track.id}"
        role="tab"
        aria-selected="${track.id === currentTrack}"
      >
        <span>${track.icon}</span>
        <span>${track.shortName}</span>
        <span class="track-tab-count">${count}</span>
      </button>
    `;
  }).join('');

  // Add click listeners to tabs
  trackNav.querySelectorAll('.track-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      const trackId = btn.dataset.trackId;
      switchTrack(trackId);
    });
  });
}

// Switch Active Track
function switchTrack(trackId) {
  if (!TRACKS_CONFIG[trackId]) return;
  currentTrack = trackId;
  currentCategory = 'all';
  currentLevel = 'all';
  searchQuery = '';
  if (searchInput) searchInput.value = '';

  // Update URL Hash and data-track attribute on root
  window.location.hash = trackId;
  document.documentElement.setAttribute('data-track', trackId);

  // Update Tab Active Classes
  trackNav.querySelectorAll('.track-tab').forEach(btn => {
    const isActive = btn.dataset.trackId === trackId;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', isActive);
  });

  // Reset Level Buttons
  document.querySelectorAll('#levelFilters .chip-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lvl === 'all');
  });

  // Update Hero Section Details
  const config = TRACKS_CONFIG[trackId];
  if (heroBadge) heroBadge.innerHTML = `<span>${config.icon}</span> ${config.badge}`;
  if (heroTitle) heroTitle.innerHTML = config.heroTitle;
  if (heroDesc) heroDesc.textContent = config.heroDesc;

  // Build Dynamic Category Filter Buttons for this Track
  buildCategoryFilters();

  // Update Stats & Render
  updateStats();
  renderCards();
}

// Dynamically generate category filter chips based on current track data
function buildCategoryFilters() {
  if (!categoryFiltersContainer) return;
  const data = TRACKS_CONFIG[currentTrack].getData();
  const categories = [...new Set(data.map(item => item.category))].filter(Boolean);

  let html = `<button class="chip-btn active" data-cat="all">All</button>`;
  categories.forEach(cat => {
    const label = cat.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    html += `<button class="chip-btn" data-cat="${cat}">${label}</button>`;
  });

  categoryFiltersContainer.innerHTML = html;

  // Attach click events
  categoryFiltersContainer.querySelectorAll('.chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      categoryFiltersContainer.querySelectorAll('.chip-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.cat;
      renderCards();
    });
  });
}

// Update Stats Bar
function updateStats() {
  const data = TRACKS_CONFIG[currentTrack].getData();
  const total = data.length;
  const beginner = data.filter(t => t.level === 'beginner').length;
  const intermediate = data.filter(t => t.level === 'intermediate').length;
  const pro = data.filter(t => t.level === 'pro').length;
  const deprecated = data.filter(t => t.level === 'deprecated').length;

  if (totalCountEl) totalCountEl.textContent = total;
  if (beginnerCountEl) beginnerCountEl.textContent = beginner;
  if (intermediateCountEl) intermediateCountEl.textContent = intermediate;
  if (proCountEl) proCountEl.textContent = pro;
  if (deprecatedCountEl) deprecatedCountEl.textContent = deprecated;
}

// Render Cards
function renderCards() {
  const data = TRACKS_CONFIG[currentTrack].getData();
  const query = searchQuery.trim().toLowerCase();

  const filtered = data.filter(item => {
    // Level filter
    if (currentLevel !== 'all' && item.level !== currentLevel) {
      return false;
    }
    // Category filter
    if (currentCategory !== 'all' && item.category !== currentCategory) {
      return false;
    }
    // Search query
    if (query) {
      const title = (item.title || item.tag || '').toLowerCase();
      const hinglish = (item.hinglish || '').toLowerCase();
      const english = (item.english || '').toLowerCase();
      const category = (item.category || '').toLowerCase();
      const code = (item.code || '').toLowerCase();
      const tip = (item.tip || '').toLowerCase();
      return title.includes(query) || hinglish.includes(query) || english.includes(query) || category.includes(query) || code.includes(query) || tip.includes(query);
    }
    return true;
  });

  resultsCount.textContent = `Showing ${filtered.length} of ${data.length} topics in ${TRACKS_CONFIG[currentTrack].shortName}`;

  if (filtered.length === 0) {
    tagsGrid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">&#128269;</div>
        <h3>Koi topic nahi mila!</h3>
        <p>Aapke search query "<strong>${escapeHtml(query)}</strong>" ke liye koi match nahi mila.</p>
        <button class="chip-btn reset-empty-btn" type="button" style="margin-top:1rem;">Reset Filters</button>
      </div>
    `;

    const emptyReset = document.querySelector('.reset-empty-btn');
    if (emptyReset) {
      emptyReset.addEventListener('click', resetAllFilters);
    }
    return;
  }

  tagsGrid.innerHTML = filtered.map(item => {
    const titleText = item.title || item.tag || 'Topic';
    const isTag = Boolean(item.tag);
    const languageMode = currentTrack === 'html' ? 'html' : currentTrack === 'css' ? 'css' : currentTrack === 'js' ? 'js' : 'html';

    const levelLabel = {
      beginner: '🟢 Beginner / Noob',
      intermediate: '🟡 Intermediate',
      pro: '🟣 Pro / Advanced',
      deprecated: '🔴 Deprecated'
    }[item.level] || item.level;

    const tipClass = {
      good: 'tip-good',
      pro: 'tip-pro',
      warning: 'tip-warning',
      danger: 'tip-danger'
    }[item.tipType] || 'tip-good';

    const tipIcon = {
      good: '&#9989;',
      pro: '&#9889;',
      warning: '&#9888;&#65039;',
      danger: '&#10060;'
    }[item.tipType] || '&#128161;';

    const typeBadge = isTag ? (item.void ? 'Void Tag' : 'Paired Tag') : (item.category.toUpperCase());

    return `
      <article class="tag-card" data-level="${item.level}">
        <div class="tag-card-header">
          <div class="tag-title-wrap">
            <span class="tag-name">${escapeHtml(titleText)}</span>
            <span class="tag-type-badge">${typeBadge}</span>
          </div>
          <div class="tag-badges">
            <span class="badge badge-${item.level}">${levelLabel}</span>
            <span class="badge badge-cat">${item.category}</span>
          </div>
        </div>

        <div class="tag-explanation">
          <p class="tag-hinglish">${escapeHtml(item.hinglish)}</p>
          <p class="tag-english">${escapeHtml(item.english)}</p>
        </div>

        <div class="code-container">
          <div class="code-header">
            <span>Code Example</span>
            <button class="copy-btn" type="button" data-copy-code="${escapeAttribute(item.code)}">
              <span>&#128203; Copy</span>
            </button>
          </div>
          <pre class="code-block"><code>${highlightCode(item.code, currentTrack)}</code></pre>
        </div>

        <div class="preview-box">
          <div class="preview-title">
            <span>&#128065;</span> Live Preview / Output
          </div>
          <div class="preview-content">
            ${item.preview || '<span style="color:#9ca3af; font-size:0.8rem;">Concept reference</span>'}
          </div>
        </div>

        <div class="tag-actions">
          <button class="try-code-btn" type="button" data-playground-mode="${languageMode}" data-code="${escapeAttribute(item.code)}">
            Try It
          </button>
        </div>

        <div class="tag-tip ${tipClass}">
          <span class="tip-icon">${tipIcon}</span>
          <span>${escapeHtml(item.tip)}</span>
        </div>
      </article>
    `;
  }).join('');

  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => copyCode(btn, btn.dataset.copyCode || ''));
  });

  document.querySelectorAll('.try-code-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.playgroundMode || 'html';
      const code = btn.dataset.code || PLAYGROUND_PRESETS[mode]?.code || '';
      setPlaygroundTab(mode);
      playgroundEditor.value = code;
      runPlayground();
      document.querySelector('.playground-showcase').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// Helpers
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function escapeJsString(str) {
  if (!str) return '';
  return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

function escapeAttribute(str) {
  if (!str) return '';
  return escapeHtml(str).replace(/`/g, '&#96;');
}

function setPlaygroundTab(mode) {
  activePlaygroundMode = mode;
  if (!playgroundTabs.length) return;

  playgroundTabs.forEach(tab => {
    const isActive = tab.dataset.playgroundMode === mode;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });
}

function buildPlaygroundDocument(mode, rawCode) {
  if (mode === 'html') {
    const html = rawCode || PLAYGROUND_PRESETS.html.code;
    return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          * { box-sizing: border-box; }
          body {
            margin: 0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
            background: linear-gradient(135deg, #0f172a, #111827);
            color: #e2e8f0;
            font-family: Arial, sans-serif;
          }
          button, input, textarea, select { font: inherit; }
        </style>
      </head>
      <body>${html}</body>
      </html>`;
  }

  if (mode === 'css') {
    let source = rawCode || PLAYGROUND_PRESETS.css.code;
    const styleMatch = source.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
    const css = styleMatch ? styleMatch[1] : '';
    const bodyHtml = source.replace(/<style[^>]*>[\s\S]*?<\/style>/i, '').trim() || '<div class="box">Hello</div>';
    return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          * { box-sizing: border-box; }
          body {
            margin: 0;
            min-height: 100vh;
            display: grid;
            place-items: center;
            padding: 24px;
            background: linear-gradient(135deg, #020617, #0f172a);
            color: #e2e8f0;
            font-family: Arial, sans-serif;
          }
          ${css || 'body { display: grid; place-items: center; }'}
        </style>
      </head>
      <body>${bodyHtml}</body>
      </html>`;
  }

  const code = (rawCode || PLAYGROUND_PRESETS.js.code).replace(/<\/script>/gi, '<\\/script>');
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        * { box-sizing: border-box; }
        body {
          margin: 0;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #111827, #1e293b);
          color: #e2e8f0;
          font-family: Arial, sans-serif;
          padding: 24px;
        }
        .output-box {
          width: min(100%, 560px);
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid rgba(148, 163, 184, 0.25);
          border-radius: 16px;
          padding: 18px;
          box-shadow: 0 18px 30px rgba(0, 0, 0, 0.15);
          white-space: pre-wrap;
          line-height: 1.6;
        }
      </style>
    </head>
    <body>
      <div class="output-box" id="outputBox">Running JavaScript...</div>
      <script>
        const outputBox = document.getElementById('outputBox');
        const lines = [];
        const formatValue = (value) => {
          if (typeof value === 'string') return value;
          try {
            return JSON.stringify(value, null, 2);
          } catch (error) {
            return String(value);
          }
        };

        const capture = (...args) => {
          const finalText = args.map(formatValue).join(' ');
          lines.push(finalText);
          outputBox.textContent = lines.join('\n');
          window.parent.postMessage({ type: 'playground-output', payload: lines.join('\n') }, '*');
        };

        const originalConsole = window.console;
        window.console = {
          ...originalConsole,
          log: (...args) => capture(...args),
          info: (...args) => capture(...args),
          warn: (...args) => capture('⚠️', ...args),
          error: (...args) => capture('❌', ...args)
        };

        try {
          ${code}
          if (!lines.length) {
            outputBox.textContent = 'No output yet. Run the code again to see results.';
            window.parent.postMessage({ type: 'playground-output', payload: 'No output yet. Run the code again to see results.' }, '*');
          }
        } catch (error) {
          const message = '❌ Error: ' + error.name + ': ' + error.message;
          outputBox.textContent = message;
          window.parent.postMessage({ type: 'playground-output', payload: message }, '*');
        }
      <\/script>
    </body>
    </html>`;
}

function showPlaygroundError(message) {
  if (!playgroundError) return;
  playgroundError.hidden = false;
  playgroundError.textContent = message;
}

function clearPlaygroundError() {
  if (!playgroundError) return;
  playgroundError.hidden = true;
  playgroundError.textContent = '';
}

function runPlayground() {
  if (!playgroundEditor || !playgroundFrame) return;

  const activeCode = playgroundEditor.value.trim();
  if (!activeCode) {
    playgroundFrame.srcdoc = '<!DOCTYPE html><html><body style="margin:0;padding:24px;background:#0f172a;color:#e2e8f0;font-family:Arial,sans-serif;">No code to run yet.</body></html>';
    playgroundOutput.innerHTML = '<span class="placeholder-text">No output yet. Start by typing some code.</span>';
    clearPlaygroundError();
    return;
  }

  let parsedCode = activeCode;
  if (activePlaygroundMode === 'css') {
    if (!activeCode.includes('<style') && !activeCode.includes('{')) {
      parsedCode = `<div class="box">Hello</div>\n<style>\n  body { ... }\n</style>`;
    }
  }

  try {
    playgroundFrame.srcdoc = buildPlaygroundDocument(activePlaygroundMode, parsedCode);
    clearPlaygroundError();

    if (activePlaygroundMode === 'js') {
      playgroundOutput.innerHTML = '<span class="placeholder-text">Running JavaScript...</span>';
    } else {
      playgroundOutput.innerHTML = '<span class="placeholder-text">Preview refreshed.</span>';
    }
  } catch (error) {
    showPlaygroundError(`Your code has an error. Check the code and try again. ${error.message}`);
    playgroundOutput.innerHTML = '<span class="placeholder-text">Preview failed. Reset the example or fix the code.</span>';
  }
}

function resetPlayground() {
  if (!playgroundEditor) return;
  const preset = PLAYGROUND_PRESETS[activePlaygroundMode] || PLAYGROUND_PRESETS.html;
  playgroundEditor.value = preset.code;
  runPlayground();
}

function clearPlayground() {
  if (!playgroundEditor) return;
  playgroundEditor.value = '';
  playgroundFrame.srcdoc = '<!DOCTYPE html><html><body style="margin:0;padding:24px;background:#0f172a;color:#e2e8f0;font-family:Arial,sans-serif;">Output cleared.</body></html>';
  playgroundOutput.innerHTML = '<span class="placeholder-text">Output cleared.</span>';
  clearPlaygroundError();
}

function copyPlayground() {
  if (!playgroundEditor) return;
  const value = playgroundEditor.value;
  const safeCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
      } else {
        const helper = document.createElement('textarea');
        helper.value = value;
        document.body.appendChild(helper);
        helper.select();
        document.execCommand('copy');
        helper.remove();
      }
      showToast('Playground code copied!');
    } catch (error) {
      showToast('Copy failed. Please copy manually.');
    }
  };
  safeCopy();
}

async function toggleFullscreen() {
  const shell = document.querySelector('.playground-editor-shell');
  if (!shell) return;
  if (!document.fullscreenElement) {
    await shell.requestFullscreen().catch(() => showToast('Fullscreen is unavailable in this browser.'));
  } else {
    await document.exitFullscreen().catch(() => undefined);
  }
}

function setupPlayground() {
  if (!playgroundEditor || !playgroundFrame) return;

  setPlaygroundTab(activePlaygroundMode);
  playgroundEditor.value = PLAYGROUND_PRESETS[activePlaygroundMode].code;
  runPlayground();

  playgroundTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const mode = tab.dataset.playgroundMode;
      setPlaygroundTab(mode);
      activePlaygroundMode = mode;
      playgroundEditor.value = PLAYGROUND_PRESETS[mode].code;
      runPlayground();
    });
  });

  document.querySelectorAll('[data-playground-action]').forEach(button => {
    button.addEventListener('click', () => {
      const action = button.dataset.playgroundAction;
      if (action === 'run') runPlayground();
      if (action === 'reset') resetPlayground();
      if (action === 'clear') clearPlayground();
      if (action === 'copy') copyPlayground();
      if (action === 'fullscreen') toggleFullscreen();
    });
  });

  playgroundEditor.addEventListener('input', () => {
    clearPlaygroundError();
  });

  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'playground-output') {
      const payload = String(event.data.payload || '').trim();
      if (payload) {
        playgroundOutput.innerHTML = `<pre>${escapeHtml(payload)}</pre>`;
      } else {
        playgroundOutput.innerHTML = '<span class="placeholder-text">No output yet. Run the code to see results.</span>';
      }
    }
  });
}

// Code Syntax Highlighter
function highlightCode(code, track) {
  let safe = escapeHtml(code);

  if (track === 'html') {
    safe = safe.replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span style="color:#6b7280; font-style:italic;">$1</span>');
    safe = safe.replace(/(&lt;\/?)([a-zA-Z0-9!-]+)/g, '$1<span style="color:#38bdf8; font-weight:bold;">$2</span>');
    safe = safe.replace(/([a-zA-Z:-]+)=(&quot;.*?&quot;)/g, '<span style="color:#fb923c;">$1</span>=<span style="color:#a3e635;">$2</span>');
  } else if (track === 'css') {
    safe = safe.replace(/(\/\*[\s\S]*?\*\/)/g, '<span style="color:#6b7280; font-style:italic;">$1</span>');
    safe = safe.replace(/([.#]?[a-zA-Z0-9_-]+)\s*\{/g, '<span style="color:#38bdf8; font-weight:bold;">$1</span> {');
    safe = safe.replace(/([a-zA-Z-]+)\s*:/g, '<span style="color:#fb923c;">$1</span>:');
  } else if (track === 'git') {
    safe = safe.replace(/(#.*$)/gm, '<span style="color:#6b7280; font-style:italic;">$1</span>');
    safe = safe.replace(/\b(git|init|status|add|commit|branch|checkout|switch|merge|remote|push|pull|stash|reset|revert|log)\b/g, '<span style="color:#f43f5e; font-weight:bold;">$1</span>');
  } else {
    // JavaScript, React, Backend
    safe = safe.replace(/(\/\/.*$)/gm, '<span style="color:#6b7280; font-style:italic;">$1</span>');
    safe = safe.replace(/\b(const|let|var|function|return|if|else|import|from|export|default|async|await|try|catch|class|new)\b/g, '<span style="color:#c084fc; font-weight:bold;">$1</span>');
    safe = safe.replace(/\b(true|false|null|undefined)\b/g, '<span style="color:#fb923c;">$1</span>');
  }

  return safe;
}

// Clipboard Copy
window.copyCode = function (button, code) {
  const copyText = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(code);
      } else {
        const helper = document.createElement('textarea');
        helper.value = code;
        document.body.appendChild(helper);
        helper.select();
        document.execCommand('copy');
        helper.remove();
      }

      const originalText = button.innerHTML;
      button.innerHTML = '<span>&#10003; Copied!</span>';
      button.classList.add('copied');
      showToast('Code copied to clipboard!');
      setTimeout(() => {
        button.innerHTML = originalText;
        button.classList.remove('copied');
      }, 2000);
    } catch (error) {
      showToast('Failed to copy code');
    }
  };

  copyText();
};

// Toast Notification
function showToast(message) {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// Reset All Filters
window.resetAllFilters = function () {
  currentCategory = 'all';
  currentLevel = 'all';
  searchQuery = '';
  if (searchInput) searchInput.value = '';

  document.querySelectorAll('#levelFilters .chip-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lvl === 'all');
  });

  if (categoryFiltersContainer) {
    categoryFiltersContainer.querySelectorAll('.chip-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.cat === 'all');
    });
  }

  renderCards();
};

// Setup Event Handlers
function setupEvents() {
  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderCards();
    });

    // Keyboard shortcut '/' to search, 'Escape' to clear
    window.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
      } else if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.value = '';
        searchQuery = '';
        searchInput.blur();
        renderCards();
      }
    });
  }

  // Level Filter Buttons
  document.querySelectorAll('#levelFilters .chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#levelFilters .chip-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLevel = btn.dataset.lvl;
      renderCards();
    });
  });

  // Reset Button
  if (resetBtn) {
    resetBtn.addEventListener('click', resetAllFilters);
  }

  // Theme Toggle
  if (themeToggleBtn) {
    const savedTheme = localStorage.getItem('webdev_portal_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeBtnText(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const target = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', target);
      localStorage.setItem('webdev_portal_theme', target);
      updateThemeBtnText(target);
    });
  }

  const printBtn = document.querySelector('[data-action="print"]');
  if (printBtn) {
    printBtn.addEventListener('click', () => window.print());
  }

  const scrollTopLink = document.querySelector('[data-action="scroll-top"]');
  if (scrollTopLink) {
    scrollTopLink.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Back to Top button
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Handle URL hash changes
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    if (TRACKS_CONFIG[hash] && hash !== currentTrack) {
      switchTrack(hash);
    }
  });

  setupPlayground();
}

function updateThemeBtnText(theme) {
  if (!themeToggleBtn) return;
  themeToggleBtn.innerHTML = theme === 'light' ? '&#127769; Dark Mode' : '&#9728;&#65039; Light Mode';
}

// Initial Boot
document.addEventListener('DOMContentLoaded', () => {
  // Read hash from URL if present
  const initialHash = window.location.hash.replace('#', '');
  if (TRACKS_CONFIG[initialHash]) {
    currentTrack = initialHash;
  }
  document.documentElement.setAttribute('data-track', currentTrack);

  initTrackNav();
  setupEvents();
  switchTrack(currentTrack);
});
