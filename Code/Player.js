class Player {
    constructor(game) {
        this.game = game
        this.x = 12;
        this.y = 12;
        this.dirX = 0;
        this.dirY = 0;
    }

    update(theKeymap) {
        this.dirX = 0;
        this.dirY = 0;
        if (theKeymap.left == true) {
            this.dirX = -1;
            theKeymap.left = false;
        }
        if (theKeymap.down == true) {
            this.dirY = 1;
            theKeymap.down = false;
        }
        if (theKeymap.up == true) {
            this.dirY = -1;
            theKeymap.up = false;
        }
        if (theKeymap.right == true) {
            this.dirX = 1;
            theKeymap.right = false;
        }
        let collisionTile = lvl1.collision[this.y + this.dirY][this.x + this.dirX];
        if (collisionTile == 0) {
            this.x += this.dirX;
            this.y += this.dirY
        }else if (collisionTile != 1){
            this.game.dialogHandler.Load(lvl1.actors[collisionTile-2])
            this.game.state = 2
        }

    }
    draw(ctx, camX, camY) {
        ctx.fillRect((this.x - camX) * 35, (this.y - camY) * 35, 35, 35);
    }
}