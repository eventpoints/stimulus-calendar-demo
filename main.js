import {Application} from '@hotwired/stimulus'
import Calendar from 'stimulus-calendar'
import Demo from './demo_controller.js'

const app = Application.start()
app.register('calendar', Calendar)
app.register('demo', Demo)