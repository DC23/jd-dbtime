/**
 * Dragonbane Timekeeping module registration functions
 *
 */
import { registerSettings, MODULE_ID } from './settings.js'
import { ClockView } from './clockview.js'
import { Constants } from './constants.js'
import { DaylightCycle } from './daylightcycle.js'
import { Timekeeper } from './timekeeper.js'

Hooks.once('init', () => {
    console.group('DB Time | init')
    registerSettings()
    console.groupEnd()
})

Hooks.once('ready', async () => {
    console.group('DB Time | ready')

    const constants = new Constants()

    const clockView = new ClockView(constants)
    clockView.initialise()

    const daylightCycle = new DaylightCycle(constants)
    daylightCycle.initialise()

    const timekeeper = new Timekeeper(constants, clockView, daylightCycle)
    timekeeper.initialise()
    game.modules.get(MODULE_ID).api = timekeeper

    console.groupEnd()
})
