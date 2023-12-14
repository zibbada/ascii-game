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
    Draw(ctx, camX, camY, pX, pY) {
        let mapindex = 0;
        let alpha = 1 / 4;
        for (let z = 0; z < 4; z++) {   
            for (let y = 0; y < this.currentMap.size.height; y++) {
                for (let x = 0; x < this.currentMap.size.width; x++) {
                    let tileVal = this.currentMap.map[mapindex] - 1;
                    let sx = (tileVal % 27) * this.tileSize;
                    let sy = Math.floor(tileVal / 27) * this.tileSize;
                    ctx.globalAlpha = alpha * (z + 1);
                    
                    let offsetX = (pX - camX) * (1 + z * 0.025) - (pX - camX);
                    let offsetY = (pY - camY) * (1 + z * 0.025) - (pY - camY);
                    ctx.drawImage(this.tileSet,
                        sx,
                        sy,
                        this.tileSize,
                        this.tileSize,
                        (x - camX) * this.tileSize * this.zoom * (1 + z * 0.025) - offsetX * this.tileSize * this.zoom,
                        (y - camY) * this.tileSize * this.zoom * (1 + z * 0.025) - offsetY * this.tileSize * this.zoom,
                        this.tileSize * (this.zoom),
                        this.tileSize * (this.zoom));
                    ctx.fillStyle = "green";

                    mapindex++;
                }
            }
        }
    }
}