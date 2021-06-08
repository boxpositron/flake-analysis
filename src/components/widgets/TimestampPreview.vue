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
  import { computed } from 'vue'
  import moment from 'moment-timezone'
  export default {
    name: 'timestamp-preview',
    props: {
      timestamp: {
        type: Number
      }
    },
    setup(props) {
      const localtime = computed(() =>
        moment(props.timestamp).format('DD/MM/YYYY HH:mm:ss A Z')
      )

      const gmtTime = computed(() =>
        moment(props.timestamp)
          .tz('GMT')
          .format('DD/MM/YYYY HH:mm:ss A Z')
      )

      const utcTime = computed(() =>
        moment(props.timestamp)
          .tz('UTC')
          .format('DD/MM/YYYY HH:mm:ss A Z')
      )

      const estTime = computed(() =>
        moment(props.timestamp)
          .tz('EST')
          .format('DD/MM/YYYY HH:mm:ss A Z')
      )

      const watTime = computed(() =>
        moment(props.timestamp)
          .tz('GMT+1')
          .format('DD/MM/YYYY HH:mm:ss A Z')
      )

      const pdtTime = computed(() =>
        moment(props.timestamp)
          .tz('America/Los_Angeles')
          .format('DD/MM/YYYY HH:mm:ss A Z')
      )

      return {
        localtime,
        watTime,
        pdtTime,
        gmtTime,
        utcTime,
        estTime
      }
    }
  }
</script>

<style lang="scss" scoped>
  div.timestamp-preview {
    max-width: 500px;
    padding: 20px 0;
    width: 100%;
    border-radius: 10px;

    ul.zones {
      -webkit-padding-start: 0;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        color: #fff;
        font-weight: 600;
        background-color: #119da4;
        font-family: 'Source Code Pro', monospace;
        margin: 5px 0;
        font-size: 1.1rem;
        line-height: 50px;
        border-left: 5px solid #212121;

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
          background-color: #8980f5;

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
