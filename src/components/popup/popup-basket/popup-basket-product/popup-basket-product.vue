<template>
  <div class="product">
    <div class="product__image">
      <img :src="product.img" alt="">
    </div>
    <div class="product__content">
      <p class="product__name">{{ product.name }}</p>
      <strong class="product__price">{{ product.price.toLocaleString() }} ₽</strong>
      <v-button color="white" @click="updateBasket(product)" :loading="loading" >убрать из корзины</v-button>
    </div>
  </div>
</template>
<script>
import vButton from '@/components/ui-kit/v-button/v-button'
import {mapActions} from "vuex";

export default {
  name: 'basket-product',
  data: () => ({
    loading: false
  }),
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['removeProduct', 'productStatus']),
    updateBasket(product) {
      this.loading = true
      this.removeProduct(product).then(() => {
        this.productStatus(product.id)
      }).finally(() => {
        this.loading = false
      })

    }
  },
  components: {
    vButton
  }
}
</script>
<style lang="scss" src="./popup-basket-product.scss" scoped/>