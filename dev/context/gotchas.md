# Gotchas & Common Mistakes

This file documents non-obvious behaviors, edge cases, and things that are easy to get wrong.

---

## Phaser-Specific Gotchas

### 1. Browser Caching Hell (2026-01-01)

**Problem:** You change game.js, refresh browser, nothing changes! 😤

**Why:** Browser caches JavaScript files aggressively

**Solutions:**
- **Mac:** Cmd + Shift + R (hard refresh)
- **Windows:** Ctrl + Shift + R
- **DevTools:** F12 → Network tab → Check "Disable cache"
- **Development:** Run with cache-busting query param: `game.js?v=123`

**Lesson:** ALWAYS hard refresh when testing changes!

---

### 2. Physics Body Updates (2026-01-01)

**Problem:** Change platform size, collision box doesn't update

**Wrong:**
```javascript
platform.setDisplaySize(newWidth, newHeight);
// Collision box is still old size!
```

**Right:**
```javascript
platform.setDisplaySize(newWidth, newHeight).refreshBody();
// ✅ Collision box updated
```

**Why:** Display size and physics body are separate. Must sync them!

---

### 3. Jump Only When Grounded (2026-01-01)

**Problem:** Player can jump infinitely in mid-air

**Wrong:**
```javascript
if (cursors.up.isDown) {
    player.body.setVelocityY(-250);
    // Can jump forever! 🚀
}
```

**Right:**
```javascript
if (cursors.up.isDown && player.body.touching.down) {
    player.body.setVelocityY(-250);
    // ✅ Only jump when on ground
}
```

**Why:** `touching.down` checks if player is standing on something

---

### 4. Coordinate System Confusion (2026-01-01)

**Gotcha:** Y increases DOWNWARD (not upward like math class!)

```
(0,0) ────────→ X increases
  │
  │
  ↓
  Y increases (DOWN, not up!)
```

**Example:**
```javascript
// To move UP, use NEGATIVE Y
player.body.setVelocityY(-250);  // Goes UP ⬆️

// Gravity pulls DOWN (positive Y)
gravity: { y: 300 }  // Falls DOWN ⬇️
```

**Lesson:** Think "screen coordinates" not "graph coordinates"

---

### 5. Static vs Dynamic Bodies (2026-01-01)

**Gotcha:** Static bodies CANNOT move (even if you try!)

**Wrong:**
```javascript
const platform = this.physics.add.staticGroup();
const p = platform.create(100, 500, null);
p.body.setVelocityX(50);  // ❌ Does nothing! Static bodies don't move!
```

**Right:**
```javascript
// If it needs to move, make it dynamic
const platform = this.add.rectangle(100, 500, 200, 20, 0x8B4513);
this.physics.add.existing(platform);  // Dynamic by default
platform.body.setVelocityX(50);  // ✅ Works!
```

**When to Use Each:**
- **Static:** Walls, floors, platforms that never move
- **Dynamic:** Players, enemies, moving platforms, projectiles

---

### 6. Text Origin Defaults (2026-01-01)

**Gotcha:** Text origin is top-left by default (not center!)

**Example:**
```javascript
// Text placed at (400, 300)
this.add.text(400, 300, 'TITLE');
// Top-left of text is at (400, 300)
// Text extends right and down

// To center text:
this.add.text(400, 300, 'TITLE').setOrigin(0.5);
// Center of text is at (400, 300)
```

**Origins:**
- `(0, 0)` = top-left
- `(0.5, 0.5)` = center
- `(1, 1)` = bottom-right

---

### 7. Collision Order Matters (2026-01-01)

**Wrong Order:**
```javascript
this.physics.add.collider(player, platforms);
// ❌ Player doesn't have physics yet!

this.physics.add.existing(player);
```

**Right Order:**
```javascript
this.physics.add.existing(player);
this.physics.add.collider(player, platforms);
// ✅ Physics first, then collisions
```

**Rule:** Add physics BEFORE setting up collisions

---

## JavaScript/Browser Gotchas

### 8. Console.log Doesn't Block (2026-01-01)

**Gotcha:** Game keeps running even with errors in console

**Example:**
```javascript
console.log('Player 1 wins!');
// Game keeps running! Player 2 can still move!
```

**Solution:** Actually handle win condition
```javascript
if (player1AtExit) {
    this.scene.pause();  // Stop the game
    this.showWinScreen();
    console.log('Player 1 wins!');
}
```

---

### 9. Arrow Functions vs Regular Functions (2026-01-01)

**Gotcha:** `this` keyword behaves differently!

**In Phaser callbacks:**
```javascript
// ❌ Wrong - 'this' is undefined
this.physics.add.overlap(bullet, enemy, (b, e) => {
    this.score += 10;  // Error! 'this' is wrong!
});

// ✅ Right - use regular function
this.physics.add.overlap(bullet, enemy, function(b, e) {
    this.score += 10;  // Works!
}, null, this);  // Pass 'this' as context
```

**Rule:** Use regular functions for Phaser callbacks, or bind context

---

### 10. Velocity Accumulation (2026-01-01)

**Problem:** Player keeps accelerating instead of moving at constant speed

**Wrong:**
```javascript
if (cursors.left.isDown) {
    player.body.velocity.x -= 5;  // Adds to existing velocity!
}
```

**Right:**
```javascript
if (cursors.left.isDown) {
    player.body.setVelocityX(-160);  // Sets absolute velocity
} else {
    player.body.setVelocityX(0);  // Stop when released
}
```

**Rule:** Use `setVelocity()` not `velocity +=` for movement

---

## Game Design Gotchas

### 11. Frame Rate Dependence (2026-01-01)

**Gotcha:** Game speed varies on different computers!

