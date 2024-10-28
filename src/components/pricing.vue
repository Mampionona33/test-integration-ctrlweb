<script>
import pricingCard from "./pricingCard.vue";
export default {
  components: {
    pricingCard,
  },
};
</script>

<template>
  <div
    class="bg-[#252b42] w-full py-20 flex gap-20 flex-col justify-center items-center"
  >
    <div class="text-white text-center flex flex-col gap-4">
      <h2 class="text-5xl">Pricing</h2>
      <h4 class="text-3xl px-10">Most calendars are designed for teams.</h4>
    </div>
    <div
      class="w-full px-20 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center lg:gap-20 lg:max-w-max"
    >
      <div class="col-span-1 lg:py-8 flex justify-center items-center">
        <pricingCard />
      </div>
      <div class="col-span-1 flex justify-center items-center h-full">
        <pricingCard
          title="STANDARD"
          price="10"
          background="bg-sky-700"
          textColor="text-white"
          buttonColor="bg-white"
          buttonTextColor="text-sky-700"
        />
      </div>
      <div class="col-span-1 lg:py-8 flex justify-center items-center">
        <pricingCard title="BUSINESS" price="99" />
      </div>
    </div>
  </div>
</template>
