import "./styles.css";
import { ContextMenu } from "./menu";
import { BackgroundModule } from "./modules/background.module";
import { TimerModule } from "./modules/timer.module";

const contextMenu = new ContextMenu("#menu");
const backgroundModule = new BackgroundModule(
  "background-module",
  "Изменить цвет заднего фона"
);
const timermodule = new TimerModule("Открыть таймер", 'Открыть таймер');

contextMenu.add(backgroundModule);
contextMenu.add(timermodule);
