<template>
  <button :class="buttonClass" :type="type" @click="$emit('click')" :disabled="disabled">
    <slot />
    <div class="button__loading" v-if="loading">
      <span/>
      <span/>
      <span/>
    </div>
  </button>
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
    },
    color: {
      type: String,
      required: false,
      default: ''
    }

  },
  computed: {
    buttonClass() {
      return ['button', 'button--' + this.color, {'button--loaded': this.loading}]
    }
  }
}
</script>
<style lang="scss" src="./v-button.scss" scoped />