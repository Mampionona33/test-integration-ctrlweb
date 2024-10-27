<template>
  <button
    :class="[
      bgColor || 'bg-blue-400',
      textColor || 'text-white',
      'flex items-center justify-center hover:bg-opacity-80  py-2 px-9 rounded-full w-full text-wrap break-words',
    ]"
    @click="handleClick"
  >
    {{ title }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  bgColor?: string;
  textColor?: string;
}>();

const handleClick = (event: Event) => {
  event.stopPropagation();
  alert("Button clicked!");
};
</script>

<style scoped></style>
