<script setup>
import Navigation from "../Partials/Navigation/index.vue";
</script>

<template>
  <Navigation />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "./style.scss";
</style>
