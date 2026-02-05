<script setup lang="ts">
// Professional Project Data
const projects = [
  {
    title: 'Enterprise SaaS Platform',
    desc: 'Full-scale architecture built for NGEN, featuring real-time analytics and secure API integration.',
    tech: ['Nuxt 4', 'Node.js', 'PostgreSQL', 'Prisma'],
    link: 'https://github.hussain098.com',
    image: '/project1.jpg',
  },
  {
    title: 'Creative Portfolio Engine',
    desc: 'High-performance frontend with immersive 3D elements and GSAP-driven motion systems.',
    tech: ['Vue.js', 'Three.js', 'GSAP', 'Tailwind'],
    link: 'https://github.hussain098.com',
    image: '/project2.jpg',
  },
  {
    title: 'E-Commerce Infrastructure',
    desc: 'Scalable backend system handling complex inventory logic and secure JWT-based authentication.',
    tech: ['Express.js', 'MongoDB', 'TypeScript', 'Zod'],
    link: 'https://github.hussain098.com',
    image: '/project3.jpg',
  },
]
</script>

<template>
  <section class="py-10 px-6 bg-primary">
    <div class="max-w-7xl mx-auto space-y-32">
      <div>
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div class="space-y-4">
            <div class="flex items-center gap-2">
              <div class="w-8 h-[1px] bg-color" />
              <span class="text-color font-mono text-xs uppercase tracking-[0.3em]">Selected Work</span>
            </div>
            <h2 class="text-5xl md:text-7xl font-black text-white uppercase leading-none">
              Featured <br> <span class="text-transparent" style="-webkit-text-stroke: 1px rgba(255,255,255,0.3);">Projects</span>
            </h2>
          </div>
          <a href="https://github.hussain098.com" target="_blank" class="group flex items-center gap-4 text-white/40 hover:text-white transition-all pb-2 border-b border-white/10">
            <span class="font-bold uppercase text-xs tracking-widest">View All on GitHub</span>
            <Icon name="lucide:arrow-up-right" class="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(project, index) in projects" :key="index" class="group relative aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 bg-white/5">
            <img :src="project.image" class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-50 group-hover:opacity-100">
            <div class="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent" />

            <div class="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="t in project.tech" :key="t" class="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-color font-mono">{{ t }}</span>
              </div>
              <h3 class="text-2xl font-bold text-white uppercase italic tracking-tight mb-2">
                {{ project.title }}
              </h3>
              <p class="text-white/50 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {{ project.desc }}
              </p>
              <a :href="project.link" class="mt-6 w-12 h-12 rounded-full bg-color text-black flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-200">
                <Icon name="lucide:external-link" class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.-webkit-text-stroke {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
}
</style>
