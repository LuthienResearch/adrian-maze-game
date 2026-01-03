# Repository Guidelines - Adrian's Maze Game

## Language / Idioma

**Always reply in both English and Spanish.** This project is bilingual!

**Siempre responde en inglés y español.** ¡Este proyecto es bilingüe!

---

## Purpose & Scope

**Core Goal:** Build a 2-player browser-based maze racing game with combat, designed by Adrian (6 years old).

**Objetivo Principal:** Construir un juego de laberinto para 2 jugadores en el navegador con combate, diseñado por Adrian (6 años).

**Target Audience:** Kids ages 6-12, families playing together

**Tech Stack:**
- **Game Engine:** Phaser 3 (JavaScript HTML5 game framework)
- **Language:** JavaScript (ES6+)
- **Platform:** Web browsers (Chrome, Firefox, Safari)
- **Deployment:** GitHub Pages (free static hosting)
- **Development Server:** Python's http.server or Node.js http-server

## Development Workflow

1. **Start with an OBJECTIVE** (e.g., 'add bow and arrow weapon', 'implement trap system')
2. Make sure we're on a feature branch (not `main`)
3. Commit changes regularly with clear messages
4. Push to origin and open a draft PR (to `main`)
5. Implement the OBJECTIVE. Add out-of-scope items to `dev/TODO.md`
6. Test gameplay manually (and automated tests when applicable)
7. When OBJECTIVE is complete:
   - Update `CHANGELOG.md`
   - Clear `dev/OBJECTIVE.md` and `dev/NOTES.md`
   - Mark PR as ready

### Maintaining Context

Update files in `dev/context/` as we learn:

- **`codebase_learnings.md`**: Phaser patterns, game architecture, how systems interact
- **`decisions.md`**: Technical decisions (why Phaser over Pygame, collision system choices, etc.)
- **`gotchas.md`**: Non-obvious Phaser behaviors, browser quirks, physics edge cases

Include timestamps (YYYY-MM-DD) when adding entries.

### Objective Workflow

1. **Start a new objective**
   ```bash
   git checkout main
   git pull
   git checkout -b feature/<short-handle>
   ```

   Update `dev/OBJECTIVE.md`, then:
   ```bash
   git add dev/OBJECTIVE.md
   git commit -m "chore: set objective to <description>"
   git push -u origin feature/<short-handle>
   gh pr create --draft --fill --title "<Objective Title>"
   ```

2. **Develop**
   - Test in browser frequently (refresh with Cmd+Shift+R to clear cache)
   - Check browser console (F12) for errors
   - Commit in small chunks with clear messages
   - Use emojis in commits if it helps! (Adrian likes them 🎮)

3. **Wrap up the objective**
   ```bash
   git status
   ```
   - Update `CHANGELOG.md` with a bullet referencing the objective
   - Clear `dev/NOTES.md` and `dev/OBJECTIVE.md`
   ```bash
   git commit -a -m "feat: <objective> is ready"
   gh pr ready
   ```

## Project Structure

```
adrian-maze-game/
├── dev/                          # Development tracking
│   ├── OBJECTIVE.md              # Current objective
│   ├── NOTES.md                  # Implementation scratchpad
│   ├── TODO.md                   # Future work
│   └── context/                  # Persistent knowledge
│       ├── codebase_learnings.md
│       ├── decisions.md
│       └── gotchas.md
├── tests/                        # Test organization
│   ├── unit/                     # Unit tests (game logic)
│   ├── integration/              # Integration tests (system interactions)
│   └── e2e/                      # End-to-end tests (full gameplay)
├── assets/                       # Game assets (images, sounds, sprites)
│   ├── sprites/
│   ├── sounds/
│   └── music/
├── src/                          # Game source code (when we modularize)
│   ├── scenes/                   # Phaser scenes
│   ├── entities/                 # Player, enemies, objects
│   ├── systems/                  # Combat, health, crafting
│   └── utils/                    # Helper functions
├── docs/                         # Documentation
│   ├── ADRIAN_ANSWERS.md         # Design decisions from Adrian
│   ├── TREE_EXPLANATION.md       # GitHub explanation for Adrian
│   └── HOW_TO_RUN.md             # Setup instructions
├── index.html                    # Main entry point
├── game.js                       # Main game code (will refactor later)
├── CHANGELOG.md                  # Record of changes
├── CLAUDE.md                     # This file
└── README.md                     # Project overview
```

## Build, Test, and Development Commands

### Running the Game
```bash
# Option 1: Python (simplest)
python3 -m http.server 8080

# Option 2: Node.js
npx http-server -p 8080

# Then open: http://localhost:8080
```

### Testing
- **Manual Testing:** Play the game in browser, check console for errors
- **Unit Tests:** (Future) Test game logic in isolation
- **Integration Tests:** (Future) Test system interactions
- **E2E Tests:** (Future) Automated gameplay testing

### Browser Dev Tools
- **F12 or Cmd+Option+I:** Open console
- **Cmd+Shift+R (Mac) / Ctrl+Shift+R (PC):** Hard refresh (clear cache)
- **Console tab:** See errors and our console.log messages
- **Network tab:** Check if assets loaded

## Coding Style & Naming Conventions

### JavaScript Style
- **Variables:** `camelCase` (e.g., `playerHealth`, `currentLevel`)
- **Constants:** `UPPER_SNAKE_CASE` (e.g., `MAX_HEALTH`, `GAME_WIDTH`)
- **Functions:** `camelCase` (e.g., `createPlayer()`, `handleCollision()`)
- **Classes:** `PascalCase` (e.g., `Player`, `Weapon`, `TrapSystem`)

