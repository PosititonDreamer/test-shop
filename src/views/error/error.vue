<template>
  <strong class="error-text">{{errorText}}</strong>
</template>
<script>
export default {
  name: 'error',
  computed: {
    errorText() {
      return this.$route.meta.text
    }
  }
}
</script>
<style lang="scss" src="./error.scss" scoped />