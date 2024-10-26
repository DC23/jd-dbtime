# Dragonbane Timekeeping

***Dragonbane Timekeeping***, or ***DB Time*** for short, implements simple timekeeping for the [Dragonbane game system](https://foundryvtt.com/packages/dragonbane) on top of the [Global Progress Clocks](https://foundryvtt.com/packages/global-progress-clocks) module.

It has the following main features:

- Tracks the time in stretches and shifts, and optionally in hours and days.
- Can post the time in hours and minutes and day to chat.
- Provides hooks for easy customisation when the time changes.

I had a few goals when creating this system:

- The GM is always in control. While this module keeps track of the passage of time, it never takes decisions away from the GM.
- It should remain simple to use. Outside of the Foundry settings, there is no user interface. Simple macros placed in the Foundry Macro Toolbar provide one-click buttons for all operations - advance time by a stretch, a shift, or any other time interval you require. This module provides ready-made script macros for the most common requirements which you can customise to meet any need.

## Proof of Concept Macro Version

The original proof of concept macro version of DB Time is still available in my [Foundry Macros repo on GitHub](https://github.com/DC23/foundry-macros/blob/main/dbtime/dbtime-readme.md). I don't maintain it anymore, and it's much harder to install.

## Dependencies

- Foundry VTT Version 12 or higher
- [Global Progress Clocks](https://foundryvtt.com/packages/global-progress-clocks)
