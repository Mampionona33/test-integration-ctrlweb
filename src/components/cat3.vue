<template>
  <div class="text-center lg:text-left lg:flex lg:flex-row lg:justify-between lg:gap-20 lg:px-20">
    <div class="hidden lg:flex lg:w-1/2">
      <img
        src="/src/assets/undraw_newsletter_vovu.png"
        alt="undraw"
        class="lg:w-full lg:h-full"
      />
    </div>
    <div class="lg:w-1/2">
      <div class="flex flex-col gap-4">
        <h3 class="font-bold text-slate-800 text-xl">At your fingertips</h3>
        <h2 class="text-5xl text-slate-800">Newsletter</h2>
        <h4 class="text-3xl text-slate-600 ">
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </h4>
      </div>
      <div class="flex justify-center px-4 py-20 lg:hidden">
        <img src="/src/assets/undraw_newsletter_vovu.png" alt="undraw" />
      </div>
      <div class="flex flex-col gap-10">
        <div>
          <h3 class="font-bold text-slate-800 text-xl">
            Subscribe to our Newsletter
          </h3>
          <p class="text-xl text-slate-600">
            Available exclusivery on Figmaland
          </p>
        </div>
        <div
          class="flex justify-center gap-4 flex-col px-20 lg:flex-row lg:px-0 lg:justify-start"
        >
          <appInput type="YourEmail" placeholder="Enter your email" />
          <MasterButton title="Subscribe" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appInput from "./appInput.vue";
import MasterButton from "./MasterButton.vue";
export default {
  components: {
    appInput,
    MasterButton,
  },
};
</script>
