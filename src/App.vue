<script setup lang="ts">
import Home from "./pages/Home.vue";
import Header from "./components/Header.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <div class="bg-slate-100 flex flex-col font-graphik">
    <Header />
    <div class="">
      <Home />
    </div>
    <footer>
      <AppFooter />
    </footer>
  </div>
</template>
