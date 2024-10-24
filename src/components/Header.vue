<script setup lang="ts">
import { ref } from "vue";
import Navbar from "./Navbar.vue";

const title = ref("ctrlweb.ca");
</script>

<template>
  <header class="flex items-center justify-between p-4 bg-green-500 text-white">
    <Navbar />
  </header>
</template>

<style scoped></style>
