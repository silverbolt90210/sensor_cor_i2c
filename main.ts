basic.forever(function () {
    if (PlanetX_Basic.checkColor(PlanetX_Basic.ColorList.red)) {
        basic.showIcon(IconNames.Angry)
    }
    if (PlanetX_Basic.checkColor(PlanetX_Basic.ColorList.blue)) {
        basic.showIcon(IconNames.Sad)
    }
    if (PlanetX_Basic.checkColor(PlanetX_Basic.ColorList.yellow)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
