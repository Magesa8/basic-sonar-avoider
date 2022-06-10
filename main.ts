basic.showIcon(IconNames.Chessboard)
basic.forever(function () {
    cuteBot.moveTime(cuteBot.Direction.forward, 50, 0.1)
    while (cuteBot.ultrasonic(cuteBot.SonarUnit.Inches) <= 10) {
        cuteBot.moveTime(cuteBot.Direction.backward, 40, 0.25)
        cuteBot.moveTime(cuteBot.Direction.left, 30, 0.25)
    }
})
