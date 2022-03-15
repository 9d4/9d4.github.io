<script setup>
import Markdown from "../../Partials/Markdown/index.vue";
import { contents, pages } from "../../../data/index.js";

const { about } = pages;
</script>

<script>
export default {
  data() {
    return {
      content: "",
    };
  },
  created() {
    this.fetchContent();
  },
  methods: {
    async fetchContent() {
      const url = contents.about;

      const content = await fetch(url);

      if (content.ok) {
        this.content = await content.text();
      }
    },
  },
};
</script>

<template>
  <main class="about">
    <div class="about-header">
      <header>
        <h2 class="about-header__title">{{ about.title }}</h2>
        <p class="about_header__desc">{{ about.description }}</p>
      </header>
    </div>
    <Markdown :content="content" />
  </main>
</template>

<style lang="scss">
@import "./style.scss";
</style>
