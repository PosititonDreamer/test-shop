<template>
  <div class="loader-dnk">
    <div class="loader-dnk__item" v-for="i in 26" :key="i"/>
  </div>
</template>
<script>
export default {
  name: 'loader-circle'
}
</script>
<style lang="scss" src="./loader-dnk.scss" scoped />