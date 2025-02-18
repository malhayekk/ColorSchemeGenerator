const formEl = document.querySelector("form")
const seedColorEl = document.getElementById("seedColor")
const colorSchemeModeEl = document.getElementById("colorSchemeMode")

formEl.addEventListener("submit", function (e) {
    e.preventDefault()
    getColorScheme(seedColorEl.value, colorSchemeModeEl.value)
})


function getColorScheme(hex, mode) {
    hex = hex.replace("#", "")
    console.log(`hex is ${hex} and scheme is ${mode}`)
    const baseURL = "https://www.thecolorapi.com"
    const endPoint = `/scheme?hex=${hex}&mode=${mode}`
    const path = baseURL + endPoint
    console.log(`fetch path = ${path}`)
    fetch(`${path}`)
        .then((response) => response.json())
        .then((data) => {
            const colors = data.colors
            let colorSection = 1
            colors.forEach(displayColor)
        });
}

function displayColor(color) {
    console.log(color.hex.value)
    const colorHexValue = color.hex.value
    const sectionToColorEl = document.getElementById(`color${colorSection}`)
    sectionToColorEl.style.backgroundColor = color.hex.value
    colorSection++
}