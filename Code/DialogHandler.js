/*
Author: Tymofiy Spektor
Date: 8th jan 2024
Description: Fialog handler class
*/
class DialogHandler {
    constructor(game) {
        //dependency inject main class
        this.game = game;
        //create message vars for calculating dialog animation
        //loaded message
        this.message = " ";
        //message that is being shown
        this.displayMessage = [];
        //current letter to be added from message to displaye message
        this.count = 0;
        //lines array for the support of multi line dialog
        this.lines = [];
        //current line that is being proccessed
        this.line = 0;
        //function that is going to be executed after dialog end (used for making dialog sequences)
        this.endFunc;
    }

    //load method
    Load(msg, func) {
        //load message
        this.message = msg;
        //reset var used to make previous dialog aniimation
        this.displayMessage = []; //array because it supports multiple lines (each new line is a new item in array)
        this.count = 0;
        //if loaded dialog have \n split it and write it to the lines array for animation
        this.lines = msg.split("\n")
        //reset var used to make previous dialog animation
        this.line = 0;
        //load end function
        this.endFunc = func;
        //add string for each line so the draw method wont throw error when trying to draw a text of a non string
        for (let i = 0; i < this.lines.length; i++){
            this.displayMessage.push("")
        }
        
    }
    //update method for making the animation (it also runs each frame) anmation is done by addig 1 letter per frame from loaded message to display message
    update(theKeymap) {
        //check if there are any letter left to add by comparing loaded message length and current letter number and if there are any lines left
        if (this.line < this.lines.length && this.count < this.lines[this.line].length) {
            //if check passes procced by adding next letter to the curent line
            this.displayMessage[this.line] += this.lines[this.line][this.count];
            //ading 1 to current letter(to properly access the next letter)
            this.count++;

            //else check if count equals to current lines length (if they are equal it means that the line is fully added) and check if there any lines left
        } else if (this.count == this.lines[this.line].length && this.line < this.lines.length - 1) {
            //if all checks pass reset letter counter and add one to line counter to animate next line
            this.line++;
            this.count = 0;
        }
        //if player input run end function with injected main class
        if (theKeymap.a == true) {
            this.endFunc(this.game);
                theKeymap.a = false;
        }
    }
    //draw method runs each frame
    draw(ctx) {
        //set the context properties and draw a dialog box
        ctx.fillStyle = "white";
        ctx.fillRect(screen.width / 4, screen.height / 4 * 2.85, screen.width / 2, screen.height / 4)
        ctx.fillStyle = "black";
        ctx.fillRect(screen.width / 4 + 10, screen.height / 4 * 2.85 + 10, (screen.width / 2) - 20, (screen.height / 4) - 20)
        ctx.font = "48px serif";
        ctx.fillStyle = "white";

        //draw each line of the display message array with the offset of 55 pixel from the prevoius line
        for (let i = 0; i < this.lines.length; i++) {
            //display the display message
            ctx.fillText(this.displayMessage[i], screen.width / 4 + 20, screen.height / 4 * 2.85 + 55 * (i + 1));
            
        }
    }
}