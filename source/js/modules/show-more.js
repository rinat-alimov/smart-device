const navBtnShowMore = document.querySelector('.nav__btn-show-more');
const navContainer = document.querySelector('.nav__wrapper');

const footerContactsBtnShowMore = document.querySelector('.footer-contacts__btn-show-more');
const footerContactsContainer = document.querySelector('.footer-contacts__list');

navBtnShowMore.classList.remove('nav__btn-show-more--js-none');
navContainer.classList.remove('nav__wrapper--js-none');

footerContactsBtnShowMore.classList.remove('footer-contacts__btn-show-more--js-none');
footerContactsContainer.classList.remove('footer-contacts__list--js-none');


const navShowMore = () => {
  if (navBtnShowMore.classList.contains('nav__btn-show-more--is-close')) {
    navBtnShowMore.classList.remove('nav__btn-show-more--is-close');
    navBtnShowMore.classList.add('nav__btn-show-more--is-open');
    navContainer.style.display = 'block';

    footerContactsBtnShowMore.classList.remove('footer-contacts__btn-show-more--is-open');
    footerContactsBtnShowMore.classList.add('footer-contacts__btn-show-more--is-close');
    footerContactsContainer.style.display = 'none';

  } else {
    navBtnShowMore.classList.remove('nav__btn-show-more--is-open');
    navBtnShowMore.classList.add('nav__btn-show-more--is-close');
    navContainer.style.display = 'none';
  }
};

const footerContactsShowMore = () => {
  if (footerContactsBtnShowMore.classList.contains('footer-contacts__btn-show-more--is-close')) {
    footerContactsBtnShowMore.classList.remove('footer-contacts__btn-show-more--is-close');
    footerContactsBtnShowMore.classList.add('footer-contacts__btn-show-more--is-open');
    footerContactsContainer.style.display = 'block';

    navBtnShowMore.classList.remove('nav__btn-show-more--is-open');
    navBtnShowMore.classList.add('nav__btn-show-more--is-close');
    navContainer.style.display = 'none';

  } else {
    footerContactsBtnShowMore.classList.remove('footer-contacts__btn-show-more--is-open');
    footerContactsBtnShowMore.classList.add('footer-contacts__btn-show-more--is-close');
    footerContactsContainer.style.display = 'none';
  }
};

navBtnShowMore.addEventListener('click', navShowMore);
footerContactsBtnShowMore.addEventListener('click', footerContactsShowMore);