import {Module} from "../core/module";
import sound1 from '../sounds/sound1.mp3'

export class SoundModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        const audio = new Audio()
        audio.src = sound1
        audio.play()
    }
}