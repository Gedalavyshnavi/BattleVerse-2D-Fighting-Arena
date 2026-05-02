class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.health = 100;
        this.speed = 5;
        this.attack = false;
    }

    draw(ctx) {
        // Head
        ctx.fillStyle = "peachpuff";
        ctx.beginPath();
        ctx.arc(this.x, this.y - 30, 10, 0, Math.PI * 2);
        ctx.fill();

        // Body
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x - 5, this.y - 20, 10, 30);

        // Arms
        ctx.fillRect(this.x - 15, this.y - 15, 10, 5);
        ctx.fillRect(this.x + 5, this.y - 15, 10, 5);

        // Legs
        ctx.fillRect(this.x - 5, this.y + 10, 5, 15);
        ctx.fillRect(this.x, this.y + 10, 5, 15);

        // Attack hitbox
        if (this.attack) {
            ctx.fillStyle = "yellow";
            ctx.fillRect(this.x + 10, this.y - 20, 20, 20);
        }
    }

    getHitbox() {
        return { x: this.x - 10, y: this.y - 30, w: 20, h: 50 };
    }

    getAttackBox() {
        return { x: this.x + 10, y: this.y - 20, w: 20, h: 20 };
    }
}