<script setup>
import ThemeToggle from "../ThemeToggle/index.vue";
import {
  navigation,
  personalInformation,
  routes,
} from "../../../data/index.js";

const { name } = personalInformation;
const { menu, navs } = navigation;

const capitalizeFirstLetter = (text) => text[0].toUpperCase() + text.slice(1);
</script>

<script>
import { router } from "../../../main";

export default {
  data() {
    return {
      activeNav: "",
      drawerOpen: false,
    };
  },

  mounted() {
    this.refresh();

    router.afterEach(() => {
      this.refresh();
    });
  },

  methods: {
    refresh() {
      const routeName = router.currentRoute.value.name;

      this.activeNav = routeName === "writing" ? "writings" : routeName;
    },

    getRoutePath(name) {
      const route = routes.find((route) => route.name === name);
      if (route !== undefined) {
        return route.path;
      }

      return "/";
    },

    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen;
    },

    hideDrawer() {
      this.drawerOpen = false;
    },
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
            <li v-for="(item, key) in menu" :key="key">
              <router-link
                @click="hideDrawer()"
                :to="getRoutePath(item.name)"
                :class="{ active: activeNav === key }"
              >
                {{ capitalizeFirstLetter(item.title) }}
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
