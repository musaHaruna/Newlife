// Menu toggle
const toggleButton = document.querySelector('.hamburger-icon')
const menu = document.getElementById('menu')

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active')
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

const dropdownIcons = document.querySelectorAll('.drop-down')
const dropdownContents = document.querySelectorAll('.dropdown-content')

dropdownIcons.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    // Close all dropdowns
    dropdownContents.forEach((content, i) => {
      if (i !== index) {
        content.classList.remove('show-link-dropdown')
      }
    })

    // Toggle the clicked dropdown
    dropdownContents[index].classList.toggle('show-link-dropdown')
  })
})

const navbar = document.querySelector('header')
const threshold = 300 // Threshold when the navbar becomes sticky (in pixels)

window.addEventListener('scroll', () => {
  if (window.scrollY >= threshold) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky')
  }
})

const accordions = document.querySelectorAll('.accordion')

let activeParagraph = null

function toggleParagraph(event) {
  const paragraph = event.target.nextElementSibling

  if (paragraph === activeParagraph) {
    // If it's the active paragraph, close it
    paragraph.classList.remove('accordion-active')
    activeParagraph = null
  } else {
    // Close the currently active paragraph (if any)
    if (activeParagraph) {
      activeParagraph.classList.remove('accordion-active')
    }

    // Open the clicked paragraph
    paragraph.classList.add('accordion-active')
    activeParagraph = paragraph
  }
}

accordions.forEach((accordion) => {
  accordion.addEventListener('click', toggleParagraph)
})
