/*
Author: Tymofiy Spektor
Date: 8th jan 2024
Description: the main purpuse was to create this class to easily create gui. 
             ended up not using it. not commented because did not use it
*/

class GuiButton {
    constructor(x, y, w, h, func) {

        //openly set properties
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.onClick = func;

        this.selected = false;
    }
    isColliding(mouse) {
        if (mouse.x > this.x && mouse.x < this.x + this.width && mouse.y > this.y && mouse.y < this.y + this.height) {
            return true;
        } else return false;
    }
    Update(theKeymap, mouse) {
        this.selected = this.isColliding(mouse);

        if (this.isColliding(mouse) && theKeymap.a == true) {
            console.log(this.onClick);
            theKeymap.a = false;
        }
    }
    Draw(ctx) {
        if (!this.selected) {
            ctx.fillStyle = "black";
        } else {
            ctx.fillStyle = "white";
        }
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 15;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
}