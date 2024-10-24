<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faSkype,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

// Ajouter les icônes à la librairie
library.add(faSkype, faFacebook, faLinkedin);
</script>

<template>
  <nav class="grid grid-cols-4 p-4 gap-4 h-32">
    <ul class="flex gap-5 items-center justify-end align-middle col-span-2">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/product">Product</router-link>
      </li>
      <li>
        <router-link to="/pricing">Pricing</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>

    <div class="col-span-1 items-center justify-start flex align-middle">
      <img class="h-20" src="../assets/logo.png" alt="logo" />
    </div>

    <div class="col-span-1 flex gap-4 justify-center items-center">
      <div class="">
        <FontAwesomeIcon :icon="['fab', 'skype']" />
      </div>

      <div>
        <FontAwesomeIcon :icon="['fab', 'facebook']" />
      </div>
      <div>
        <FontAwesomeIcon :icon="['fab', 'linkedin']" />
      </div>
    </div>
  </nav>
</template>
