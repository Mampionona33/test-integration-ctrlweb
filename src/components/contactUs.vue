<template>
  <div class="py-20 px-8 flex flex-col gap-20">
    <div class="flex gap-8 flex-col items-center">
      <h2 class="text-5xl text-slate-800 text-center">Contact Us</h2>
      <h4 class="text-3xl text-slate-600 text-center w-3/5">
        Most calendars are designed for teams.
      </h4>
    </div>

    <div
      class="flex flex-col gap-10 items-center justify-center lg:flex-row-reverse md:px-10"
    >
      <div class="flex flex-col gap-10 lg:flex-col-reverse">
        <!-- Section des icônes de réseaux sociaux -->
        <div
          class="flex px-4 gap-4 flex-row text-2xl items-center justify-center lg:justify-start"
        >
          <div v-for="icon in listIcons" :key="icon.name">
            <a
              :href="icon.link"
              target="_blank"
              :class="[icon.color, icon.hoverColor, 'transition-colors']"
            >
              <font-awesome-icon :icon="['fab', icon.name]" class="text-4xl" />
            </a>
          </div>
        </div>

        <div class="hidden md:flex justify-center items-center">
          <img src="../assets/map_screen.png" alt="" />
        </div>

        <!-- Section des informations de contact -->
        <div
          class="flex gap-4 flex-col text-2xl items-start justify-center mt-6 px-8 lg:flex-row"
        >
          <div
            v-for="info in infos"
            :key="info.id"
            class="flex items-center space-x-2 gap-4 justify-center flex-row lg:flex-col"
          >
            <font-awesome-icon
              :icon="['fas', info.icon]"
              :class="[
                info.color,
                info.hoverColor,
                'transition-colors',
                'text-2xl',
              ]"
            />
            <h2 class="text-lg text-gray-700 md:text-base">{{ info.title }}</h2>
          </div>
        </div>
      </div>

      <!-- Formulaire -->
      <div class="min-w-max">
        <FormContactUs />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import FormContactUs from "./FormContactUs.vue";

library.add(faLocationDot, faEnvelope, faPhone);

// Liste des icônes des réseaux sociaux
const listIcons = [
  {
    name: "twitter",
    link: "https://www.twitter.com",
    color: "text-blue-500",
    hoverColor: "hover:text-blue-300",
  },
  {
    name: "square-facebook",
    link: "https://www.facebook.com",
    color: "text-blue-500",
    hoverColor: "hover:text-blue-300",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com",
    color: "text-blue-500",
    hoverColor: "hover:text-blue-300",
  },
];

// Informations de contact avec les icônes et couleurs de survol
const infos = [
  {
    id: "1",
    icon: "location-dot",
    title: "6386 Spring St undefined Anchorage, Georgia 12473 United States",
    color: "text-blue-500",
    hoverColor: "hover:text-blue-300",
  },
  {
    id: "2",
    icon: "phone",
    title: "(843) 555-0130",
    color: "text-blue-500",
    hoverColor: "hover:text-blue-300",
  },
  {
    id: "3",
    icon: "envelope",
    title: "willie.jennings@example.com",
    color: "text-blue-500",
    hoverColor: "hover:text-blue-300",
  },
];
</script>

<style scoped></style>
