<template>
  <div id="app" :class="classApp">

    <template v-if="loading">
      <v-loader-dnk />
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
import popup from "@/components/popup/popup";
import popupProduct from '@/components/popup/popup-product/popup-product'
import popupBasket from '@/components/popup/popup-basket/popup-basket'
import vLoaderCircle from "@/components/ui-kit/v-loader/v-loader-circle/v-loader-circle";
import vLoaderDnk from "@/components/ui-kit/v-loader/v-loader-dnk/v-loader-dnk";

//layouts
import layoutDefault from '@/layout/layout-default/layout-default'
import layoutCatalog from '@/layout/layout-catalog/layout-catalog'
import layoutError from '@/layout/layout-error/layout-error'

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
    await Promise.all([this.searchData() ,this.searchBasket() ,this.searchReviews() ])
    setTimeout(()=> {
      this.loading = false
    }, 5000)
  },
  components: {
    popup, vHeader,  popupProduct, popupBasket,layoutDefault ,layoutCatalog ,layoutError, vLoaderCircle, vLoaderDnk
  }
}
</script>
<style lang="scss" src="./assets/style/index.scss"/>