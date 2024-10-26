/**
 * Dragonbane Timekeeping API and core functionality.
 *
 */
// TODO: #1 bring over functionality from dbtime-engine.js prototype code
export class Timekeeper {
    constructor () {
        // TODO: decide how much of the clock init should be done here, and how much done
        // outside with a dependency injection pattern
        console.log('DB Time | Timekeeper created')
    }

    /**
     * Increment the current time.
     *
     * @param {Number} stretches The number of stretches to increment.
     */
    async increment (stretches = 1) {
        console.log('DB Time | incrementing %d stretches', stretches)
    }

    /**
     * Set the time to the given total number of stretches since stretch 0 on day 0, which is 6am on day 0. This is
     * mostly used by the Reset Clocks macro, though it can be used to set the time to any value so long as you calculate
     * the total number of stretches required. There are 24 stretches per shift, 4 stretches per hour, 6 hours per shift,
     * 4 shifts per day, and therefore 96 stretches per day.
     *
     * @param {Number} totalStretches The total number of 15 minute stretches since 6am on day 0.
     */
    async set (totalStretches = 0) {
        console.log(
            'DB Time | setting time to %d total stretches',
            totalStretches
        )
    }

    /**
     * Posts the current time to chat.
     * If the day clock is enabled in the module settings, then the day will be included in the chat message.
     */
    async tellTime () {
        console.log('DB Time | tellTime')
    }
}
