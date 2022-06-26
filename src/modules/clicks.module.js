import { Module } from '../core/module'

export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text);
        this.div = document.createElement('div')
        this.div.className = 'container_clicker'
        this.div.textContent = 'Анализатор подсчета кликов'
        this.div.style.paddingTop = '10px'
        this.form = document.createElement('form')
        this.form.className = 'container_clicker__form'
        this.timeForClick = document.createElement('input')
        this.timeForClick.type = 'text'
        this.timeForClick.placeholder = 'Введите секунды'
        this.timeForClick.className = 'container_clicker__time'
        this.btn_start = document.createElement('input')
        this.btn_start.type = 'submit'
        this.btn_start.value = 'Начать подсчет кликов'
        this.btn_start.className = 'container_clicker__button'
        this.score = document.createElement('div')
        this.score.className = 'container_clicker__score'
        this.clicks = 0
        this.exit = document.createElement('button')
        this.exit.className = 'container_clicker_exit_button'
        this.exit.textContent = 'Закрыть окно'
        this.btn_start.addEventListener('click', event => this.clickOnButton(event))
        this.exit.addEventListener('click', this.closeWindow.bind(this))
        this.form.append(this.timeForClick, this.btn_start)
        this.div.append(this.form, this.score, this.exit)
    }

    closeWindow() {
        this.div.remove()
        this.clicks = 0
    }

    startCount() {
        this.clicks++
        const score = document.querySelector('.container_clicker__score')
        this.score.textContent = `Вы сделали кликов: ${this.clicks}! `
    }

    clickOnButton(event) {
        event.preventDefault()
        let value = Number(this.timeForClick.value)
        if (value !== 0 && !isNaN(value)) {
            this.clicks = 0
            this.btn_start.setAttribute('hidden', '')
            const bindedStartCount = this.startCount.bind(this)
            document.addEventListener('click', bindedStartCount)
            setTimeout(() => {
                this.btn_start.removeAttribute('hidden')
                document.removeEventListener('click', bindedStartCount)
            }, value * 1000)
        } else {
            event.preventDefault()
            this.score.textContent = 'Поле не дожно быть пустым и содержать буквы'
        }
    }
    trigger() {
        document.body.append(this.div)
        this.clicks = 0
        this.score.textContent = ''
        this.timeForClick.value = ''
    }
}