import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

/**
 * 滾動進場動畫
 * 回傳一個 ref 給目標元素，元素進入視窗時 isVisible 會變為 true
 * 並自動加上 .reveal-visible class（搭配 style.css 的 .reveal）
 *
 * @param {object} options
 * @param {number} options.threshold - 觀察門檻 (0~1)
 * @param {boolean} options.once - 是否只觸發一次（預設 true）
 */
export function useRevealOnScroll(options = {}) {
  const { threshold = 0.15, once = true } = options
  const target = ref(null)
  const isVisible = ref(false)

  const { stop } = useIntersectionObserver(
    target,
    ([entry]) => {
      if (entry?.isIntersecting) {
        isVisible.value = true
        if (once) stop()
      } else if (!once) {
        isVisible.value = false
      }
    },
    { threshold }
  )

  return { target, isVisible }
}
