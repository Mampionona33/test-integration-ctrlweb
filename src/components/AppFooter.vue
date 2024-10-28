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
    title: "6386 Spring St undefined Anchorage, Georgia 12473 United States",
    color: "text-white",
    hoverColor: "hover:text-blue-300",
  },
  {
    id: "2",
    icon: "phone",
    title: "(843) 555-0130",
    color: "text-white",
    hoverColor: "hover:text-blue-300",
  },
];

export default {
  data() {
    return {
      items,
      infos,
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
    <div>
      <div>
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
    </div>
  </div>
</template>
