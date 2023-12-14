
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
        }
        update() {
            this.player.update(theKeymap);
            this.camera.update()
            if (count < txt.length){
                text += txt[count];
                //theKeymap.a = false;
                count++;
            }
        }

        draw() {
            this.player.draw(ctx,this.camera.x,this.camera.y);
            this.map.Draw(ctx);
            if (theKeymap.b == false){
            ctx.fillStyle = "white";
            ctx.fillRect(screen.width/4,screen.height/4*2.85,screen.width/2,screen.height/4)
            ctx.fillStyle = "black";
            ctx.fillRect(screen.width/4+10,screen.height/4*2.85+10,(screen.width/2)-20,(screen.height/4)-20)
            ctx.font = "48px serif";
            ctx.fillStyle = "white";
            ctx.fillText(text, screen.width/4+20, screen.height/4*2.85+50);
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

