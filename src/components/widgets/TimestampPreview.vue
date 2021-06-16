<template>
  <div class="timestamp-preview">
    <ul class="zones">
      <li class="locale">{{ localtime }}</li>
      <li class="gmt">{{ gmtTime }}</li>
      <li class="utc">{{ utcTime }}</li>
      <li class="est">{{ estTime }}</li>
      <li class="pdt">{{ pdtTime }}</li>
      <li class="wat">{{ watTime }}</li>
    </ul>
  </div>
</template>

<script>
  import { toRefs } from 'vue'
  import timestamp from '@/composables/timestamp-breakdown'

  export default {
    name: 'timestamp-preview',
    props: {
      timestamp: {
        type: Number
      }
    },
    setup(props) {
      const timelist = timestamp(props.timestamp)
      return {
        ...toRefs(timelist)
      }
    }
  }
</script>

<style lang="scss" scoped>
  div.timestamp-preview {
    max-width: 500px;
    width: 100%;

    ul.zones {
      -webkit-padding-start: 0;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        color: #fff;
        font-weight: 600;
        margin: 5px 0;
        font-size: 1.1rem;
        line-height: 50px;
        border-left: 5px solid #212121;

        background-color: rgba($color: #119da4, $alpha: 0.8);
        transition: background-color 200ms linear;

        &:hover {
          background-color: #119da4;
        }

        &.gmt {
          &::before {
            content: 'gmt';
          }
        }

        &.utc {
          &::before {
            content: 'utc';
          }
        }

        &.est {
          &::before {
            content: 'est';
          }
        }

        &.wat {
          &::before {
            content: 'wat';
          }
        }

        &.pdt {
          &::before {
            content: 'pdt';
          }
        }

        &.locale {
          background-color: #212121;

          &::before {
            content: '///';
          }
        }

        &::before {
          content: '';
          display: inline-block;
          background-color: #ffffff;
          color: #212121;
          text-transform: uppercase;
          margin-right: 10px;
          width: 80px;
          text-align: center;
        }
      }
    }
  }
</style>
