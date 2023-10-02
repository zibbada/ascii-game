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
                console.log(e.code)
            })

            
        }
    }

    class Game {
        constructor() {
            this.inputHandler = new inputHandler;
        }
        update() {
        }

        draw() {

        }
        
    }
    


    const game = new Game();
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
       // ctx.fillRect(x, 20, 10, 10);
        game.update();
        game.draw();
        requestAnimationFrame(animate);
    }
    animate();
})

