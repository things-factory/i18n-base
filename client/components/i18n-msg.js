/**
 * @license Copyright © HatioLab Inc. All rights reserved.
 */

import { LitElement, html } from 'lit-element'

import { localize } from '../mixins/localize-mixin'
import { i18next } from '../i18next-config'

export default class I18nMsg extends localize(i18next)(LitElement) {
  static get properties() {
    return {
      msgid: { attribute: true }
    }
  }

  render() {
    return html`
      ${i18next.t(this.msgid)}
    `
  }
}

customElements.define('i18n-msg', I18nMsg)
customElements.define('things-i18n-msg', I18nMsg)
