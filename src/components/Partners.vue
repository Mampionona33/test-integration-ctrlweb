<template>
  <div class="flex flex-col py-20 w-full items-center">
    <div class="text-center flex flex-col gap-8">
      <h1 class="text-5xl text-slate-800 font-bold">Partners</h1>
      <p class="text-3xl text-slate-600">
        Most calendars are designed for teams. Slate is designed for freelancers
      </p>
    </div>
    <div
      class="p-16 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-0 md:grid-rows-2"
    >
      <CardPartner title="Google" path="/src/assets/logos_google.svg" />
      <CardPartner title="Amazon" path="/src/assets/amazon.png" />
      <CardPartner title="Microsoft" path="/src/assets/microsoft.png" />
      <CardPartner
        title="Uber"
        path="/src/assets/uber.svg"
        class="hidden sm:block"
      />
      <CardPartner
        title="Dropbox"
        path="/src/assets/dropbox.svg"
        class="hidden sm:block"
      />
      <CardPartner
        title="Google"
        path="/src/assets/logos_google.svg"
        class="hidden sm:block"
      />
      <CardPartner
        title="Amazon"
        path="/src/assets/amazon.png"
        class="hidden sm:block"
      />
      <CardPartner
        title="Microsoft"
        path="/src/assets/microsoft.png"
        class="hidden sm:block"
      />
    </div>
    <div class="flex">
      <MasterButton title="Try For Free" />
    </div>
  </div>
</template>

<script>
import MasterButton from "./MasterButton.vue";
import CardPartner from "/src/components/CardPartner.vue";
export default {
  components: {
    CardPartner,
    MasterButton,
  },
};
</script>
