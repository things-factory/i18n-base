/**
 * @license Copyright © HatioLab Inc. All rights reserved.
 */

import { default as originalI18next } from 'i18next'
import LngDetector from 'i18next-browser-languagedetector'
import I18NextXhrBackend from 'i18next-xhr-backend'

export const i18next = originalI18next.use(LngDetector).use(I18NextXhrBackend)

i18next.init({
  fallbackLng: 'en-US',
  debug: true,
  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: false,
  interpolation: {
    prefix: '{',
    suffix: '}'
  },
  // load: 'currentOnly',
  backend: {
    // loadPath: '/assets/{ns}/locales/{lng}.json'
    loadPath: '/{ns}/{lng}.json'
  }
})
