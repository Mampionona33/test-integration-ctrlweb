<template>
  <div class="min-h-[50vh] justify-center items-center flex">
    <div
      class="text-center text-white flex flex-col justify-start items-center md:gap-y-1 md:pt-0"
    >
      <h1 class="text-4xl md:text-5xl font-thin md:w-3/4 md:font-bold md:px-0">
        The best products start with Figma
      </h1>
      <h4 class="mb-6 px-4 md:text-2xl md:px-0 md:w-3/4">
        Most calendars are designed for teams. Slate is designed for freelancers
      </h4>
      <div class="flex justify-center max-w-full">
        <MasterButton title="Try For Free" @click="handleClick" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MasterButton from "./MasterButton.vue";

const handleClick = () => {
  alert("Button clicked!");
};
</script>
