/**
 * @license Copyright © HatioLab Inc. All rights reserved.
 */

export const localize = i18next => baseElement =>
  class extends baseElement {
    connectedCallback() {
      var callback = () => {
        this.languageUpdated && this.languageUpdated(i18next)
        this.requestUpdate()
      }

      i18next.on('initialized', callback)
      i18next.on('languageChanged', callback)
      i18next.store.on('added', callback)

      this.__i18next_callback__ = callback

      if (super.connectedCallback) {
        super.connectedCallback()
      }
    }

    disconnectedCallback() {
      if (super.connectedCallback) {
        super.connectedCallback()
      }

      i18next.store.off('initialized', this.__i18next_callback__)
      i18next.store.off('languageChanged', this.__i18next_callback__)
      i18next.store.off('added', this.__i18next_callback__)
    }
  }
