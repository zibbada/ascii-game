class Map{
    constructor() {
        this.currentMap=lvl1;
        this.tileSize = 7;
        this.tileSet = new Image(0, 0)
        this.zoom = 5;
        this.tileSet.src = "./tileset.png";
    }
    Update() {
        
    }
    Draw(ctx) {
        let mapindex = 0;
        for (let y = 0; y < this.currentMap.size.height; y++){
            for (let x = 0; x < this.currentMap.size.width; x++){
                let tileVal = this.currentMap.map[mapindex]-1;
                let sx = (tileVal % 27) * this.tileSize;
                let sy =  Math.floor(tileVal/27) * this.tileSize;
                ctx.drawImage(this.tileSet,sx,sy,this.tileSize,this.tileSize,x*7*this.zoom,y*7*this.zoom,this.tileSize*this.zoom,this.tileSize*this.zoom);
                mapindex++;
            }
        }
    }
}