<script setup>
import Navigation from "../Partials/Navigation/index.vue";

// const setTheme = async (theme) => {
//   if (theme === "dark") {
//     document.body.classList.add("dark");
//     return;
//   }

//   document.body.classList.remove("dark");
// };

// const syncThemeWithSystem = async () => {
//   if (
//     window.matchMedia &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches
//   ) {
//     setTheme("dark");
//   }
// };

// syncThemeWithSystem()

</script>

<template>
  <Navigation />
  <main>
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
@import "./style.scss";
@import "./style.dark.scss" (prefers-color-scheme: dark);
</style>
