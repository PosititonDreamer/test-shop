<template>
  <div :class="basketClass">
    <template v-if="getBasket.length && !orderPlaced">
        <p class="basket__name">В корзине:</p>
        <div class="basket__list">
          <product class="basket__item" v-for="product in getBasket" :product="product" :key="product.id" />
        </div>
        <basketForm
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
import product from "./product/product";
import basketForm from './form/form'

// svg
import basketEmpty from '@/assets/img/svg/popup/basket/basket-empty.svg'
import orderPlaced from '@/assets/img/svg/popup/basket/order-placed.svg'

export default {
  name: "basketPopup",
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
    product, basketForm,basketEmpty ,orderPlaced
  }
}
</script>
<style lang="scss" src="./basket.scss" scoped />