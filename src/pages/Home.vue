<template>
  <div
    class="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-4 md:py-24"
  >
    <Features />
    <HeroLight4 />
    <Cat3 />
    <Partners />
    <Testimonials />
  </div>
</template>

<script setup lang="ts">
import Cat3 from "../components/cat3.vue";
import Features from "../components/Features.vue";
import HeroLight4 from "../components/HeroLight4.vue";
import Partners from "../components/Partners.vue";
import Testimonials from "../components/testimonials.vue";
</script>

<style scoped></style>
