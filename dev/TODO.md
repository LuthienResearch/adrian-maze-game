# TODO List - Adrian's Maze Game

Last updated: 2026-01-01

**🔥 PHASE 2 PRIORITY: TRAP SYSTEM** (From Adrian's feedback!)

---

## 🎮 Core Gameplay Features

### 🕳️ TRAP SYSTEM ⭐⭐⭐ (PHASE 2 - TOP PRIORITY!)

> **Adrian's Vision:** "Trampas que nadie hizo, trampas que hacen los jugadores y todo eso"

#### **1. Player-Built Traps / Trampas Construidas por Jugadores**
- [ ] **Trap Building UI**
  - [ ] Material table/menu to select materials
  - [ ] Press material to start building
  - [ ] Place trap on map interface
  - [ ] Visual indicator while building
  - [ ] Cancel build option

- [ ] **Trap Placement System**
  - [ ] Click/press to place trap at player location
  - [ ] Check valid placement (not on walls, not on players)
  - [ ] Show trap preview before placing
  - [ ] Confirm placement

- [ ] **Trap Activation**
  - [ ] Detect when player steps on trap
  - [ ] Trigger trap effect
  - [ ] Visual/audio feedback
  - [ ] Trap remains or disappears after trigger?

- [ ] **Trap Types (Player-Built)**
  - [ ] Lava pit (dig + fill with lava)
  - [ ] Spike trap
  - [ ] Ice trap (freeze player)
  - [ ] Slow trap (reduce speed)
  - [ ] More ideas from Adrian!

#### **2. Pre-Existing Traps / Trampas Pre-Construidas**
- [ ] **Generation System**
  - [ ] Generate traps with maze
  - [ ] Random placement (not blocking exit path)
  - [ ] Balance trap density (not too many, not too few)
  - [ ] Different trap types per zone?

- [ ] **Trap Types (Pre-Existing)**
  - [ ] Lava floors (hidden? visible?)
  - [ ] Spike pits
  - [ ] Falling platforms
  - [ ] Moving obstacles
  - [ ] Electric barriers

- [ ] **Visibility**
  - [ ] Some visible, some hidden?
  - [ ] Visual warnings (cracks, glow, steam)?
  - [ ] Discover by getting close?

#### **3. SUPER TRAPS ✨ (NEW! From Gabriel's idea)**
> "Trampas fuertes y atrapadas que nadie les puede pasar"

- [ ] **Design Super Trap Mechanics**
  - [ ] What makes them "super"?
  - [ ] Inescapable? Instant death? High damage?
  - [ ] Duration of trap effect?
  - [ ] Can you break free?

- [ ] **Super Trap Types**
  - [ ] Black hole trap (pulls you in)
  - [ ] Cage trap (locks you in place)
  - [ ] Poison gas trap (continuous damage)
  - [ ] Teleport trap (sends you to random location)
  - [ ] More ideas from team!

- [ ] **Spawn System**
  - [ ] Rare spawns (only 1-2 per maze?)
  - [ ] Special locations (maze center, near exit?)
  - [ ] Visual indicator (glowing, dangerous-looking)

#### **4. Trap Visibility System** 👁️
> "Tú puedes ver todas las trampas que hay"

**NEEDS CLARIFICATION FROM ADRIAN:**
- Option A: See ALL traps always (including hidden ones)?
- Option B: See only discovered traps?
- Option C: Special ability/power to reveal traps?

- [ ] **Implementation (depends on Adrian's clarification)**
  - [ ] Trap overlay/minimap showing all traps?
  - [ ] Toggle trap visibility with button?
  - [ ] Highlight traps within range?
  - [ ] Show trap owner (if player-built)?

#### **5. Material System for Trap Building** 🔨
> "Tabla de materiales, presiones material y empiezas a construir"

- [ ] **Material Collection**
  - [ ] Find materials in maze (chests, pickups)
  - [ ] Dig materials from walls/ground?
  - [ ] Starting materials?
  - [ ] Material capacity limit?

- [ ] **Material Types**
  - [ ] 💧 Water
  - [ ] 🪵 Wood
  - [ ] 🔥 Fire/Lava
  - [ ] 🪨 Stone
  - [ ] ⚡ Electric/Lightning (new?)
  - [ ] 🧊 Ice (new?)

- [ ] **Material Inventory UI**
  - [ ] Show collected materials
  - [ ] Material counts
  - [ ] Quick-select materials
  - [ ] Material combinations

- [ ] **Crafting Recipes for Traps**
  - [ ] Water + Lava → Rock trap
  - [ ] Fire + Wood → Spike trap
  - [ ] Ice + Water → Freeze trap
  - [ ] More combinations to discover!

---

### Combat System
- [ ] **Bow & Arrow weapon**
  - [ ] Shooting mechanics (hold to aim, release to fire)
  - [ ] Arrow projectile physics
  - [ ] Collision detection with other player
  - [ ] Damage calculation (10 HP per hit?)
  - [ ] Visual feedback (arrow sprite, hit animation)

- [ ] **Lightsaber weapon**
  - [ ] Melee attack range
  - [ ] Swing animation
  - [ ] Collision detection (close range)
  - [ ] Higher damage than bow (15 HP per hit?)
  - [ ] Visual effects (glowing blade, swing trail)

- [ ] **Weapon crafting/selection**
  - [ ] Button to craft/build weapons (Adrian mentioned this)
  - [ ] Choose weapon at game start OR craft during game?
  - [ ] Material gathering system if crafting

### Superpower System
- [ ] **Superpower selection at start** (alternative to weapons)
- [ ] Implement 2-3 superpowers for Level 1:
  - [ ] Super Speed (move faster)
  - [ ] X-Ray Vision (see through walls)
  - [ ] Teleport (jump to different spots)
  - [ ] Shield (block attacks)
  - [ ] Fire Blast (ranged attack)
  - [ ] Freeze (stop other player temporarily)
- [ ] Cooldown system for powers
- [ ] Visual effects for each power

### Health & Lives System (Logic Implementation)
- [ ] **Health system** (currently UI only)
  - [ ] Actual damage when hit by weapons
  - [ ] Actual damage from traps
  - [ ] Health regeneration? (or health pickups?)
  - [ ] Death when health reaches 0

- [ ] **Lives system** (currently UI only)
  - [ ] Lose 1 life when health reaches 0
  - [ ] Respawn with full health
  - [ ] Respawn location (start? checkpoint? random safe spot?)
  - [ ] Game over when all 3 lives lost

### Maze Generation
- [ ] **Random maze algorithm**
  - [ ] Research algorithms (Depth-First, Prim's, Recursive Backtracking)
  - [ ] Ensure path to exit always exists
  - [ ] Place pre-built traps randomly (see Trap System above ⬆️)
  - [ ] Balanced difficulty
  - [ ] Small-medium size (3-5 minute completion)

- [ ] **Checkpoints**
  - [ ] Place checkpoints every 1/3 of maze
  - [ ] Visual indicator (flag? glowing spot?)
  - [ ] Save progress for respawns

---

## 🎨 UI/UX Improvements

### 🦄 Creature/Character Selection (PHASE 3!) ✨

> **From Team Feedback:** Victoria wants unicorn, princess, fairy! Gabriel wants dinosaur!
> **Adrian's Rule:** "Si las montas es trampa" (If you mount them, it's a trap)

**MOVED TO PHASE 3** (After trap system complete)

#### **New Creature Requests:**
- [ ] 🦄 **Unicorn** (Victoria's request - for her doll!)
  - [ ] Can it fly?
  - [ ] Magic abilities?
  - [ ] Mounting mechanic?

- [ ] 👸 **Princess** (Victoria's request)
  - [ ] Special powers?
  - [ ] Royal abilities?
  - [ ] Crown animation?

- [ ] 🧚 **Fairy** (Victoria's request)
  - [ ] Can fly?
  - [ ] Magic spells?
  - [ ] Sparkle effects?

- [ ] 🦖 **Dinosaur** (Gabriel's request - already exists!)
  - [ ] Keep current implementation
  - [ ] Add roar sound?

- [ ] 🤖 **Robot** (already exists!)
  - [ ] Keep current implementation
  - [ ] Add mechanical sounds?

#### **Mounting Mechanic** (NEEDS CLARIFICATION!)
> "Si las montas es trampa, ¿ok?"

**Questions for Adrian & Victoria:**
- How does mounting work?
- Why is it a trap?
- Does it trap YOU or the OTHER player?
- Can you ride other players' creatures?
- What happens when mounted?

- [ ] **Design mounting system**
  - [ ] How to mount a creature?
  - [ ] Trap effect when mounted?
  - [ ] Duration of mount?
  - [ ] Can you dismount?

#### **Character Selection Screen**
- [ ] **Monster/Creature selection** (before game starts)
  - [ ] Show all available creatures
  - [ ] Preview of each creature
  - [ ] Cosmetic only (all same stats)
  - [ ] Save selection
  - [ ] Unlock system? (start with basic, earn special ones?)

### Loadout Selection
- [ ] **Choose weapon OR superpower** screen
  - [ ] Visual display of options
  - [ ] Show stats/descriptions
  - [ ] Confirm selection

### HUD (Heads-Up Display)
- [ ] Real-time health bars (not just text)
- [ ] Lives displayed with hearts ❤️
- [ ] Current weapon/power indicator
- [ ] Minimap of maze?
- [ ] Timer showing match duration

### Win/Lose Screens
- [ ] Winner announcement (with emoji!)
- [ ] Stats summary (damage dealt, traps avoided, etc.)
- [ ] Play again button
- [ ] Return to menu button

### Main Menu
- [ ] Title screen
- [ ] Start game button
- [ ] Settings/options
- [ ] Credits (Adrian's name as designer!)
- [ ] How to play instructions

---

## 🎨 Visual & Audio

### Graphics
- [ ] Replace colored rectangles with actual sprites
  - [ ] Player sprites (monster designs)
  - [ ] Platform sprites (different materials)
  - [ ] Trap sprites (lava, spikes, etc.)
  - [ ] Weapon sprites (bow, arrow, lightsaber)
  - [ ] Background art

- [ ] Animations
  - [ ] Walking animation
  - [ ] Jumping animation
  - [ ] Attack animations
  - [ ] Hit/damage animation
  - [ ] Death animation
  - [ ] Win celebration

### Audio
- [ ] **Sound effects**
  - [ ] Jump sound
  - [ ] Landing sound
  - [ ] Weapon sounds (bow twang, lightsaber hum)
  - [ ] Hit sounds
  - [ ] Trap trigger sounds
  - [ ] Win/lose sounds

- [ ] **Music**
  - [ ] Main menu music
  - [ ] Gameplay music (fast-paced, exciting)
  - [ ] Win music
  - [ ] Game over music

---

## 🧪 Testing & Quality

### Browser Compatibility
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on mobile browsers (touch controls?)

### Performance
- [ ] Monitor frame rate
- [ ] Optimize sprite counts
- [ ] Implement object pooling for projectiles
- [ ] Reduce lag with many objects

### Bug Fixes
- [ ] Test edge cases (falling off map, getting stuck in walls)
- [ ] Handle rapid key presses
- [ ] Prevent exploits (invincibility, wall clipping)

### Automated Tests
- [ ] Unit tests for game logic
  - [ ] Damage calculation
  - [ ] Maze generation
  - [ ] Collision detection
  - [ ] Win/lose conditions

- [ ] Integration tests
  - [ ] Player-weapon interaction
  - [ ] Trap-player interaction
  - [ ] Powerup collection

---

## 📚 Documentation

- [ ] Update README with latest features
- [ ] Create CONTRIBUTING.md for future contributors
- [ ] Add code comments for complex logic
- [ ] Create video demo/gameplay footage
- [ ] Write dev blog post about building with a 6-year-old designer

---

## 🚀 Future Levels & Features (Post-Level 1)

### Level 2+
- [ ] More players (4-player mode)
- [ ] Larger mazes
- [ ] New trap types
- [ ] New weapons
- [ ] New superpowers
- [ ] Boss battles?

### Advanced Features
- [ ] Online multiplayer (WebRTC?)
- [ ] Leaderboard
- [ ] Player profiles with stats
- [ ] Unlockable monsters/skins
- [ ] Level editor (let players create mazes!)
- [ ] Tournament mode

### Monetization (If ever needed)
- [ ] Cosmetic purchases only (no pay-to-win)
- [ ] Support the developer button
- [ ] Premium monster skins

---

## 🔧 Technical Debt & Refactoring

- [ ] Split game.js into multiple files
  - [ ] scenes/ (MenuScene, GameScene, GameOverScene)
  - [ ] entities/ (Player, Weapon, Trap)
  - [ ] systems/ (CombatSystem, HealthSystem)
  - [ ] utils/ (helpers, constants)

- [ ] Add TypeScript? (better type safety)
- [ ] Set up build process (Webpack, Rollup)
- [ ] Add linting (ESLint)
- [ ] Add formatting (Prettier)

---

## 💡 Ideas to Validate with Adrian

### Questions for Next Session
- [ ] Should weapons do different damage amounts?
- [ ] How long should superpowers last?
- [ ] Where should players respawn after death?
- [ ] What should traps look like?
- [ ] Should there be power-ups (speed boost, extra life)?
- [ ] Friendly fire (can you damage yourself with traps)?
- [ ] Can you change weapons during the game?

---

## 📊 Priority Levels

**P0 (Must Have for Level 1):**
- Combat system (weapons)
- Health/lives logic
- Basic traps
- Win/lose screens

**P1 (Should Have for Level 1):**
- Random maze generation
- Monster selection
- Sound effects
- Better sprites

**P2 (Nice to Have):**
- Superpowers
- Material crafting
- Advanced traps
- Animations

**P3 (Future):**
- Online multiplayer
- Level 2+
- Mobile support

---

## 🎮 Next Steps

**Immediate:**
1. Get Adrian's feedback on current prototype
2. Choose next objective based on feedback
3. Create feature branch for next objective
4. Start development!

**This Week:**
- Focus on making combat fun
- Add at least one weapon
- Make health system actually work

**This Month:**
- Complete Level 1 with all core features
- Polish UI/UX
- Deploy to GitHub Pages
- Share with friends for testing

---

*Remember: Adrian is the designer. When in doubt, ask Adrian!* 🎮✨
