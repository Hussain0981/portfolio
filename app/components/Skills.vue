<script setup lang="ts">
/**
 * Data integrated from your professional profile [cite: 34-45]
 */
const frontendSkills = [
  { name: 'Vue / Nuxt 4', level: 'Expert', tech: 'Composition API, SSR', icon: 'logos:nuxt-icon' },
  { name: 'TypeScript', level: 'Core', tech: 'Typed Logic', icon: 'logos:typescript-icon' },
  { name: 'GSAP / Three.js', level: 'Creative', tech: '3D & Motion', icon: 'logos:gsap-icon' },
  { name: 'Tailwind / UnoCSS', level: 'Styling', tech: 'Utility-first', icon: 'logos:tailwindcss-icon' },
]

const backendSkills = [
  { name: 'Node / Express', type: 'Runtime', tech: 'Server Logic', icon: 'logos:nodejs-icon' },
  { name: 'Postgres / MySQL', type: 'SQL', tech: 'Relational DB', icon: 'logos:postgresql' },
  { name: 'MongoDB', type: 'NoSQL', tech: 'Document Store', icon: 'logos:mongodb-icon' },
  { name: 'Prisma / Drizzle', type: 'ORM', tech: 'Type-safe Data', icon: 'logos:prisma' },
]
</script>

<template>
  <section class="py-10 px-6 bg-primary text-white">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div class="flex items-center gap-2 mb-4">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-color opacity-75" />
              <span class="relative inline-flex rounded-full h-3 w-3 bg-color" />
            </span>
            <span class="text-color font-mono text-xs uppercase tracking-widest">System Capabilities</span>
          </div>
          <h2 class="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            Tech <span class="text-transparent" style="-webkit-text-stroke: 1px rgba(255,255,255,0.5);">Stack</span>
          </h2>
        </div>
        <p class="text-white/40 max-w-xs font-mono text-xs leading-relaxed border-l border-white/10 pl-4">
          // Specializing in high-performance digital architectures  and immersive frontend experiences.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
        <div class=" p-8 md:p-12 relative group">
          <div class="mb-12">
            <span class="text-color font-mono tracking-[0.3em] uppercase text-xs">Side A</span>
            <h3 class="text-5xl font-black text-white mt-2 italic tracking-tighter uppercase">
              Frontend
            </h3>
            <p class="text-white/40 mt-4 max-w-sm text-sm">
              Crafting immersive interfaces with Vue.js, GSAP, and Nuxt 4[cite: 38, 40].
            </p>
          </div>

          <div class="space-y-4 b">
            <div
              v-for="skill in frontendSkills" :key="skill.name"
              class="flex items-center justify-between p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-color/50 hover:bg-white/[0.05] transition-all duration-300 group/item"
            >
              <div class="flex items-center gap-4">
                <Icon :name="skill.icon" class="w-8 h-8 filter grayscale group-hover/item:grayscale-0 transition-all" />
                <div>
                  <div class="text-lg font-bold text-white/80 group-hover/item:text-white">
                    {{ skill.name }}
                  </div>
                  <div class="text-[10px] text-white/30 font-mono uppercase">
                    {{ skill.tech }}
                  </div>
                </div>
              </div>
              <span class="text-[10px] font-mono uppercase tracking-widest text-color bg-color/10 px-2 py-1 rounded">{{ skill.level }}</span>
            </div>
          </div>
        </div>

        <div class=" p-8 md:p-12 relative group border-t lg:border-t-0 lg:border-l border-white/10">
          <div class="absolute top-0 right-0 p-8 opacity-5 pointer-events-none font-mono text-[10px] hidden md:block">
            <pre>
async function init() {
  const db = await Prisma.connect(); //
  console.log("Database Online");
}
            </pre>
          </div>

          <div class="mb-12 lg:text-right">
            <span class="text-blue-400 font-mono tracking-[0.3em] uppercase text-xs">Side B</span>
            <h3 class="text-5xl font-black text-white mt-2 italic tracking-tighter uppercase">
              Backend
            </h3>
            <p class="text-white/40 mt-4 max-w-sm lg:ml-auto text-sm">
              Building robust systems using Node.js and scalable database architectures[cite: 42, 44].
            </p>
          </div>

          <div class="space-y-4">
            <div
              v-for="skill in backendSkills" :key="skill.name"
              class="flex items-center justify-between p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/50 hover:bg-white/[0.05] transition-all duration-300 flex-row-reverse group/item"
            >
              <div class="flex items-center gap-4 flex-row-reverse">
                <Icon :name="skill.icon" class="w-8 h-8 filter grayscale group-hover/item:grayscale-0 transition-all" />
                <div class="text-right">
                  <div class="text-lg font-bold text-white/80 group-hover/item:text-white">
                    {{ skill.name }}
                  </div>
                  <div class="text-[10px] text-white/30 font-mono uppercase">
                    {{ skill.tech }}
                  </div>
                </div>
              </div>
              <span class="text-[10px] font-mono uppercase tracking-widest text-blue-400 bg-blue-400/10 px-2 py-1 rounded">{{ skill.type }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 overflow-hidden py-6 border-y border-white/5">
        <div class="flex gap-12 animate-marquee whitespace-nowrap text-white/10 font-mono text-xs uppercase tracking-[0.2em]">
          <span>Nuxt Modules </span> <span>Express Middleware </span>
          <span>JWT Authentication </span> <span>REST APIs </span>
          <span>GSAP Motion </span> <span>PostgreSQL </span>
          <span>Drizzle ORM </span> <span>Mongoose ODM </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-marquee {
  display: inline-flex;
  animation: marquee 30s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>
