<template>
  <div :class="classDetail">
    <template v-if="loading">
      <v-loader-circle />
    </template>
    <template v-else-if="product && !loading">
      <div class="product-detail__image" >
        <img :src="product.img" alt="">
      </div>
      <p class="product-detail__name">{{product.name}}</p>
      <strong class="product-detail__price">{{product.price}} ₽</strong>
      <popup-product-tabs :description="product.descr" :props="product.props" :reviews="Object.assign({}, product.reviews)" :productId="product.id" />
    </template>
    <template v-else>
      А нихуя
    </template>
  </div>
</template>
<script>
import vLoaderCircle from '@/components/ui-kit/v-loader/v-loader-circle/v-loader-circle'
import popupProductTabs from "@/components/popup/popup-product/popup-product-tabs/popup-product-tabs";
import {mapActions} from "vuex";


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