<template>
  <a-layout class="layout">
    <header class="header">
      <a-typography-title class="">Currency</a-typography-title>
    </header>
    <slot />
  </a-layout>
</template>

<script>
export default {
  name: "MainLayout",
};
</script>

<style scoped lang="scss">
.layout {
  color: white;
  font-size: 25px;
  background-color: #ffffff;
  min-width: 100vw;
  min-height: 100vh;
  .header {
    background-color: #cacaca;
    padding: 1rem;
  }
}
</style>
