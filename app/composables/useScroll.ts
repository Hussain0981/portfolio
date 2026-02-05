export function useSmoothScroll() {
  const { $gsap: gsap } = useNuxtApp()

  const scrollToSection = (id: string) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: `#${id}`,
      ease: 'power2.out'
    })
  }

  return {
    scrollToSection
  }
}
