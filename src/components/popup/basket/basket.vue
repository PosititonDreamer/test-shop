<template>
  <div class="basket">
    <template v-if="orderPlaced">

    </template>
    <template v-else-if="getBasket.length && !orderPlaced">
      <p class="basket__name">В корзине:</p>
      <div class="basket__list">
        <product class="basket__item" v-for="product in getBasket" :product="product" />
      </div>
    </template>
    <template v-else>

    </template>
  </div>
</template>
<script>
import {mapGetters} from "vuex";
import product from ".//product/product";
export default {
  name: "basketPopup",
  data: ()=> ({
    orderPlaced: false
  }),
  computed: {
    ...mapGetters(['getBasket']),
  },
  components: {
    product
  }
}
</script>
<style lang="scss" src="./basket.scss" scoped />