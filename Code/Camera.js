class Camera {
    constructor(){
        this.x=0;
        this.y=0;
    }
    update(target){
        this.x =  this.x + ((target.x-screen.width/70) - this.x) * 0.1;
        this.y =  this.y + ((target.y-screen.height/70) - this.y) * 0.1;
       // console.log(this.x + " " + player.x)
    }
    draw(){

    }
}