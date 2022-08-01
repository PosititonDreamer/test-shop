<template>
  <button class="basket" @click="$emit('openBasket')">
    <cart/>
    <span class="basket__count">10</span>
  </button>
</template>
<script>
import cart  from "@/assets/img/svg/header/cart.svg"

export default {
  name: 'basket',
  components: {
    cart
  }

}
</script>
<style lang="scss" src="./basket.scss" scoped />