
let sidebar = () => {
    let menu = document.querySelectorAll('.menu_item')
    let main_item = document.querySelectorAll('.portfolio_item')

    let removeActive = (arr) => {
        arr.forEach(item => {
            if (item.classList.contains('active')) {
                item.classList.remove('active')
            }
        })
    }
    menu.forEach((item, index) => {
        item.addEventListener("click", () => {
            removeActive(main_item)
            main_item[index].classList.add('active')
            if (!item.classList.contains('active')) {
                removeActive(menu)
                item.classList.add('active')

            }
        })
    })

}
let toAbout = () => {
    let menu = document.querySelectorAll('.menu_item')
    let about = document.getElementById('aboutMe')
    about.addEventListener("click", () => {
        menu[1].click()
    })
}
(start = () => {
    sidebar()
    toAbout()
})()