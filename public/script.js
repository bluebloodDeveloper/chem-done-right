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
    var parent = event.currentTarget.parentNode.parentNode;
    var allCards = document.querySelectorAll('.course_details_all');
    allCards.forEach((card)=>{
        card.classList.remove('show_info')
    })
    var targetShow = parent.querySelector('.course_details_all');
    targetShow.classList.add('show_info')

}
