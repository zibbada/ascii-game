class Camera {
    constructor(){
        this.x=0;
        this.y=0;
    }
    update(player){
        this.x =  this.x + ((player.x-screen.width/70) - this.x) * 0.2;
        this.y =  this.y + ((player.y-screen.height/70) - this.y) * 0.2;
       // console.log(this.x + " " + player.x)
    }
    draw(){

    }
}