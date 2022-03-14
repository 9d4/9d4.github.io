<script setup>
import WritingsListItem from "../../Partials/WritingsListItem/index.vue";
import { contents } from "../../../data/index.js";

const { writings } = contents;
</script>

<template>
  <main class="writings-page">
    <div class="writings-list">
      <WritingsListItem
        v-for="writing in writings"
        :key="writing.slug"
        :writing="writing"
      />
    </div>
  </main>
</template>

<style lang="scss">
@import "./style.scss";
</style>
