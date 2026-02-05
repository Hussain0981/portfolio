<template>
  <div class="scroll-smooth min-h-screen bg-primary text-white/80">
    <NuxtLoadingIndicator />
    <Navbar />
    <NuxtPage />
  </div>
</template>

<style lang="css">
section {
  scroll-margin-top: 90px;
}
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #030712;
}

::-webkit-scrollbar-thumb {
  background: #00DC82;
  border-radius: 999px;
}
</style>
