<script setup lang="ts">
import Navbar from "./Navbar.vue";
import HeloLight3 from "./HeloLight3.vue";
</script>

<template>
  <div
    class="flex bg-local flex-col bg-[url('/src/assets/Rectangle_9.png')] min-h-screen h-screen bg-center w-screen bg-no-repeat bg-cover md:h-full"
  >
    <Navbar />
    <HeloLight3 />
    <div
      class="flex-grow flex justify-center items-center relative md:h-[calc(100vh-10rem)]"
    ></div>
  </div>
</template>

<style scoped></style>
