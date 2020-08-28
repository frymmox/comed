const headerButton = document.querySelector('.header__button')
const headerList = document.querySelector('.header__collapse')

headerButton.addEventListener('click', () => {
  headerButton.classList.toggle('active')
  headerList.classList.toggle('header__collapse--open')
  if (headerButton.classList.contains('active')) {
    scrollLock.disablePageScroll()
  } else {
    scrollLock.enablePageScroll()
  }
})
