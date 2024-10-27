<script>
import MasterButton from "./MasterButton.vue";
export default {
  components: {
    MasterButton,
  },
};
</script>

<template>
  <div
    class="text-center flex items-center justify-center py-20 flex-col gap-20 sm:w-full"
  >
    <h2 class="text-5xl">Testimonials</h2>
    <div class="flex justify-center items-center gap-20 flex-col w-full">
      <div class="flex items-center justify-center sm:w-full">
        <img src="../assets/logos_ibm.svg" alt="logo_ibm" />
      </div>
      <div class="flex justify-center w-full items-center">
        <p class="w-1/2 sm:w-full md:w-full">
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>
      </div>
    </div>
    <div class="flex flex-row gap-4">
      <div class="flex items-center justify-center">
        <img src="../assets/Ellipse_2.png" alt="" />
      </div>
      <div class="flex flex-col text-left">
        <h6 class="font-bold">Organize across</h6>
        <p>Ui designer</p>
      </div>
    </div>
    <div>
      <MasterButton title="More Testimonials" />
    </div>
  </div>
</template>
