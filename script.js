const formEl = document.querySelector("form")
const seedColorEl = document.getElementById("seedColor")
const colorSchemeModeEl = document.getElementById("colorSchemeMode")

formEl.addEventListener("submit", function (e) {
    e.preventDefault()
    getColorScheme(seedColorEl.value, colorSchemeModeEl.value)
})


function getColorScheme(hex, mode) {
    console.log(`hex is ${hex} and scheme is ${mode}`)
    const baseURL = "https://www.thecolorapi.com/scheme"
    const endPoint = `/scheme?hex=${hex}&mode=${mode}`
    const path = baseURL+endPoint
    console.log(`fetch path = ${path}`)
    fetch(`${path}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
}