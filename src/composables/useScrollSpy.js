import { ref, onMounted, onUnmounted } from 'vue'

/**
 * 偵測目前在視窗中的區塊 id，用於導覽列 active 狀態與滾動進度
 *
 * @param {string[]} sectionIds - 各區塊的 element id
 * @param {object} options
 * @param {string} options.rootMargin - IntersectionObserver rootMargin
 */
export function useScrollSpy(sectionIds, options = {}) {
  const { rootMargin = '-40% 0px -55% 0px' } = options
  const activeId = ref(sectionIds[0] || '')
  const isScrolled = ref(false)

  let observer

  function handleScroll() {
    isScrolled.value = window.scrollY > 24
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeId.value = entry.target.id
          }
        })
      },
      { rootMargin, threshold: 0 }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
  })

  onUnmounted(() => {
    observer?.disconnect()
    window.removeEventListener('scroll', handleScroll)
  })

  return { activeId, isScrolled }
}
