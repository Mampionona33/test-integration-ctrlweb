<script>
import pricingCard from "./pricingCard.vue";
export default {
  components: {
    pricingCard,
  },
};
</script>

<template>
  <div class="bg-[#252b42] w-full py-20 flex gap-20 flex-col">
    <div class="text-white text-center flex flex-col gap-4">
      <h2 class="text-5xl">Pricing</h2>
      <h4 class="text-3xl px-10">Most calendars are designed for teams.</h4>
    </div>
    <div class="w-full px-8">
      <pricingCard buttonColor="bg-green-500" />
    </div>
  </div>
</template>
