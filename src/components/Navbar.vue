<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
  <nav>
    <ul class="flex space-x-4">
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
    <img class="h-8" src="../assets/logo.png" alt="logo" />

    <div>
      <router-link to="/login">
        <font-awesome-icon icon="fa-brands fa-skype" />
      </router-link>
    </div>
  </nav>
</template>
