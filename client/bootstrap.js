import { store, UPDATE_CONTEXT } from '@things-factory/shell'
import { i18next } from './i18next-config'

function updateContext() {
  store.dispatch({
    type: UPDATE_CONTEXT
  })
}

export default function bootstrap() {
  i18next.on('initialized', options => {
    updateContext()
  })

  i18next.on('languageChanged', () => {
    updateContext()
  })

  i18next.store.on('added', (lng, ns) => {
    updateContext()
  })
}
