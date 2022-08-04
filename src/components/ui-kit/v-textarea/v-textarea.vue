<template>
  <div class="textarea-wrapper">
    <p class="textarea__name">{{name}}</p>
    <textarea :class="textareaClass" @input="$emit('input', $event.target.value())" @blur="$emit('blur')" :rows="rows">{{value}}</textarea>
    <span :class="errorClass" >{{errorText}}</span>
  </div>
</template>
<script>
export default {
  name: 'v-textarea',
  props: {
    name: {
      type: String,
      required: true
    },
    error: {
      type: Boolean,
      required: false,
      default: false
    },
    rows: {
      type: Number,
      required: false,
      default: 4
    },
    errorText: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    textareaClass() {
      return ['textarea', {'textarea--error': this.error}]
    },
    errorClass () {
      return ['textarea__error', {'textarea__error--view': this.error}]
    }
  }
}
</script>
<style lang="scss" src="./v-textarea,.scss" scoped />