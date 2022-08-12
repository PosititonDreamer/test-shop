<template>
  <div class="loader-dnk">
    <div class="loader-dnk__item" v-for="i in 40" :key="i"/>
  </div>
</template>
<script>
export default {
  name: 'v-loader-circle'
}
</script>
<style lang="scss" src="./v-loader-dnk.scss" scoped />