<template>
  <div class="delta-page">
    <div class="information">
      <span class="title">
        Snowflake comparison
      </span>
    </div>
    <div class="details">
      <input-group
        ref="flakeA"
        v-model="snowflakeA"
        placeholder="851113995167727666"
        :feedback="snowA.feedback"
        :invalid="!snowA.isBigInt"
        :highlight="hasValidResult && !isBLarger"
      >
        Snowflake A
      </input-group>

      <input-group
        ref="flakeB"
        v-model="snowflakeB"
        placeholder="848949042599428146"
        :feedback="snowB.feedback"
        :invalid="!snowB.isBigInt"
        :highlight="hasValidResult && isBLarger"
      >
        Snowflake B
      </input-group>
    </div>

    <div class="results">
      <timestamp-delta
        ref="flakeM"
        :timestampA="snowA.timestamp"
        :timestampB="snowB.timestamp"
        v-show="hasValidResult"
      />
    </div>
  </div>
</template>

<script>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import snowman from '@/composables/snowflake-conversion'
  import debounceRef from '@/composables/debounced-ref'

  import InputGroup from '@/components/elements/InputGroup'
  import TimestampDelta from '@/components/widgets/TimestampDelta'

  export default {
    name: 'delta-page',
    components: {
      InputGroup,
      TimestampDelta
    },
    setup() {
      const route = useRoute()

      const snowflakeA = debounceRef('', 500)
      const snowflakeB = debounceRef('', 500)

      if (route.query.snowflakea) {
        snowflakeA.value = route.query.snowflakea
      }

      const snowA = snowman(snowflakeA)
      const snowB = snowman(snowflakeB)

      const hasValidResult = computed(() => snowA.isBigInt && snowB.isBigInt)

      const isBLarger = computed(() => snowB.timestamp > snowA.timestamp)

      return {
        snowA,
        snowB,
        isBLarger,
        snowflakeA,
        snowflakeB,
        hasValidResult
      }
    }
  }
</script>

<style lang="scss" scoped>
  div.delta-page {
    display: grid;
    grid-template-areas: '. information . . .' '. details . results .';
    grid-auto-rows: max-content;
    grid-template-columns:
      minmax(auto, 200px)
      max-content
      50px
      max-content
      minmax(auto, 200px);

    div.information {
      grid-area: information;
    }

    div.details {
      grid-area: details;
    }

    div.results {
      grid-area: results;

      display: grid;
      place-items: center;
    }
  }
</style>
