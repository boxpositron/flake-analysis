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
        :feedback="feedback"
      >
        Discord Snowflake
      </input-group>
    </div>
    <div class="results">
      <timestamp-preview :timestamp="timestamp" v-if="isBigInt" />
    </div>
  </div>
</template>

<script>
  import { toRefs } from 'vue'
  import debouncedRef from '@/composables/debounced-ref'
  import snowman from '@/composables/snowflake-conversion'

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

      const snow = snowman(snowflake)
      return {
        ...toRefs(snow),
        snowflake
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
    }

    div.results {
      grid-area: results;
    }
  }
</style>
