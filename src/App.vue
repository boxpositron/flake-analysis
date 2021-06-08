<template>
  <main>
    <navbar nav />
    <router-view view />
    <page-footer footer />
  </main>
</template>

<script>
  import Navbar from '@/components/navigation/Navbar'
  import PageFooter from '@/components/navigation/PageFooter'
  export default {
    name: 'App',
    components: {
      Navbar,
      PageFooter
    }
  }
</script>

<style scoped lang="scss">
  main {
    display: grid;
    grid-template-areas: 'navigation' 'view' 'footer';
    grid-template-columns: auto;
    grid-template-rows: max-content auto max-content;
    min-height: 100vh;

    [nav] {
      grid-area: navigation;
    }

    [view] {
      margin: 50px 0;
      grid-area: view;
    }

    [footer] {
      grid-area: footer;
    }
  }
</style>

<style lang="scss">
  @import './assets/scss/default.scss';
</style>
