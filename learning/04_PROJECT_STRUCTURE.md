# 📁 Project Structure

📖 **Navigation / Navegación:**
[← Previous: How to Run](./03_HOW_TO_RUN.md) | [Next: Tree Explanation →](./05_TREE_EXPLANATION_FOR_ADRIAN.md)

---

Visual guide to Adrian's Maze Game repository organization.

---

## 🌳 Complete Directory Tree

```
adrian-maze-game/
│
├── 📄 index.html                    Main game entry point
├── 🎮 game.js                       Core game code (Phaser 3)
│
├── 📚 Documentation
│   ├── README.md                    Project overview (bilingual)
│   ├── CLAUDE.md                    Repository guidelines ⭐
│   ├── CHANGELOG.md                 Version history
│   ├── PROJECT_STRUCTURE.md         This file
│   ├── HOW_TO_RUN.md                Setup instructions
│   ├── ADRIAN_ANSWERS.md            Design decisions from Adrian
│   ├── QUESTIONS_FOR_ADRIAN.md      Design questionnaire
│   └── TREE_EXPLANATION.md          GitHub tutorial for Adrian
│
├── 🛠️ dev/                          Development tracking
│   ├── OBJECTIVE.md                 Current objective ⭐
│   ├── TODO.md                      Future work ⭐
│   ├── NOTES.md                     Session notes ⭐
│   └── context/                     Persistent knowledge ⭐
│       ├── codebase_learnings.md    Phaser patterns
│       ├── decisions.md             Technical decisions
│       └── gotchas.md               Common mistakes
│
├── 🧪 tests/                        Test organization
│   ├── unit/                        Game logic tests
│   │   └── README.md
│   ├── integration/                 System interaction tests
│   │   └── README.md
│   └── e2e/                         Full gameplay tests
│       └── README.md
│
├── 🎨 assets/ (future)              Game assets
│   ├── sprites/                     Character images
│   ├── sounds/                      Sound effects
│   └── music/                       Background music
│
├── 💻 src/ (future)                 Source code (when refactored)
│   ├── scenes/                      Game scenes
│   ├── entities/                    Players, weapons, traps
│   ├── systems/                     Combat, health, maze
│   └── utils/                       Helpers, constants
│
└── 🔧 Config files
    ├── .gitignore                   Files to ignore in git
    └── package.json (future)        Dependencies (when needed)
```

---

## 📝 File Purposes

### ⭐ Files You'll Use Most

| File | Purpose | Update When |
|------|---------|-------------|
| `dev/OBJECTIVE.md` | What we're building now | Starting new feature |
| `dev/TODO.md` | What to build next | Notice something to add |
| `dev/NOTES.md` | Session thoughts | During development |
| `CHANGELOG.md` | What we've built | Completing objective |
| `game.js` | The actual game code | Always! |

### 📚 Documentation Files

| File | Purpose | Audience |
|------|---------|----------|
| `README.md` | Project overview | Everyone |
| `CLAUDE.md` | Dev guidelines | Claude Code / Developers |
| `HOW_TO_RUN.md` | Setup instructions | New players/devs |
| `ADRIAN_ANSWERS.md` | Design decisions | Team |
| `PROJECT_STRUCTURE.md` | This file! | New contributors |

### 🧠 Context Files (Never Delete!)

| File | Purpose | Value |
|------|---------|-------|
| `dev/context/codebase_learnings.md` | Phaser patterns we learned | Saves re-learning |
| `dev/context/decisions.md` | Why we chose X over Y | Prevents revisiting |
| `dev/context/gotchas.md` | Mistakes to avoid | Saves debugging time |

---

## 🎯 Workflow: Starting a New Feature

### 1. **Plan** (5 minutes)
```bash
# Create feature branch
git checkout -b feature/add-bow-weapon

# Update objective
vim dev/OBJECTIVE.md
```

**In OBJECTIVE.md:**
```markdown
## 🎯 CURRENT: Add Bow & Arrow Weapon

**Goal:** Player 1 can shoot arrows at Player 2

**Acceptance Criteria:**
- [ ] Spacebar fires arrow
- [ ] Arrow travels across screen
- [ ] Arrow deals 10 damage on hit
- [ ] Visual feedback (arrow sprite)
```

### 2. **Build** (30-60 minutes)
```bash
# Edit game code
vim game.js

# Test in browser
python3 -m http.server 8080
# Open http://localhost:8080

# Take notes as you go
vim dev/NOTES.md
```

**In NOTES.md:**
```markdown
## Bow Implementation Notes

- Arrow velocity: 400 px/sec feels good
- Need to pool arrows (don't create/destroy)
- Collision detection works with overlap()
- Added spacebar key for Player 1
```

### 3. **Commit** (2 minutes)
```bash
# Commit progress
git add game.js dev/NOTES.md
git commit -m "feat(combat): add basic arrow firing"
git push
```

