<template>
  <textarea
    :placeholder="placeholder"
    class="py-2 bg-slate-200 px-4 w-full flex text-wrap break-words"
    rows="8"
  ></textarea>
</template>

<script setup lang="ts">
defineProps<{
  placeholder?: string;
}>();
</script>
