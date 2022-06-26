import { Module } from '../core/module';
import { random } from '../utils';
import {messageData as motivations} from '../assets/data/message.module.data'

export class Messages extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    let wrap = document.querySelector('.wrap');

    if (!wrap) {
      wrap = document.createElement('div');
      wrap.className = 'wrap';
    }

    let messageBlock = document.createElement('div');
    messageBlock.className = 'message-block';
    messageBlock.innerHTML = `<p>${
      motivations[random(0, motivations.length - 1)]
    }</p>`;

    let color = `rgba(
      ${random(0, 255)},
      ${random(0, 255)},
      ${random(0, 255)},
      0.7)`;
    messageBlock.style.backgroundColor = color;
    messageBlock.style.boxShadow = `15px 10px 23px -5px ${color}`;

    wrap.append(messageBlock);

    setTimeout(() => {
      messageBlock.style.opacity = '0';
    }, 2500);

    setTimeout(() => {
      messageBlock.remove();
    }, 4000);

    document.body.append(wrap);
  }
}
