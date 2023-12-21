class Map {
    constructor(camera,player) {
        this.currentMap = lvl1;
        this.tileSize = 7;
        this.tileSet = new Image(0, 0)
        this.zoom = 5;
        this.tileSet.src = "./tileset.png";
        this.player = player;
        this.camera = camera

    }
    Update() {

    }
    Draw(ctx) {
        let mapindex = 0;
        let alpha = 1 / this.currentMap.size.depth;
        for (let z = 0; z < this.currentMap.size.depth; z++) {   
            
            let offsetX = (this.player.x - this.camera.x) * (1 + z * 0.025) - (this.player.x - this.camera.x);
            let offsetY = (this.player.y - this.camera.y) * (1 + z * 0.025) - (this.player.y - this.camera.y);
            for (let y = 0; y < this.currentMap.size.height; y++) {
                for (let x = 0; x < this.currentMap.size.width; x++) {

                   

                    let xx = ((x - this.camera.x) * (1 + z * 0.025) - offsetX) * this.tileSize * this.zoom;
                    let yy =  ((y - this.camera.y) * (1 + z * 0.025) - offsetY) * this.tileSize * this.zoom;
                    
                    if (xx < 0 || xx > screen.width || yy < 0 || yy > screen.height - this.zoom * this.tileSize){
                        mapindex++;
                        continue;
                    }
                    let tileVal = this.currentMap.map[mapindex] - 1;
                    let sx = (tileVal % 27) * this.tileSize;
                    let sy = Math.floor(tileVal / 27) * this.tileSize;
                    ctx.globalAlpha = alpha * (z + 1);
                    ctx.drawImage(this.tileSet,
                        sx,
                        sy,
                        this.tileSize,
                        this.tileSize,
                        xx,
                        yy,
                        this.tileSize * (this.zoom),
                        this.tileSize * (this.zoom));
                    mapindex++;
                }
            }
        }
    }
}