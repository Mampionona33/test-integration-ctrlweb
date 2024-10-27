<template>
  <div
    class="flex justify-center items-center flex-col p-4 gap-4 border border-slate-300"
  >
    <h6>{{ title }}</h6>
    <div>
      <img :src="path" :alt="alt" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  path: String,
  alt: String,
});
</script>
