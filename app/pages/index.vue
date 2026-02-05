<script setup>
const data = await queryCollection('home/hero').first()
</script>

<template>
  <section>
    <h1>{{ data.title }}</h1>
    <p>{{ data.subtitle }}</p>
  </section>
</template>