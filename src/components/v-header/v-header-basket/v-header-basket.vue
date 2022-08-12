<template>
  <button class="basket" @click="$emit('openBasket')">
    <cart/>
    <span class="basket__count" v-if="getBasket.length">{{ getBasket.length }}</span>
  </button>
</template>
<script>
import cart  from "@/assets/img/svg/v-header/cart.svg"
import {mapGetters} from 'vuex'

export default {
  name: 'v-header-basket',
  computed: {
    ...mapGetters(['getBasket'])
  },
  components: {
    cart
  }

}
</script>
<style lang="scss" src="./v-header-basket.scss" scoped />