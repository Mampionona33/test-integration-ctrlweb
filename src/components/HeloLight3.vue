<template>
  <div
    class="text-center text-white min-h-screen flex justify-center items-center flex-col "
  >
    <h1 class="text-7xl font-bold p-3 w-5/12">
      The best products start with Figma
    </h1>
    <h4 class="mb-6">
      Most calendars are designed for teams. Slate is designed for freelancers
    </h4>
    <MasterButton title="Try For Free" @click="handleClick" />
  </div>
</template>

<script setup lang="ts">
import MasterButton from "./MasterButton.vue";

const handleClick = () => {
  alert("Button clicked!");
};
</script>
