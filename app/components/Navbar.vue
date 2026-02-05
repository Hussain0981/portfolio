<script lang="ts" setup>
import type { NavItem } from '~/types/navigation'

const route = useRoute()

const navigation = computed<NavItem[]>(() => [
  {
    name: 'Home',
    path: '/',
    isActive: route.path === '/'
  },
  {
    name: 'About',
    path: '/about',
    isActive: route.path.startsWith('/about')
  },
  {
    name: 'Experience',
    path: '/experience',
    isActive: route.path.startsWith('/experience')
  },
  {
    name: 'Education',
    path: '/education',
    isActive: route.path.startsWith('/education')
  },
  {
    name: 'Projects',
    path: '/projects',
    isActive: route.path.startsWith('/projects')
  }
])
</script>

<template>
  <header class="flex items-center justify-between p-4">
    
    <div>
      <img src="/favicon.ico" alt="icon" />
    </div>

    <nav class="flex gap-4">
      <NuxtLink
        v-for="(nav, idx) in navigation"
        :key="idx"
        :to="nav.path"
        :class="nav.isActive ? 'font-bold text-blue-600' : ''"
      >
        {{ nav.name }}
      </NuxtLink>
    </nav>

    <button class="border px-4 py-2 rounded">
      Contact Me
    </button>

  </header>
</template>
