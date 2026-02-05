<template>
  <section id="contact" class="py-14 bg-primary text-white selection:bg-color selection:text-black">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex items-center gap-4 mb-20 opacity-30">
        <div class="h-px w-12 bg-white" />
        <span class="font-mono text-[10px] uppercase tracking-[0.5em]">04 // Connection</span>
      </div>

      <div class="grid lg:grid-cols-12 gap-16">
        <div class="lg:col-span-7">
          <h2 class="text-6xl md:text-[120px] font-black uppercase tracking-tighter leading-[0.85] italic mb-12">
            Let's <br>
            <span class="text-transparent" style="-webkit-text-stroke: 1px rgba(255,255,255,0.4);">Scale</span> <br>
            Together<span class="text-color">.</span>
          </h2>

          <div class="max-w-md space-y-6 text-white/40 font-light text-lg">
            <p>
              Currently accepting new projects for <span class="text-white">Q1 2026</span>.
              Open to high-impact freelance roles and full-stack engineering positions worldwide.
            </p>
          </div>
        </div>

        <div class="lg:col-span-5 flex flex-col justify-end space-y-1">
          <a href="mailto:enghussainullah@gmail.com" class="group flex items-center justify-between py-10 border-t border-white/10 hover:border-color transition-colors duration-500">
            <div>
              <p class="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-2">Electronic Mail</p>
              <h3 class="text-2xl md:text-3xl font-medium group-hover:text-color transition-colors">enghussainullah@gmail.com</h3>
            </div>
            <Icon name="lucide:arrow-up-right" class="w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
          </a>

          <a href="tel:+923275609507" class="group flex items-center justify-between py-10 border-t border-white/10 hover:border-color transition-colors duration-500">
            <div>
              <p class="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-2">Direct Signal</p>
              <h3 class="text-2xl md:text-3xl font-medium group-hover:text-color transition-colors">+92 327 5609507</h3>
            </div>
            <Icon name="lucide:phone" class="w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          </a>

          <a href="https://github.hussain098.com" target="_blank" class="group flex items-center justify-between py-10 border-y border-white/10 hover:border-color transition-colors duration-500">
            <div>
              <p class="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-2">Source / Repos</p>
              <h3 class="text-2xl md:text-3xl font-medium group-hover:text-color transition-colors">github.hussain098.com</h3>
            </div>
            <Icon name="lucide:github" class="w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          </a>
        </div>
      </div>

      <div class="mt-32 flex flex-col md:flex-row justify-between items-center opacity-20 text-[10px] font-mono uppercase tracking-[0.3em]">
        <p>Peshawar, Pakistan // 34.0151° N, 71.5249° E</p>
        <p>© 2026 Hussain Ullah // Built with Nuxt 4</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.-webkit-text-stroke {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
}
section {
  -webkit-font-smoothing: antialiased;
}
</style>
