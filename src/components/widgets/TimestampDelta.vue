<template>
  <div class="timestamp-delta">
    <span class="result">
      {{ deltaTimestamp }}
    </span>
  </div>
</template>

<script>
  import { computed } from 'vue'
  import moment from 'moment-timezone'
  export default {
    name: 'timestamp-delta',
    props: {
      timestampA: {
        type: Number
      },
      timestampB: {
        type: Number
      }
    },
    setup(props) {
      const deltaTimestamp = computed(() => {
        const [timestampA = 0, timestampB = 0] = [
          props.timestampA,
          props.timestampB
        ].sort()

        const timestamp = moment.utc(
          moment(timestampB).diff(moment(timestampA))
        )

        return `${timestamp.format('HH:mm:ss')}:${timestamp.milliseconds()}`
      })

      return {
        deltaTimestamp
      }
    }
  }
</script>

<style lang="scss" scoped>
  div.timestamp-delta {
    background-color: #c7f2a7;
    padding: 0 50px;

    span.result {
      display: block;
      text-align: center;
      line-height: 100px;
      font-size: 2rem;
      font-weight: 400;
    }
  }
</style>
