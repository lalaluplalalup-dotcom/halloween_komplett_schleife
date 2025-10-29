basic.forever(function () {
    let Index = 0
    for (let Index = 0; Index <= 2; Index++) {
        led.plot(Index, 2)
        led.plot(Index + 2, 2)
        basic.pause(500)
        basic.clearScreen()
    }
    led.plot(3 - Index, 2)
    led.plot(3 - Index - 2, 2)
    basic.pause(500)
    basic.clearScreen()
})
