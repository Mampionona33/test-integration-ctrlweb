<template>
  <div>
    <h6>{{ title }}</h6>
    <div>
      <img :src="path" :alt="alt" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  title: String,
  path: String,
  alt: String,
});
</script>
