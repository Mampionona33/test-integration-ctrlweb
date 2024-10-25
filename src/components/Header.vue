<script setup lang="ts">
import { ref } from "vue";
import Navbar from "./Navbar.vue";
import HeloLight3 from "./HeloLight3.vue";

const title = ref("ctrlweb.ca");
</script>

<template>
  <div
    class="bg-[url('/src/assets/Rectangle_9.png')] bg-cover bg-center h-screen"
  >
    <Navbar />
    <HeloLight3 />
  </div>
</template>

<style scoped></style>
