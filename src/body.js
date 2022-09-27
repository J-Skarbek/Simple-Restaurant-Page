import Linguine from './assets/images/linguine.jpg'
import FrenchToast from './assets/images/french-toast.jpg'
import Filet from './assets/images/fancy-filet.jpg'
import Eggs from './assets/images/fancy-eggs.jpg'

export default function bodyComponent() {
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
  
  document.body.appendChild(bodyComponent());