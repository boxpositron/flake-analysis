<template>
  <nav>
    <div class="brand">
      <div class="brand-text">
        Flake Analysis
      </div>
    </div>
    <div class="links">
      <router-link to="/info">Information</router-link>
      <router-link to="/delta">Compare</router-link>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'page-navigation'
  }
</script>

<style lang="scss" scoped>
  nav {
    background-color: #8980f5;

    display: grid;
    grid-template-areas: '. brand . links .';
    grid-template-columns:
      minmax(auto, 200px)
      max-content
      auto
      max-content
      minmax(auto, 200px);
    grid-auto-rows: auto;
    font-family: 'Source Code Pro', monospace;

    div.brand {
      grid-area: brand;

      div.brand-text {
        color: #fff;
        font-weight: 600;
        line-height: 50px;
      }
    }

    div.links {
      grid-area: links;

      a {
        display: inline-block;
        color: #fff;
        text-decoration: none;
        font-weight: 600;
        padding: 0 20px;
        margin-left: 20px;
        height: 50px;
        line-height: 50px;

        &.router-link-active {
          color: #2d232e;
        }
      }
    }
  }
</style>
