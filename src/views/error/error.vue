<template>
  <strong class="error-text">{{text}}</strong>
</template>
<script>
export default {
  name: 'error',
  props: {
    text: {
      type: String,
      default: "Данная страница не найдена"
    }
  },
}
</script>
<style lang="scss" src="./error.scss" scoped />