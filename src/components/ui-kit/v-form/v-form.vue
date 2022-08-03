<template>
  <form @submit.prevent="$emit('submit')">
    <slot/>
  </form>
</template>
<script>
export default {
  name: 'v-form',
}
</script>
<style lang="scss" src="./v-form.scss" scoped />