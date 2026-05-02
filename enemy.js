class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.health = 100;
        this.speed = 3;
        this.attack = false;
    }

    update(player) {
        // Simple AI: follow player
        if (player.x > this.x) this.x += this.speed;
        else this.x -= this.speed;

        // Attack randomly when near
        if (Math.abs(player.x - this.x) < 50) {
            this.attack = Math.random() > 0.7;
        } else {
            this.attack = false;
        }
    }

    draw(ctx) {
        // Head
        ctx.fillStyle = "orange";
        ctx.beginPath();
        ctx.arc(this.x, this.y - 30, 10, 0, Math.PI * 2);
        ctx.fill();

        // Body
        ctx.fillStyle = "red";
        ctx.fillRect(this.x - 5, this.y - 20, 10, 30);

        // Arms
        ctx.fillRect(this.x - 15, this.y - 15, 10, 5);
        ctx.fillRect(this.x + 5, this.y - 15, 10, 5);

        // Legs
        ctx.fillRect(this.x - 5, this.y + 10, 5, 15);
        ctx.fillRect(this.x, this.y + 10, 5, 15);

        // Attack
        if (this.attack) {
            ctx.fillStyle = "yellow";
            ctx.fillRect(this.x - 30, this.y - 20, 20, 20);
        }
    }

    getHitbox() {
        return { x: this.x - 10, y: this.y - 30, w: 20, h: 50 };
    }

    getAttackBox() {
        return { x: this.x - 30, y: this.y - 20, w: 20, h: 20 };
    }
}