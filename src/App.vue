<template>
  <section id="app">
    <div class="column-layout">
      <header class="column-layout__header"></header>
      <main class="column-layout__body">
        <chat></chat>
      </main>
    </div>
  </section>
</template>

<script>
import Chat from "@/components/Chat";
export default {
  components: {
    Chat
  }
};
</script>

<style lang="scss">
@import "./assets/reset.css";
@import "./assets/atoms.css";
@import "./assets/typo.scss";
body {
  background-color: $dark-bg;
  color: $text-blue;
}

.column-layout__header {
  height: 4em;
}

.column-layout {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.column-layout__body {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.column-layout__body > * {
  flex: 1;
}
</style>
