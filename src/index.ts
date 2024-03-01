import type { App, Component } from 'vue'
import LeoButton from './components/button/index.vue'
import LeoForm from './components/form/index.vue'

const components: Component = {
  LeoButton,
  LeoForm
}

export default {
  install(app: App) {
    Object.keys(components).forEach((key) => {
      app.component(key, components[key])
    })
  },
}
