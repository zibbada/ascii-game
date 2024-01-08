
window.addEventListener('load', function () {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");



    canvas.width = screen.width;
    canvas.height = screen.height;

    let theKeymap = {
        left: false,
        right: false,
        up: false,
        down: false,
        a: false,
        b: false,
        c: false,
    };

    let mouse = {
        x: 0,
        y: 0
    }

    const gameStates = {
        MENU: 0,
        EXPLORE: 1,
        DIALOG: 2,
        COMBAT: 3

    };


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

            window.addEventListener("mousemove", function (e) {
                mouse.x = e.clientX;
                mouse.y = e.clientY;
            })

            window.addEventListener("mousedown", function (e) {
                switch (e.button) {
                    case 0: theKeymap.a = true; break;
                }
            })

        }
    }

    class Game {
        constructor(ctx) {
            this.state = gameStates.EXPLORE;
            this.inputHandler = new inputHandler;
            this.player = new Player(this);
            this.camera = new Camera(this.player);
            this.map = new Map(this.camera, this.player, this);
            this.dialogHandler = new DialogHandler(this);
            this.combatHandler = new CombatHandler(this);

            this.ctx = ctx;
            this.currentMap = lvl1;
        }
        update() {
            if (this.state == gameStates.EXPLORE) {
                this.player.update(theKeymap);
                this.camera.update()
            } else if (this.state == gameStates.DIALOG) {
                this.dialogHandler.Update(theKeymap);
            } else if (this.state == gameStates.COMBAT) {
                this.combatHandler.Update(theKeymap,mouse);
            }
        }


        draw() {
            if (this.state == gameStates.EXPLORE) {
                this.player.draw(ctx, this.camera.x, this.camera.y);
                this.map.Draw(ctx);
            } else if (this.state == gameStates.DIALOG) {
                this.player.draw(ctx, this.camera.x, this.camera.y);
                this.map.Draw(ctx);
                this.dialogHandler.Draw(ctx);
            } else if (this.state == gameStates.COMBAT) {
                this.combatHandler.Draw(ctx);
            }
        }

    }



    const game = new Game(ctx);
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

