import { Module } from '../core/module';
import { random } from '../utils';

const motivations = [
  'Успех - это идти от неудачи к неудаче, не теряя энтузиазма. | Уинстон Черчилль',
  'Не считай дни, извлекай из них пользу. | Мухаммед Али',
  'Не ждите. Время никогда не будет подходящим. | Наполеон Хилл',
  'Неисследованная жизнь не стоит того, чтобы ее жить. | Сократ',
  'Усердно работайте, мечтайте по-крупному.',
  'Я не потерпел неудачу. Я просто нашел 10 000 способов, которые не работают. | Томас Эдисон',
  'Мотивация - это то, что заставляет вас начать. Привычка - это то, что заставляет вас продолжать. | Джим Рюн',
  'Вы должны выучить правила игры. А затем вы должны играть лучше, чем кто-либо другой. | Альберт Эйнштейн',
  'Если вы потратите свою жизнь на то, чтобы быть лучшим во всем, вы никогда не станете великим ни в чем. | Том Рат',
  'Сначала они не замечают тебя, затем смеются над тобой, потом борются с тобой, а потом ты побеждаешь. | Махатма Ганди',
  'Мечтатели - это спасители мира. | Джеймс Аллен',
  'Если вы можете мечтать об этом, вы можете это сделать. | Уолт Дисней',
  'Лучшая месть - это огромный успех. | Фрэнк Синатра',
  'Измени свои мысли и ты изменишь мир. | Норман Винсент Пил',
  'Мужество - первое из человеческих качеств, потому что это качество, которое гарантирует все остальные. | Уинстон Черчилль',
  'Я всегда выберу ленивого человека для выполнения сложной работы, потому что он найдет легкий путь ее выполнения. | Билл Гейтс',
];

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

    let messsageBlock = document.createElement('div');
    messsageBlock.className = 'message-block';
    messsageBlock.innerHTML = `<p>${
      motivations[random(0, motivations.length - 1)]
    }</p>`;

    //style of messageblocks
    let color = `rgba(
      ${random(0, 255)},
      ${random(0, 255)},
      ${random(0, 255)},
      0.7)`;
    messsageBlock.style.backgroundColor = color;
    messsageBlock.style.boxShadow = `19px 28px 23px -5px ${color}`;

    wrap.append(messsageBlock);

    setTimeout(() => {
      messsageBlock.style.opacity = '0';
    }, 2500);

    setTimeout(() => {
      messsageBlock.remove();
    }, 4000);

    document.body.append(wrap);
  }
}
