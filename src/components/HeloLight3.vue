<template>
  <div
    class="text-center text-white flex flex-col justify-center items-center gap-y-14"
  >
    <h1 class="text-7xl font-thin py-3 px-14 md:w-1/2 md:font-bold md:px-0">
      The best products start with Figma
    </h1>
    <h4 class="mb-6 px-14 md:px-0">
      Most calendars are designed for teams. Slate is designed for freelancers
    </h4>
    <div class="flex justify-center max-w-full">
      <MasterButton title="Try For Free" @click="handleClick" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MasterButton from "./MasterButton.vue";

const handleClick = () => {
  alert("Button clicked!");
};
</script>
