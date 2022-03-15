<script setup></script>

<script>
export default {
  props: {
    writing: Object,
  },

  methods: {
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString(undefined, {
        year: "2-digit",
        month: "short",
        day: "numeric",
      });
    },
  },
};
</script>

<template>
  <router-link class="writing-list-item" :to="'/writings/' + writing.slug">
    <p>{{ writing.title }}</p>
    <span>{{ formatDate(writing.date) }}</span>
  </router-link>
</template>

<style lang="scss">
@import "./style.scss";
</style>
