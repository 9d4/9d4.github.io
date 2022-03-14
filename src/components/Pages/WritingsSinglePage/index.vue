<script setup>
import VueMarkdown from "vue-markdown-render";
import { contents } from "../../../data/index.js";
</script>

<script>
export default {
  data() {
    return {
      writing: null,
      content: "",
    };
  },
  created() {
    const { slug } = this.$route.params;
    const { writings } = contents;

    this.writing = writings.find((w) => w.slug == slug);

    if (this.writing !== null && this.writing !== undefined) {
      this.fetchContent();
    }
  },

  methods: {
    async fetchContent() {
      const res = await fetch(this.writing.content);
      const resText = await res.text();

      this.content = resText;
    },
  },
};
</script>

<template>
  <main class="writings-single">
    <vue-markdown class="markdown-body" :source="content" />
  </main>
</template>

<style lang="scss">
@import "./style.scss";
</style>
