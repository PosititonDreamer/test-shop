<template>
  <button class="basket" @click="$emit('openBasket')">
    <cart/>
    <span class="basket__count">{{ getBasket.length }}</span>
  </button>
</template>
<script>
import cart  from "@/assets/img/svg/header/cart.svg"
import {mapGetters} from 'vuex'

export default {
  name: 'basket',
  computed: {
    ...mapGetters(['getBasket'])
  },
  components: {
    cart
  }

}
</script>
<style lang="scss" src="./basket.scss" scoped />