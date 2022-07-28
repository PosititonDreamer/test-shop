<template>
  <div id="app">
    <v-header/>
    <main class="main">
      <sidebar/>
      <template v-if="!getProducts.length">
        ЖДИ ИДЕТ ЗАГРУЗКА
      </template>
      <router-view v-else />
    </main>
  </div>
</template>
<script>
import vHeader from "@/components/v-header/v-header"
import sidebar from "@/components/sidebar/sidebar"
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "app",
  methods: {
    ...mapActions(['searchData'])
  },
  computed: {
    ...mapGetters(['getProducts'])
  },
  mounted() {
    this.searchData()
  },
  components: {
    vHeader, sidebar
  }
}
</script>
<style lang="scss" src="./assets/style/index.scss"/>