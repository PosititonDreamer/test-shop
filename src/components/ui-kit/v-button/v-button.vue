<template>
  <button :class="buttonClass" @click="$emit('click')" :disabled="loading">
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
  name: 'v-button',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
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