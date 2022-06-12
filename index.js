
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
// MODAL
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
let certificate_img = document.querySelectorAll('.certificate_img')
let btn_eye = document.querySelectorAll('.btn_eye')
btn_eye.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        modal.style.display = "block";
          modalImg.src = certificate_img[index].src;
          captionText.innerHTML = certificate_img[index].alt;
    })
})

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}