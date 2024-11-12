/**
 * The UI panel.
 */
import { Timekeeper } from './timekeeper.mjs'
import { MODULE_ID, SETTINGS } from './settings.mjs'
const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api

export class UIPanel extends Application {
    #time = {}
    refresh = foundry.utils.debounce(this.render, 100)
    static ID = 'jd-et-uipanel'
    static POPOUT = false

    static get defaultOptions () {
        return foundry.utils.mergeObject(super.defaultOptions, {
            id: UIPanel.ID,
            template: `modules/${MODULE_ID}/templates/uipanel.hbs`,
            // classes: ['ui-panel', 'app'],
            popOut: UIPanel.POPOUT,
            closeOnSubmit: false,
        })
    }

    init () {
        Hooks.on(Timekeeper.TIME_CHANGE_HOOK, this.timeChangeHandler.bind(this))
        if (!UIPanel.POPOUT) this.#insertAppElement('#players')
    }

    #insertAppElement (target) {
        /**
         * This creates a DOM element in the ui-left interface div,
         * in between the canvas controls and the players panel.
         * Technique from Global Progress Clocks.
         * Shame it doesn't appear to work with ApplicationV2,
         * since it put the UI exactly where I wanted it
         * */
        const top = document.querySelector(target)
        if (top) {
            const template = document.createElement('template')
            template.setAttribute('id', UIPanel.ID)
            top.insertAdjacentElement('beforebegin', template)
        } else {
            console.error('JD ETime | Could not initialise UI Panel')
        }
    }

    //** The Time Change Hook Handler */
    timeChangeHandler (data) {
        this.#time = structuredClone(data.time)
        this.#time.days += 1 // display 1-based instead of 0-based
        this.render(true)
    }

    async activateListeners (html) {
        super.activateListeners(html)
        html.find("[data-action=time-delta]").on("click", this.testClick.bind(this))
    }

    getData () {
        const context = { time: this.#time }
        return context
    }

    /** Action Handlers */

    /**
     * @param {PointerEvent} event - The originating click event
     * @param {HTMLElement} target - the capturing HTML element which defined a [data-action]
     */
    static smallJump (event, target) {
        ui.notifications.notify('small jump')
    }

    testClick (event, target) {
        ui.notifications.notify('clicked')
    }
}
