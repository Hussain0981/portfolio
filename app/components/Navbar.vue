<script lang="ts" setup>
import type { NavItem } from '~~/types/navigation'
import { useSmoothScroll } from '~/composables/useScroll'

const { scrollToSection } = useSmoothScroll()
const route = useRoute()

const navigation = computed<NavItem[]>(() => [
  { name: 'Home', path: '/', id: 'home' },
  { name: 'About', path: '/about', id: 'about' },
  { name: 'Skills', path: '/skills', id: 'skills' },
  { name: 'Experience', path: '/experience', id: 'experience' },
  { name: 'Projects', path: '/projects', id: 'projects' },
  { name: 'Education', path: '/education', id: 'education' },
])

const isActive = (path: string) => {
  return path === '/' ? route.path === '/' : route.path.startsWith(path)
}

const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="fixed top-0 w-full z-50 px-4 py-4 md:py-6 pointer-events-none">
    <div class="max-w-6xl mx-auto flex items-center justify-between px-4 py-2 
             backdrop-blur-md bg-black/50 border border-white/20 
             rounded-2xl shadow-2xl pointer-events-auto transition-all duration-500">

      <!-- Logo -->
      <button
        @click="scrollToSection('home')"
        class="flex items-center gap-3 group"
      >
        <div
          class="relative w-9 h-9 flex items-center justify-center rounded-lg rotate-3 group-hover:rotate-12 transition-transform duration-300">
          <img src="/favicon.ico" alt="logo" class="w-6 h-6 -rotate-3 group-hover:-rotate-12" />
        </div>
        <span class="font-bold text-lg tracking-tight text-white hidden sm:block">
          PORTFOLIO<span class="text-color ">.</span>
        </span>
      </button>

      <!-- Desktop Navigation (UI SAME — only click logic changed) -->
      <nav class="hidden md:flex items-center bg-white/10 p-1 rounded-xl border border-white/5">
        <button
          v-for="nav in navigation"
          :key="nav.path"
          @click="scrollToSection(nav.id!)"
          class="px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 relative overflow-hidden"
          :class="isActive(nav.path) ? 'text-black ' : 'text-white/70 hover:text-white hover:bg-white/5'"
        >
          <span class="relative z-10">{{ nav.name }}</span>
          <transition name="fade">
            <span v-if="isActive(nav.path)" class="absolute inset-0 bg-color text-black rounded-lg z-0"></span>
          </transition>
        </button>
      </nav>

      <!-- Right Buttons -->
      <div class="flex items-center gap-4">

        <!-- CTA SAME UI -->
        <button
          @click="scrollToSection('contact')"
          class="hidden md:flex px-5 py-2 rounded-xl cursor-pointer bg-color text-white text-sm font-semibold
                 hover:bg-color transition-colors duration-300 active:scale-95">
          Let's Talk
        </button>

        <!-- Mobile Toggle — lucide icon fixed -->
        <button class="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition"
          @click="mobileMenuOpen = !mobileMenuOpen">
          <Icon :name="mobileMenuOpen ? 'lucide:x' : 'lucide:layout-grid'" class="w-8 h-8" />
        </button>

      </div>
    </div>

    <!-- Mobile Menu (UI SAME — logic fixed) -->
    <transition name="mobile-menu">
      <div v-if="mobileMenuOpen" class="md:hidden fixed inset-x-4 top-24 bg-black/90 border border-white/10 
               backdrop-blur-2xl rounded-3xl p-8 flex flex-col gap-4 shadow-2xl pointer-events-auto">

        <button
          v-for="(nav, index) in navigation"
          :key="nav.path"
          @click="scrollToSection(nav.id!); mobileMenuOpen = false"
          class="text-2xl font-bold flex justify-between items-center group"
          :class="isActive(nav.path) ? 'text-color' : 'text-white/60'"
          :style="{ transitionDelay: `${index * 50}ms` }"
        >
          {{ nav.name }}
          <Icon name="lucide:arrow-up-right" class="opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>

        <hr class="border-white/10 my-4" />

        <!-- Contact button fixed -->
        <button
          @click="scrollToSection('contact'); mobileMenuOpen = false"
          class="w-full py-4 bg-myColor text-black font-bold rounded-2xl">
          Contact Me
        </button>

      </div>
    </transition>
  </header>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
