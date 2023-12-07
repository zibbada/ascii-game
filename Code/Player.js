class Player {
   constructor () {
       this.x = screen.width/70;
       this.y = screen.height/70;
       console.log(this.x + " " + this.y)
   }
    
    update(theKeymap) {
        if (theKeymap.left == true) {
            this.x -= 1;
            theKeymap.left = false;
        }
        if (theKeymap.down == true) {
            this.y += 1;
            theKeymap.down = false;
        }
        if (theKeymap.up == true) {
            this.y -= 1;
           theKeymap.up = false;
        }
        if (theKeymap.right == true) {
            this.x += 1;
            theKeymap.right = false;
        }
    }
    draw(ctx,camX,camY) {
        ctx.fillRect((this.x - camX)*35,(this.y - camY)*35,35,35);
    }
}