<template>
  <button
    class="bg-blue-400 hover:bg-blue-700 text-white py-2 px-9 rounded-full"
    @click="handleClick"
  >
    {{ title }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();

const handleClick = (event: Event) => {
  event.stopPropagation();
  alert("Button clicked!");
};
</script>
