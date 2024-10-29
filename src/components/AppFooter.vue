<script lang="ts">
const items = [
  {
    title: "Annette Steward",
    links: [
      "Jennie Cooper",
      "Julie Henry",
      "Johnny Murphy",
      "Gregory Mccoy",
      "Marvin Mckinney",
    ],
  },
  {
    title: "Annette Steward",
    links: [
      "Jennie Cooper",
      "Julie Henry",
      "Johnny Murphy",
      "Gregory Mccoy",
      "Marvin Mckinney",
    ],
  },
  {
    title: "Annette Steward",
    links: [
      "Jennie Cooper",
      "Julie Henry",
      "Johnny Murphy",
      "Gregory Mccoy",
      "Marvin Mckinney",
    ],
  },
];

const infos = [
  {
    id: "1",
    icon: "location-dot",
    title: "7480 Mockingbird Hill undefined",
    color: "text-white",
    hoverColor: "hover:text-blue-300",
  },
  {
    id: "2",
    icon: "phone",
    title: "(239) 555-0108",
    color: "text-white",
    hoverColor: "hover:text-blue-300",
  },
];

const listIcons = [
  {
    name: "twitter",
    link: "https://www.twitter.com",
    color: "text-white",
    hoverColor: "hover:text-blue-300",
  },
  {
    name: "square-facebook",
    link: "https://www.facebook.com",
    color: "text-white",
    hoverColor: "hover:text-blue-300",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com",
    color: "text-white",
    hoverColor: "hover:text-blue-300",
  },
];

const desktopMenu = [
  {
    title: "pages",
    items: [
      { name: "Home", link: "/" },
      { name: "Product", link: "/product" },
      { name: "Pricing", link: "/pricing" },
      { name: "About", link: "/about" },
      { name: "Contact", link: "/contact" },
    ],
  },
  {
    title: "Tomothy",
    items: [
      { name: "Eleanor Edwards", link: "/" },
      { name: "Ted Robertson", link: "/" },
      { name: "Annette Russell", link: "/" },
      { name: "Jennie Mckinney", link: "/about" },
      { name: "Gloria Richards", link: "/contact" },
    ],
  },
  {
    title: "Jane Black",
    items: [
      { name: "Philip Jones", link: "/" },
      { name: "Product", link: "/" },
      { name: "Marvin Hawkins", link: "/" },
      { name: "Bruce Simmons", link: "/" },
    ],
  },
];

export default {
  data() {
    return {
      items,
      infos,
      listIcons,
      desktopMenu,
    };
  },
};
</script>

<template>
  <div
    class="bg-[#252B42] text-white items-center text-center py-20 gap-20 flex flex-col md:flex-row md:justify-evenly md:items-start md:px-10"
  >
    <div class="flex flex-col gap-20 md:hidden">
      <div v-for="(item, index) in items" :key="index">
        <h3 class="font-bold text-xl">{{ item.title }}</h3>
        <ul class="flex flex-col gap-4">
          <li v-for="link in item.links" :key="link">{{ link }}</li>
        </ul>
      </div>
    </div>

    <!-- Menu desktop -->
    <div class="hidden md:flex justify-start items-start gap-20">
      <div
        v-for="(menu, menuIndex) in desktopMenu"
        :key="menuIndex"
        class="flex flex-col gap-4 justify-start items-start"
      >
        <h3 class="font-bold text-xl mb-2">{{ menu.title }}</h3>
        <ul class="flex flex-col gap-4 justify-start items-start">
          <li v-for="item in menu.items" :key="item.name">
            <router-link class="hover:text-gray-300" :to="item.link">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- Informations -->
    <div class="flex flex-col gap-10">
      <div class="flex flex-col gap-4">
        <div
          v-for="info in infos"
          :key="info.id"
          class="flex gap-4 items-center"
        >
          <font-awesome-icon
            :icon="['fas', info.icon]"
            :class="[
              info.color,
              info.hoverColor,
              'transition-colors',
              'text-2xl',
            ]"
            aria-hidden="true"
          />
          <h2 class="text-base text-white">{{ info.title }}</h2>
        </div>
      </div>

      <!-- Icônes de réseaux sociaux -->
      <div
        class="flex px-4 gap-4 flex-row text-2xl items-center justify-center md:justify-start"
      >
        <div v-for="icon in listIcons" :key="icon.name">
          <a
            :href="icon.link"
            target="_blank"
            :class="[icon.color, icon.hoverColor, 'transition-colors']"
            aria-label="social media link"
          >
            <font-awesome-icon :icon="['fab', icon.name]" class="text-5xl" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
