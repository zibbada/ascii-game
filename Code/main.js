//start js only after everything is loaded
window.addEventListener('load', function () {
    //get referance to the canvas
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");

    //make canvas fullscreen
    canvas.width = screen.width;
    canvas.height = screen.height;

    //register the keymap diction
    let theKeymap = {
        left: false, //A
        right: false, //D
        up: false, //W
        down: false, //S
        a: false, //Space Lmb
        b: false,//Left shift / not used
        c: false,// not used at all
    };
    //register mouse keymap (ended up not using it)
    let mouse = {
        x: 0,
        y: 0
    }
    //register enumerator of game states (Menu and combat arent used)
    const gameStates = {
        MENU: 0,
        EXPLORE: 1,
        DIALOG: 2,
        COMBAT: 3

    };

    //register imput handler class
    class inputHandler {
        constructor() {
            //add event listner for button down event that sets keymap value to true if corresponding button is down
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
            //add event listner for button up event that sets keymap value to false if corresponding button is up
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
            
            //Mouse move event to get mouse position /not used
            window.addEventListener("mousemove", function (e) {
                mouse.x = e.clientX;
                mouse.y = e.clientY;
            })

            //Mouse button down event used for keymap a button
            window.addEventListener("mousedown", function (e) {
                switch (e.button) {
                    case 0: theKeymap.a = true; break;
                }
            })

        }
    }
    //Game class / Main class of the game
    class Game {
        //constructor
        constructor(ctx) {
            //set game state to explore and add referance to every part of the game
            this.state = gameStates.EXPLORE;
            this.inputHandler = new inputHandler;
            this.player = new Player(this);
            this.camera = new Camera(this.player);
            this.map = new Map(this.camera, this.player, this);
            this.dialogHandler = new DialogHandler(this);
            this.combatHandler = new CombatHandler(this);
             //add redference to the context
            this.ctx = ctx;
            //register current map var
            this.currentMap = lvl1;
        }
        //update  method that runs each frame and starts updates of all other game parts
        update() {
            //depending on the game state update diffrent game parts
            //if game state is explore update player and camera
            if (this.state == gameStates.EXPLORE) {
                this.player.update(theKeymap);
                this.camera.update()
            // of game state is Dialog update only dialog (not updating player disables their movement)
            } else if (this.state == gameStates.DIALOG) {
                this.dialogHandler.update(theKeymap);
            }
        }

        //draw  method that runs each frame after update method and starts draw calls of all other game parts
        draw() {

             //depending on the game state draw diffrent game parts
            //if game state is explore draw player and map
            if (this.state == gameStates.EXPLORE) {
                this.player.draw(ctx, this.camera.x, this.camera.y);
                this.map.draw(ctx);
            //if game state is dialog draw player, map and dialog window
            } else if (this.state == gameStates.DIALOG) {
                this.player.draw(ctx, this.camera.x, this.camera.y);
                this.map.draw(ctx);
                this.dialogHandler.draw(ctx);

            }
        }

    }


    //create a new single instance of the game class
    const game = new Game(ctx);
    // animate function is built in and runs each frame
    function animate() {
        //disable pixel smoothing
        ctx.imageSmoothingEnabled = false;
        //fill background black
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        //update and draw the game
        game.update();
        game.draw();
        //when done request next frame
        requestAnimationFrame(animate);
    }
    //start the cycle
    animate();
})

