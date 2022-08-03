<template>
  <div class="catalog">
    <div :class="classList">
      <template v-if="productsList.length">
        <product  v-for="product in productsList" :key="product.id" :product="product" @openProduct="$emit('openProduct', $event)"/>
      </template>
      <template v-else>
        <cart class="catalog__image" />
        <strong class="catalog__text">В данной категории товаров пока нет</strong>
      </template>
    </div>
  </div>
</template>
<script>
// components
import {mapGetters} from "vuex";
import product from './product/product'

// svg
import cart from '@/assets/img/svg/catalog/cart.svg'
export default {
  name: 'catalog',
  computed: {
    ...mapGetters(['getProducts']),
    productsList() {
      return this.getProducts.filter(item => item.parent_id === Number(this.$route.params.subId))
    },
    classList() {
      return this.productsList.length ? 'catalog__list' : 'catalog__empty'
    }
  },
  components: {
    product, cart
  }
}
</script>
<style lang="scss" src="./catalog.scss" scoped />