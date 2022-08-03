<template>
  <div id="app">
    <v-header @openBasket="openPopup('popupBasket','Оформить заказ')"/>
    <main class="main">
      <sidebar/>
      <template v-if="!getProducts.length">
        ЖДИ ИДЕТ ЗАГРУЗКА
      </template>
      <router-view v-else @openProduct="openPopup('popupProduct', 'Информация', $event)" />
    </main>
    <popup v-if="popup" @close="closePopup" :title="popupType" >
      <component
        :is="popup"
        :productId="productId"
      />
    </popup>
  </div>
</template>
<script>
import vHeader from "@/components/v-header/v-header"
import sidebar from "@/components/sidebar/sidebar"
import {mapActions, mapGetters} from 'vuex'
import Popup from "@/components/popup/popup";
import popupProduct from '@/components/popup/product/product'
import popupBasket from '@/components/popup/basket/basket'

export default {
  name: "app", data: () => ({
    popup: null, popupType: null, productId: null
  }), methods: {
    ...mapActions(['searchData', 'searchBasket']), closePopup() {
      this.popup = this.popupType = null
    }, openPopup(name, title, id = null) {
      this.popup = name
      this.popupType = title
      this.productId = id ? id : null
    }
  }, computed: {
    ...mapGetters(['getProducts'])
  }, mounted() {
    this.searchData()
    this.searchBasket()
  }, components: {
    Popup, vHeader, sidebar, popupProduct, popupBasket
  }
}
</script>
<style lang="scss" src="./assets/style/index.scss"/>