// El Tigre Contra Los Leones / The Tiger vs The Lions
// Diseñado por / Designed by: Rafa (4)
//
// Diseño v3: Los leones persiguen al tigre. Cuando el tigre toca a un león,
// el león se vence. Sale otro león nuevo. Gana cuando vence a 12 leones.
//
// Design v3: Lions chase the tiger. When the tiger touches a lion, lion is
// defeated. A new lion spawns. Win when 12 lions defeated.

const GAME_W = 800;
const GAME_H = 600;
const TOTAL_TO_WIN = 12;
const MAX_LIONS = 6;
const TIGER_SPEED = 280;
const LION_SPEED = 110;
const RESPAWN_DELAY_MS = 600;

const config = {
    type: Phaser.AUTO,
    width: GAME_W,
    height: GAME_H,
    parent: 'game-container',
    backgroundColor: '#f59e0b',
    physics: {
        default: 'arcade',
        arcade: { gravity: { y: 0 }, debug: false }
    },
    scene: { preload, create, update }
};

let tiger, cursors;
let lions;
let lionsDefeated = 0;
let scoreText, messageText;
let gameState = 'playing';

const game = new Phaser.Game(config);

function preload() {}

function create() {
    for (let i = 0; i < 30; i++) {
        const x = Math.random() * GAME_W;
        const y = Math.random() * GAME_H;
        const tuft = this.add.text(x, y, '🌾', { fontSize: '20px' }).setOrigin(0.5);
        tuft.setAlpha(0.5);
    }

    tiger = this.add.text(GAME_W / 2, GAME_H / 2, '🐅', { fontSize: '52px' }).setOrigin(0.5);
    this.physics.add.existing(tiger);
    tiger.body.setCollideWorldBounds(true);

    lions = this.physics.add.group();
    for (let i = 0; i < MAX_LIONS; i++) {
        spawnLionAtEdge.call(this);
    }

    this.physics.add.overlap(tiger, lions, defeatLion, null, this);

    cursors = this.input.keyboard.createCursorKeys();

    scoreText = this.add.text(GAME_W / 2, 16, `🦁 ${lionsDefeated} / ${TOTAL_TO_WIN}`, {
        fontSize: '28px',
        fill: '#fff',
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: { x: 14, y: 8 }
    }).setOrigin(0.5, 0);

    messageText = this.add.text(GAME_W / 2, GAME_H / 2 - 20, '', {
        fontSize: '36px',
        fill: '#fff',
        backgroundColor: 'rgba(0,0,0,0.85)',
        padding: { x: 24, y: 16 },
        align: 'center'
    }).setOrigin(0.5).setDepth(10);
}

function spawnLionAtEdge() {
    const edge = Math.floor(Math.random() * 4);
    let x, y;
    if (edge === 0) { x = Math.random() * GAME_W; y = 30; }
    else if (edge === 1) { x = Math.random() * GAME_W; y = GAME_H - 30; }
    else if (edge === 2) { x = 30; y = Math.random() * GAME_H; }
    else { x = GAME_W - 30; y = Math.random() * GAME_H; }

    const lion = this.add.text(x, y, '🦁', { fontSize: '40px' }).setOrigin(0.5);
    this.physics.add.existing(lion);
    lion.body.setCollideWorldBounds(true);

    // Pop-in animation so Rafa sees where the lion appeared
    lion.setScale(0);
    this.tweens.add({
        targets: lion,
        scale: 1,
        duration: 250,
        ease: 'Back.easeOut'
    });

    lions.add(lion);
}

function update() {
    if (gameState !== 'playing') {
        if (cursors.up.isDown || cursors.down.isDown || cursors.left.isDown || cursors.right.isDown) {
            lionsDefeated = 0;
            gameState = 'playing';
            this.scene.restart();
        }
        return;
    }

    let vx = 0, vy = 0;
    if (cursors.left.isDown) vx = -TIGER_SPEED;
    else if (cursors.right.isDown) vx = TIGER_SPEED;
    if (cursors.up.isDown) vy = -TIGER_SPEED;
    else if (cursors.down.isDown) vy = TIGER_SPEED;
    tiger.body.setVelocity(vx, vy);
    if (vx > 0) tiger.setFlipX(false);
    else if (vx < 0) tiger.setFlipX(true);

    // All lions always chase the tiger
    lions.children.iterate(lion => {
        if (!lion) return;
        const dx = tiger.x - lion.x;
        const dy = tiger.y - lion.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 1) {
            lion.body.setVelocity((dx / dist) * LION_SPEED, (dy / dist) * LION_SPEED);
        }
    });
}

function defeatLion(tiger, lion) {
    if (gameState !== 'playing') return;

    const x = lion.x;
    const y = lion.y;
    lion.destroy();
    lionsDefeated++;
    scoreText.setText(`🦁 ${lionsDefeated} / ${TOTAL_TO_WIN}`);

    // Big satisfying boom
    const boom = this.add.text(x, y, '💥', { fontSize: '72px' }).setOrigin(0.5);
    this.tweens.add({
        targets: boom,
        scale: { from: 0.4, to: 2.2 },
        alpha: { from: 1, to: 0 },
        duration: 450,
        onComplete: () => boom.destroy()
    });

    // Stars flying up
    for (let i = 0; i < 4; i++) {
        const star = this.add.text(x, y, '⭐', { fontSize: '32px' }).setOrigin(0.5);
        const angle = (Math.PI * 2 * i) / 4 + Math.random() * 0.5;
        this.tweens.add({
            targets: star,
            x: x + Math.cos(angle) * 80,
            y: y + Math.sin(angle) * 80 - 40,
            alpha: { from: 1, to: 0 },
            scale: { from: 1, to: 0.3 },
            duration: 600,
            onComplete: () => star.destroy()
        });
    }

    // Camera shake for impact
    this.cameras.main.shake(120, 0.008);

    if (lionsDefeated >= TOTAL_TO_WIN) {
        winGame.call(this);
    } else {
        this.time.delayedCall(RESPAWN_DELAY_MS, () => {
            if (gameState === 'playing') spawnLionAtEdge.call(this);
        });
    }
}

function winGame() {
    gameState = 'won';

    // Clear remaining lions with celebration
    lions.children.iterate(lion => {
        if (!lion) return;
        const lx = lion.x, ly = lion.y;
        lion.destroy();
        const poof = this.add.text(lx, ly, '✨', { fontSize: '40px' }).setOrigin(0.5);
        this.tweens.add({
            targets: poof,
            scale: { from: 0.5, to: 2 },
            alpha: { from: 1, to: 0 },
            duration: 600,
            onComplete: () => poof.destroy()
        });
    });

    // Confetti
    for (let i = 0; i < 25; i++) {
        const emoji = ['⭐', '🎉', '🏆', '✨', '💛'][Math.floor(Math.random() * 5)];
        const c = this.add.text(
            Math.random() * GAME_W,
            -30 - Math.random() * 100,
            emoji,
            { fontSize: '32px' }
        ).setOrigin(0.5).setDepth(5);
        this.tweens.add({
            targets: c,
            y: GAME_H + 30,
            angle: Math.random() * 360,
            duration: 2000 + Math.random() * 1500,
            ease: 'Quad.easeIn'
        });
    }

    messageText.setText(`¡GANÓ EL TIGRE! 🐅🏆\nThe tiger won!\n\nPresiona una flecha para jugar otra vez\nPress an arrow to play again`);
}
