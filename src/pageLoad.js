import { default as header } from './header.js'
import { default as sidebar } from './sidebar.js'
// import { default as body } from './body.js'
import { default as footer } from './footer.js'
import { default as linguine} from './linguine.js'
import { default as frenchToast} from './french-toast.js'
import { default as filet} from './filet.js'
import { default as eggs} from './eggs.js'

export default function pageLoad() {
  header()
  sidebar()
//   body()
  linguine()
  frenchToast()
  filet()
  eggs()
  footer()
}
