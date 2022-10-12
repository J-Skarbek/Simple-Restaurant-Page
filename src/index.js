import './style.css';
import Linguine from './assets/images/linguine.jpg'
import FrenchToast from './assets/images/french-toast.jpg'
import Filet from './assets/images/fancy-filet.jpg'
import Eggs from './assets/images/fancy-eggs.jpg'
import Logo from './assets/Logos/slate.svg'


function headerComponent() {
  const element = document.createElement('div')
  element.classList.add('nav-bar')

  const resvBtn = document.createElement('button')
  const callBtn = document.createElement('button')

  resvBtn.textContent = 'Make a Reservation'
  callBtn.textContent = '555-555-1234'

  const logo = new Image()
  logo.src = Logo

  element.appendChild(resvBtn)
  element.appendChild(logo).classList.add('restaurant-logo')
  element.appendChild(callBtn)

  return element
}

function component() {
  const element = document.createElement('div')
  element.classList.add('main-content')

//   Add images
  const linguineImg = new Image()
  linguineImg.src = Linguine

  const fToast = new Image()
  fToast.src = FrenchToast

  const steakImg = new Image()
  steakImg.src = Filet

  const eggsImg = new Image()
  eggsImg.src = Eggs

  element.appendChild(linguineImg)
  element.appendChild(fToast)
  element.appendChild(steakImg)
  element.appendChild(eggsImg)

  return element

}



document.body.appendChild(headerComponent());
document.body.appendChild(component());

console.log('Starting the simple restaurant page.')