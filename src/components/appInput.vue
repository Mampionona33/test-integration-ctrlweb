<template>
  <input
    :type="type"
    :placeholder="placeholder"
    class="py-2 bg-slate-200 rounded-full px-10 w-full flex text-wrap break-words"
  />
</template>

<script setup lang="ts">
defineProps<{
  type: string;
  placeholder: string;
}>();
</script>
