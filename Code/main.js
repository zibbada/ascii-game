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

    class Player {
        x = screen.width / 2;
        y = screen.height / 2;
        
        update() {
            if (theKeymap.left == true) {
                x -= 1;
            }
            if (theKeymap.down == true) {
                y += 1;
            }
            if (theKeymap.up == true) {
                y -= 1;
            }
            if (theKeymap.right == true) {
                x += 1;
            }
        }
        draw() {
            ctx.fillRect(x-4,y-4,8,8);
        }
    }

    class Game {
        constructor() {
            this.inputHandler = new inputHandler;
            this.player = new Player;
        }
        update() {
            this.player.update();
        }

        draw() {
            this.player.draw();
        }
        
    }
    


    const game = new Game();
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update();
        game.draw();
        requestAnimationFrame(animate);
    }
    animate();
})

