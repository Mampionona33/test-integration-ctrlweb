<template>
  <div
    :class="[
      background,
      textColor,
      'flex',
      'flex-col',
      'rounded-lg',
      'px-4',
      'text-center',
      'py-10',
      'gap-10',
    ]"
  >
    <!-- Titre et description -->
    <div class="flex flex-col gap-4">
      <h3 class="font-bold text-2xl">{{ title }}</h3>
      <h6 class="text-xl">{{ description }}</h6>
    </div>

    <!-- Prix -->
    <div class="flex flex-row justify-center items-center gap-4">
      <h1 class="text-7xl font-bold">0</h1>
      <div class="flex flex-col justify-start items-start">
        <h3 class="font-bold text-2xl">$</h3>
        <h6>Per Month</h6>
      </div>
    </div>

    <!-- Liste des fonctionnalités -->
    <ul class="flex flex-col gap-4">
      <li v-for="i in 5" :key="i">Pricing Feature</li>
    </ul>

    <!-- Bouton d'action -->
    <div>
      <MasterButton :title="'Order Now'" :bgColor="buttonColor" />
    </div>
  </div>
</template>

<script>
import MasterButton from "./MasterButton.vue";

export default {
  name: "PricingCard",
  props: {
    title: {
      type: String,
      default: "FREE",
    },
    description: {
      type: String,
      default: "Organize across all apps by hand",
    },
    background: {
      type: String,
      default: "bg-slate-50",
    },
    textColor: {
      type: String,
      default: "text-[#252b42]",
    },
    buttonColor: {
      type: String,
      default: "bg-[#252b42]",
    },
  },
  components: {
    MasterButton,
  },
};
</script>

<style scoped></style>
