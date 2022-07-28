<template>
  <header class="header">
    <div class="logo">
      <logo/>
    </div>
    <navigation />
    <div class="header-cart">
      <cart/>
      <span class="header-cart__count">10</span>
    </div>
  </header>
</template>
<script>
import logo from "@/assets/img/svg/header/logo.svg"
import cart  from "@/assets/img/svg/header/cart.svg"

import navigation from "@/components/v-header/navigation/navigation";

export default {
  name: "headerVue",
  components: {
    logo, cart, navigation
  }
}
</script>
<style lang="scss" src="./v-header.scss" scoped  />