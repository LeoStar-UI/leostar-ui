import 'virtual:uno.css'
import type { App,Component } from 'vue'
import LeoButton from './components/button/index.vue'

const components: Component = {
  LeoButton,
}

export default {
  install(app: App) {
    Object.keys(components).forEach((key) => {
      app.component(key, components[key])
    })
  },
}
