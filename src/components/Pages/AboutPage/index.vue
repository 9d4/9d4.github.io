<script setup>
import VueMarkdown from "vue-markdown-render";
</script>

<script>
export default {
  data() {
    return { content: "" };
  },
  created() {
    this.fetchContent();
  },
  methods: {
    async fetchContent() {
      const url = "/contents/about/about.md";

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
    <vue-markdown :source="content" />
  </main>
</template>

<style lang="scss">
@import "./style.scss";
</style>
