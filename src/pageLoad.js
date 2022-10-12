import { default as header } from './header.js'
import { default as sidebar } from './sidebar.js'
import { default as footer } from './footer.js'
// import { default as linguine} from './linguine.js'
// import { default as frenchToast} from './french-toast.js'
import { appendFilet } from './filet.js'
// import { default as eggs} from './eggs.js'
import { appendEggs } from './eggs.js'



export default function pageLoad() {
  header()
  document.body.appendChild(header());
  sidebar()
  appendEggs()
  appendFilet()
  footer()
}
