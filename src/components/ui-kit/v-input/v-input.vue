<template>
  <div class="input-wrapper">
    <p class="input__name">{{name}}</p>
    <input :class="inputClass" :type="type" @input="$emit('input', $event.target.value)" @blur="$emit('blur')" :value="value">
    <span :class="errorClass" >{{errorText}}</span>
  </div>
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
      required: false,
      default: ''
    },
    value: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    inputClass() {
      return ['input', {'input--error': this.errorText.length}]
    },
    errorClass () {
      return ['input__error', {'input__error--view': this.errorText.length}]
    }
  }
}
</script>
<style lang="scss" src="./v-input.scss" scoped/>