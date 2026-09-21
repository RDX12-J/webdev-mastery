// Git & GitHub Master Track Data (Noob to Pro Level)
window.gitTopicsData = [
  // ==========================================
  // 1. BEGINNER / NOOB (GIT BASICS)
  // ==========================================
  {
    title: "What is Git vs GitHub?",
    category: "basics",
    level: "beginner",
    hinglish: "Git ek local Version Control System (VCS) tool hai jo aapke computer par code ke changes ko time-machine ki tarah track karta hai. GitHub ek cloud hosting website hai jaha aap apne Git repositories ko internet par store aur dusre developers ke sath share karte hain.",
    english: "Git is a local command-line Version Control System tracking file history. GitHub is a cloud hosting platform for sharing and collaborating on Git repositories.",
    code: `# Git installation check
git --version

# First-time Git configuration
git config --global user.name "Aapka Naam"
git config --global user.email "email@example.com"`,
    preview: `<div style="font-size:0.8rem;">
      <div>&#128187; <strong>Git:</strong> Local code time-machine on your PC</div>
      <div>&#9729;&#65039; <strong>GitHub:</strong> Cloud storage & collaboration hub</div>
    </div>`,
    tip: "Git install karne ke baad pehli baar user.name aur user.email set karna zaroori hota hai.",
    tipType: "good"
  },
  {
    title: "Initializing Repository: 'git init'",
    category: "basics",
    level: "beginner",
    hinglish: "Kisi bhi normal folder ko Git project banane ke liye us folder ke andar terminal kholkar `git init` chalate hain. Isse ek hidden `.git` folder ban jata hai jo saari history track karta hai.",
    english: "Creates a new Git repository by generating a hidden .git directory in the root of your project folder.",
    code: `# Project folder me jayein
cd my-project

# Initialize new Git repository
git init`,
    preview: `<code style="font-size:0.8rem; color:#10b981;">Initialized empty Git repository in /my-project/.git/</code>`,
    tip: "Ek project me sirf ek hi baar `git init` chalana hota hai.",
    tipType: "good"
  },
  {
    title: "Checking Status: 'git status'",
    category: "basics",
    level: "beginner",
    hinglish: "Git ka sabse zaroori command! Ye batata hai ki koun-si files naye bani hain (untracked), koun-si modify huyi hain, aur koun-si commit hone ke liye ready hain.",
    english: "Displays the state of the working directory and the staging area (untracked files, modified files, staged files).",
    code: `git status`,
    preview: `<div style="font-size:0.75rem; background:#000; padding:6px; border-radius:4px; font-family:monospace;">
      <span style="color:#ef4444;">Untracked files: index.html, style.css</span>
    </div>`,
    tip: "Koi bhi agla command chalane se pehle hamesha `git status` check karne ki aadat dalein.",
    tipType: "good"
  },
  {
    title: "Staging Area: 'git add'",
    category: "basics",
    level: "beginner",
    hinglish: "Files ko commit karne se pehle 'Staging Area' me bheja jata hai. `git add filename` se single file stage hoti hai aur `git add .` se saari changed files ek sath stage ho jati hain.",
    english: "Adds changes in the working directory to the staging area, preparing them to be committed.",
    code: `# Specific file stage karein
git add index.html

# Saari changed files ek sath stage karein
git add .`,
    preview: `<div style="font-size:0.75rem; background:#000; padding:6px; border-radius:4px; font-family:monospace;">
      <span style="color:#10b981;">Changes to be committed: [index.html]</span>
    </div>`,
    tip: "`git add .` chalane se pehle `.gitignore` zaroor bana lein taaki heavy unnecessary files stage na ho jayein.",
    tipType: "warning"
  },
  {
    title: "Committing Snapshot: 'git commit -m'",
    category: "basics",
    level: "beginner",
    hinglish: "Staging area ke code ka ek permanent snapshot (checkpoint) save karta hai. Message `-m` clear aur descriptive hona chahiye taaki future me pata chale kya change kiya gaya tha.",
    english: "Captures a snapshot of the currently staged changes with a descriptive message permanently saved to Git history.",
    code: `git commit -m "feat: Added responsive navbar and login modal"`,
    preview: `<div style="font-size:0.75rem; color:#38bdf8;">
      [main 7f3b89a] feat: Added responsive navbar and login modal &bull; 2 files changed, 48 insertions(+)
    </div>`,
    tip: "Conventional commits follow karein jaise `feat:`, `fix:`, `docs:`, `style:` taaki team me professional lge.",
    tipType: "pro"
  },
  {
    title: "View History: 'git log --oneline'",
    category: "basics",
    level: "beginner",
    hinglish: "Project ke saare purane commits, commit hash IDs, date, author aur messages ki list dikhata hai.",
    english: "Shows the chronological commit history. '--oneline' formats each commit into a clean, single-line entry.",
    code: `# Complete log with details
git log

# Clean single line view
git log --oneline --graph`,
    preview: `<div style="font-size:0.75rem; font-family:monospace; color:#a5b4fc;">
      * a9c10d2 (HEAD -&gt; main) feat: complete JS module<br>
      * 4b88e1f feat: added CSS grid layout<br>
      * 1e39a01 Initial commit
    </div>`,
    tip: "`q` dabakar aap git log ke view se bahar nikal sakte hain terminal me.",
    tipType: "good"
  },

  // ==========================================
  // 2. INTERMEDIATE (BRANCHING, REMOTE & COLLABORATION)
  // ==========================================
  {
    title: "Branching: 'git branch' & 'git switch'",
    category: "branching",
    level: "intermediate",
    hinglish: "Main code ko chhede bina naye feature par kaam karne ke liye alag branch banate hain. `git switch -c feature-name` se nayi branch banti hai aur switch ho jati hai.",
    english: "Branches let you develop features or fix bugs in isolation without touching the stable production 'main' branch.",
    code: `# Nayi branch banakar switch karein (Modern standard)
git switch -c feature-cart

# Traditional tarika
git checkout -b feature-cart

# Sabhi branches check karein
git branch`,
    preview: `<div style="font-size:0.8rem; color:#10b981;">
      Switched to a new branch 'feature-cart' &bull; Work isolated safely!
    </div>`,
    tip: "Production code hamesha 'main' branch par rehta hai. Kabhi bhi direct 'main' par experiment na karein.",
    tipType: "pro"
  },
  {
    title: "Merging Branches: 'git merge'",
    category: "branching",
    level: "intermediate",
    hinglish: "Jab aapka naya feature complete aur test ho jaye, to feature branch ke changes ko 'main' branch me merge (jod) liya jata hai.",
    english: "Integrates independent lines of development into a single branch.",
    code: `# 1. Pehle main branch par switch karein
git switch main

# 2. Feature branch ko main me merge karein
git merge feature-cart`,
    preview: `<div style="font-size:0.75rem; color:#38bdf8;">
      Updating 1e39a01..a9c10d2 &bull; Fast-forward merge complete!
    </div>`,
    tip: "Merge karne ke baad purani feature branch ko `git branch -d feature-name` se delete kar dena clean practice hai.",
    tipType: "good"
  },
  {
    title: "Connecting to GitHub: 'git remote' & 'git push'",
    category: "github",
    level: "intermediate",
    hinglish: "Apne local computer ke Git repository ko GitHub ke online cloud repository se jodna. `git remote add origin URL` se connect hota hai aur `git push` se code GitHub par upload ho jata hai.",
    english: "Connects local repository to a remote GitHub repository and uploads local commits to the cloud.",
    code: `# Remote link connect karein
git remote add origin https://github.com/username/my-repo.git

# Pehli baar push karein (-u upstream flag ke sath)
git push -u origin main

# Uske baad simple push:
git push`,
    preview: `<div style="font-size:0.75rem; color:#34d399;">
      Enumerating objects: 12, done &bull; Pushed to https://github.com/user/my-repo.git
    </div>`,
    tip: "Remote link check karne ke liye `git remote -v` command chalayein.",
    tipType: "good"
  },
  {
    title: "Fetching & Pulling: 'git pull'",
    category: "github",
    level: "intermediate",
    hinglish: "GitHub par kisi team member dwara kiye gaye naye changes ko apne computer me download aur merge karne ke liye `git pull` chalate hain.",
    english: "Fetches changes from a remote repository and immediately integrates them into the current local branch.",
    code: `git pull origin main`,
    preview: `<div style="font-size:0.75rem; color:#a5b4fc;">
      Already up to date / Downloaded 3 new commits from origin/main
    </div>`,
    tip: "Subah kaam shuru karne se pehle hamesha `git pull` chala lena chahiye taaki latest code mil sake.",
    tipType: "pro"
  },
  {
    title: "Ignoring Junk Files: '.gitignore'",
    category: "basics",
    level: "intermediate",
    hinglish: "Heavy ya secret files (jaise `node_modules`, `.env` password keys, `.DS_Store`) ko GitHub par upload hone se rokne ke liye `.gitignore` file banayi jati hai.",
    english: "A text file that tells Git which files or folders to intentionally untrack and ignore from commits.",
    code: `# Sample .gitignore file
node_modules/
.env
dist/
.DS_Store
*.log`,
    preview: `<div style="font-size:0.75rem; font-family:monospace; color:#ef4444;">
      Ignored: node_modules/ (500MB saved from polluting repository!)
    </div>`,
    tip: "Apne API keys aur database passwords ko hamesha `.env` me rakhkar `.gitignore` me daalein, kabhi GitHub par push na karein!",
    tipType: "warning"
  },

  // ==========================================
  // 3. PRO / ADVANCED (CONFLICTS, STASH, PR & REBASE)
  // ==========================================
  {
    title: "Resolving Merge Conflicts",
    category: "advanced",
    level: "pro",
    hinglish: "Merge Conflict tab aata hai jab do log same file ki same line ko alag-alag badal dete hain. Git decide nahi kar pata kiska code sahi hai, isliye marker `<<<<<<< HEAD` laga deta hai jise manually resolve karna hota hai.",
    english: "Occurs when Git cannot automatically resolve differences in code between two commits, requiring manual intervention to choose the correct changes.",
    code: `<<<<<<< HEAD (Aapka current branch ka code)
const apiURL = "https://api.v2.dev.com";
=======
const apiURL = "https://api.v3.production.com";
>>>>>>> feature-branch (Incoming change)

/* Solution: Dono me se sahi code rakhein, markers delete karein aur commit karein */`,
    preview: `<div style="font-size:0.75rem; background:rgba(239,68,68,0.1); border:1px solid #ef4444; padding:6px; border-radius:4px; color:#fca5a5;">
      CONFLICT: Merge conflict in server.js &bull; Resolve manually &amp; commit.
    </div>`,
    tip: "VS Code me merge conflict aane par 'Accept Current Change' ya 'Accept Incoming Change' ke 1-click buttons milte hain.",
    tipType: "pro"
  },
  {
    title: "Temporary Shelf: 'git stash'",
    category: "advanced",
    level: "pro",
    hinglish: "Aap kisi feature par kaam kar rahe the aur achanak urgent bug fix karna pada! Bina commit kiye adhure kaam ko temporarily alag rakhne ke liye `git stash` use hota hai. Bug fix ke baad `git stash pop` se wapas le aate hain.",
    english: "Temporarily shelves (stashes) uncommitted changes so you can work on something else, then re-applies them later.",
    code: `# Adhoore kaam ko stash me daalo
git stash

# Urgent bug fix karke commit karo
git switch main
# ...fix bug and commit...

# Wapas apni branch par aao aur stash nikalo
git switch feature
git stash pop`,
    preview: `<div style="font-size:0.75rem; color:#c084fc;">
      Saved working directory and index state WIP on feature: 4b88e1f...
    </div>`,
    tip: "Multiple stashes check karne ke liye `git stash list` command use karein.",
    tipType: "pro"
  },
  {
    title: "Pull Requests (PR) & Code Review Workflow",
    category: "github",
    level: "pro",
    hinglish: "Top tech companies me koi bhi developer direct main branch me code push nahi karta. Feature branch ko GitHub par push karke 'Pull Request' (PR) create kiya jata hai, senior developer code review karta hai, aur approve hone par merge hota hai.",
    english: "A proposed set of changes submitted to a repository for team discussion, code review, automated testing (CI), and approval before merging.",
    code: `# 1. Feature branch push karein
git push -u origin feature-payment-gateway

# 2. GitHub website par jayein:
# Click "Compare & pull request" -> Add description -> Request review!`,
    preview: `<div style="font-size:0.8rem; color:#10b981;">
      &#9989; PR #42 Approved &bull; Merged 3 commits into 'main' via GitHub Web
    </div>`,
    tip: "Open source me contribute karne ke liye pehle project ko Fork karein, branch banayein, aur Pull Request create karein.",
    tipType: "pro"
  },
  {
    title: "Undoing Mistakes: Reset vs Revert",
    category: "advanced",
    level: "pro",
    hinglish: "Galti se kiye gaye commit ko theek karna. `git reset --soft HEAD~1` commit ko undo karke code ko staging me wapas le aata hai. `git revert <commit-hash>` naya inverse commit banakar purane code ko safe tarike se cancel karta hai.",
    english: "git reset rewrites local history (dangerous if shared); git revert creates a new commit that safely inverts changes of a previous commit.",
    code: `# 1. Safe Undo: Commit undo karo, par code delete mat karo
git reset --soft HEAD~1

# 2. Public shared branch par safe revert (Recommended for teams)
git revert a9c10d2`,
    preview: `<div style="font-size:0.75rem; color:#f59e0b;">
      <code>git revert [hash]</code> &rarr; Safely cancels past commit without rewriting history!
    </div>`,
    tip: "Jo code GitHub par push ho chuka ho, us par kabhi `git reset --hard` na chalayein; hamesha `git revert` use karein.",
    tipType: "warning"
  }
];
