<template>
  <div :class="classDetail">
    <v-loader-circle v-if="loading" />
    <template v-else-if="product && !loading">
      <div class="product-detail__image" >
        <img :src="product.img" alt="">
      </div>
      <p class="product-detail__name">{{product.name}}</p>
      <strong class="product-detail__price">{{ priceHelper(product.price)}}</strong>
      <popup-product-tabs :description="product.descr" :props="product.props" :reviews="Object.assign({}, product.reviews)" :productId="product.id" />
    </template>
    <template v-else>
      А нихуя
    </template>
  </div>
</template>
<script>
// components
import vLoaderCircle from '@/components/ui-kit/v-loader/v-loader-circle/v-loader-circle'
import popupProductTabs from "@/components/popup/popup-product/popup-product-tabs/popup-product-tabs";

// vuex
import {mapActions} from "vuex";

// helpers
import priceHelper from "@/helpers/price-helper";

export default {
  name: 'popup-product',
  data: ()=> ({
    product: [],
    loading: true
  }),
  props: {
    productId: {
      type: Number,
      required: true
    }
  },
  methods: {
    priceHelper,
    ...mapActions(['searchProduct'])
  },
  computed: {
    classDetail() {
      return ['product-detail', {'product-detail--loading': this.loading}]
    }
  },
  mounted() {
    this.searchProduct(this.productId)
        .then(resolve => this.product = resolve)
        .finally(() => {
          this.loading = false
        } )
  },
  components: {
    vLoaderCircle, popupProductTabs
  }

}
</script>
<style lang="scss" src="./popup-product.scss" scoped />