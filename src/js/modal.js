// Modal doctor
const modalOpenDoctor = document.querySelector('.js-modal-doctor-open')
const modalCloseDoctor = document.querySelector('.js-modal-doctor-close')
const overlayDoctor = document.querySelector('.js-modal-doctor .modal__overlay')
const modalDoctor = document.querySelector('.js-modal-doctor')

modalOpenDoctor.addEventListener('click', () => {
  modalDoctor.classList.add('modal--show')
  scrollLock.disablePageScroll()
})

modalCloseDoctor.addEventListener('click', () => {
  modalDoctor.classList.remove('modal--show')
  scrollLock.enablePageScroll()
})

overlayDoctor.addEventListener('click', () => {
  modalDoctor.classList.remove('modal--show')
  scrollLock.enablePageScroll()
})

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 27) {
    modalDoctor.classList.remove('modal--show')
    scrollLock.enablePageScroll()
  }
})

// Modal call

const modalOpenCall = document.querySelectorAll('.js-modal-call-open')
const modalCloseCall = document.querySelector('.js-modal-call-close')
const overlayCall = document.querySelector('.js-modal-call .modal__overlay')
const modalCall = document.querySelector('.js-modal-call')

modalOpenCall.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault()
    modalCall.classList.add('modal--show')
    scrollLock.disablePageScroll()
  })
})

modalCloseCall.addEventListener('click', () => {
  modalCall.classList.remove('modal--show')
  scrollLock.enablePageScroll()
})

overlayCall.addEventListener('click', () => {
  modalCall.classList.remove('modal--show')
  scrollLock.enablePageScroll()
})

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 27) {
    modalCall.classList.remove('modal--show')
    scrollLock.enablePageScroll()
  }
})

// Modal question

const modalOpenQuestion = document.querySelector('.js-modal-question-open')
const modalCloseQuestion = document.querySelector('.js-modal-question-close')
const overlayQuestion = document.querySelector('.js-modal-question .modal__overlay')
const modalQuestion = document.querySelector('.js-modal-question')

modalOpenQuestion.addEventListener('click', (e) => {
  e.preventDefault()
  modalQuestion.classList.add('modal--show')
  scrollLock.disablePageScroll()
})

modalCloseQuestion.addEventListener('click', () => {
  modalQuestion.classList.remove('modal--show')
  scrollLock.enablePageScroll()
})

overlayQuestion.addEventListener('click', () => {
  modalQuestion.classList.remove('modal--show')
  scrollLock.enablePageScroll()
})

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 27) {
    modalQuestion.classList.remove('modal--show')
    scrollLock.enablePageScroll()
  }
})
