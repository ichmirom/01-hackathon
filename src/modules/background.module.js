import {Module} from '../core/module'
import {getRandomColor} from "../utils";

export class BackgroundModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() {
        document.body.style.background = `linear-gradient(45deg, ${getRandomColor()}, ${getRandomColor()})`
        document.body.style.backgroundSize = '400% 400%'
        document.body.style.animation = 'gradient 7s ease infinite'
    }
}