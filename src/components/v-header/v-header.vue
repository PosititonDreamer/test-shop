<template>
  <header class="header">
    <router-link class="logo" :to="{name: 'home'}" ><logo/></router-link>
    <v-header-navigation />
    <v-header-basket />
  </header>
</template>
<script>
// components
import vHeaderNavigation from "@/components/v-header/v-header-navigation/v-header-navigation";
import vHeaderBasket from "@/components/v-header/v-header-basket/v-header-basket";

// svg
import logo from "@/assets/img/svg/v-header/logo.svg"

export default {
  name: "v-header",
  components: {
    logo, vHeaderNavigation, vHeaderBasket
  }
}
</script>
<style lang="scss" src="./v-header.scss" scoped  />