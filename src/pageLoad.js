import { default as header } from './header.js'
import { default as body } from './body.js'
import { default as sidebar } from './sidebar.js'

export default function pageLoad() {
  header()
  sidebar()
  body()
}
