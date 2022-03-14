<script setup>
import Markdown from "../../Partials/Markdown/index.vue";
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

  mounted() {
  },

  methods: {
    async fetchContent() {
      const res = await fetch(this.writing.content);
      const resText = await res.text();

      this.content = resText;
    },

    async syncScrollAnchor() {
      const currentHash = document.location.hash;
      document.location.hash = "";
      document.location.hash = currentHash;
    },
  },

};
</script>

<template>
  <main class="writings-single">
    <KeepAlive>
      <Markdown :content="content" :afterRender="syncScrollAnchor"/>
    </KeepAlive>
  </main>
</template>

<style lang="scss">
@import "./style.scss";
</style>
