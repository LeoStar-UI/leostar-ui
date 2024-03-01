// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import LeoStarUI from '../../../dist'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(LeoStarUI)
  },
} satisfies Theme
