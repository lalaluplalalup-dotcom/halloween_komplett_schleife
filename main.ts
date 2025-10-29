basic.forever(function () {
    for (let Index = 0; Index <= 2; Index++) {
        led.plot(Index, 2)
        led.plot(Index + 2, 2)
        basic.pause(500)
        basic.clearScreen()
    }
    led.plot(1, 2)
    led.plot(3, 2)
    basic.pause(500)
    basic.clearScreen()
})
