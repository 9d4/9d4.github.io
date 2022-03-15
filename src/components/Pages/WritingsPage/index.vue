<script setup>
import WritingsListItem from "../../Partials/WritingsListItem/index.vue";
import { contents, pages } from "../../../data/index.js";

const { writings } = contents;
const meta = pages.writings;
</script>

<template>
  <main class="writings-page">
    <div class="writings-header">
      <header>
        <h2 class="writings-header__title">{{ meta.title }}</h2>
        <p class="writings_header__desc">{{ meta.description }}</p>
      </header>
    </div>
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
