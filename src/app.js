import './styles.css'
import {ContextMenu} from "./menu";
import {BackgroundModule} from "./modules/background.module";
import {SoundModule} from "./modules/sound.module";

const contextMenu = new ContextMenu('#menu')
const backgroundModule = new BackgroundModule('background-module', 'Изменить цвет заднего фона')
const soundModule = new SoundModule('sound-module', 'Воспроизвести случайный звук')

contextMenu.add(backgroundModule)
contextMenu.add(soundModule)
