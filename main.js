// Show menu 
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// menu show 
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

// Menu Hidden 
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}


// remove menu mobile //
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


// ADD BLUR HEADER 
const blurHeader = () => {
    const header = document.getElementById('header')
    // when the scroll is geater that 50 viewport height, add the blur-header class to the header tag 
    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

// SWIPER FAVORITES 

let swiperFavorite = new Swiper('.favorite__swiper', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    grabCursor: true,

    breakpoints: {
        768: {
            slidesPerView: 3,
        }
    }
})

// Show Scroll up 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // when the scroll is heigher then 350 viewport height , add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// Scroll section active link 

const sections = document.querySelectorAll('scroll[id]')

const ScrollActive = () => {
    const ScrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsclass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (ScrollDown > sectionTop && ScrollDown <= sectionTop + sectionHeight) {
            sectionsclass.classList.add('active-link')
        } else {
            sectionsclass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', ScrollActive)

// Scroll Reveal Animation 

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true, Animation repeat 
})

sr.reveal(`.home__social , .favorite__container, .sponsor__container, .footer `)
sr.reveal(`.home__title span:nth-child(1)`, { origin: 'left', opacity: 1 })
sr.reveal(`.home__title span:nth-child(3)`, { origin: 'right', opacity: 1 })
sr.reveal(`.home__tooltip , .home__button , .model__button`, { origin: 'bottom' })
sr.reveal(`.about__data`, { origin: 'left' })
sr.reveal(`.about__img , .model__tooltip`, { origin: 'right' })

// Get the form element
const forms = document.getElementById('contactform');

// Add an event listener for form submission
forms.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Reset the form after submission
    forms.reset();
});


// data sheet 
const scriptURL =
    "https://script.google.com/macros/s/AKfycbzpQJXKdDZTCd85zWjbjBQtdh3Rj4o1XYT2krQ9dv-lIzQJxe90ahOTBfC82wFayN7NKw/exec";
const form = document.forms['google-sheet'];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "post", body: new FormData(form) })
        .then((response) =>
            alert("Thanks for Contacting us..! We Will Contact You Soon...")
        )
        .catch((error) => console.error("Error!", error.message));
});