export default function sideBarComponent() {
  const element = document.createElement('div')
  element.classList.add('sidebar')

  const sideHeader = document.createElement('h2')
  sideHeader.innerText = 'Menu'

  const itemsList = document.createElement('ul')
  itemsList.classList.add('menu-items')

  const listItem1 = document.createElement('li')
  const item1Link = document.createElement('a')
  listItem1.appendChild(item1Link)
  item1Link.innerText = 'Linguinie'

  const listItem2 = document.createElement('li')
  const item2Link = document.createElement('a')
  listItem2.appendChild(item2Link)
  item2Link.innerText = 'French Toast & Fruit'

  const listItem3 = document.createElement('li')
  const item3Link = document.createElement('a')
  listItem3.appendChild(item3Link)
  item3Link.innerText = 'Filet'

  const listItem4 = document.createElement('li')
  const item4Link = document.createElement('a')
  listItem4.appendChild(item4Link)
  item4Link.innerText = 'Eggs'


  element.appendChild(sideHeader)
  element.appendChild(itemsList)
  itemsList.appendChild(listItem1)
  itemsList.appendChild(listItem2)
  itemsList.appendChild(listItem3)
  itemsList.appendChild(listItem4)
  

  return element
}

document.body.appendChild(sideBarComponent());