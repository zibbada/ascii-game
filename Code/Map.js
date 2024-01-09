/*
Author: Tymofiy Spektor
Date: 8th jan 2024
Description: Map class
*/
class Map {
    constructor(camera, player) {
        //values used to correctly diplay tiles
        this.tileSize = 7;
        //reference to the tileset
        this.tileSet = new Image(0, 0)
        this.tileSet.src = "./tileset.png";

        //map zoom
        this.zoom = 5;

        //loaded map
        this.currentMap = lvl1;
        //referance to player and camera
        this.player = player;
        this.camera = camera

    }
    //draw method runs every frame
    draw(ctx) {
        //reset index of the current tile to 0
        let mapindex = 0;
        //get map depth
        let depth = this.currentMap.depth
        //find alpha value per layer by dividing 1 by the amount of layers
        let alpha = 1 / this.currentMap.size.depth;
        //nested loop that draw each tile
        for (let z = 0; z < this.currentMap.size.depth; z++) {   
            // offset/depth calculations
            // finds offset for each layer by finding diffirance between position of the player on the first layer and position of the player if they were on the next/scaled layer
            let offsetX = (this.player.x - this.camera.x) * (1 + z * depth) - (this.player.x - this.camera.x);
            let offsetY = (this.player.y - this.camera.y) * (1 + z * depth) - (this.player.y - this.camera.y);
            //nested loop that draw each tile
            for (let y = 0; y < this.currentMap.size.height; y++) {
                for (let x = 0; x < this.currentMap.size.width; x++) {
                    //find position of the tile by offsetting its grid position by camera position, multiplying it by depth ratio (1+z*depth), applying offsets (offsetX) and finally multiplying by tile size and zoom vars
                    let xx = ((x - this.camera.x) * (1 + z * depth) - offsetX) * this.tileSize * this.zoom;
                    let yy =  ((y - this.camera.y) * (1 + z * depth) - offsetY) * this.tileSize * this.zoom;
                    
                    //check if the position of the tile is not ont the screen. if it is not then dont draw it
                    if (xx < 0 || xx > screen.width || yy < 0 || yy > screen.height - this.zoom * this.tileSize){
                        mapindex++;
                        continue;
                    }
                    let tileVal = this.currentMap.map[mapindex] - 1;
                    //calculating source x and y of the image by using formulas from this article https://medium.com/geekculture/make-your-own-tile-map-with-vanilla-javascript-a627de67b7d9
                    let sx = (tileVal % 27) * this.tileSize;
                    let sy = Math.floor(tileVal / 27) * this.tileSize;
                    //applying alpha
                    ctx.globalAlpha = alpha * (z + 1);
                    //draw image
                    ctx.drawImage(this.tileSet,
                        sx,
                        sy,
                        this.tileSize,
                        this.tileSize,
                        xx,
                        yy,
                        this.tileSize * (this.zoom),
                        this.tileSize * (this.zoom));
                    //add one to the index of the current tile to 0
                    mapindex++;
                }
            }
        }
    }
}