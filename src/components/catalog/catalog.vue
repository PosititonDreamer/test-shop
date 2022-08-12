<template>
  <div class="catalog">
    <div :class="classList">
      <template v-if="productsList.length">
        <catalog-product  v-for="product in productsList" :key="product.id" :product="product"/>
      </template>
      <v-notification v-else text="В данной категории товаров пока нет" vImage="cart" />
    </div>
  </div>
</template>
<script>
// vuex
import {mapGetters} from "vuex";

// components
import catalogProduct from './catalog-product/catalog-product'
import vNotification from '@/components/ui-kit/v-notification/v-notification'


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
    catalogProduct, vNotification
  }
}
</script>
<style lang="scss" src="./catalog.scss" scoped />