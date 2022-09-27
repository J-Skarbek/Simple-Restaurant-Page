export default function footerComponent() {
    const element = document.createElement('div')
    element.classList.add('footer')
  
    const byLine = document.createElement('h2')
    byLine.innerText = 'By: John Skarbek'

    const dateLine = document.createElement('p')
    dateLine.innerText = 'September 2022'

    const gitHubLink = document.createElement('p')
    gitHubLink.innerText = 'Check out my Github.'
    
    element.appendChild(byLine)
    element.appendChild(dateLine)
    element.appendChild(gitHubLink)
     
    return element
  }
  
  document.body.appendChild(footerComponent());