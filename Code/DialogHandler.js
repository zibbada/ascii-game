class DialogHandler{
    DialogHandler(){
        this.message = " ";
        this.displayMessage = "";
        this.count = 0;
    }
    Load(msg){
        this.message = msg;
        this.displayMessage = "";
        this.count = 0;
    }
    Update(){
        if (this.count<this.message.length){
            this.displayMessage += this.message[this.count];
            this.count += 1;
        }
    }
    Draw(ctx){
        ctx.fillStyle = "white";
        ctx.fillRect(screen.width/4,screen.height/4*2.85,screen.width/2,screen.height/4)
        ctx.fillStyle = "black";
        ctx.fillRect(screen.width/4+10,screen.height/4*2.85+10,(screen.width/2)-20,(screen.height/4)-20)
        ctx.font = "48px serif";
        ctx.fillStyle = "white";
        ctx.fillText(this.displayMessage, screen.width/4+20, screen.height/4*2.85+50);
    }
}