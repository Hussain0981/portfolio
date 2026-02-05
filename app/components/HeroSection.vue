<template>
  <section id="home" class="relative min-h-screen bg-primary flex items-center justify-center overflow-hidden font-sans">
    <div
      class="absolute inset-0 z-0 opacity-20"
      style="background-image: linear-gradient(#ffffff05 1px, transparent 1px), linear-gradient(90deg, #ffffff05 1px, transparent 1px); background-size: 50px 50px;"
    />

    <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-color/10 rounded-full blur-[120px] animate-pulse" />
    <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />

    <div class="max-w-[1500px] mx-auto w-full px-6 lg:px-12 relative z-10">
      <div class="grid lg:grid-cols-12 gap-4 items-center">
        <div class="lg:col-span-5 order-2 lg:order-1 space-y-8">
          <div class="space-y-4">
            <div class="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-color opacity-75" />
                <span class="relative inline-flex rounded-full h-2 w-2 bg-color" />
              </span>
              <span class="text-[10px] font-mono text-white/70 uppercase tracking-[0.2em]">System Online: Peshawar, PK</span>
            </div>

            <h1 class="text-6xl md:text-[100px] font-black leading-[0.85] tracking-tighter text-white uppercase">
              Hussain<br>
              <span class="text-transparent tracking-wide" style="-webkit-text-stroke: 1px rgba(255,255,255,0.3);">Ullah</span>
            </h1>

            <p class="text-lg md:text-xl text-white/50 max-w-md font-light leading-relaxed">
              Full Stack Engineer specializing in <span class="text-white">high-performance</span> digital architectures and <span class="text-color">Nuxt 4</span> ecosystems.
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-6">
            <button class="group relative px-8 py-4 bg-color text-gray-700 hover:text-black font-black uppercase text-xs tracking-widest rounded-full">
              Start a Project
              <div class="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500" />
            </button>

            <NuxtLink to="/projects" class="group flex items-center gap-3 text-white/40 hover:text-white transition-all">
              <span class="text-xs font-bold uppercase tracking-widest">View Archives</span>
              <div class="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-color transition-all" />
            </NuxtLink>
          </div>
        </div>

        <div class="lg:col-span-4 order-1 lg:order-2 flex justify-center relative py-12 lg:py-0">
          <div class="absolute inset-0 border border-white/5 rounded-full scale-125 animate-[spin_60s_linear_infinite]" />

          <div class="relative w-72 h-[450px] md:w-80 md:h-[550px] bg-secondary rounded-[60px] overflow-hidden border border-white/10 shadow-2xl group">
            <img
              src="/hero-image.png"
              alt="Hussain Ullah"
              class="w-full h-full object-cover object-top contrast-[1.1] brightness-[0.9] group-hover:scale-110 group-hover:brightness-100 transition-all duration-1000 ease-out"
            >
            <div class="absolute inset-0 bg-linear-to-t from-primary via-transparent to-transparent opacity-60" />
          </div>

          <div class="absolute top-10 -right-10 md:-right-20 p-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl animate-float">
            <Icon name="logos:nuxt-icon" class="w-8 h-8 mb-2" />
            <p class="text-[10px] font-mono text-white/40 uppercase">
              Framework
            </p>
            <p class="text-xs font-bold text-white">
              Nuxt 4 Expert
            </p>
          </div>

          <div class="absolute bottom-20 -left-10 md:-left-20 p-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl animate-float-delayed">
            <div class="text-color font-black text-2xl">
              2+
            </div>
            <p class="text-[10px] font-mono text-white/40 uppercase leading-none">
              Years of<br>Development <br>Experience
            </p>
          </div>
        </div>

        <div class="lg:col-span-3 order-3 hidden lg:block space-y-16">
          <div class="space-y-6">
            <h4 class="text-color font-mono text-[10px] uppercase tracking-[0.4em]">
              Core Stack
            </h4>
            <div class="grid grid-cols-2 gap-2">
              <div
                v-for="t in ['Node.js', 'Express', 'Typescript', 'Javascript', 'Nuxt', 'Vue', 'GSAP', 'Three.js']" :key="t"
                class="px-3 py-2 border border-white/5 rounded-lg text-[10px] text-white/30 uppercase font-mono hover:bg-white/5 hover:text-white transition-all cursor-default text-center"
              >
                {{ t }}
              </div>
            </div>
          </div>

          <div class="p-6 border-l border-white/10 space-y-4">
            <p class="text-xs text-white/40 leading-relaxed font-mono italic">
              "Focused on the intersection of technical performance and visual elegance."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.animate-float {
  animation: float 5s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 5s ease-in-out infinite;
  animation-delay: 2s;
}

.-webkit-text-stroke {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
}
</style>
