basic.forever(function () {
    basic.showLeds(`
        # # # # .
        # . . . .
        # # # . .
        # . . . .
        # # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # . .
        # . # . .
        # # # . .
        # . . # .
        # . . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # # .
        . # . . .
        . # . . .
        . # . . .
        . . # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . # .
        # . # . .
        # # . . .
        # . # . .
        # . . # .
        `)
    basic.showIcon(IconNames.Happy)
    basic.pause(5000)
})
