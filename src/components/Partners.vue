<template>
  <div class="flex flex-col py-20">
    <div class="text-center flex flex-col gap-8">
      <h1 class="text-5xl text-slate-800 font-bold">Partners</h1>
      <p class="text-3xl text-slate-600">
        Most calendars are designed for teams. Slate is designed for freelancers
      </p>
    </div>
    <div>
      <CardPartner title="Google" path="/src/assets/logos_google.svg" />
    </div>
  </div>
</template>

<script>
import CardPartner from "/src/components/CardPartner.vue";
export default {
  components: {
    CardPartner,
  },
};
</script>
