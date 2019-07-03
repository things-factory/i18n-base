/**
 * @license Copyright © HatioLab Inc. All rights reserved.
 */

export const localize = i18next => baseElement =>
  class extends baseElement {
    connectedCallback() {
      i18next.on('initialized', options => {
        this.requestUpdate()
      })

      i18next.on('languageChanged', () => {
        this.requestUpdate()
      })

      i18next.store.on('added', (lng, ns) => {
        this.requestUpdate()
      })

      if (super.connectedCallback) {
        super.connectedCallback()
      }
    }
  }
