const menuBtn = document.querySelector('.menu_button');
const closemenuBtn = document.querySelector('.close_menu_button')
const navMenu = document.querySelector('.nav-links');

menuBtn.addEventListener('click', ()=>{
    navMenu.classList.add('open_nav')
})
closemenuBtn.addEventListener('click', ()=>{
    navMenu.classList.remove('open_nav')
})

const serviceCardButtons = document.querySelectorAll('.service_card_btn');

serviceCardButtons.forEach((button)=>{
    button.addEventListener('click', (event)=>{
        serviceCardPreview()
    })
})

const serviceCardPreview = ()=>{
    var parent = event.currentTarget
}
