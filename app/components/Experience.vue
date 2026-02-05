<template>
  <section id="experience" class="py-14 px-6 bg-primary text-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
        <div class="space-y-4">
          <div class="flex items-center gap-3 mb-2">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-color opacity-75" />
              <span class="relative inline-flex rounded-full h-3 w-3 bg-color" />
            </span>
            <span class="text-color font-mono text-[10px] uppercase tracking-[0.4em]">Professional / 02 Journey</span>
          </div>
          <h2 class="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            Experience <br>
            <span class="text-transparent" style="-webkit-text-stroke: 1px rgba(255,255,255,0.2);">History</span>
          </h2>
        </div>
        <div class="max-w-xs border-l border-white/10 pl-6">
          <p class="text-white/40 font-mono text-[10px] uppercase tracking-widest leading-loose">
            // Engineering scalable systems and high-fidelity user interfaces across the full stack.
          </p>
        </div>
      </div>

      <div class="space-y-12 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:h-full before:w-px before:bg-linear-to-b before:from-transparent before:via-white/20 before:to-transparent">
        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:border-color/50">
            <div class="w-3 h-3 bg-color rounded-full animate-pulse" />
          </div>
          <div class="w-[calc(100%-4rem)] md:w-[45%] p-8 rounded-[40px] border border-white/10 bg-white/2 backdrop-blur-xl hover:border-color/30 transition-all duration-500">
            <time class="font-mono text-[10px] text-color uppercase tracking-[0.3em]">Dec 2025 — Present</time>
            <h3 class="text-2xl md:text-3xl font-bold text-white mt-2 uppercase tracking-tight">
              Full Stack Freelancer
            </h3>
            <p class="text-white/40 text-xs mt-4 leading-relaxed italic">
              Architecting bespoke digital products for global clients, focusing on modern frameworks and high-performance server-side logic.
            </p>
          </div>
        </div>

        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            <div class="w-2 h-2 bg-white/30 rounded-full group-hover:bg-white transition-colors" />
          </div>
          <div class="w-[calc(100%-4rem)] md:w-[45%] p-8 rounded-[40px] border border-white/5 bg-white/1 hover:border-white/20 transition-all duration-500">
            <time class="font-mono text-[10px] text-white/30 uppercase tracking-[0.3em]">May 2024 — Dec 2025</time>
            <h3 class="text-2xl md:text-3xl font-bold text-white mt-2 uppercase tracking-tight">
              Full Stack Developer
            </h3>
            <p class="text-color font-mono text-[10px] mt-1 uppercase tracking-widest">
              NGEN, Peshawar
            </p>
            <p class="mt-6 text-white/50 text-sm leading-relaxed">
              Developed robust frontend interfaces and managed complex backend APIs. Improved database performance and maintained production-level application stability.
            </p>
          </div>
        </div>

        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            <div class="w-2 h-2 bg-white/20 rounded-full" />
          </div>
          <div class="w-[calc(100%-4rem)] md:w-[45%] p-8 rounded-[40px] border border-white/5 bg-white/1 hover:border-white/20 transition-all duration-500">
            <time class="font-mono text-[10px] text-white/20 uppercase tracking-[0.3em]">Feb 2024 — May 2024</time>
            <h3 class="text-2xl md:text-3xl font-bold text-white mt-2 uppercase tracking-tight">
              Full Stack Intern
            </h3>
            <p class="text-white/40 font-mono text-[10px] mt-1 uppercase tracking-widest">
              NGEN, Peshawar
            </p>
            <p class="mt-6 text-white/30 text-xs leading-relaxed italic">
              Gained hands-on experience in full-stack workflows, component-based architecture, and agile development practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  -webkit-font-smoothing: antialiased;
}
.-webkit-text-stroke {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
}
</style>
