<template>
  <Slide v-model:show="navbarVisible"></Slide>
  <div></div>
  <Navbar v-if="!navbarVisible"></Navbar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script setup>
import Slide from "./components/Slide.vue";
import Navbar from "./components/Navbar.vue";
import { ref, onMounted, watch } from "vue";
const width = ref(0);
const navbarVisible = ref(false);

function updateWidth() {
  width.value = window.innerWidth;
}
function showNavbar() {
  navbarVisible.value = width.value <= 500;
}

onMounted(() => {
  window.addEventListener("resize", updateWidth);
  updateWidth();
});

watch(width, showNavbar);
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.app {
  padding: 20px;
}
@media (max-width: 500px) {
  .app {
    margin-top: 40px;
  }
}
.bm-burger-button {
  left: 20px;
  top: 20px;
}
</style>
