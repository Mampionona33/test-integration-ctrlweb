<template>
  <div class="flex flex-col gap-y-4 justify-center w-1/2 mx-auto md:w-1/3">
    <div class="flex justify-center">
      <img :src="path" :alt="alt" />
    </div>
    <h3 class="font-bold text-xl">{{ title }}</h3>
    <p>
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  alt: String,
  path: String,
  title: String,
  description: String,
});
</script>
