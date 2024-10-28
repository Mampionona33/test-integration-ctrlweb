<script setup lang="ts">
import AppInput from "./appInput.vue";
import AppTextArea from "./appTextArea.vue";
import MasterButton from "./MasterButton.vue";

const handleSubmit = (event: Event) => {
  event.preventDefault();
  console.log("Formulaire soumis");
};
</script>

<template>
  <div class="flex flex-col rounded-xl shadow-xl">
    <h3 class="text-3xl font-bold text-slate-800 text-center pt-10">
      Contact Us
    </h3>
    <form
      @submit="handleSubmit"
      class="flex flex-col items-center justify-center gap-8 py-10 px-12"
    >
      <div class="w-full">
        <AppInput type="text" placeholder="Your Name" />
      </div>
      <div class="w-full">
        <AppInput type="email" placeholder="Your Email" />
      </div>
      <div class="w-full">
        <AppTextArea placeholder="Your Message" />
      </div>
      <div class="w-full flex justify-start">
        <div>
          <MasterButton title="Submit" />
        </div>
      </div>
    </form>
  </div>
</template>
