
window.addEventListener('load', function () {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");



 

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
            this.map = new Map;
            this.camera = new Camera;
        }
        update() {
            this.player.update(theKeymap);
            this.camera.update(this.player)
        }

        draw() {
            this.player.draw(ctx,this.camera.x,this.camera.y);
            this.map.Draw(ctx,this.camera.x,this.camera.y);
        }
        
    }
    


    const game = new Game();
    function animate() {
        ctx.imageSmoothingEnabled = false;
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "red";

        
        game.update();
        game.draw();
        requestAnimationFrame(animate);
    }
    animate();
})