**Problem:** Using frame-based movement
```javascript
player.x += 5;  // Moves 5 pixels per frame
// 60 FPS = 300 px/sec
// 30 FPS = 150 px/sec (half speed!)
```

**Solution:** Use delta time or velocity
```javascript
// Phaser handles this automatically with velocity
player.body.setVelocityX(160);  // 160 px/sec regardless of FPS
```

**Lesson:** Never do frame-based movement in update loop!

---

### 12. Integer Coordinates Only (2026-01-01)

**Gotcha:** Decimal positions cause blurry graphics

**Example:**
```javascript
sprite.x = 100.5;  // Blurry! Between pixels
sprite.x = 100;    // Sharp! On pixel boundary
```

**Solution:** Round positions when drawing
```javascript
Phaser.Math.RoundAwayFromZero(player.x);
```

**Or use Phaser's built-in:**
```javascript
this.physics.world.roundPixels = true;
```

---

## File Encoding Gotchas

### 20. CSV Files with Non-ASCII Characters (2026-01-03)

**Problem:** Spanish characters like `¿Cuál` display as `¬øCu√°l` (mojibake)

**Why:** UTF-8 bytes interpreted as Latin-1/ISO-8859-1 by viewer (GitHub, Excel, editors)

**Root Cause:** CSV files without BOM (Byte Order Mark) - many tools default to Latin-1 for CSV

**Solution:** Add UTF-8 BOM when creating CSV with non-English text:
```bash
# Add BOM to existing file
printf '\xEF\xBB\xBF' > temp.csv
cat original.csv >> temp.csv
mv temp.csv original.csv
```

**Prevention:**
- Always add UTF-8 BOM for CSV files with non-ASCII characters
- Test viewing in GitHub web UI and Excel before committing
- For bilingual projects like this one, assume all CSV needs BOM

**5 Whys Analysis:**
1. Why garbled? → UTF-8 read as Latin-1
2. Why misinterpreted? → No encoding marker
3. Why no marker? → Write tool doesn't add BOM by default
4. Why not added manually? → Didn't anticipate cross-tool viewing
5. Why not anticipated? → Assumed UTF-8 "just works" (it doesn't for CSV!)

---

## Common Mistakes

### 13. Forgetting to Commit (2026-01-01)

**Mistake:** Work for 2 hours, computer crashes, lose everything! 😱

**Solution:** Commit every 15-30 minutes
```bash
git add .
git commit -m "feat: add jump animation"
git push
```

**Rule:** If you'd be sad to lose it, commit it!

---

### 14. Scope Creep (2026-01-01)

**Mistake:** "Let's add 10 weapons, 50 traps, and online multiplayer!"

**Reality:** 3 months later, nothing is done 😩

**Solution:**
1. Build MVP (Minimum Viable Product)
2. Make it fun
3. THEN add more features

**Adrian's Game:**
- Level 1: 2 weapons, basic traps, local multiplayer
- Get that working and fun FIRST
- Then add more in Level 2+

---

### 15. Not Testing in Multiple Browsers (2026-01-01)

**Mistake:** "Works on my machine!" (only tested in Chrome)

**Reality:** Breaks in Firefox/Safari

**Solution:** Test in all major browsers
- Chrome (V8 engine)
- Firefox (SpiderMonkey engine)
- Safari (JavaScriptCore engine)

**Quick Test:**
- Does game load?
- Do controls work?
- Any console errors?

---

## Performance Gotchas

### 16. Creating Objects in Update Loop (2026-01-01)

**Bad:**
```javascript
function update() {
    // ❌ Creates 60 new arrows per second!
    const arrow = this.add.sprite(x, y, 'arrow');
}
```

**Good:**
```javascript
function create() {
    // Create arrow pool once
    this.arrowPool = this.physics.add.group({
        classType: Arrow,
        maxSize: 20,
        runChildUpdate: true
    });
}

function update() {
    // ✅ Reuse existing arrow from pool
    const arrow = this.arrowPool.get(x, y);
}
```

**Rule:** Create objects once, reuse them (object pooling)

---

### 17. Too Many Console.logs (2026-01-01)

**Problem:**
```javascript
function update() {
    console.log('Player position:', player.x, player.y);
    // ❌ Logs 60 times per second = 3600/minute = LAG!
}
```

**Solution:**
```javascript
const DEBUG = false;  // Toggle debug mode

function update() {
    if (DEBUG) console.log('Player position:', player.x, player.y);
}
```

**Rule:** Remove or gate console.logs in production

---

## Adrian-Specific Gotchas

### 18. "Works on Paper" Doesn't Mean "Works in Game" (2026-01-01)

**Example:** Adrian's idea: "You can shoot 100 arrows at once!"

**Reality:** Game lags, becomes unplayable

**Solution:** Build it, test it, adjust
- Start with 10 arrows
- If that works, try 20
- Find the balance between fun and performance

**Lesson:** Always prototype before committing to big features

---

### 19. What's Fun for Adults ≠ What's Fun for Kids (2026-01-01)

**Adult thinking:** "Need realistic physics, complex crafting, deep strategy"

**Kid thinking (Adrian):** "I want to jump high and shoot lasers!"

**Solution:** Let Adrian playtest and tell us what's fun
- Simple > Complex
- Immediate feedback > Delayed rewards
- Visual > Text

---

## How to Avoid Gotchas

1. **Read the docs** (Phaser 3 docs are good!)
2. **Check examples** (Phaser has 2000+ examples)
3. **Test frequently** (don't code for 2 hours without testing)
4. **Use console.log** (debug early, debug often)
5. **Ask for help** (Stack Overflow, Phaser forums)
6. **Document your own gotchas** (add to this file!)

---

*Update this file whenever you encounter something non-obvious!*
