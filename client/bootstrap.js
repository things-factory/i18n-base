import { store, UPDATE_CONTEXT, PageView } from '@things-factory/shell'
import { i18next } from './i18next-config'

function updateContext() {
  store.dispatch({
    type: UPDATE_CONTEXT
  })
}

export default function bootstrap() {
  /*
   * language와 관련된 변화는 항상 UPDATE_CONTEXT를 발생시켜서 다국어와 관련한 context기반의 변화를 유도한다.
   */
  i18next.on('initialized', updateContext)
  i18next.on('languageChanged', updateContext)
  i18next.store.on('added', updateContext)

  /*
   * PageView의 lifecycle에 languageUpdate를 추가한다.
   */
  PageView.prototype.languageUpdated = function(i18next) {
    /* language가 바뀌는 전체적인 변화는 일반적으로 page의 재설정이 요구된다. */
    this.pageInit()
  }
}
