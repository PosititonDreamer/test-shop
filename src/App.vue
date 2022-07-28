<template>
  <div id="app">
    <v-header/>
    <main class="main">
      <sidebar/>
      <router-view/>
    </main>
  </div>
</template>
<script>
import vHeader from "@/components/v-header/v-header"
import sidebar from "@/components/sidebar/sidebar"

export default {
  name: "app", components: {
    vHeader, sidebar
  }
}
</script>
<style lang="scss" src="./assets/style/index.scss"/>