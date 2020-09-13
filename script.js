let themeButton = document.querySelector(".btn-dark")
let pageTheme = document.querySelector(".page")
themeButton.onclick = function(){
    themeButton.classList.toggle("btn-dark")
    themeButton.classList.toggle("btn-light")
    if (themeButton.classList.contains("btn-light")) {
        themeButton.textContent = "Light"
    }
    if (themeButton.classList.contains("btn-dark")) {
        themeButton.textContent = "Dark"
    }
    pageTheme.classList.toggle("dark-theme")
    pageTheme.classList.toggle("light-theme")
}
console.log(themeButton)