/*
Author: Tymofiy Spektor
Date: 8th jan 2024
Description: A camera class
*/

class Camera {

    constructor(target) {
        
        //set target object of the camera
        this.target = target
        //set camera position in the middle of the screen. devide screen by 70 , because middle of the screeen = screen width/2 and tile size is 35 pixels. so to find position of the center "tile" devide screen size by 7
        this.x=target.x-screen.width/70;
        this.y=target.y-screen.height/70;
    }
    //update method, runs every frame
    update() {
        //lerps (linear interpolates) camera position to new camera position by  moving old position to the new position by some percentage of the old position. in this case its %20

        //(new camera pos is player's pos)
        this.x =  this.x + ((this.target.x-screen.width/70) - this.x) * 0.2; //<--- 0.2 here means 20%
        this.y =  this.y + ((this.target.y-screen.height/70) - this.y) * 0.2;
    }
}