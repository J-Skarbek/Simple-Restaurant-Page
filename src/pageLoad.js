import { default as header } from './header.js'
import { appendMainBody } from './body.js'
import { default as sidebar } from './sidebar.js'
import { default as footer } from './footer.js'

export default function pageLoad() {
  header()
  document.body.appendChild(header());
  appendMainBody()
  sidebar()
  footer()
}
