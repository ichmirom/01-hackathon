import {Module} from "../core/module";
import {random} from "../utils";

export class SoundModule extends Module {
    #currentSound

    constructor(type, text) {
        super(type, text)
        this.#currentSound = new Audio()
        this.#currentSound.volume = 0.3
    }

    trigger() {
        this.#currentSound.pause()
        this.#currentSound.src = `../src/assets/sounds/sound${random(1, 15)}.mp3`
        this.#currentSound.play()
    }
}