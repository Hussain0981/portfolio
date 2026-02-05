<script setup lang="ts">
import type { projects } from '~~/types/projects'

const projects = ref<projects[]>([
  {
    title: 'Enterprise SaaS Architecture',
    category: 'Full Stack / NGEN',
    year: '2024',
    client: 'NGEN Peshawar',
    tech: ['Nuxt 4', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind'],
    description: 'Architected a scalable SaaS solution focused on real-time data processing and high-performance server-side rendering.',
    image: '/saas-project.jpg',
  },
  {
    title: 'Motion-First Visual Engine',
    category: 'Creative / Frontend',
    year: '2024',
    client: 'Internal / Lab',
    tech: ['Three.js', 'GSAP', 'Vue 3', 'UnoCSS', 'TypeScript'],
    description: 'An immersive digital experience utilizing Three.js for 3D rendering and GSAP for complex timeline-based animations.',
    image: '/creative-project.jpg',
  },
  {
    title: 'Distributed Data Infrastructure',
    category: 'Backend / Logic',
    year: '2025',
    client: 'Freelance',
    tech: ['Express.js', 'MongoDB', 'Mongoose', 'JWT Auth', 'Zod'],
    description: 'Designed a secure, multi-tenant backend infrastructure with complex schema relationships and automated security auditing.',
    image: '/backend-project.jpg',
  },
]);
</script>

<template>
  <main class="bg-primary min-h-screen text-white py-10 px-6 lg:px-12 overflow-hidden">
    <div
      class="fixed top-20 right-[-5%] text-[20vw] font-black text-white/[0.02] uppercase pointer-events-none select-none z-0">
      Archives
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="mb-24 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-12">
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-2 h-2 rounded-full bg-color animate-pulse" />
            <span class="text-color font-mono text-[10px] uppercase tracking-[0.4em]">Index / 003 Projects</span>
          </div>
          <h1 class="text-6xl md:text-9xl font-black uppercase tracking-tighter italic">
            Works<span class="text-color">.</span>
          </h1>
        </div>
        <div class="max-w-xs text-right hidden md:block">
          <p class="text-white/40 text-xs font-mono leading-loose uppercase tracking-widest">
            Focused on the intersection of <span class="text-white">technical stability</span> and <span
              class="text-white">visual elegance</span>.
          </p>
        </div>
      </div>

      <div class="space-y-32">
        <div v-for="(project, index) in projects" :key="index"
          class="group flex flex-col lg:flex-row gap-12 items-start">
          <div
            class="w-full lg:w-1/4 space-y-8 order-2 lg:order-1 border-l border-white/10 pl-8 group-hover:border-color transition-colors duration-500">
            <div>
              <p class="text-[10px] font-mono text-white/30 uppercase mb-1">
                Project Code
              </p>
              <p class="text-xl font-bold font-mono">
                00{{ index + 1 }}
              </p>
            </div>

            <div>
              <p class="text-[10px] font-mono text-white/30 uppercase mb-2">
                Primary Stack
              </p>
              <div class="flex flex-wrap gap-2">
                <span v-for="t in project.tech" :key="t"
                  class="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-white/60">
                  {{ t }}
                </span>
              </div>
            </div>

            <div>
              <p class="text-[10px] font-mono text-white/30 uppercase mb-1">
                Scope
              </p>
              <p class="text-xs uppercase tracking-widest text-white/70">
                {{ project.category }}
              </p>
            </div>

            <NuxtLink :to="project.link"
              class="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-color group/btn pt-4">
              Explore Case Study
              <Icon name="lucide:arrow-right" class="group-hover/btn:translate-x-2 transition-transform" />
            </NuxtLink>
          </div>

          <div class="w-full lg:w-3/4 order-1 lg:order-2 group/image overflow-hidden rounded-3xl relative">
            <div
              class="absolute inset-0 bg-color/20 mix-blend-color opacity-0 group-hover/image:opacity-100 transition-opacity duration-700 z-10" />

            <div class="aspect-video bg-white/5 relative overflow-hidden">
              <img :src="project.image"
                class="w-full h-full object-cover filter grayscale group-hover/image:grayscale-0 group-hover/image:scale-105 transition-all duration-1000 ease-out"
                alt="">

              <div
                class="absolute inset-0 p-12 flex flex-col justify-end bg-linear-to-t from-primary via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity">
                <h2 class="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white mb-4">
                  {{ project.title }}
                </h2>
                <p
                  class="max-w-md text-white/60 text-sm leading-relaxed translate-y-4 group-hover/image:translate-y-0 transition-transform duration-500">
                  {{ project.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-14 text-center border-t border-white/10 pt-20">
        <h3 class="text-4xl font-black uppercase mb-8">
          Ready to Build Something <span class="text-color">Iconic?</span>
        </h3>
        <button
          class="px-12 py-5 bg-white text-black font-black uppercase text-xs tracking-[0.3em] rounded-full hover:bg-color transition-all duration-300">
          Start a Consultation
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Kinetic typography smoothing */
main {
  -webkit-font-smoothing: antialiased;
}

/* Subtle mask for the "Works" title to feel more modern */
h1 {
  background: linear-gradient(to bottom, #fff 50%, rgba(255, 255, 255, 0.2) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
