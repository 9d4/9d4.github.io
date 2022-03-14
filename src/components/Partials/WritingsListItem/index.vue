<script setup></script>

<script>
export default {
  props: {
    writing: Object,
  },
};
</script>

<template>
  <router-link class="writing-list-item" :to="'/writings/' + writing.slug">
    <div>{{ writing.title }}</div>
  </router-link>
</template>

<style lang="scss">
@import "./style.scss";
</style>
