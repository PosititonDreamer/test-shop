<template>
  <div :class="basketClass">
    <template v-if="getBasket.length && !orderPlaced">
        <p class="basket__name">В корзине:</p>
        <div class="basket__list">
          <popup-basket-product class="basket__item" v-for="product in getBasket" :product="product" :key="product.id" />
        </div>
        <popup-basket-form
          @newOrder="newOrder"
        />
    </template>
    <template v-else-if="!getBasket.length && !orderPlaced">
      <basket-empty />
      В корзине ничего нет
    </template>
    <template v-else>
      <order-placed/>
      Заказ успешно создан
    </template>
  </div>
</template>
<script>
// vuex
import {mapActions, mapGetters} from "vuex";

// components
import popupBasketProduct from "./popup-basket-product/popup-basket-product";
import popupBasketForm from './popup-basket-form/popup-basket-form'

// svg
import basketEmpty from '@/assets/img/svg/popup/basket/basket-empty.svg'
import orderPlaced from '@/assets/img/svg/popup/basket/order-placed.svg'

export default {
  name: "popup-basket",
  data: ()=> ({
    orderPlaced: false,
  }),
  methods: {
    ...mapActions(['clearBasket']),
    newOrder() {
      this.orderPlaced = true
      this.clearBasket()
    }
  },
  computed: {
    ...mapGetters(['getBasket']),
    basketClass() {
      if(this.orderPlaced) return 'order-placed'
      return this.getBasket.length && !this.orderPlaced ? 'basket' : 'basket--empty'
    }
  },
  components: {
    popupBasketProduct, popupBasketForm,basketEmpty ,orderPlaced
  }
}
</script>
<style lang="scss" src="./popup-basket.scss" scoped />