### 4. **Complete** (10 minutes)
```bash
# Update changelog
vim CHANGELOG.md

# Clear notes/objective
echo "" > dev/NOTES.md
vim dev/OBJECTIVE.md  # Mark as complete

# Final commit
git add -A
git commit -m "feat(combat): bow weapon complete"
git push

# Merge to main
gh pr create --fill
gh pr merge
```

---

## 📊 Information Flow

```
┌─────────────────────────────────────────────┐
│  Adrian's Ideas                              │
│  "I want to shoot arrows!"                   │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│  QUESTIONS_FOR_ADRIAN.md                     │
│  Clarify details                             │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│  ADRIAN_ANSWERS.md                           │
│  Document decisions                          │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│  dev/TODO.md                                 │
│  Add to feature list                         │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│  dev/OBJECTIVE.md                            │
│  Pick next objective                         │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│  game.js                                     │
│  Implement feature                           │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│  dev/NOTES.md                                │
│  Document learnings                          │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│  dev/context/*.md                            │
│  Persist knowledge                           │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│  CHANGELOG.md                                │
│  Record what was built                       │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│  README.md                                   │
│  Update project status                       │
└─────────────────────────────────────────────┘
```

---

## 🎨 When to Create New Folders

### ✅ Create `assets/` when:
- We have actual image files
- We add sound effects
- We need to organize media

### ✅ Create `src/` when:
- game.js exceeds 500 lines
- We need multiple scenes
- Code becomes hard to navigate

### ✅ Create `docs/` when:
- We have lots of documentation
- Need to separate guides from code
- Project becomes public

### ❌ Don't create folders for:
- Single files
- Hypothetical future needs
- Over-organizing early

---

## 🧹 Keeping It Clean

### Files to Update Regularly
- ✅ `dev/OBJECTIVE.md` - Every new feature
- ✅ `dev/NOTES.md` - During sessions, clear when done
- ✅ `CHANGELOG.md` - When features complete
- ✅ `dev/TODO.md` - When you think "we should add..."

### Files to Update Occasionally
- 🔄 `dev/context/*.md` - When you learn something non-obvious
- 🔄 `README.md` - Major milestones
- 🔄 `HOW_TO_RUN.md` - When setup changes

### Files to Rarely Touch
- 📌 `CLAUDE.md` - Only when process changes
- 📌 `ADRIAN_ANSWERS.md` - Only new design decisions
- 📌 `PROJECT_STRUCTURE.md` - When structure changes

---

## 🎯 Quick Reference

### "Where do I...?"

**Document a design decision from Adrian?**
→ `ADRIAN_ANSWERS.md`

**Set current objective?**
→ `dev/OBJECTIVE.md`

**Add a future feature idea?**
→ `dev/TODO.md`

**Take notes while coding?**
→ `dev/NOTES.md`

**Record a Phaser pattern I learned?**
→ `dev/context/codebase_learnings.md`

**Explain why we chose X over Y?**
→ `dev/context/decisions.md`

**Document a gotcha/mistake?**
→ `dev/context/gotchas.md`

**Record completed work?**
→ `CHANGELOG.md`

**Explain how to run the game?**
→ `HOW_TO_RUN.md`

**Explain the whole project?**
→ `README.md`

---

## 🌟 Benefits of This Structure

### For Adrian
- ✅ Clear tracking of what we're building
- ✅ Can see progress in CHANGELOG
- ✅ His design decisions are documented

### For Scott
- ✅ Organized like luthien-proxy (familiar)
- ✅ Context preserved across sessions
- ✅ Easy to pick up where we left off

### For Future Contributors
- ✅ Clear guidelines in CLAUDE.md
- ✅ Understand decisions from context/
- ✅ Know what to work on from TODO.md

### For Luthien Testing
- ✅ Real-world project structure
- ✅ Tests long conversations
- ✅ Validates organization features

---

## 🚀 Evolution Plan

### Current (v0.1.0)
```
Simple structure:
- game.js (monolithic)
- Organized documentation
- Context preservation
```

### Near Future (v0.5.0)
```
Moderate structure:
- src/ folder with modules
- assets/ for sprites/sounds
- Still manageable
```

### Long Term (v1.0.0+)
```
Full structure:
- Build system (Webpack/Rollup)
- Package.json with dependencies
- CI/CD pipeline
- Deployed to custom domain
```

---

## 💡 Pro Tips

1. **Commit often** - Small commits are easier to understand
2. **Update context files** - Future you will thank you
3. **Clear NOTES.md** - After each objective (it's a scratchpad)
4. **Keep TODO.md organized** - Use priority levels (P0, P1, P2)
5. **CHANGELOG tells story** - Write for humans, not robots

---

**Remember:** This structure serves us, not the other way around. If something isn't useful, change it! 🎮✨

---

*Last updated: 2026-01-01*
