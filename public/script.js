const menuBtn = document.querySelector('.menu_button');
const closemenuBtn = document.querySelector('.close_menu_button')
const navMenu = document.querySelector('.nav-links');

menuBtn.addEventListener('click', ()=>{
    navMenu.classList.add('open_nav')
})
closemenuBtn.addEventListener('click', ()=>{
    navMenu.classList.remove('open_nav')
})

const observe = document.querySelectorAll('section')
const scrollObserve = {
    rootMargin:"0",
    threshold:1,
}
const scrollObserver = new IntersectionObserver((entries,observe)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            // Change scroll
            scrollObserveHandle(entry.target.id)
        }
    })
})
observe.forEach((section,index)=>{ //Observe all sections
    scrollObserver.observe(section, scrollObserve)
})

const scrollObserveHandle = (id)=>{
    const menuLinks = navMenu.querySelectorAll('li');
    const courseCards = document.querySelectorAll('.course_card')
    menuLinks.forEach((menuItem, index)=>{
        if(menuItem.textContent.toLowerCase()===id){
            menuLinks[index].classList.add('scroll_spy_active') //Adds class if present
            console.log('in ' + id)
        }else{
            menuLinks[index].classList.remove('scroll_spy_active') //Remove active if not present
        }
    })   
}


const serviceCardButtons = document.querySelectorAll('.service_card_btn');

serviceCardButtons.forEach((button)=>{
    button.addEventListener('click', (event)=>{
        serviceCardPreview()
    })
})

const serviceCardPreview = ()=>{
    var parent = event.currentTarget
}
