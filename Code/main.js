
window.addEventListener('load', function () {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");



    const tileset = new Image(0,0);
    var tilesetWidth = 20;
    var tilesetHeight = 10;
    var viewportZoom = 5;
    tileset.src = "./pixil-frame-0.png";


    canvas.width = screen.width;
    canvas.height = screen.height;

    var theKeymap = {
        left: false,
        right: false,
        up: false,
        down: false,
        a: false,
        b: false,
        c: false,
    };

    
    var x = 0;
    var y = 0;
    class inputHandler {
        constructor() {
            window.addEventListener('keydown', function (e) {
                var keyPressed = e.code;
                switch (keyPressed) {
                    case "KeyA": theKeymap.left = true; break;
                    case "KeyS": theKeymap.down = true; break;
                    case "KeyW": theKeymap.up = true; break;
                    case "KeyD": theKeymap.right = true; break;
                }
            })
            window.addEventListener('keyup', function (e) {
                var keyPressed = e.code;
                switch (keyPressed) {
                    case "KeyA": theKeymap.left = false; break;
                    case "KeyS": theKeymap.down = false; break;
                    case "KeyW": theKeymap.up = false; break;
                    case "KeyD": theKeymap.right = false; break;
                }
            })

            
        }
    }

    class Game {
        constructor() {
            this.inputHandler = new inputHandler;
            this.player = new Player;
        }
        update() {
            this.player.update(theKeymap);
        }

        draw() {
            this.player.draw(ctx,tileset);
        }
        
    }
    


    const game = new Game();
    function animate() {
        ctx.imageSmoothingEnabled = false;
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "red";

        
        ctx.drawImage(tileset,0,0,tilesetWidth,tilesetHeight,0,0,tilesetWidth * viewportZoom,tilesetHeight * viewportZoom)
        game.update();
        game.draw();
        requestAnimationFrame(animate);
    }
    animate();
})

