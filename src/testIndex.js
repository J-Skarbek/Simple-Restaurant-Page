import './style.css'
import pageLoad from './pageLoad.js'

pageLoad()

function addListnersToMenuItems() {
    const menuItems = Array.from(document.querySelectorAll('.menu-items > li'))
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            alert('testing')
        })
    });
}

addListnersToMenuItems()