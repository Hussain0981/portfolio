<template>
  <section id="education" class="py-14 px-6 bg-primary text-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
        <div class="space-y-4">
          <div class="flex items-center gap-3 mb-2">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-color opacity-75" />
              <span class="relative inline-flex rounded-full h-3 w-3 bg-color" />
            </span>
            <span class="text-color font-mono text-[10px] uppercase tracking-[0.4em]">Section / 03 Education</span>
          </div>
          <h2 class="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            Knowledge <br>
            <span class="text-transparent" style="-webkit-text-stroke: 1px rgba(255,255,255,0.2);">Foundation</span>
          </h2>
        </div>
        <div class="max-w-xs border-l border-white/10 pl-6">
          <p class="text-white/40 font-mono text-[10px] uppercase tracking-widest leading-loose">
            // Formalizing technical logic through academic excellence and software theory.
          </p>
        </div>
      </div>

      <div class="space-y-12 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:h-full before:w-px before:bg-linear-to-b before:from-transparent before:via-white/20 before:to-transparent">
        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:border-color/50">
            <div class="w-3 h-3 bg-color rounded-full animate-pulse" />
          </div>

          <div class="w-[calc(100%-4rem)] md:w-[45%] p-8 rounded-[40px] border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:border-color/30 transition-all duration-500">
            <time class="font-mono text-[10px] text-color uppercase tracking-[0.3em]">2023 — Present</time>
            <h3 class="text-2xl md:text-3xl font-bold text-white mt-2 uppercase tracking-tight">
              BS Software Engineering
            </h3>
            <p class="text-white/80 font-medium text-sm mt-1 uppercase tracking-wide">
              Virtual University of Pakistan
            </p>
            <div class="mt-6 pt-6 border-t border-white/5">
              <p class="text-white/40 text-xs leading-relaxed italic">
                Specializing in distributed systems, data structures, and the engineering of scalable web architectures.
              </p>
            </div>
          </div>
        </div>

        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            <div class="w-2 h-2 bg-white/20 rounded-full group-hover:bg-white transition-colors" />
          </div>
          <div class="w-[calc(100%-4rem)] md:w-[45%] p-8 rounded-[40px] border border-white/5 bg-white/[0.01] hover:border-white/20 transition-all duration-500">
            <time class="font-mono text-[10px] text-white/30 uppercase tracking-[0.3em]">2019 — 2020</time>
            <h3 class="text-2xl font-bold text-white mt-2 uppercase tracking-tight">
              Intermediate / Pre-Eng
            </h3>
            <p class="text-white/60 font-medium text-sm mt-1 uppercase tracking-wide">
              GHS School & College, Mandani
            </p>
            <p class="mt-4 text-white/30 text-xs leading-relaxed">
              Focused on advanced mathematical physics and core scientific principles.
            </p>
          </div>
        </div>

        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:border-color/50">
            <div class="w-3 h-3 bg-color rounded-full animate-pulse" />
          </div>
          <div class="w-[calc(100%-4rem)] md:w-[45%] p-8 rounded-[40px] border border-white/5 bg-white/[0.01] hover:border-white/20 transition-all duration-500">
            <time class="font-mono text-[10px] text-white/30 uppercase tracking-[0.3em]">2016 — 2018</time>
            <h3 class="text-2xl font-bold text-white mt-2 uppercase tracking-tight">
              Secondary Education
            </h3>
            <p class="text-white/60 font-medium text-sm mt-1 uppercase tracking-wide">
              GHS School & College, Mandani
            </p>
            <p class="mt-4 text-white/30 text-xs leading-relaxed italic">
              Foundation in science and mathematical logic.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* High-end text rendering */
section {
  -webkit-font-smoothing: antialiased;
}

.-webkit-text-stroke {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
}
</style>
