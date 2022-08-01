<template>
  <header class="header">
    <div class="logo">
      <logo/>
    </div>
    <navigation />
    <basket @openBasket="$emit('openBasket')" />
  </header>
</template>
<script>
// components
import navigation from "@/components/v-header/navigation/navigation";
import basket from "@/components/v-header/basket/basket";

// svg
import logo from "@/assets/img/svg/header/logo.svg"

export default {
  name: "headerVue",
  components: {
    logo, basket, navigation
  }
}
</script>
<style lang="scss" src="./v-header.scss" scoped  />