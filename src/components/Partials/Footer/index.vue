<script setup>
import { personalInformation } from "../../../data/index.js";

const { name } = personalInformation;
const yearNow = (new Date()).getFullYear(); 
</script>

<template>
  <div class="footer">
    <footer>
      <div class="footer__copyright container">
        <span>~ {{ name }}</span>
        <span>&copy; {{ yearNow }}</span>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@import "./style.scss";
</style>
