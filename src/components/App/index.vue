<script setup>
import Navigation from "../Partials/Navigation/index.vue";
import Footer from "../Partials/Footer/index.vue";
</script>

<template>
  <Navigation />
  <div class="container content">
    <router-view></router-view>
  </div>
  <Footer />
</template>

<style lang="scss">
@import "./style.scss";
@import "./markdown.scss";
</style>
