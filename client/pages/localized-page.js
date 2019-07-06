import { PageView } from '@things-factory/shell'
import { localize } from '../mixins/localize-mixin'
import { i18next } from '../i18next-config'

export class LocalizedPage extends localize(i18next)(PageView) {}

LocalizedPage.prototype.t = i18next.t
