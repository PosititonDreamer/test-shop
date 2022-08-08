<template>
  <div class="loader-circle">
    <div class="loader-circle__item" v-for="i in 6" :key="i"/>
  </div>
</template>
<script>
export default {
  name: 'loader-circle'
}
</script>
<style lang="scss" src="./loader-circle.scss" scoped />