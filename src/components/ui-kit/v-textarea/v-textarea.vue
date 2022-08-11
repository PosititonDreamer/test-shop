<template>
  <div class="textarea-wrapper">
    <p class="textarea__name">{{name}}</p>
    <textarea :class="textareaClass" @input="$emit('input', $event.target.value)" @blur="$emit('blur')" :rows="rows"></textarea>
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
    rows: {
      type: Number,
      required: false,
      default: 4
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
    textareaClass() {
      return ['textarea', {'textarea--error': this.errorText.length}]
    },
    errorClass () {
      return ['textarea__error', {'textarea__error--view': this.errorText.length}]
    }
  }
}
</script>
<style lang="scss" src="./v-textarea,.scss" scoped />