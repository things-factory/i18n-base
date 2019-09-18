/**
 * @license Copyright © HatioLab Inc. All rights reserved.
 */

export const localize = i18next => baseElement =>
  class extends baseElement {
    languageUpdated(i18next) {}

    connectedCallback() {
      i18next.on('initialized', options => {
        this.languageUpdated(i18next)
        this.requestUpdate()
      })

      i18next.on('languageChanged', () => {
        this.languageUpdated(i18next)
        this.requestUpdate()
      })

      i18next.store.on('added', (lng, ns) => {
        this.languageUpdated(i18next)
        this.requestUpdate()
      })

      if (super.connectedCallback) {
        super.connectedCallback()
      }
    }
  }
