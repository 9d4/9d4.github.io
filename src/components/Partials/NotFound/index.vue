<script></script>

<template>
  <main class="notfound">
    <h1>404</h1>
    <p>
      Sudahlah, aku tidak bisa membawamu ke tujuan. Mungkin kamu sedang halu,
      maafkan aku!
    </p>
    <router-link to="/">Head back to home >></router-link>
  </main>
</template>

<style lang="scss" scoped>
.notfound {
  min-height: 75vh;
  font-family: "Kumbh Sans", "Franklin Gothic Medium", "Arial Narrow";
  display: grid;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  text-align: center;

  p {
    font-size: 1.1rem;
  }

  h1 {
    font-size: 9em;
    font-style: oblique;
    font-weight: 400;
    margin: 0;
    margin-right: 23px;
  }

  a {
    color: var(--color-font);
  }
}
</style>
