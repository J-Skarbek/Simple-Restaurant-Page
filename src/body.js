export function mainBodyComponent() {
  const element = document.createElement('div')
  element.classList.add('main-content')
  return element
}

export function appendMainBody() {
  document.body.appendChild(mainBodyComponent())
}

