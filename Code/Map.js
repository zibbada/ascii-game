class Map {
    constructor() {
        this.currentMap = lvl1;
        this.tileSize = 7;
        this.tileSet = new Image(0, 0)
        this.zoom = 5;
        this.tileSet.src = "./tileset.png";

    }
    Update() {

    }
    Draw(ctx, camX, camY) {
        let alpha = 1 / 2;
        for (let z = 0; z < 1; z++) {
            let mapindex = 0;
            for (let y = 0; y < this.currentMap.size.height; y++) {
                for (let x = 0; x < this.currentMap.size.width; x++) {

                    let dx = ((x)) - (x) * 1.1;
                    //console.log(dx) , (x - camX + dx*z) * this.tileSize * this.zoom * (1 + 1 * 0.1);
                    let tileVal = this.currentMap.map[mapindex] - 1;
                    let sx = (tileVal % 27) * this.tileSize;
                    let sy = Math.floor(tileVal / 27) * this.tileSize;
                    ctx.globalAlpha = alpha * (z + 1);
                    ctx.drawImage(this.tileSet,
                        sx,
                        sy,
                        this.tileSize,
                        this.tileSize,
                        (x - camX + dx*z) * this.tileSize * this.zoom * (1 + z * 0.1),
                        (y - camY) * this.tileSize * this.zoom * (1 + z * 0.1),
                        this.tileSize * (this.zoom),
                        this.tileSize * (this.zoom));
                    mapindex++;
                }
            }
        }
    }
}

/*
  Draw(ctx, camX, camY) {
        let alpha = 1 / 2;
        for (let z = 0; z < 2; z++) {
            let mapindex = 0;
            for (let y = 0; y < this.currentMap.size.height; y++) {
                for (let x = 0; x < this.currentMap.size.width; x++) {
                    let tileVal = this.currentMap.map[mapindex] - 1;
                    let sx = (tileVal % 27) * this.tileSize;
                    let sy = Math.floor(tileVal / 27) * this.tileSize;
                    ctx.globalAlpha = alpha * (z + 1);
                    ctx.drawImage(this.tileSet,
                        sx,
                        sy,
                        this.tileSize,
                        this.tileSize,
                        (x - 2.5*z - camX) * this.tileSize * this.zoom * (1 + z * 0.1),
                        (y - 1.40*z - camY) * this.tileSize * this.zoom * (1 + z * 0.1),
                        this.tileSize * (this.zoom),
                        this.tileSize * (this.zoom));
                        if (z>0){
                            ctx.drawImage(this.tileSet,
                                sx,
                                sy,
                                this.tileSize,
                                this.tileSize,
                                (x - 1.30*z - camX) * this.tileSize * this.zoom * (1 + z * 0.05),
                                (y - 0.75*z - camY) * this.tileSize * this.zoom * (1 + z * 0.05),
                                this.tileSize * (this.zoom),
                                this.tileSize * (this.zoom));  
                        }
                    mapindex++;
                }
            }
        }
    }
    */
   