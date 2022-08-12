<template>
    <div class="product-tabs">
      <v-tabs>
        <v-tabs-tab title="Описание">
          <div class="product-tabs__description" v-html="description"></div>
        </v-tabs-tab>
        <v-tabs-tab title="Характеристики">
           <div class="properties">
            <div class="properties__item" v-for="(prop, index) in props" :key="index">
              <p class="properties__name">{{prop.caption}}</p>
              <span class="properties__value">{{prop.value}} {{prop.measure}}</span>
            </div>
          </div>
        </v-tabs-tab>
        <v-tabs-tab title="Отзывы">
          <popup-product-tabs-reviews :reviews="reviewsMassive"/>
        </v-tabs-tab>
        <v-tabs-tab title="Оставить отзыв">
          <popup-product-tabs-form :productId="productId"/>
        </v-tabs-tab>
      </v-tabs>
    </div>
</template>
<script>
// components
import vTabs from '@/components/ui-kit/v-tabs/v-tabs'
import vTabsTab from '@/components/ui-kit/v-tabs/v-tabs-tab/v-tabs-tab'
import popupProductTabsReviews from './popup-product-tabs-reviews/popup-product-tabs-reviews'
import popupProductTabsForm from './popup-product-tabs-form/popup-product-tabs-form'


// vuex
import {mapGetters} from "vuex";

export default {
  name: 'popup-product-tabs',
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
    vTabsTab,
    popupProductTabsReviews,
    popupProductTabsForm
  }
}
</script>
<style lang="scss" src="./popup-product-tabs.scss" scoped />