class DialogHandler {
    constructor(game) {
        this.game = game;
        this.message = " ";
        this.displayMessage = [];
        this.count = 0;
        this.lines = [];
        this.line = 0;
        this.endFunc;
    ;
    }
    Load(msg,func) {
        this.message = msg;
        this.displayMessage = [];
        this.count = 0;
        this.lines = msg.split("\n")
        this.line = 0;
        this.endFunc = func;
        for (let i = 0; i < this.lines.length; i++){
            this.displayMessage.push("")
        }
        
    }
    Update(theKeymap) {
        if (this.line < this.lines.length && this.count < this.lines[this.line].length) {

            this.displayMessage[this.line] += this.lines[this.line][this.count];
            this.count++;
        }else if (this.count == this.lines[this.line].length && this.line < this.lines.length-1) {
            this.line++;
            this.count = 0;
        }

        if (theKeymap.a == true) {
            this.endFunc(this.game);
                theKeymap.a = false;
        }
    }
    Draw(ctx) {
        ctx.fillStyle = "white";
        ctx.fillRect(screen.width / 4, screen.height / 4 * 2.85, screen.width / 2, screen.height / 4)
        ctx.fillStyle = "black";
        ctx.fillRect(screen.width / 4 + 10, screen.height / 4 * 2.85 + 10, (screen.width / 2) - 20, (screen.height / 4) - 20)
        ctx.font = "48px serif";
        ctx.fillStyle = "white";


        for (let i = 0; i < this.lines.length; i++) {
            ctx.fillText(this.displayMessage[i], screen.width / 4 + 20, screen.height / 4 * 2.85 + 55 * (i + 1));
            
        }
    }
}