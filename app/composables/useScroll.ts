export const useSmoothScroll = () => {
  const { $gsap } = useNuxtApp()

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    const headerOffset = 105 // 

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      headerOffset

    $gsap.to(window, {
      duration: 1,
      scrollTo: y,
      ease: 'power3.out'
    })
  }

  return { scrollToSection }
}
