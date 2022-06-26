import './styles.css'
import {ContextMenu} from "./menu";
import {BackgroundModule} from "./modules/background.module";
import {SoundModule} from "./modules/sound.module";
import {FigureModule} from "./modules/figure.module";
import {TicTacToeModule} from "./modules/tic-tac-toe.module";
import { TimerModule } from "./modules/timer.module";
import { Messages } from './modules/messages.module';
import {ClicksModule} from "./modules/clicks.module";

const contextMenu = new ContextMenu('#menu')

const backgroundModule = new BackgroundModule('background-module', 'Изменить цвет заднего фона')
const soundModule = new SoundModule('sound-module', 'Воспроизвести случайный звук')
const figureModule = new FigureModule('figure-module', 'Создать случайную фигуру')
const ticTacToeModule = new TicTacToeModule('tic-tac-toe-module', 'Играть в крестики-нолики')
const timerModule = new TimerModule("timer-module", 'Создать таймер');
const messages = new Messages('messages-module', 'Показать мотивашку');
const clicksModule = new ClicksModule('clicks-module', 'Создать счетчик кликов')

contextMenu.add(backgroundModule)
contextMenu.add(soundModule)
contextMenu.add(figureModule)
contextMenu.add(ticTacToeModule)
contextMenu.add(timerModule);
contextMenu.add(messages);
contextMenu.add(clicksModule)



