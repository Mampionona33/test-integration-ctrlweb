<template>
  <div
    class="flex flex-col items-center justify-start min-h-screen bg-gray-100 md:py-24"
  >
    <Features />
    <HeroLight4 />
    <Cat3 />
    <Partners />
    <Testimonials />
    <Pricing />
  </div>
</template>

<script setup lang="ts">
import Cat3 from "../components/cat3.vue";
import Features from "../components/Features.vue";
import HeroLight4 from "../components/HeroLight4.vue";
import Partners from "../components/Partners.vue";
import Pricing from "../components/pricing.vue";
import Testimonials from "../components/testimonials.vue";
</script>

<style scoped></style>
