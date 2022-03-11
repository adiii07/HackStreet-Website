const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu');
    const navLinks = document.querySelectorAll('.menu li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('menu-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`
            }
        })

        burger.classList.toggle('toggle');
    })
}

// fade in animation
const benifitsSlide = () => {
    const benifits = document.querySelectorAll('.benifit')

    benifits.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 1}s`
    })
}

// adding register to nav bar
const addRegister = () => {
    const register_button = document.querySelector('.nav-register')
    register_button.style.display = 'block'
}
const removeRegister = () => {
    const register_button = document.querySelector('.nav-register')
    register_button.style.display = 'none'
}

// checking scroll to fade in
const checkpoint = 250;
window.addEventListener('scroll', () => {
    const offset = window.pageYOffset;
    if (offset >= checkpoint ){
        benifitsSlide();
    }
})

const checkpoint2 = 550;
window.addEventListener('scroll', () => {
    const offset = window.pageYOffset;
    if (offset >= checkpoint2 ){
        addRegister();
    }
    else {
        removeRegister()
    }
})

navSlide();