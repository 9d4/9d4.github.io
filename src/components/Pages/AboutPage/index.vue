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
  <div>
    <vue-markdown :source="content" />
  </div>
</template>

<style></style>
Markdown
