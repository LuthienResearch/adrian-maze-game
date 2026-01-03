// Adrian's Maze Game - Level 1
// Created by: Adrian (6 years old)
// Date: January 1, 2026

// Game Configuration
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

// Game Variables
let player1;
let player2;
let platforms;
let lavaTraps;
let superTrap;
let cursors;
let wasd;
let scoreText;
let player1Health = 50;
let player2Health = 50;
let player1Lives = 3;
let player2Lives = 3;
let p1HealthText;
let p2HealthText;
let gameOver = false;
let winnerText;
let scene; // Reference to scene for use in functions

// Constants
const LAVA_DAMAGE = 20; // Points lost when touching lava
const DAMAGE_COOLDOWN = 1000; // 1 second between damage

// Damage cooldown tracking
let player1LastDamage = 0;
let player2LastDamage = 0;

function preload() {
    // This function will load assets (images, sounds, etc.)
    // For now, we'll use simple shapes
    console.log('🎮 Loading Adrian\'s Maze Game...');
}

function create() {
    // Background
    this.add.rectangle(400, 300, 800, 600, 0x2d3436);

    // Title
    this.add.text(400, 30, 'ADRIAN\'S MAZE GAME', {
        fontSize: '32px',
        fill: '#fff',
        fontStyle: 'bold'
    }).setOrigin(0.5);

    // Subtitle
    this.add.text(400, 65, 'Level 1: Race to the Exit!', {
        fontSize: '18px',
        fill: '#00ff00'
    }).setOrigin(0.5);

    // Create platforms (simple maze)
    platforms = this.physics.add.staticGroup();

    // Ground
    platforms.create(400, 580, null).setDisplaySize(800, 40).setTint(0x8B4513).refreshBody();

    // Simple maze walls for testing
    platforms.create(200, 500, null).setDisplaySize(300, 20).setTint(0x8B4513).refreshBody();
    platforms.create(600, 420, null).setDisplaySize(300, 20).setTint(0x8B4513).refreshBody();
    platforms.create(300, 340, null).setDisplaySize(200, 20).setTint(0x8B4513).refreshBody();
    platforms.create(650, 260, null).setDisplaySize(250, 20).setTint(0x8B4513).refreshBody();
    platforms.create(200, 180, null).setDisplaySize(150, 20).setTint(0x8B4513).refreshBody();

    // Exit (goal)
    const exit = this.add.rectangle(750, 140, 40, 40, 0x00ff00);
    this.add.text(750, 140, '🚪', {
        fontSize: '32px'
    }).setOrigin(0.5);

    // ============================================
    // 🔥 TRAPS - DISABLED FOR NOW
    // ============================================
    // TODO: Re-enable when ready to test traps
    lavaTraps = this.physics.add.staticGroup();

    // Player 1 (Dinosaur 🦖)
    player1 = this.add.text(100, 450, '🦖', {
        fontSize: '60px'
    }).setOrigin(0.5);
    this.physics.add.existing(player1);
    player1.body.setSize(48, 60); // Hitbox size
    player1.body.setBounce(0.2);
    player1.body.setCollideWorldBounds(true);

    // Player 2 (Robot 🤖)
    player2 = this.add.text(150, 450, '🤖', {
        fontSize: '60px'
    }).setOrigin(0.5);
    this.physics.add.existing(player2);
    player2.body.setSize(48, 60); // Hitbox size
    player2.body.setBounce(0.2);
    player2.body.setCollideWorldBounds(true);

    // Collisions
    this.physics.add.collider(player1, platforms);
    this.physics.add.collider(player2, platforms);

    // Health Display
    this.add.text(20, 100, 'Player 1 (🦖)', {
        fontSize: '16px',
        fill: '#ff0000'
    });

    p1HealthText = this.add.text(20, 125, `Health: ${player1Health} HP`, {
        fontSize: '14px',
        fill: '#fff'
    });

    this.add.text(20, 145, `Lives: ${'❤️'.repeat(player1Lives)}`, {
        fontSize: '14px',
        fill: '#fff'
    });

    this.add.text(20, 180, 'Player 2 (🤖)', {
        fontSize: '16px',
        fill: '#0000ff'
    });

    p2HealthText = this.add.text(20, 205, `Health: ${player2Health} HP`, {
        fontSize: '14px',
        fill: '#fff'
    });

    this.add.text(20, 225, `Lives: ${'❤️'.repeat(player2Lives)}`, {
        fontSize: '14px',
        fill: '#fff'
    });

    // Store scene reference
    scene = this;

    // TRAP COLLISIONS - DISABLED FOR NOW
    // this.physics.add.overlap(player1, lavaTraps, hitLava, null, this);
    // this.physics.add.overlap(player2, lavaTraps, hitLava, null, this);
    // this.physics.add.overlap(player1, superTrap, hitSuperTrap, null, this);
    // this.physics.add.overlap(player2, superTrap, hitSuperTrap, null, this);

    // Controls
    cursors = this.input.keyboard.createCursorKeys();
    wasd = this.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.W,
        left: Phaser.Input.Keyboard.KeyCodes.A,
        down: Phaser.Input.Keyboard.KeyCodes.S,
        right: Phaser.Input.Keyboard.KeyCodes.D
    });

    console.log('✅ Game created! Player 1: Arrow Keys | Player 2: WASD');
}

