import {Application} from '@hotwired/stimulus'
import Calendar from 'stimulus-calendar'

const app = Application.start()
app.register('calendar', Calendar)