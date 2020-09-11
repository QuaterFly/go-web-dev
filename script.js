let page = document.querySelector('.page');
let themeButton = document.querySelector('#theme-button')
themeButton.onclick = function () {
    page.classList.toggle('light-theme');
    page.classList.toggle('dark-theme');
    console.log(themeButton.textContent)
    if (document.body.classList.contains('light-theme')) {
        themeButton.textContent = 'dark-theme'
    }
    if (document.body.classList.contains('dark-theme')) {
        themeButton.textContent = 'light-theme'
    }

};