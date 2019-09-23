import { PageView } from '@things-factory/shell'

export default function bootstrap() {
  /*
   * PageView의 lifecycle에 languageUpdate를 추가한다.
   */
  PageView.prototype.languageUpdated = function(i18next) {
    this.pageReset()
  }
}
