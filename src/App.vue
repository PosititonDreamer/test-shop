<template>
  <div id="app">
    <v-header @openBasket="openPopup('basket','Оформить заказ')"/>
    <main class="main">
      <sidebar/>
      <template v-if="!getProducts.length">
        ЖДИ ИДЕТ ЗАГРУЗКА
      </template>
      <router-view v-else />
    </main>
    <popup v-if="popup" @close="closePopup" :title="popupType">

    </popup>
  </div>
</template>
<script>
import vHeader from "@/components/v-header/v-header"
import sidebar from "@/components/sidebar/sidebar"
import {mapActions, mapGetters} from 'vuex'
import Popup from "@/components/ui-kit/popup/popup";

export default {
  name: "app",
  data: ()=> ({
    popup: null,
    popupType: null
  }),
  methods: {
    ...mapActions(['searchData']),
    closePopup() {
      this.popup = this.popupType = null
    },
    openPopup(name, title) {
      this.popup = name
      this.popupType = title
    }
  },
  computed: {
    ...mapGetters(['getProducts'])
  },
  mounted() {
    this.searchData()
  },
  components: {
    Popup,
    vHeader, sidebar
  }
}
</script>
<style lang="scss" src="./assets/style/index.scss"/>