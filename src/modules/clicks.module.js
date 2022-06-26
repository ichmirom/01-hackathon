import {Module} from '../core/module'

export class ClicksModule extends Module {
    #score
    constructor(type, text) {
        super(type, text);
        this.div = document.createElement('div')
        this.div.className = 'container_clicker'
        this.div.textContent = 'Анализатор подсчета кликов'
        this.form = document.createElement('form')
        this.form.className = 'container_clicker__form'
        this.timeForClick = document.createElement('input')
        // this.timeForClick.name = 'timer'
        this.timeForClick.type = 'text'
        this.timeForClick.placeholder = 'Введите секунды'
        this.timeForClick.className = 'container_clicker__time'
        this.btn_start = document.createElement('input')
        this.btn_start.type = 'submit'
        this.btn_start.value = 'Начать подсчет кликов'
        this.btn_start.className = 'container_clicker__button'
        this.#score = document.createElement('div')
        this.#score.className = 'container_clicker__score'
        this.clicks = 0
        console.log(this.#score)
    }

    startCount() {
        this.clicks++
        console.log(this.#score)
        this.#score.textContent = `Вы сделали кликов: ${this.clicks}! `
    }

    clickOnButton(event) {
        event.preventDefault()
        console.log(this.timeForClick)
        let value = Number(this.timeForClick.value)
        if(value !== 0 && !isNaN(value)) {
            this.clicks = 0
            this.btn_start.setAttribute('hidden', '')

            document.addEventListener('click', this.startCount)
            setTimeout(() => {
                this.btn_start.removeAttribute('hidden')
                document.removeEventListener('click', this.startCount)
            }, value * 1000)
        } else {
            event.preventDefault()
            this.#score.textContent = 'Поле не дожно быть пустым и содержать буквы'
        }
    }
    trigger() {
        document.body.append(this.div)
        this.div.append(this.form,  this.#score)
        this.form.append(this.timeForClick, this.btn_start)

        // let clicks = 0

        this.btn_start.addEventListener('click', event => this.clickOnButton(event))
        console.log(this.timeForClick)
        // function clickOnButton(event) {
        //     event.preventDefault()
        //     console.log(this.timeForClick)
        //     let value = Number(this.timeForClick.value)
        //     if(value !== 0 && !isNaN(value)) {
        //         clicks = 0
        //         this.btn_start.setAttribute('hidden', '')
        //         function startCount() {
        //             clicks++
        //             this.score.textContent = `Вы сделали кликов: ${clicks}! `
        //         }
        //         document.addEventListener('click', startCount)
        //         setTimeout(() => {
        //             this.btn_start.removeAttribute('hidden')
        //             document.removeEventListener('click', startCount)
        //         }, `${value * 1000}`)
        //     } else {
        //         event.preventDefault()
        //         this.score.textContent = 'Поле не дожно быть пустым и содержать буквы'
        //     }
        // }
    }
}