<template>
  <div :class="classApp">
    <v-loader-dnk v-if="loading" />
    <template v-else>
      <v-header />
      <component :is="layout">
        <router-view/>
      </component>
    </template>
  </div>
</template>
<script>
// vuex
import {mapActions, mapGetters} from 'vuex'

// components
import vHeader from "@/components/v-header/v-header"
import vLoaderCircle from "@/components/ui-kit/v-loader/v-loader-circle/v-loader-circle";
import vLoaderDnk from "@/components/ui-kit/v-loader/v-loader-dnk/v-loader-dnk";

//layouts
import layoutDefault from '@/layout/layout-default/layout-default'
import layoutCatalog from '@/layout/layout-catalog/layout-catalog'
import layoutError from '@/layout/layout-error/layout-error'

export default {
  name: "app",
  data: () => ({
    loading: true
  }),
  methods: {
    ...mapActions(['searchData', 'searchBasket', 'searchReviews']),
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
    vHeader, layoutDefault ,layoutCatalog ,layoutError, vLoaderCircle, vLoaderDnk
  }
}
</script>
<style lang="scss" src="./assets/style/index.scss"/>