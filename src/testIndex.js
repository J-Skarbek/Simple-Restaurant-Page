import './style.css'
import pageLoad from './pageLoad.js'


pageLoad()

function addListnersToMenuItems() {
  const menuItems = Array.from(document.querySelectorAll('.menu-items > li'))
  menuItems.forEach(item => {
      item.addEventListener('click', switchItem)
  });
}

// function refreshTheContents() {

// }

addListnersToMenuItems()

function switchItem() {
  alert('testing')
  clearMainContents()
}

function clearMainContents() {
  let domElements = document.querySelector('.main-content')
  while (domElements.firstChild) {
  domElements.removeChild(domElements.firstChild);
  };
}
