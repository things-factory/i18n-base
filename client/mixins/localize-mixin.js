/**
 * @license Copyright © HatioLab Inc. All rights reserved.
 */

export const localize = i18next => baseElement =>
  class extends baseElement {
    languageUpdated() {
      this.requestUpdate()
    }

    connectedCallback() {
      i18next.on('initialized', options => {
        this.languageUpdated()
      })

      i18next.on('languageChanged', () => {
        this.languageUpdated()
      })

      i18next.store.on('added', (lng, ns) => {
        this.languageUpdated()
      })

      if (super.connectedCallback) {
        super.connectedCallback()
      }
    }
  }
