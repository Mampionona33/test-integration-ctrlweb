<template>
  <div>
    <div>
      <h2>Contact Us</h2>
      <h4>Most calendars are designed for teams.</h4>
    </div>
    <div class="flex gap-4 flex-row text-2xl">
      <div v-for="icon in listIcons" :key="icon.name">
        <router-link
          :to="icon.link"
          class="text-2xl hover:text-blue-300"
          :class="[icon.color, 'transition-colors']"
        >
          <font-awesome-icon :icon="['fab', icon.name]" class="text-2xl" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const listIcons = [
  {
    name: "twitter",
    link: "https://www.twitter.com",
    color: "text-blue-500",
  },
  {
    name: "square-facebook",
    link: "https://www.facebook.com",
    color: "text-blue-500",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com",
    color: "text-blue-500",
  },
];
</script>
