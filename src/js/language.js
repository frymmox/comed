if (document.documentElement.clientWidth < 1300) {
  const languageButton = document.querySelector('.language')
  const languageList = document.querySelector('.language__dropdown')

  languageButton.addEventListener('click', (e) => {
    e.stopPropagation()
    languageList.classList.toggle('language__dropdown--active')
  })

  document.addEventListener('click', (e) => {
    const target = e.target;
    const currentList = target == languageList || languageList.contains(target);
    const currentButton = target == languageButton;
    const activeList = languageList.classList.contains('language__dropdown--active');

    if (!currentList && !currentButton && activeList) {
      languageList.classList.toggle('language__dropdown--active');
    }
  })
}
