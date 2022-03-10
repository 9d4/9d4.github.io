<script setup>
import ThemeToggle from "../ThemeToggle/index.vue";
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
      drawerOpen: false,
    };
  },

  created() {
    this.activeNav = window.document.location.pathname.split("/")[1] || "home";
  },

  methods: {
    onNavClick(name) {
      this.activeNav = name;
    },

    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen;
    },

    hideDrawer() {
      this.drawerOpen = false;
    }
  },
};
</script>

<template>
  <div class="header">
    <header>
      <div class="header__container font-kumbh font-600">
        <button
          type="button"
          class="header__drawer_button"
          @click="toggleDrawer"
        >
          ☰
        </button>
        <nav class="header__nav_drawer" :class="{ open: drawerOpen }">
          <button
            type="button"
            class="header__drawer_close"
            @click="toggleDrawer"
          >
            &times;
          </button>
          <ul>
            <li v-for="nav in navs" :key="nav.name">
              <router-link
                @click="onNavClick(nav.name) | hideDrawer()"
                :to="nav.url"
                :class="{ active: activeNav === nav.name }"
              >
                {{ capitalizeFirstLetter(nav.name) }}
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="header__title_wrapper">
          <h1 class="header__title">{{ name }}</h1>
          <ThemeToggle class="header__theme-toggle" />
        </div>
      </div>
    </header>
  </div>
</template>

<style lang="scss">
@import "./style.scss";
</style>
