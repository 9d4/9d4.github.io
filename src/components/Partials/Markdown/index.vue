<script setup>
import Markdown from "vue3-markdown-it";
import "highlight.js/styles/atom-one-dark.css";
</script>

<script>
export default {
  props: {
    content: String,
    afterRender: Function,
  },
  data() {
    return {
      plugins: [],
    };
  },
  updated() {
    setTimeout(() => {
      if (this.afterRender !== undefined) {
        this.afterRender();
      }
    }, 500);
  },
};
</script>

<template>
  <Markdown
    class="markdown-body"
    :source="content"
    :plugins="plugins"
    :typographer="true"
    :html="true"
    :highlight="{}"
  />
</template>

<style></style>
