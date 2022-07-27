<template>
  <button :class="buttonClass" :type="type" @click="$emit('click')" :disabled="disabled"><slot/></button>
</template>
<script>
export default {
  name: 'buttonVue',
  props: {
    type: {
      type: String,
      required: false,
      default: 'submit'
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }

  },
  computed: {
    buttonClass() {
      return ['button', {'button--loaded': this.loading}]
    }
  }
}
</script>
<style lang="scss" src="./button.scss" scoped />