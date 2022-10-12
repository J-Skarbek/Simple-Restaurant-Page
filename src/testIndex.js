import './style.css'
import pageLoad from './pageLoad.js'
import { appendEggs } from './eggs.js'
import { appendFilet } from './filet.js'
import { appendFrenchToast } from './french-toast.js'
import { appendLinguine } from './linguine.js'

pageLoad()
addListnersToMenuItems()

function addListnersToMenuItems() {
  const menuItems = Array.from(document.querySelectorAll('.menu-items > li'))
  menuItems.forEach(item => {
      item.addEventListener('click', switchItem)
  });
}

function switchItem(e) {
  clearMainContents()
  if (e.target.innerText === 'Eggs') {
    appendEggs()
  } else if (e.target.innerText === 'Filet') {
    appendFilet()
  } else if (e.target.innerText === 'Linguine') {
    appendLinguine()
  } else if (e.target.innerText === 'French Toast & Fruit') {
    appendFrenchToast()
  }
}

function clearMainContents() {
  let domElements = document.querySelector('.main-content')
  while (domElements.firstChild) {
    domElements.removeChild(domElements.firstChild)
  }
}
