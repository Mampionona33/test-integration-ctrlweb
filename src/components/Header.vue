<script setup lang="ts">
import Navbar from "./Navbar.vue";
import HeloLight3 from "./HeloLight3.vue";
</script>

<template>
  <div
    class="bg-[url('/src/assets/Rectangle_9.png')] bg-cover bg-center h-screen flex flex-col"
  >
    <Navbar />
    <div class="flex-grow flex justify-center items-center">
      <HeloLight3 />
    </div>
  </div>
</template>

<style scoped></style>