### Phaser Conventions
- **Scenes:** PascalCase class names (e.g., `MainMenuScene`, `GameScene`, `GameOverScene`)
- **Game Objects:** Descriptive names (e.g., `player1`, `exitDoor`, `lavaFloor`)
- **Groups:** Plural names (e.g., `platforms`, `enemies`, `traps`)

### Code Organization
- Keep functions small and focused
- Comment the "why", not the "what"
- Use console.log for debugging (with emojis! 🎮)
- Group related code together

### Example:
```javascript
// Good ✅
function createPlayer(x, y, color) {
    const player = this.add.rectangle(x, y, 32, 32, color);
    this.physics.add.existing(player);
    player.body.setBounce(0.2);
    return player;
}

// Not as good ❌
function cp(a,b,c){return this.add.rectangle(a,b,32,32,c);}
```

## Git Commit Messages

### Format
```
<type>(<scope>): <description>

[optional body]
```

### Types
- **feat:** New feature (weapons, traps, levels)
- **fix:** Bug fix
- **docs:** Documentation changes
- **style:** Formatting, visual changes
- **refactor:** Code restructuring
- **test:** Adding tests
- **chore:** Maintenance (dependencies, config)

### Examples
```bash
feat(combat): add bow and arrow weapon
fix(collision): prevent players from passing through walls
docs: update HOW_TO_RUN with troubleshooting
style(ui): improve health bar display
refactor(player): extract player creation into function
test(combat): add unit tests for damage calculation
chore: set objective to implement trap system
```

## Testing Guidelines

### Manual Testing Checklist
- [ ] Both players can move and jump
- [ ] Collisions work correctly
- [ ] Win condition triggers properly
- [ ] No console errors
- [ ] Works in Chrome, Firefox, Safari
- [ ] Responsive to different screen sizes

### Future Automated Testing
- **Unit Tests:** Test pure functions (damage calculation, maze generation)
- **Integration Tests:** Test system interactions (weapon hits player)
- **E2E Tests:** Test full gameplay scenarios (complete level)

## Security & Configuration

- No secrets/API keys needed for now (client-side only game)
- Assets must be publicly accessible
- Be careful with user input if we add it later (leaderboards, names)

## Working with Adrian (The Designer)

### Communication Guidelines
- **Show, don't tell:** Let Adrian play and give feedback
- **Ask questions:** "What should happen when...?"
- **Use visual examples:** Show options rather than describe
- **Keep it fun:** This is a learning experience for a 6-year-old!
- **Document everything:** Adrian's ideas are gold 💡

### Getting Feedback
1. Let Adrian play the current version
2. Ask: "What do you like?"
3. Ask: "What should we change?"
4. Ask: "What should we add next?"
5. Document in `dev/NOTES.md`

### Design Decisions
- Adrian has final say on game design
- Technical implementation is our job
- Balance fun vs. technical feasibility
- Start simple, add complexity gradually

## Performance Considerations

- Keep sprite counts reasonable (< 100 active sprites)
- Use object pooling for bullets/projectiles
- Optimize collision detection (use groups)
- Test on different devices (not just development machine)
- Monitor frame rate (Phaser.Game.loop.actualFps)

## Common Phaser Patterns

### Creating Game Objects
```javascript
// Sprite with physics
const player = this.physics.add.sprite(x, y, 'player');

// Simple shape
const platform = this.add.rectangle(x, y, width, height, color);
this.physics.add.existing(platform, true); // true = static
```

### Collisions
```javascript
this.physics.add.collider(player, platforms);
this.physics.add.overlap(bullet, enemy, hitEnemy, null, this);
```

### Input
```javascript
const cursors = this.input.keyboard.createCursorKeys();
const spacebar = this.input.keyboard.addKey('SPACE');
```

## Deployment

### GitHub Pages Setup
1. Go to repo Settings → Pages
2. Source: Deploy from branch `main`
3. Folder: `/` (root)
4. Save
5. Game will be live at: `https://luthienresearch.github.io/adrian-maze-game/`

### Pre-Deployment Checklist
- [ ] Test in multiple browsers
- [ ] Check all assets load correctly
- [ ] No console errors
- [ ] Game is playable start-to-finish
- [ ] README has clear instructions

## Learning Resources

### For Adrian
- Phaser examples: https://phaser.io/examples
- Game mechanics videos on YouTube
- Play similar games for inspiration

### For Developers
- Phaser 3 docs: https://photonstorm.github.io/phaser3-docs/
- Phaser tutorials: https://phaser.io/learn
- Game dev patterns: https://gameprogrammingpatterns.com/

## Project Philosophy

**From Adrian's perspective:**
- **Fun first:** If it's not fun, change it
- **Fast iteration:** Build → Play → Feedback → Improve
- **Learn by doing:** Don't overthink, just try it
- **Creative freedom:** Wild ideas welcome!

**From Developer perspective:**
- **Start simple:** MVP → feedback → iterate
- **Document decisions:** Future us will thank us
- **Clean commits:** Small, focused, reversible
- **Test often:** Play the game frequently during development

## Notes for Claude Code

- This is a learning project for a 6-year-old designer
- Prioritize clarity and fun over technical perfection
- Explain trade-offs in simple terms
- Suggest visual examples when possible
- Keep code comments friendly and educational
- Use emojis in communication (Adrian loves them!)
- Balance "doing it right" with "shipping something playable"

## Questions to Ask When Stuck

1. **Does this make the game more fun?**
2. **Would Adrian understand this?**
3. **Can we test this easily?**
4. **Is this the simplest solution?**
5. **What would break if we did this?**

---

**Remember:** This game is being built WITH Adrian, not FOR Adrian. His ideas drive the design. Our job is to bring them to life! 🎮✨

**Testing with Luthien:** This project also serves as a real-world test case for Scott's Luthien AI proxy system. Document interesting interactions!

---

*Last updated: 2026-01-01*
