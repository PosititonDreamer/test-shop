<template>
  <div id="app" :class="classApp">

    <template v-if="loading">
      <loader-dnk />
    </template>
    <template v-else>
      <v-header @openBasket="openPopup('popupBasket','Оформить заказ')"/>

      <component
          :is="layout"
      >
        <router-view @openProduct="openPopup('popupProduct', 'Информация', $event)" />
      </component>

      <popup v-if="popup" @close="closePopup" :title="popupType" >
        <component
            :is="popup"
            :productId="productId"
        />
      </popup>
    </template>
  </div>
</template>
<script>
// vuex
import {mapActions, mapGetters} from 'vuex'

// components
import vHeader from "@/components/v-header/v-header"
import Popup from "@/components/popup/popup";
import popupProduct from '@/components/popup/product/product'
import popupBasket from '@/components/popup/basket/basket'
import loaderCircle from "@/components/ui-kit/v-loader/v-loader-circle/v-loader-circle";
import loaderDnk from "@/components/ui-kit/v-loader/v-loader-dnk/v-loader-dnk";

//layouts
import layoutDefault from '@/layouts/default/default'
import layoutCatalog from '@/layouts/catalog/catalog'
import layoutError from '@/layouts/error/error'

export default {
  name: "app",
  data: () => ({
    popup: null,
    popupType: null,
    productId: null,
    loading: true
  }),
  methods: {
    ...mapActions(['searchData', 'searchBasket', 'searchReviews']), closePopup() {
      this.popup = this.popupType = null
    },
    openPopup(name, title, id = null) {
      this.popup = name
      this.popupType = title
      this.productId = id ? id : null
    }
  },
  computed: {
    ...mapGetters(['getProducts']),
    layout() {
      return this.$route.meta.layout || 'layout-default'
    },
    classApp() {
      return ['app', {'app--loading': this.loading}]
    }
  },
  async mounted() {
    await this.searchData()
    await this.searchBasket()
    await this.searchReviews()
    let timeout = setTimeout(()=> {
      this.loading = false
      clearTimeout(timeout)
    }, 5000)
  },
  components: {
    Popup, vHeader,  popupProduct, popupBasket,layoutDefault ,layoutCatalog ,layoutError, loaderCircle, loaderDnk
  }
}
</script>
<style lang="scss" src="./assets/style/index.scss"/>