<template>
  <div
    class="text-center flex flex-col gap-y-10 justify-center items-center py-16"
  >
    <h2 class="text-5xl">Features</h2>
    <p
      class="text-3xl text-center w-1/2 mx-auto text-slate-600 md:w-full md:text-xl"
    >
      Most calendars are designed for teams.
    </p>
    <img src="../assets/video_screen.png" alt="vidéo" class="md:hidden" />

    <div
      class="flex flex-col lg:flex-row md:gap-x-20 md:w-1/2 md:mt-14 md:items-start"
    >
      <FeatureStyle2
        path="/src/assets/rond_carre.svg"
        title="OpenType features Variable fonts"
        description="Slate helps you achieve more days you need to work to reach your goals."
      />
      <FeatureStyle2
        path="/src/assets/mdi_draw.svg"
        title="Design with real data"
        description="Slate helps you achieve more days you need to work to reach your goals."
      />
      <FeatureStyle2
        path="/src/assets/mdi_brush.svg"
        title="Fastest way to take action"
        description="Slate helps you achieve more days you need to work to reach your goals."
      />
    </div>
    <img
      src="/src/assets/desktop_screen_video.svg"
      alt="vidéo"
      class="hidden md:block"
    />
  </div>
</template>

<script setup lang="ts">
import FeatureStyle2 from "./FeatureStyle2.vue";
</script>
