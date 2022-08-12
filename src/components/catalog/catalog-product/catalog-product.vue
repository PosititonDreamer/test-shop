<template>
  <div class="product">
    <div class="product__image" @click="openProduct(product.id)">
      <img :src="product.img" alt="">
    </div>
    <div class="product__content">
      <p class="product__name" @click="openProduct(product.id)">{{product.name}}</p>
      <strong class="product__price">{{ product.price.toLocaleString()}} ₽</strong>
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
  </div>
</template>
<script>
// components
import {mapActions} from "vuex";
import vButton from '@/components/ui-kit/v-button/v-button'

// svg
import arrow from '@/assets/img/svg/catalog/arrow.svg'

export default {
  name: 'catalog-product',
  data: ()=> ({
    loading: false
  }),
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['addProduct', 'removeProduct', 'productStatus']),
    updateBasket(product) {
      this.loading = true
      if(this.product.inBasket) {
        this.removeProduct(product).then(()=> {
          this.productStatus(product.id)
        }).finally(()=> {
          this.loading = false
        })
      } else {
        this.addProduct(product).then(()=>{
          this.productStatus(product.id)
        }).finally(()=> {
          this.loading = false
        })
      }
    },
    openProduct(id) {
      this.$emit('openProduct', id)
    }
  },
  components: {
    vButton,arrow
  }
}
</script>
<style lang="scss" src="./catalog-product.scss" scoped />