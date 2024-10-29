<script setup lang="ts">
import { ref } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSquareFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faSquareFacebook, faLinkedin, faTwitter, faBars);

const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <nav
    class="top-0 flex items-center justify-between w-full text-white px-4 relative"
  >
    <div class="flex items-center gap-8 md:flex-1 md:justify-end">
      <div class="hidden md:flex">
        <ul class="flex gap-4 items-center justify-end">
          <li>
            <router-link class="hover:text-gray-300" to="/">Home</router-link>
          </li>
          <li>
            <router-link class="hover:text-gray-300" to="/product"
              >Product</router-link
            >
          </li>
          <li>
            <router-link class="hover:text-gray-300" to="/pricing"
              >Pricing</router-link
            >
          </li>
          <li>
            <router-link class="hover:text-gray-300" to="/about"
              >About</router-link
            >
          </li>
          <li>
            <router-link class="hover:text-gray-300" to="/contact"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>

    <div class="flex items-center md:justify-center flex-1">
      <a class="flex gap-2 hover:scale-105" href="/" target="_blank">
        <img class="h-20" src="../assets/logo_dark.png" alt="logo" />
      </a>
    </div>

    <div class="hidden md:flex gap-4 items-center flex-1 justify-start">
      <a
        class="hover:text-gray-300"
        href="https://www.twitter.com"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'twitter']" class="text-2xl" />
      </a>
      <a
        class="hover:text-gray-300"
        href="https://www.facebook.com"
        target="_blank"
      >
        <font-awesome-icon
          :icon="['fab', 'square-facebook']"
          class="text-2xl"
        />
      </a>
      <a class="hover:text-gray-300" href="https://www.linkedin.com" target="_blank">
        <font-awesome-icon :icon="['fab', 'linkedin']" class="text-2xl" />
      </a>
    </div>

    <div class="md:hidden">
      <button @click="toggleMenu" class="text-2xl">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>
    </div>

    <div
      v-if="isOpen"
      class="absolute left-0 top-16 bg-gray-800 w-full p-4 md:hidden z-10 flex flex-col"
    >
      <ul class="flex flex-col gap-4">
        <li>
          <router-link class="hover:text-gray-300" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="hover:text-gray-300" to="/product"
            >Product</router-link
          >
        </li>
        <li>
          <router-link class="hover:text-gray-300" to="/pricing"
            >Pricing</router-link
          >
        </li>
        <li>
          <router-link class="hover:text-gray-300" to="/about"
            >About</router-link
          >
        </li>
        <li>
          <router-link class="hover:text-gray-300" to="/contact"
            >Contact</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped></style>
