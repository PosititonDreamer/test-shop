<template>
  <label class="input-wrapper">
    <p class="input__name">{{name}}</p>
    <input :class="inputClass" :type="type" @input="$emit('input', $event.target.value)" @blur="$emit('blur')" :value="value">
    <span :class="errorClass" >{{errorText}}</span>
  </label>
</template>
<script>
export default {
  name: 'v-input',
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    errorText: {
      type: String,
      default: ''
    },
    value: {
      type: String,

      default: ''
    }
  },
  computed: {
    inputClass() {
      return ['input', {'input--error': this.errorText}]
    },
    errorClass () {
      return ['input__error', {'input__error--view': this.errorText}]
    }
  }
}
</script>
<style lang="scss" src="./v-input.scss" scoped/>