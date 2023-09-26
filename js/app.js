// Menu toggle
const toggleButton = document.querySelector('.hamburger-icon')
const menu = document.getElementById('menu')

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('hidden')
})

// Modal Toggle
const login = document.getElementById('login')
const loginModal = document.getElementById('login-modal')
const closeModal = document.getElementById('cross')

login.addEventListener('click', () => {
  loginModal.classList.toggle('hide-modal')
})

closeModal.addEventListener('click', () => {
  loginModal.classList.toggle('hide-modal')
})
