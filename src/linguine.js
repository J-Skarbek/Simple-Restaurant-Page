import Linguine from './assets/images/linguine.jpg'

function showLinguine() {
  const element = document.querySelector('.main-content')

  const linguineImg = new Image()
  linguineImg.src = Linguine
  linguineImg.classList.add('featured-img')

  const detailsBox = document.createElement('div')
  detailsBox.classList.add('details-box')
  
  const dishName = document.createElement('h2')
  dishName.innerText = 'Linguine with Some Sauce'

  const dishPrice = document.createElement('h3')
  dishPrice.innerText = '$39.99'

  const dishDetails = document.createElement('div')
  const detailsTextBody = document.createElement('p')
  detailsTextBody.classList.add('dish-details-text')
  dishDetails.classList.add('dish-deatils')
  detailsTextBody.innerText = 'Enim nec dui nunc mattis enim. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Nec feugiat in fermentum posuere urna nec. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Praesent semper feugiat nibh sed pulvinar proin. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Amet justo donec enim diam. Vestibulum rhoncus est pellentesque elit. Cras ornare arcu dui vivamus arcu felis bibendum. Sociis natoque penatibus et magnis. Dapibus ultrices in iaculis nunc sed augue. Aliquam id diam maecenas ultricies. Tempus quam pellentesque nec nam aliquam sem et. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Auctor elit sed vulputate mi. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Ac orci phasellus egestas tellus rutrum tellus. Tempor orci dapibus ultrices in. Sed faucibus turpis in eu mi bibendum neque. Elementum facilisis leo vel fringilla est ullamcorper eget nulla.'

  element.appendChild(linguineImg)
  
  element.appendChild(detailsBox)
  detailsBox.appendChild(dishName)
  detailsBox.appendChild(dishPrice)
  detailsBox.appendChild(dishDetails)
  dishDetails.appendChild(detailsTextBody)
  
  return element 
}
  
export function appendLinguine() {
  document.body.appendChild(showLinguine());
}