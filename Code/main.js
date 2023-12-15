
window.addEventListener('load', function () {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    let txt = "Quick Brown Fox jumps over the lazy dog :(!";
    let text = ""
    let count = 0;

 

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

    const gameStates = {
        MENU: 0,
        EXPLORE: 1,
        DIALOG: 2

    };

    let gameState = gameStates.EXPLORE;
    class inputHandler {
        constructor() {
            window.addEventListener('keydown', function (e) {
                var keyPressed = e.code;
                switch (keyPressed) {
                    case "KeyA": theKeymap.left = true; break;
                    case "KeyS": theKeymap.down = true; break;
                    case "KeyW": theKeymap.up = true; break;
                    case "KeyD": theKeymap.right = true; break;
                    case "Space": theKeymap.a = true; break;
                    case "ShiftLeft": theKeymap.b = true; break;
                }
            })
            window.addEventListener('keyup', function (e) {
                var keyPressed = e.code;
                switch (keyPressed) {
                    case "KeyA": theKeymap.left = false; break;
                    case "KeyS": theKeymap.down = false; break;
                    case "KeyW": theKeymap.up = false; break;
                    case "KeyD": theKeymap.right = false; break;
                    case "Space": theKeymap.a = false; break;
                    case "ShiftLeft": theKeymap.b = false; break;
                }
            })

            
        }
    }

    class Game {
        constructor() {
            this.inputHandler = new inputHandler;
            this.player = new Player;
            this.camera = new Camera(this.player);
            this.map = new Map(this.camera,this.player);
            this.dialogHandler = new DialogHandler();
        }
        update() {
            if (gameState == gameStates.EXPLORE){
                this.player.update(theKeymap);
                this.camera.update()
            }
            if (gameState == gameStates.DIALOG){ 
                this.dialogHandler.Update();
            }
            if (theKeymap.b == true){
                if (gameState == gameStates.EXPLORE){
                    gameState = gameStates.DIALOG;
                    this.dialogHandler.Load("This is A test")
                    theKeymap.b = false;
                } else {
                    gameState = gameStates.EXPLORE;
                    theKeymap.b = false;
                }
            }
           
        }

        draw() {
            if (gameState == gameStates.EXPLORE){
                this.player.draw(ctx,this.camera.x,this.camera.y);
                this.map.Draw(ctx);
            }else if (gameState == gameStates.DIALOG){ 
                this.player.draw(ctx,this.camera.x,this.camera.y);
                this.map.Draw(ctx);
                this.dialogHandler.Draw(ctx);
                
            }
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

