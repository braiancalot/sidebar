const btnMenu = document.querySelector(".menu")
const sideBar = document.querySelector(".sidebar")
const search = document.querySelector(".item-search")


btnMenu.addEventListener('click', () => {
    sideBar.classList.toggle('active')
})

search.addEventListener('click', () => {
    sideBar.classList.add('active')
})