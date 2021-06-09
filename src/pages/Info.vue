<template>
  <div class="info-page">
    <div class="information">
      <span class="title">Snowflake to Timestamp</span>
    </div>
    <div class="details">
      <input-group
        v-model="snowflake"
        placeholder="851774321701683200"
        :invalid="!isBigInt"
      >
        Discord Snowflake
      </input-group>

      <span class="feedback">
        {{ feedback }}
      </span>
    </div>
    <div class="results">
      <timestamp-preview :timestamp="timestamp" v-if="isBigInt" />
    </div>
  </div>
</template>

<script>
  import { computed, ref } from 'vue'
  import debouncedRef from '@/composables/debouncedRef'

  import InputGroup from '@/components/elements/InputGroup'
  import TimestampPreview from '@/components/widgets/TimestampPreview'

  export default {
    name: 'info-page',
    components: {
      InputGroup,
      TimestampPreview
    },
    setup() {
      const snowflake = debouncedRef('', 500)
      const discordEpoch = ref(1420070400000)

      // No BigInt support
      // 22n == 2 ^ 22 = 4194304

      const isBigInt = computed(
        () => !(isNaN(snowflake.value) || Number(snowflake.value) < 4194304)
      )

      const feedback = computed(() => {
        if (!snowflake.value.length) {
          return ''
        }

        if (!isBigInt.value) {
          return 'Invalid snowflake'
        }

        return ''
      })

      const timestamp = computed(() => {
        if (!isBigInt.value) {
          return null
        }

        const timestamp = Number(snowflake.value / 4194304) + discordEpoch.value

        return new Date(timestamp)
      })

      return {
        feedback,
        isBigInt,
        timestamp,
        snowflake,
        discordEpoch
      }
    }
  }
</script>

<style lang="scss" scoped>
  div.info-page {
    display: grid;
    grid-template-areas: '. information .' '. details .' '. results .';
    grid-template-columns: minmax(auto, 200px) auto minmax(auto, 200px);
    grid-auto-rows: max-content;

    div.information {
      grid-area: information;

      span.title {
        font-size: 1.2rem;
      }
    }

    div.details {
      grid-area: details;

      span.feedback {
        display: block;
        font-size: 1rem;
        line-height: 50px;
        min-height: 50px;
        font-weight: 500;
      }
    }

    div.results {
      grid-area: results;
    }
  }
</style>
