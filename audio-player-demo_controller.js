import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['output']

    connect() {
    }

    change(event){
        let theme = event.target.value
        this.outputTarget.classList.remove('_saw_theme_default')
        this.outputTarget.classList.remove('_saw_theme_light')
        this.outputTarget.classList.remove('_saw_theme_dark')
        this.outputTarget.classList.add(theme)
    }


}
