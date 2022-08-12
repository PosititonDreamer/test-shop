<template>
  <div class="loader-circle">
    <div class="loader-circle__item" v-for="i in 10" :key="i"/>
  </div>
</template>
<script>
export default {
  name: 'v-loader-circle'
}
</script>
<style lang="scss" src="./v-loader-circle.scss" scoped />