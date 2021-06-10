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
      const timeformat = 'DD/MM/YYYY hh:mm:ss A Z'

      const localtime = computed(() =>
        moment(props.timestamp).format(timeformat)
      )

      const gmtTime = computed(() =>
        moment(props.timestamp)
          .tz('GMT')
          .format(timeformat)
      )

      const utcTime = computed(() =>
        moment(props.timestamp)
          .tz('UTC')
          .format(timeformat)
      )

      const estTime = computed(() =>
        moment(props.timestamp)
          .tz('EST')
          .format(timeformat)
      )

      const watTime = computed(() =>
        moment(props.timestamp)
          .tz('GMT+1')
          .format(timeformat)
      )

      const pdtTime = computed(() =>
        moment(props.timestamp)
          .tz('America/Los_Angeles')
          .format(timeformat)
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
    width: 100%;

    ul.zones {
      -webkit-padding-start: 0;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        color: #fff;
        font-weight: 600;
        background-color: #119da4;
        margin: 5px 0;
        font-size: 1.1rem;
        line-height: 50px;
        border-left: 5px solid #212121;

        opacity: 0.8;

        transition: opacity 200ms linear;

        &:hover {
          opacity: 1;
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
