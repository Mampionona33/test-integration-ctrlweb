<template>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white py-4 px-9 rounded-full"
    @click="$emit('click')"
  >
    {{ title }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();

const handleClick = (event: Event) => {
  event.stopPropagation();
  alert("Button clicked!");
};
</script>
