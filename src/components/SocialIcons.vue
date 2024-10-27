<script setup lang="ts">
import { defineProps } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const props = defineProps<{
  icons: {
    name: string;
    link: string;
    color?: string;
    hoverColor?: string;
  }[];
}>();
</script>

<template>
  <div class="flex gap-4">
    <div v-for="icon in props.icons" :key="icon.name">
      <router-link
        :to="icon.link"
        :class="`hover:text-${icon.hoverColor} text-${icon.color}`"
      >
        <slot name="icon" :icon="icon">
          <font-awesome-icon :icon="['fab', icon.name]" class="text-2xl" />
        </slot>
      </router-link>
    </div>
  </div>
</template>

<!-- <router-link class="hover:text-gray-300" to="/twitter">
  <font-awesome-icon :icon="['fab', 'twitter']" class="text-2xl" />
</router-link>
<router-link class="hover:text-gray-300" to="/facebook">
  <font-awesome-icon :icon="['fab', 'square-facebook']" class="text-2xl" />
</router-link>
<router-link class="hover:text-gray-300" to="/linkedin">
  <font-awesome-icon :icon="['fab', 'linkedin']" class="text-2xl" />
</router-link> -->
