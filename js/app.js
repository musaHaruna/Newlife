const toggleButton = document.querySelector('.hamburger-icon')
const menu = document.getElementById('menu')

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('hidden')
})
