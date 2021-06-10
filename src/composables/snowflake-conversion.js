import { reactive, ref, computed } from 'vue'

export default (snowflake) => {
  const discordEpoch = ref(1420070400000)

  // No BigInt support
  // 22n == 2 ^ 22 = 4194304

  const snow = reactive({
    isBigInt: computed(
      () => !(isNaN(snowflake.value) || Number(snowflake.value) < 4194304)
    ),
    feedback: computed(() => {
      if (!snowflake.value.length) {
        return ''
      }

      if (!snow.isBigInt) {
        return 'Invalid snowflake'
      }

      return ''
    }),
    timestamp: computed(() => {
      if (!snow.isBigInt) {
        return null
      }

      const timestamp = Number(snowflake.value / 4194304) + discordEpoch.value

      return timestamp
    })
  })

  return snow
}
