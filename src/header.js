import Logo from './assets/Logos/slate.svg'

export default function headerComponent() {
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

// document.body.appendChild(headerComponent());
