import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['output']

    connect() {
    }

    change(event){
        let theme = event.target.value
        this.outputTarget.classList.remove('default_sc_theme')
        this.outputTarget.classList.remove('light_sc_theme')
        this.outputTarget.classList.remove('dark_sc_theme')
        this.outputTarget.classList.add(theme)
    }


}
