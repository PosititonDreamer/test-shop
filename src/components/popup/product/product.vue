<template>
  <div :class="classDetail">
    <template v-if="loading">
      <loaderCircle />
    </template>
    <template v-else-if="product && !loading">
      <div class="product-detail__image" >
        <img :src="product.img" alt="">
      </div>
      <p class="product-detail__name">{{product.name}}</p>
      <strong class="product-detail__price">{{product.price}} ₽</strong>
      <product-tabs :description="product.descr" :props="product.props" :reviews="Object.assign({}, product.reviews)" :productId="product.id" />
    </template>
    <template v-else>
      А нихуя
    </template>
  </div>
</template>
<script>
import loaderCircle from '@/components/ui-kit/v-loader/v-loader-circle/v-loader-circle'
import productTabs from './tabs/tabs'
import {mapActions} from "vuex";

export default {
  name: 'productDetail',
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
    loaderCircle, productTabs
  }

}
</script>
<style lang="scss" src="./product.scss" scoped />