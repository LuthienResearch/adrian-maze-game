// El Tigre Contra Los Leones / The Tiger vs The Lions
// Diseñado por / Designed by: Rafa (4)
//
// Visión de Rafa: el tigre lucha contra los leones.
// Rafa's vision: the tiger fights against the lions.
//
// Reglas simples para Rafa (4):
// El tigre se mueve con las flechas. Cuando toca a un león, el león se vence.
// Simple rules for Rafa (4):
// Tiger moves with arrow keys. When it touches a lion, the lion is defeated.

const GAME_W = 800;
const GAME_H = 600;
const TOTAL_LIONS = 6;
const TIGER_SPEED = 260;
const LION_SPEED = 110;

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
        tuft.setAlpha(0.6);
    }

    tiger = this.add.text(GAME_W / 2, GAME_H / 2, '🐅', { fontSize: '52px' }).setOrigin(0.5);
    this.physics.add.existing(tiger);
    tiger.body.setCollideWorldBounds(true);

    lions = this.physics.add.group();
    const spawnPoints = [
        [80, 80], [GAME_W - 80, 80], [80, GAME_H - 80], [GAME_W - 80, GAME_H - 80],
        [GAME_W / 2, 60], [GAME_W / 2, GAME_H - 60]
    ];
    spawnPoints.forEach(([x, y]) => spawnLion.call(this, x, y));

    this.physics.add.overlap(tiger, lions, defeatLion, null, this);

    cursors = this.input.keyboard.createCursorKeys();

    scoreText = this.add.text(16, 16, `🦁 Vencidos: 0 / ${TOTAL_LIONS}`, {
        fontSize: '22px',
        fill: '#fff',
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: { x: 12, y: 8 }
    });

    messageText = this.add.text(GAME_W / 2, GAME_H / 2 - 20, '', {
        fontSize: '32px',
        fill: '#fff',
        backgroundColor: 'rgba(0,0,0,0.85)',
        padding: { x: 24, y: 16 },
        align: 'center'
    }).setOrigin(0.5);
}

function spawnLion(x, y) {
    const lion = this.add.text(x, y, '🦁', { fontSize: '40px' }).setOrigin(0.5);
    this.physics.add.existing(lion);
    lion.body.setCollideWorldBounds(true);
    lion.body.setBounce(1, 1);
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

    // Lions wander slowly, occasionally changing direction
    lions.children.iterate(lion => {
        if (!lion) return;
        // Lions try to flee from tiger if close, otherwise wander
        const dx = lion.x - tiger.x;
        const dy = lion.y - tiger.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200 && dist > 0) {
            lion.body.setVelocity((dx / dist) * LION_SPEED, (dy / dist) * LION_SPEED);
        } else if (Math.abs(lion.body.velocity.x) < 10 && Math.abs(lion.body.velocity.y) < 10) {
            lion.body.setVelocity(
                (Math.random() - 0.5) * LION_SPEED * 1.5,
                (Math.random() - 0.5) * LION_SPEED * 1.5
            );
        }
    });
}

function defeatLion(tiger, lion) {
    if (gameState !== 'playing') return;

    const x = lion.x;
    const y = lion.y;
    lion.destroy();
    lionsDefeated++;
    scoreText.setText(`🦁 Vencidos: ${lionsDefeated} / ${TOTAL_LIONS}`);

    const boom = this.add.text(x, y, '💥', { fontSize: '64px' }).setOrigin(0.5);
    this.tweens.add({
        targets: boom,
        scale: { from: 0.5, to: 2 },
        alpha: { from: 1, to: 0 },
        duration: 500,
        onComplete: () => boom.destroy()
    });

    const star = this.add.text(x, y, '⭐', { fontSize: '40px' }).setOrigin(0.5);
    this.tweens.add({
        targets: star,
        y: y - 80,
        alpha: { from: 1, to: 0 },
        duration: 700,
        onComplete: () => star.destroy()
    });

    if (lionsDefeated >= TOTAL_LIONS) winGame.call(this);
}

function winGame() {
    gameState = 'won';
    messageText.setText(`¡GANÓ EL TIGRE! 🐅🏆\nThe tiger won!\n\nPresiona una flecha para jugar otra vez\nPress an arrow to play again`);
}
