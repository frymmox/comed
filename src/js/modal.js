const modalOpen = document.querySelector('.js-modal-open')
const modalClose = document.querySelector('.js-modal-close')
const overlay = document.querySelector('.modal__overlay')
const modal = document.querySelector('.modal')

modalOpen.addEventListener('click', () => {
  modal.classList.add('modal--show')
  scrollLock.disablePageScroll()
})

modalClose.addEventListener('click', () => {
  modal.classList.remove('modal--show')
  scrollLock.enablePageScroll()
})

overlay.addEventListener('click', () => {
  modal.classList.remove('modal--show')
  scrollLock.enablePageScroll()
})

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 27) {
    modal.classList.remove('modal--show')
    scrollLock.enablePageScroll()
  }
})
