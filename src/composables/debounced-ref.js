import { ref, customRef } from 'vue'

const debounce = (fn, delay = 0, immediate = false) => {
  let timeout

  return (...args) => {
    if (immediate && !timeout) {
      return fn(...args)
    }

    clearTimeout(timeout)

    timeout = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

export default (initialValue, delay, immediate) => {
  const state = ref(initialValue)

  const debounced = customRef((track, trigger) => ({
    get() {
      track()
      return state.value
    },
    set: debounce(
      (value) => {
        state.value = value
        trigger()
      },
      delay,
      immediate
    )
  }))
  return debounced
}
