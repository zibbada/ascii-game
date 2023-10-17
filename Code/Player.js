class Player {
   constructor () {
       this.x = 0;
       this.y = 0;
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
    draw(ctx) {
        ctx.fillRect(this.x*25,this.y*25,25,25);
    }
}