function update() {
    // Don't process input if game is over
    if (gameOver) return;

    // Player 1 Controls (Arrow Keys)
    if (cursors.left.isDown) {
        player1.body.setVelocityX(-160);
    } else if (cursors.right.isDown) {
        player1.body.setVelocityX(160);
    } else {
        player1.body.setVelocityX(0);
    }

    if (cursors.up.isDown && player1.body.touching.down) {
        player1.body.setVelocityY(-250);
    }

    // Player 2 Controls (WASD)
    if (wasd.left.isDown) {
        player2.body.setVelocityX(-160);
    } else if (wasd.right.isDown) {
        player2.body.setVelocityX(160);
    } else {
        player2.body.setVelocityX(0);
    }

    if (wasd.up.isDown && player2.body.touching.down) {
        player2.body.setVelocityY(-250);
    }

    // Check if player reached exit
    if (player1.x > 730 && player1.y < 160) {
        endGame('🦖 Player 1');
    }

    if (player2.x > 730 && player2.y < 160) {
        endGame('🤖 Player 2');
    }
}

// ============================================
// 🔥 HELPER FUNCTIONS
// ============================================

// Create a lava trap at specified position
function createLavaTrap(scene, x, y, width, height) {
    const lava = scene.add.rectangle(x, y, width, height, 0xff4500); // Orange-red lava
    scene.physics.add.existing(lava, true); // Static body
    lavaTraps.add(lava);

    // Add bubbling effect
    scene.tweens.add({
        targets: lava,
        scaleY: 1.1,
        duration: 300,
        yoyo: true,
        repeat: -1
    });

    // Add lava emoji label
    scene.add.text(x, y - 15, '🔥', {
        fontSize: '14px'
    }).setOrigin(0.5);

    return lava;
}

// Player touched lava - lose health!
function hitLava(player, lava) {
    if (gameOver) return;

    const now = Date.now();
    const isPlayer1 = (player === player1);

    // Check cooldown - don't take damage too fast
    if (isPlayer1) {
        if (now - player1LastDamage < DAMAGE_COOLDOWN) return;
        player1LastDamage = now;
    } else {
        if (now - player2LastDamage < DAMAGE_COOLDOWN) return;
        player2LastDamage = now;
    }

    const playerName = isPlayer1 ? '🦖 Player 1' : '🤖 Player 2';

    // Apply damage
    if (isPlayer1) {
        player1Health -= LAVA_DAMAGE;
        p1HealthText.setText(`Health: ${player1Health} HP`);
        console.log(`🔥 ${playerName} touched lava! -${LAVA_DAMAGE} HP (${player1Health} remaining)`);

        // Check for death
        if (player1Health <= 0) {
            endGame('🤖 Player 2');
            return;
        }
    } else {
        player2Health -= LAVA_DAMAGE;
        p2HealthText.setText(`Health: ${player2Health} HP`);
        console.log(`🔥 ${playerName} touched lava! -${LAVA_DAMAGE} HP (${player2Health} remaining)`);

        // Check for death
        if (player2Health <= 0) {
            endGame('🦖 Player 1');
            return;
        }
    }

    // Knock player back (so they don't keep taking damage)
    player.body.setVelocityY(-200);
    player.body.setVelocityX(player.body.velocity.x > 0 ? -100 : 100);

    // Flash player red to show damage
    scene.tweens.add({
        targets: player,
        alpha: 0.3,
        duration: 100,
        yoyo: true,
        repeat: 3
    });
}

// Player touched SUPER TRAP - INSTANT LOSS!
function hitSuperTrap(player, trap) {
    if (gameOver) return;

    const isPlayer1 = (player === player1);
    const loserName = isPlayer1 ? '🦖 Player 1' : '🤖 Player 2';
    const winnerName = isPlayer1 ? '🤖 Player 2' : '🦖 Player 1';

    console.log(`☠️ ${loserName} fell into the SUPER TRAP!`);
    console.log(`🏆 ${winnerName} WINS!`);

    // Freeze the losing player in the trap
    player.body.setVelocity(0, 0);
    player.body.setImmovable(true);

    endGame(winnerName);
}

// End the game with a winner
function endGame(winner) {
    gameOver = true;

    // Display winner
    winnerText = scene.add.text(400, 300, `${winner} WINS!`, {
        fontSize: '48px',
        fill: '#ffff00',
        fontStyle: 'bold',
        stroke: '#000000',
        strokeThickness: 6
    }).setOrigin(0.5);

    // Add "Play Again" instruction
    scene.add.text(400, 360, 'Refresh page to play again!', {
        fontSize: '20px',
        fill: '#ffffff'
    }).setOrigin(0.5);

    console.log('🎮 Game Over!');
}

console.log('🎮 Adrian\'s Maze Game Loaded!');
console.log('👾 Created by Adrian (6 years old)');
console.log('🔥 Phase 2: Traps are now active!');
console.log('🚀 Ready to play!');
