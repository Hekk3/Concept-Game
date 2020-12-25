// Burger menu

const nav = document.querySelector('.header__nav');
const burger = document.querySelector('.burger');


const toggleNavMenu = function() {
  nav.classList.toggle('header__nav--active');
  burger.classList.toggle('burger--active');
}

const removeNavMenu = function() {
  nav.classList.remove('header__nav--active');
  burger.classList.remove('burger--active');
}


burger.addEventListener('click', (e) => {
  e.stopPropagation();

  toggleNavMenu();
});

document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == nav || nav.contains(target);
    const its_btnMenu = target == burger;
    const menu_is_active = nav.classList.contains('header__nav--active');
    
    if (!its_menu && !its_btnMenu && menu_is_active) {
        removeNavMenu();
    }
});

// End burger menu



// Scroll styles

const header = document.querySelector('.header');
const navLink = document.querySelectorAll('.nav__link');
let hero = document.querySelector('.hero').clientHeight;
let about = document.querySelector('.about').clientHeight;
let features = document.querySelector('.features').clientHeight;
let system = document.querySelector('.system').clientHeight;
let quotes = document.querySelector('.quotes').clientHeight;
let lastScrollTop = 0;

about = about + hero;
features = about + features;
system = features + system;
quotes = system + quotes;

// it's default styles
navLink[0].classList.add('nav__link--current')

document.addEventListener('scroll', () => {
  // Remove mobile header when scrolling
  nav.classList.remove('header__nav--active');
  burger.classList.remove('burger--active');


  let scrollSize = window.pageYOffset;
  let scrollSizeHeader = window.pageYOffset + header.clientHeight;


  if (lastScrollTop > scrollSize) {
    header.classList.remove('header--bottom');
    header.classList.add('header--top');

  } else if (lastScrollTop < scrollSize) {
    header.classList.remove('header--top');
    header.classList.add('header--bottom');
  }

  lastScrollTop = scrollSize;


  window.pageYOffset > 1 ? header.classList.add('header--scroll') : header.classList.remove('header--scroll');

  // nav link current
  scrollSizeHeader <= hero ? navLink[0].classList.add('nav__link--current') : navLink[0].classList.remove('nav__link--current');
  scrollSizeHeader > hero && scrollSizeHeader < about ? navLink[1].classList.add('nav__link--current') : navLink[1].classList.remove('nav__link--current');
  scrollSizeHeader > about && scrollSizeHeader < features ? navLink[2].classList.add('nav__link--current') : navLink[2].classList.remove('nav__link--current');
  scrollSizeHeader > features && scrollSizeHeader < system ? navLink[3].classList.add('nav__link--current') : navLink[3].classList.remove('nav__link--current');
  scrollSizeHeader > system ? navLink[4].classList.add('nav__link--current') : navLink[4].classList.remove('nav__link--current');
});

// End scroll styles



// features Accordion

const featuresAccContainer = document.querySelector('.features__acc-container');


featuresAccContainer.addEventListener("click", (e) => {

  let target = e.target;

  if (!target.classList.contains('features__acc-title')) return; // не на TD? тогда не интересует


  target.classList.toggle('features__acc-title--active');
  target.nextElementSibling.classList.toggle('features__acc-content--active');
});

// End features Accordion



// Review anim

const reviews = document.querySelectorAll('.quotes__review');
const quotesElem = document.querySelector('.quotes');


let reviewsAnim = function(elem) {

  reviews.forEach((e) => {

    e.style.transform = "rotateX(" + -elem.clientX / 40 + "deg) rotateY(" + elem.clientY / 40 + "deg)";
  });
}


quotesElem.addEventListener('mousemove', (elem) => {
  if (document.documentElement.clientWidth <= 992) return;

  reviewsAnim(elem);
});


// End Review anim



// Slider

let counter = 0;
const aboutSlides = document.querySelectorAll('.about__slider-slide');
const aboutButton = document.querySelector('.about__slider-button');
const aboutSlider = document.querySelector('.about__slider');


  // default
aboutSlides[0].classList.add('about__slider-slide--active-1');
aboutSlider.style.width = aboutSlides[0].clientWidth + "px";
aboutSlider.style.height = aboutSlides[0].clientHeight + "px";


if (aboutSlides.length - 2 >= 0) {

  aboutSlides[1].classList.add('about__slider-slide--active-2');

}

if (aboutSlides.length - 3 >= 0) {

  aboutSlides[2].classList.add('about__slider-slide--active-3');
}


aboutButton.addEventListener('click', () => {
  counter++;

  if (counter === aboutSlides.length) {
    counter = 0;
  }


  for (let i = 0; i < aboutSlides.length; i++) {
    aboutSlides[i].classList.remove('about__slider-slide--active-1');
    aboutSlides[i].classList.remove('about__slider-slide--active-2');
    aboutSlides[i].classList.remove('about__slider-slide--active-3');
  }

  aboutSlides[counter].classList.add('about__slider-slide--active-1');

  if (aboutSlides.length - counter > 1) {
    aboutSlides[counter + 1].classList.add('about__slider-slide--active-2');
  }


    if (aboutSlides.length - counter > 2) {
      aboutSlides[counter + 2].classList.add('about__slider-slide--active-3');
    }
  });

// End Slider