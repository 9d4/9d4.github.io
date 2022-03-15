<script setup>
import Markdown from "vue3-markdown-it";
import "highlight.js/styles/atom-one-dark.css";
</script>

<script>
export default {
  props: {
    content: String,
    afterRender: Function,
    notFound: Boolean,
  },
  data() {
    return {
      plugins: [],
      rendering: true,
    };
  },
  updated() {
    setTimeout(() => {
      if (this.afterRender !== undefined) {
        this.afterRender();
      }
    }, 500);

    this.rendering = false;
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
  <div v-if="rendering && !notFound">Rendering content for you...</div>
</template>

<style></style>
