<template>
  <div class="input-container">
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
      <span class="feedback">
        {{ feedback }}
      </span>
    </div>
    <div class="actions">
      <button
        class="event-button"
        v-if="isButtonVisible"
        :disabled="isButtonDisabled"
        @click="triggerAction"
      >
        {{ buttonlabel }}
      </button>
    </div>
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
      feedback: {
        type: String,
        default: ''
      },
      buttonlabel: {
        type: String,
        default: ''
      },
      highlight: {
        type: Boolean,
        default: false
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

      const inputClass = computed(() => ({
        'input-group': true,
        highlight: props.highlight,
        invalid: props.invalid
      }))

      const isButtonVisible = computed(
        () => props.buttonlabel && props.buttonlabel.length
      )

      const isButtonDisabled = computed(
        () => !props.modelValue || !props.modelValue.length
      )

      const triggerAction = () => emit('trigger', message.value)

      return {
        message,
        inputClass,
        triggerAction,
        isButtonVisible,
        isButtonDisabled
      }
    }
  }
</script>

<style lang="scss" scoped>
  div.input-container {
    display: grid;
    grid-template-areas: 'input actions';
    grid-template-columns: max-content max-content;
    grid-template-rows: auto;

    div.input-group {
      grid-area: input;

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

      &.highlight {
        input {
          background-color: #c7f2a7;
        }
      }

      input {
        height: 80px;

        width: calc(100% - 40px);
        border: none;
        outline: none;
        font-size: 1.5rem;
        padding: 0 20px;
        color: #212121;
        background-color: #ffffff;
        font-family: 'Source Code Pro', monospace;

        &::placeholder {
          color: #757575;
        }
      }

      span.feedback {
        display: block;
        font-size: 1rem;
        line-height: 50px;
        min-height: 50px;
        font-weight: 500;
        color: #212121;
      }
    }

    div.actions {
      grid-area: actions;

      button.event-button {
        margin-top: 80px;
        display: inline-block;
        vertical-align: middle;
        color: #fff;
        cursor: pointer;
        outline: none;
        border: none;
        height: 80px;
        padding: 0 20px;
        font-size: 1rem;
        background-color: rgba($color: #212121, $alpha: 0.8);
        transition: background-color 200ms linear;

        &:hover {
          background-color: #212121;
        }

        &:disabled {
          background-color: rgba($color: #212121, $alpha: 0.5);
          cursor: default;
        }
      }
    }
  }
</style>
