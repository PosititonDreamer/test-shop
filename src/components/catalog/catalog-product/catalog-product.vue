<template>
  <div class="product">
    <div class="product__image" @click="openPopup = true">
      <img :src="product.img" alt="">
    </div>
    <div class="product__content">
      <p class="product__name" @click="openPopup = true">{{product.name}}</p>
      <strong class="product__price">{{ priceHelper(product.price) }}</strong>
      <v-button class="product__button" @click="updateBasket(product)" :loading="loading">
        <template v-if="product.inBasket">
          В корзине
          <arrow />
        </template>
        <template v-else>
          Добавить в корзину
        </template>
      </v-button>
    </div>
    <popup title="Информация" v-if="openPopup" @closePopup="openPopup = false">
      <popup-product :product-id="product.id" />
    </popup>
  </div>
</template>
<script>
// vuex
import {mapActions} from "vuex";

// components
import popup from "@/components/popup/popup";
import popupProduct from "@/components/popup/popup-product/popup-product";
import vButton from '@/components/ui-kit/v-button/v-button'

// svg
import arrow from '@/assets/img/svg/catalog/arrow.svg'

// helpers
import priceHelper from "@/helpers/price-helper";

export default {
  name: 'catalog-product',
  data: ()=> ({
    loading: false,
    openPopup: false
  }),
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    priceHelper,
    ...mapActions(['productStatus', 'editBasket']),
    updateBasket(product) {
      this.loading = true
      this.editBasket(product).then(()=> {
            this.productStatus(product.id)
          }).finally(()=> {
        this.loading = false
      })
    },
  },
  components: {
    vButton,arrow,popup ,popupProduct
  }
}
</script>
<style lang="scss" src="./catalog-product.scss" scoped />