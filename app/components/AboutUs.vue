<script lang="ts" setup>
function downloadFile() {
  const link = document.createElement('a')
  link.href = '/hussain_cv.pdf'
  link.download = 'hussain_cv.pdf'
  link.click()
}
</script>

<template>
  <section id="about" class="py-10 md:py-20 px-3 md:px-6 bg-primary border-t border-white/5 relative overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-24 gap-8">
        <div class="space-y-2">
          <p class="text-color font-mono text-xs uppercase tracking-[0.5em]">
            Identity / Profile
          </p>
          <h2 class="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
            Hussain <span class="text-transparent" style="-webkit-text-stroke: 1px rgba(255,255,255,0.2);">Ullah</span>
          </h2>
        </div>
        <div class="text-right hidden md:block">
          <p class="text-white/20 font-mono text-[10px] uppercase tracking-widest leading-loose">
            Full Stack Engineering<br>
            System Architecture<br>
            Motion Development
          </p>
        </div>
      </div>

      <div class="grid lg:grid-cols-12 gap-10 md:gap-16">
        <div class="md:col-span-8 space-y-8">
          <div class="md:space-y-8 ">
            <h3 class="text-color font-mono text-xs uppercase tracking-widest border-b border-white/10 pb-4 inline-block">
              // Professional Summary
            </h3>
            <p class="text-3xl md:text-5xl mt-2 md:mt-0 font-light text-white leading-tight tracking-tight">
              A Software Engineer dedicated to building <span class="italic text-color">stable backend architectures</span> and <span class="text-white font-medium">high-fidelity</span> frontend experiences.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-6 md:gap-12 text-white/50 text-sm leading-relaxed font-mono">
            <p>
              Based in Pakistan, I specialize in the <span class="text-white">Nuxt 4</span> ecosystem, bridging the gap between complex server logic and seamless user interaction. My tenure at <span class="text-white">NGEN Peshawar</span> solidified my ability to deliver production-grade code under demanding conditions.
            </p>
            <p>
              Currently operating as a <span class="text-white">Freelance Full Stack Developer</span>, I help clients translate business requirements into scalable technical roadmaps, ensuring security, performance, and maintainability are never compromised.
            </p>
          </div>
        </div>

        <div class="lg:col-span-4 border md:border-none md:border-l border-white/10 p-3 md:p-0 rounded-md md:pl-12 space-y-5 md:space-y-12">
          <div class="space-y-6">
            <h4 class="text-white/20 font-mono text-[10px] uppercase tracking-[0.4em]">
              Academic Foundation
            </h4>
            <div class="space-y-1">
              <p class="text-sm font-bold text-white uppercase">
                BS Software Engineering
              </p>
              <p class="text-xs text-white/40">
                Virtual University of Pakistan
              </p>
            </div>
          </div>

          <div class="space-y-6">
            <h4 class="text-white/20 font-mono text-[10px] uppercase tracking-[0.4em]">
              Core Discipline
            </h4>
            <ul class="space-y-4 text-xs font-mono">
              <li class="flex justify-between items-center border-b border-white/5 pb-2">
                <span class="text-white/40">Backend</span>
                <span class="text-white">Node / Express</span>
              </li>
              <li class="flex justify-between items-center border-b border-white/5 pb-2">
                <span class="text-white/40">Frontend</span>
                <span class="text-white">Nuxt / GSAP</span>
              </li>
              <li class="flex justify-between items-center border-b border-white/5 pb-2">
                <span class="text-white/40">Database</span>
                <span class="text-white">SQL & NoSQL</span>
              </li>
              <li class="flex justify-between items-center border-b border-white/5 pb-2">
                <span class="text-white/40">Logic</span>
                <span class="text-white">TypeScript</span>
              </li>
            </ul>
          </div>

          <div class="pt-8">
            <button class="w-full py-4 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500" @click="downloadFile">
              Download CV.PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* High-end rendering settings */
section {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Custom text stroke for the name */
.-webkit-text-stroke {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
}
</style>
