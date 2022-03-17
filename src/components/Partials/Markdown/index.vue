<script setup>
import { defineAsyncComponent } from "@vue/runtime-core";
import "highlight.js/styles/atom-one-dark.css";

const Markdown = defineAsyncComponent(() => import("vue3-markdown-it"));
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

<style lang="scss">
@import "./markdown.scss";
</style>
