import { Module } from "../core/module";

export class TimerModule extends Module {
  #id;
  constructor(text) {
    super("timer", text);
    this.timerContainer = document.createElement("div");
    this.timerContainer.className = "timer__container";
    this.#id = 0;

    document.body.append(this.timerContainer);
  }
  #getId() {
    return ++this.#id;
  }

  trigger() {
    const id = this.#getId();
    const closeBtn = document.createElement("button");
    closeBtn.className = "close__btn btn";
    closeBtn.textContent = "close";

    const timer = document.createElement("div");
    timer.id = `timer-${id}`;
    timer.className = "timer";
    timer.innerHTML = `
    <div class="inputs__container">
	  <input id="timer-${id}-input-hour" class="timer-input-hours" name="hours" type="number" max="59" min="0" placeholder="hh" />
    <input id="timer-${id}-input-min" class="timer-input-mins" name="minutes" type="number" max="59" min="0" placeholder="mm" />
    <input id="timer-${id}-input-sec" class="timer-input-secs" name="seconds" type="number" max="59" min="0" placeholder="ss" />
    </div>
	`;
    const btn__container = document.createElement("div");
    btn__container.className = "btn__container";
    const startBtn = document.createElement("button");
    startBtn.className = "start__btn btn";
    startBtn.textContent = "start";
    startBtn.addEventListener("click", () => {
      let inputSec = document.querySelector(`#timer-${id}-input-sec`);
      let inputMin = document.querySelector(`#timer-${id}-input-min`);
      let inputHour = document.querySelector(`#timer-${id}-input-hour`);

      let startSecValue = +inputSec.value;
      let startMinValue = +inputMin.value;
      let startHourValue = +inputHour.value;

      if (!(startSecValue + startMinValue + startHourValue)) {
        alert("Введите начальное значения для секунд, минут или часов!");
        return;
      }

      const deadline = new Date();
      deadline.setHours(
        deadline.getHours() + startHourValue,
        deadline.getMinutes() + startMinValue,
        deadline.getSeconds() + startSecValue
      );
      timer.innerHTML = ` 
	  <div class="time-countdown-container">
      <div id="timer-${id}" class="timer__item">
        <div id="timer-${id}-hour"></div>
        <div id="timer-${id}-min"></div>
        <div id="timer-${id}-sec"></div>
      </div>
 	  </div> 
	  `;
      const stopBtn = document.createElement("button");
      stopBtn.className = "close__btn btn";
      stopBtn.textContent = "close";
      const timerSetInterval = setInterval(function () {
        const curDate = new Date();
        const differenceTime = deadline.getTime() - curDate.getTime();
        const containerTimerHTML = document.querySelector(`#timer-${id}`);

        stopBtn.addEventListener("click", () => {
          timer.remove();
          clearInterval(timerSetInterval);
        });

        if (differenceTime >= 0) {
          let hours = Math.floor((differenceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let mins = Math.floor((differenceTime % (1000 * 60 * 60)) / (1000 * 60));
          let secs = Math.floor((differenceTime % (1000 * 60)) / 1000);

          let hourHTML = document.querySelector(`#timer-${id}-hour`);
          let minHTML = document.querySelector(`#timer-${id}-min`);
          let secHTML = document.querySelector(`#timer-${id}-sec`);

          hourHTML.innerHTML = ("0" + hours).slice(-2);
          minHTML.innerHTML = ("0" + mins).slice(-2);
          secHTML.innerHTML = ("0" + secs).slice(-2);
        } else {
          containerTimerHTML.innerHTML = '<div></div><div class="timer-off">Time is up!</div><div></div>';
          clearInterval(timerSetInterval);

          const endOfTimer = setTimeout(() => {
            containerTimerHTML.remove();
            clearInterval(endOfTimer);
          }, 1500);
        }
      }, 100);
      timer.append(stopBtn);
    });
    closeBtn.addEventListener("click", () => {
      timer.remove();
    });
    btn__container.append(startBtn, closeBtn);
    timer.append(btn__container);
    this.timerContainer.append(timer);
  }
}
