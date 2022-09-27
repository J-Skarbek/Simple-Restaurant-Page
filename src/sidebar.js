export default function sideBarComponent() {
  const element = document.createElement('div')
  element.classList.add('sidebar')

  const sideHeader = document.createElement('h2')
  sideHeader.innerText = 'Menu'

  const itemsList = document.createElement('ul')
  itemsList.classList.add('menu-items')

  const listItem1 = document.createElement('li')
  listItem1.innerText = 'Linguinie'

  const listItem2 = document.createElement('li')
  listItem2.innerText = 'French Toast & Fruit'

  const listItem3 = document.createElement('li')
  listItem3.innerText = 'Filet'

  const listItem4 = document.createElement('li')
  listItem4.innerText = 'Eggs'


  element.appendChild(sideHeader)
  element.appendChild(itemsList)
  itemsList.appendChild(listItem1)
  itemsList.appendChild(listItem2)
  itemsList.appendChild(listItem3)
  itemsList.appendChild(listItem4)
  

  return element
}

document.body.appendChild(sideBarComponent());