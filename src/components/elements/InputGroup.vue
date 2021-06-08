<template>
  <div :class="inputClass">
    <label>
      <slot></slot>
    </label>
    <input
      :name="name"
      :type="type"
      :required="required"
      :placeholder="placeholder"
      v-model="message"
    />
  </div>
</template>

<script>
  import { computed } from 'vue'

  export default {
    name: 'input-group',
    props: {
      name: {
        type: String,
        default: ''
      },
      modelValue: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      },
      required: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: ''
      },
      invalid: {
        type: Boolean,
        default: true
      }
    },
    setup(props, { emit }) {
      const message = computed({
        get: () => props.modelValue,
        set: (value) => emit('update:modelValue', value)
      })

      const inputClass = computed({
        get: () => ({
          'input-group': true,
          invalid: props.invalid
        })
      })

      return {
        message,
        inputClass
      }
    }
  }
</script>

<style lang="scss" scoped>
  div.input-group {
    label {
      display: block;
      padding: 20px 0;
      font-size: 2rem;
    }

    &.invalid {
      input {
        color: #ff0022;
      }
    }

    input {
      height: 80px;
      max-width: 460px;
      width: 100%;
      border: none;
      font-family: 'Source Code Pro', monospace;
      outline: none;
      font-size: 1.5rem;
      padding: 0 20px;
      color: #212121;
      background-color: #ffffff;

      &::placeholder {
        color: #757575;
      }
    }
  }
</style>
