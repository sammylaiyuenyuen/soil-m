let Reading = 0
led.setBrightness(64)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, 1023)
    Reading = pins.analogReadPin(AnalogPin.P0)
    pins.analogWritePin(AnalogPin.P1, 0)
    led.plotBarGraph(
    Reading,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(Reading)
    }
    basic.pause(5000)
})
