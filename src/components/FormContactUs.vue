<script setup lang="ts">
import AppInput from "./appInput.vue";
</script>

<template>
  <div>
    <h3>Contact Us</h3>
    <form
      action=""
      method="post"
      class="flex flex-col items-center justify-center gap-8"
    >
      <div>
        <AppInput type="text" placeholder="Your Name" />
      </div>
      <div>
        <AppInput type="email" placeholder="Your Email" />
      </div>
    </form>
  </div>
</template>
