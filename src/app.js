
import './styles.css'
import {ContextMenu} from "./menu";
import {BackgroundModule} from "./modules/background.module";
import {SoundModule} from "./modules/sound.module";
import {FigureModule} from "./modules/figure.module";
import { TimerModule } from "./modules/timer.module";

const contextMenu = new ContextMenu('#menu')

const backgroundModule = new BackgroundModule('background-module', 'Изменить цвет заднего фона')
const soundModule = new SoundModule('sound-module', 'Воспроизвести случайный звук')
const figureModule = new FigureModule('figure-module', 'Создать случайную фигуру')
const timerModule = new TimerModule("timer-module", 'Создать таймер');

contextMenu.add(backgroundModule)
contextMenu.add(soundModule)
contextMenu.add(figureModule)
contextMenu.add(timerModule);

