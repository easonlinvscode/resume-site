import { ref, watch } from 'vue'

/**
 * 數字計數動畫：當 trigger 變為 true 時，從 0 平滑遞增到 target
 *
 * @param {import('vue').Ref<boolean>} trigger - 觸發動畫的條件（例如 isVisible）
 * @param {number} target - 目標數字
 * @param {object} options
 * @param {number} options.duration - 動畫時長（ms），預設 1200
 */
export function useCountUp(trigger, target, options = {}) {
  const { duration = 1200 } = options
  const current = ref(0)

  watch(
    trigger,
    (visible) => {
      if (!visible) return

      const start = performance.now()
      const from = 0

      function tick(now) {
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
        // ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3)
        current.value = Math.round(from + (target - from) * eased)

        if (progress < 1) {
          requestAnimationFrame(tick)
        } else {
          current.value = target
        }
      }

      requestAnimationFrame(tick)
    },
    { immediate: true }
  )

  return current
}
