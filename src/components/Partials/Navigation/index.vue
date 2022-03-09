<script setup>
import { personalInformation, navigation } from "../../../data/index.js";

const { name } = personalInformation;
const { navs } = navigation;

const capitalizeFirstLetter = (text) => text[0].toUpperCase() + text.slice(1);
</script>

<script>
export default {
  data() {
    return {
      activeNav: "home",
    };
  },

  created() {
    this.activeNav = window.document.location.pathname.split("/")[1] || "home";
  },

  methods: {
    onNavClick(name) {
      this.activeNav = name;
    },
  },
};
</script>

<template>
  <div class="header">
    <header>
      <div class="header__container font-kumbh font-600">
        <button type="button" class="header__drawer_button">☰</button>
        <nav class="header__nav_drawer">
          <ul>
            <li v-for="nav in navs" :key="nav.name">
              <router-link
                @click="onNavClick(nav.name)"
                :to="nav.url"
                :class="{ active: activeNav === nav.name }"
              >
                {{ capitalizeFirstLetter(nav.name) }}
              </router-link>
            </li>
          </ul>
        </nav>
        <h1 class="header__title">{{ name }}</h1>
      </div>
    </header>
  </div>
</template>

<style>
@import "./style.scss";
</style>
