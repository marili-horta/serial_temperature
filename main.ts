input.onButtonPressed(Button.A, function () {
    attivo = !(attivo)
    if (attivo) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
let temperatura = 0
let attivo = false
attivo = false
let intervallo = 10
let tempo = 0 - intervallo * 1000
basic.showIcon(IconNames.No)
basic.forever(function () {
    if (attivo && input.runningTime() - tempo > intervallo * 1000) {
        temperatura = input.temperature()
        tempo = input.runningTime()
        serial.writeLine("" + (temperatura))
        basic.clearScreen()
        basic.showNumber(temperatura)
        basic.showIcon(IconNames.Yes)
    }
})
