<script setup>
import Markdown from "../../Partials/Markdown/index.vue";
import { contents, pages } from "../../../data/index.js";
const writingsMeta = pages.writings;
</script>

<script>
export default {
  data() {
    return {
      writing: null,
      content: "",
      notFound: false,
    };
  },
  created() {
    const { slug } = this.$route.params;
    const { writings } = contents;

    this.writing = writings.find((w) => w.slug == slug);

    if (this.writing !== null && this.writing !== undefined) {
      this.fetchContent();
      return;
    }

    this.notFound = true;
  },

  methods: {
    async fetchContent() {
      const res = await fetch(this.writing.content);

      if (res.status !== 200) {
        this.notFound = true;
      }

      const resText = await res.text();
      this.content = resText;
    },

    async syncScrollAnchor() {
      const currentHash = document.location.hash;
      document.location.hash = "";
      document.location.hash = currentHash;
    },

    getEmoticon() {
      const l = pages.writings.notFoundEmoticons.length;
      const rand = Math.floor(Math.random() * l);

      return pages.writings.notFoundEmoticons[rand];
    },
  },
};
</script>

<template>
  <main class="writings-single">
    <KeepAlive>
      <Markdown :content="content" :afterRender="syncScrollAnchor" />
    </KeepAlive>
    <div class="writings-404" v-if="notFound">
      <h1 class="writings-404__emote">{{ getEmoticon() }}</h1>
      <p class="writings-404__message">{{ writingsMeta.notFoundMessage }}</p>
    </div>
  </main>
</template>

<style lang="scss">
@import "./style.scss";
</style>
