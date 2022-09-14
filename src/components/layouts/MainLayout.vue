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
  min-width: 100vw;
  min-height: 100vh;
  background-color: #ffffff;
  @media (min-width: 300px) and (max-width: 768px) {
    min-width: 200vw;
  }
  @media (min-width: 800px) and (max-width: 1200px) {
    min-width: 160vw;
  }

  .header {
    min-width: 100%;
    background-color: #cacaca;
    padding: 1rem;
    @media (min-width: 300px) and (max-width: 768px) {
      min-width: 200vw;
    }
    @media (min-width: 800px) and (max-width: 1200px) {
      min-width: 160vw;
    }
  }
}
</style>
