const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const player = new Player(200, 400);
const enemy = new Enemy(600, 400);

let keys = {};

document.addEventListener("keydown", e => {
    keys[e.key] = true;

    if (e.key === " ") {
        player.attack = true;
        setTimeout(() => player.attack = false, 200);
    }
});

document.addEventListener("keyup", e => keys[e.key] = false);

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Movement
    if (keys["ArrowLeft"]) player.x -= player.speed;
    if (keys["ArrowRight"]) player.x += player.speed;

    enemy.update(player);

    // Draw
    player.draw(ctx);
    enemy.draw(ctx);

    // Player hits enemy
    if (player.attack && collision(player.getAttackBox(), enemy.getHitbox())) {
        enemy.health -= 1;
    }

    // Enemy hits player
    if (enemy.attack && collision(enemy.getAttackBox(), player.getHitbox())) {
        player.health -= 1;
    }

    // Update UI
    document.getElementById("playerHealth").innerText = player.health;
    document.getElementById("enemyHealth").innerText = enemy.health;

    // Win condition
    if (player.health <= 0) {
        alert("Enemy Wins!");
        location.reload();
    }

    if (enemy.health <= 0) {
        alert("You Win!");
        location.reload();
    }

    requestAnimationFrame(gameLoop);
}

gameLoop();