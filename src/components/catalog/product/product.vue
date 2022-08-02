<template>
  <div class="product">
    <div class="product__image">
      <img :src="product.img" alt="">
    </div>
    <div class="product__content">
      <p class="product__name">{{product.name}}</p>
      <strong class="product__price">{{ product.price.toLocaleString()}} ₽</strong>
      <vButton class="product__button" @click="updateBasket" :loading="loading" :disabled="loading">
        <template v-if="productInBasket">
          В корзине
          <arrow />
        </template>
        <template v-else>
          Добавить в корзину
        </template>
      </vButton>
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
  name: 'product',
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
    ...mapActions(['addProduct', 'removeProduct']),
    updateBasket() {
      this.loading = true
      if(this.product.inBasket) {
        this.removeProduct(this.product).then(result=> {
          this.product.inBasket = !this.product.inBasket
        }).finally(result=> {
          this.loading = false
        })
      } else {
        this.addProduct(this.product).then(result=>{
          this.product.inBasket = !this.product.inBasket
        }).finally(result=> {
          this.loading = false
        })
      }

    }
  },
  computed: {
    productInBasket() {
      return this.product.inBasket
    }
  },
  components: {
    vButton,arrow
  }
}
</script>
<style lang="scss" src="./product.scss" scoped />