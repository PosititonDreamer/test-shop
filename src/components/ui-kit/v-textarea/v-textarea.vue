<template>
  <label class="textarea-wrapper">
    <p class="textarea__name">{{name}}</p>
    <textarea :class="textareaClass" @input="$emit('input', $event.target.value)" @blur="$emit('blur')" :rows="rows"></textarea>
    <span :class="errorClass" >{{errorText}}</span>
  </label>
</template>
<script>
export default {
  name: 'v-textarea',
  props: {
    name: {
      type: String,
      required: true
    },
    rows: {
      type: Number,
      default: 4
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
    textareaClass() {
      return ['textarea', {'textarea--error': this.errorText}]
    },
    errorClass () {
      return ['textarea__error', {'textarea__error--view': this.errorText}]
    }
  }
}
</script>
<style lang="scss" src="./v-textarea,.scss" scoped />