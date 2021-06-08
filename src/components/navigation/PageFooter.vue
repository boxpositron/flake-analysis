<template>
  <footer>
    <span class="copyright">
      &copy; {{ year }} David Ibia. All Rights Reserved.
    </span>
  </footer>
</template>

<script>
  export default {
    name: 'page-footer',
    computed: {
      year() {
        return new Date().getFullYear()
      }
    }
  }
</script>

<style lang="scss" scoped>
  footer {
    background-color: #2d232e;
    color: #fff;
    height: 100px;
    display: grid;
    place-items: center center;
  }
</style>
