class Player {
   constructor () {
       this.x = 12;
       this.y = 12 ;
   }
    
    update(theKeymap) {
        if (theKeymap.left == true && lvl1.collision[this.y][this.x-1] != 1) {
            this.x -= 1;
            theKeymap.left = false ;
        }
        if (theKeymap.down == true && lvl1.collision[this.y+1][this.x] != 1) {
            this.y += 1;
            theKeymap.down = false;
        }
        if (theKeymap.up == true && lvl1.collision[this.y-1][this.x] != 1) {
            this.y -= 1;
           theKeymap.up = false;
        }
        if (theKeymap.right == true && lvl1.collision[this.y][this.x+1] != 1) {
            this.x += 1;
            theKeymap.right = false;
        }
    }
    draw(ctx,camX,camY) {
        ctx.fillRect((this.x - camX)*35,(this.y - camY)*35,35,35);
    }
}