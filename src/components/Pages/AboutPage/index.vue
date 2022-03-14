<script setup>
import Markdown from "../../Partials/Markdown/index.vue";
import { contents } from "../../../data/index.js";
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
    <Markdown :content="content" />
  </main>
</template>

<style lang="scss">
@import "./style.scss";
</style>
