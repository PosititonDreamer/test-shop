<template>
  <fragment>
    <button class="basket" @click="openPopup = true">
      <cart/>
      <span class="basket__count" v-if="getBasket.length">{{ getBasket.length }}</span>
    </button>
    <popup title="Оформить заказ" v-if="openPopup" @closePopup="openPopup = false">
      <popup-basket/>
    </popup>
  </fragment>
</template>
<script>
// svg
import cart  from "@/assets/img/svg/v-header/cart.svg"

// vuex
import {mapGetters} from 'vuex'

// components
import popup from "@/components/popup/popup";
import popupBasket from "@/components/popup/popup-basket/popup-basket";


export default {
  name: 'v-header-basket',
  data: ()=>({
    openPopup: false
  }),
  computed: {
    ...mapGetters(['getBasket'])
  },
  components: {
    cart,popup ,popupBasket
  }

}
</script>
<style lang="scss" src="./v-header-basket.scss" scoped />