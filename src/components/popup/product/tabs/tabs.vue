<template>
    <div class="product-tabs">
      <v-tabs>
        <v-tab title="Описание">
          <div class="product-tabs__description" v-html="description"></div>
        </v-tab>
        <v-tab title="Характеристики">
           <div class="properties">
            <div class="properties__item" v-for="(prop, index) in props" :key="index">
              <p class="properties__name">{{prop.caption}}</p>
              <span class="properties__value">{{prop.value}} {{prop.measure}}</span>
            </div>
          </div>
        </v-tab>
        <v-tab title="Отзывы">
          <reviews :reviews="reviewsMassive"/>
        </v-tab>
        <v-tab title="Оставить отзыв">
          <reviews-form :productId="productId"/>
        </v-tab>
      </v-tabs>
    </div>
</template>
<script>
// components
import vTabs from '@/components/ui-kit/v-tabs/v-tabs'
import vTab from '@/components/ui-kit/v-tabs/v-tab/v-tab'
import reviews from './reviews/reviews'
import reviewsForm from './form/form'


// vuex
import {mapGetters} from "vuex";

export default {
  name: 'popupTabs',
  props: {
    description: {
      type: String,
      required: true
    },
    props: {
      type: Object,
      required: true
    },
    reviews: {
      type: Object,
      required: true
    },
    productId: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters(['getReviews']),
    reviewsMassive() {
      let reviewsStorage = this.getReviews.filter(item => item.id === this.productId).map(item=> {return item.data})
      return [...Object.values(this.reviews), ...reviewsStorage]
    }
  },
  components: {
    vTabs,
    vTab,
    reviews,
    reviewsForm
  }
}
</script>
<style lang="scss" src="./tabs.scss" scoped />