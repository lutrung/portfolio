// (showOff = () => {
//     let main_item = document.querySelectorAll('.portfolio_item')
//     main_item.forEach(item => {
//         if (item.classList.contains('active')) {
//             item.style.display = "flex"
//         } else {
//             item.style.display = "none"
//         }
//     })

// })();

(sidebar = () => {
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

})()