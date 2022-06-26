import {Module} from "../core/module";
import {random} from "../utils";

export class SoundModule extends Module {
    constructor(type, text) {
        super(type, text)
        this.currentSound = new Audio()
        this.currentSound.volume = 0.3
    }

    trigger() {
        this.currentSound.pause()
        this.currentSound.src = `../src/sounds/sound${random(1, 15)}.mp3`
        this.currentSound.play()
    }
}