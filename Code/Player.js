/*
Author: Tymofiy Spektor
Date: 8th jan 2024
Description: Player class
*/
class Player {
    constructor(game) {

        //dependency injection of the main class
        this.game = game;
        
        //define the position of the character
        this.x = 4;
        this.y = 20;

        //create direction virables, that show where the player wants to go next
        this.dirX = 0;
        this.dirY = 0;
    }


    //update method that runs each frame
    //method takes in the key map var to read player input
    update(theKeymap) {
        //reset direction
        this.dirX = 0;
        this.dirY = 0;

        //read player input and based on it set player's desired direction of moving
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

        //get the collision tile at the position where player wants to go
        let collisionTile = this.game.currentMap.collision[this.y + this.dirY][this.x + this.dirX];
        /*
        Check it:
        if its 0 move the player
        if its 1 dont move them
        if anything geater than one use the tile as athe index for the actor array and run its code
        */
        if (collisionTile == 0) {
            this.x += this.dirX;
            this.y += this.dirY;
        }else if (collisionTile > 1){
            this.game.currentMap.actors[collisionTile-2](this.game);
        }

    }
    //draw method that runs each frame after update method
    draw(ctx, camX, camY) {
        //set context color to red
        ctx.fillStyle = "red"
        //draw square at the position of the player with camera offset
        ctx.fillRect((this.x - camX) * 35, (this.y - camY) * 35, 35, 35);
    }
}