import {Application} from '@hotwired/stimulus'
import Calendar from 'stimulus-calendar'
import AudioPlayer from 'stimulus-audio-player'
import CalendarDemo from './calendar-demo_controller.js'
import AudioDemo from './audio-player-demo_controller.js'

const app = Application.start()
app.register('calendar', Calendar)
app.register('audio-player', AudioPlayer)
app.register('calendar-demo', CalendarDemo)
app.register('audio-player-demo', AudioDemo)