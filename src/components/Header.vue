<script setup lang="ts">
import Navbar from "./Navbar.vue";
import HeloLight3 from "./HeloLight3.vue";
</script>

<template>
  <div class="relative flex flex-col md:h-full min-h-screen">
    <img
      src="/src/assets/Rectangle_9.png"
      class="absolute top-0 left-0 object-cover pb-10 w-full h-screen md:h-fit"
    />
    <Navbar />
    <div
      class="flex-grow flex justify-center items-center relative md:h-[calc(100vh-10rem)]"
    >
      <HeloLight3 />
    </div>
  </div>
</template>

<style scoped></style>
