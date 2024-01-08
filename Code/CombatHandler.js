class CombatHandler {
    constructor(game) {
        this.game = game;
        this.selectedOption = 0;

        this.button = new GuiButton(50,50,250,100,"I WAS CLICKED")
    }
    Update(theKeymap, mouse) {
        this.button.Update(theKeymap, mouse);
    }
    Draw(ctx) {
        this.button.Draw(ctx);
    }
}