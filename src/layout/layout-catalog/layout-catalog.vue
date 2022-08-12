<template>
  <section class="catalog">
    <sidebar/>
    <template v-if="!getProducts.length">
      ЖДИ ИДЕТ ЗАГРУЗКА
    </template>
    <slot />
  </section>
</template>
<script>
// vuex
import {mapGetters} from 'vuex'

// components
import sidebar from "@/components/sidebar/sidebar";

export default {
  name: 'layout-catalog',
  computed: {
    ...mapGetters(['getProducts'])
  },
  components: {
    sidebar
  }
}
</script>
<style lang="scss" src="./layout-catalog.scss" scoped />