<template>
  <footer>
    <div class="links">
      <ul>
        <li>
          <a href="https://github.com/boxpositron" target="_blank">Github</a>
        </li>
        <li>
          <a href="https://twitter.com/boxpositron" target="_blank">Twitter</a>
        </li>
      </ul>
    </div>
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
    padding: 20px 0;
    color: #fff;
    display: grid;
    grid-template-areas: '. links .' '. copyright .';
    grid-template-columns: minmax(auto, 200px) auto minmax(auto, 200px);
    grid-auto-rows: max-content;

    div.links {
      grid-area: links;

      ul {
        padding: 0;
        margin: 0;
        -webkit-padding-start: 0;
        list-style: none;

        li {
          display: inline-block;
          margin-right: 20px;

          a {
            color: #fff;
            text-decoration: none;
            font-size: 0.9rem;
            line-height: 50px;
            font-weight: 600;
          }
        }
      }
    }

    span.copyright {
      grid-area: copyright;
      font-size: 0.9rem;
    }
  }
</style>
