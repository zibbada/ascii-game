

class Camera {
    constructor(target){
        this.target = target
        this.x=target.x-screen.width/70;
        this.y=target.y-screen.height/70;
    }
    update(){
        this.x =  this.x + ((this.target.x-screen.width/70) - this.x) * 0.2;
        this.y =  this.y + ((this.target.y-screen.height/70) - this.y) * 0.2;
    }
    draw(){

    }
}