<script setup>
import { personalInformation } from "../../../data/index.js";

const { desciption, name, location, pictureUrl, role, speaks } =
  personalInformation;
</script>

<script>
export default {};
</script>

<template>
  <main class="homepage">
    <header class="personal-info">
      <img
        class="personal-info__photo"
        :src="pictureUrl"
        :alt="name + ' photo'"
      />
      <div style="clear: both"></div>
      <h1 class="personal-info__name">{{ name }}</h1>
      <div class="personal-info__brief">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
            />
            <path
              d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            />
          </svg>
          {{ location }}
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"
            />
          </svg>
          {{ role }}
        </span>
      </div>
      <div class="personal-info__desc">{{ desciption }}</div>
    </header>
    <div class="speak">
      <h2>I Speak</h2>
      <ul>
        <li v-for="s in speaks" :key="s.lang">
          <span>{{ s.flag }}</span> {{ s.lang }}
        </li>
      </ul>
    </div>
  </main>
</template>

<style lang="scss">
@import "./style.scss";
</style>
