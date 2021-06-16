import { reactive, computed } from 'vue'
import moment from 'moment-timezone'

export default (timestamp) => {
  const timeformat = 'DD/MM/YYYY hh:mm:ss A Z'

  const timelist = reactive({
    localtime: computed(() => moment(timestamp).format(timeformat)),
    gmtTime: computed(() =>
      moment(timestamp)
        .tz('GMT')
        .format(timeformat)
    ),

    utcTime: computed(() =>
      moment(timestamp)
        .tz('UTC')
        .format(timeformat)
    ),

    estTime: computed(() =>
      moment(timestamp)
        .tz('EST')
        .format(timeformat)
    ),

    watTime: computed(() =>
      moment(timestamp)
        .tz('GMT+1')
        .format(timeformat)
    ),

    pdtTime: computed(() =>
      moment(timestamp)
        .tz('America/Los_Angeles')
        .format(timeformat)
    )
  })

  return timelist
}
