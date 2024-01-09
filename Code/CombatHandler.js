/*
Author: Tymofiy Spektor
Date: 8th jan 2024
Description: Was planed as manager for combar system, which was not implemented. Not commented for because it was not implemented
*/

class CombatHandler {
    constructor(game) {
        this.game = game;
        this.selectedOption = 0;

        this.button = new GuiButton(50,50,250,100,"")
    }
    Update(theKeymap, mouse) {
        this.button.Update(theKeymap, mouse);
    }
    Draw(ctx) {
        this.button.Draw(ctx);
    }
}