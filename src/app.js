import './styles.css';
import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import { Messages } from './modules/messages.module';

const contextMenu = new ContextMenu('#menu');
const backgroundModule = new BackgroundModule(
  'background-module',
  'Изменить цвет заднего фона'
);
const messages = new Messages('messages-module', 'Показать мотивашку');

contextMenu.add(backgroundModule);
contextMenu.add(messages);
