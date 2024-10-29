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

export default {
  data() {
    return {
      items,
      infos,
      listIcons,
    };
  },
};
</script>

<template>
  <div
    class="bg-[#252B42] text-white items-center text-center py-20 gap-20 flex flex-col"
  >
    <div class="flex flex-col gap-20">
      <div v-for="(item, index) in items" :key="index">
        <h3 class="font-bold text-xl">{{ item.title }}</h3>
        <ul class="flex flex-col gap-4">
          <li v-for="link in item.links" :key="link">{{ link }}</li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col gap-10">
      <div class="flex flex-col gap-4">
        <div v-for="info in infos" :key="info.id" class="flex gap-4">
          <font-awesome-icon
            :icon="['fas', info.icon]"
            :class="[
              info.color,
              info.hoverColor,
              'transition-colors',
              'text-2xl',
            ]"
          />
          <h2 class="text-base text-white">{{ info.title }}</h2>
        </div>
      </div>
      <div>
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
      </div>
    </div>
  </div>
</template>
