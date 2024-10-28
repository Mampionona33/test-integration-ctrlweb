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
export default {
  data() {
    return {
      items,
    };
  },
};
</script>

<template>
  <div
    class="bg-[#252B42] text-white flex flex-col gap-20 items-center text-center py-20"
  >
    <div v-for="(item, index) in items" :key="index">
      <h3 class="font-bold text-xl">{{ item.title }}</h3>
      <ul class="flex flex-col gap-4">
        <li v-for="link in item.links" :key="link">{{ link }}</li>
      </ul>
    </div>
  </div>
</template>
