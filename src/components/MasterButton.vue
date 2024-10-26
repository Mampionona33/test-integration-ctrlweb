<template>
  <button
    class="flex items-center justify-center bg-blue-400 hover:bg-blue-700 text-white py-2 px-9 rounded-full w-full text-wrap break-words"
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
