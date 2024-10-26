<template>
  <div class="flex py-20 flex-col lg:flex-row gap-20 lg:px-20">
    <div class="flex text-center gap-y-14 flex-col lg:text-left lg:gap-y-4">
      <h2 class="text-5xl text-slate-800">Fastest way to organize</h2>
      <p class="text-3xl text-slate-600">
        Most calendars are designed for teams.
      </p>
      <div>
        <MasterButton title="Try For Free" />
      </div>
    </div>
    <div class="flex px-4">
      <img src="/src/assets/Macbook_Pro.png" alt="mackbook" />
    </div>
  </div>
</template>

<script>
import MasterButton from "./MasterButton.vue";
export default {
  components: {
    MasterButton,
  },
};
</script>
