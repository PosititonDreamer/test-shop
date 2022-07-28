<template>
  <nav class="nav">
    <ul class="nav__list">

      <li  v-for="category in getCategories" :class="['nav__item', {'nav__item--active': category.id === Number( $route.params.id) }]">
        <router-link :to="'/' + category.id" class="nav__link" tag="a">{{category.name}}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  name: 'navigation',
  computed: {
    ...mapGetters(['getCategories']),
  },

}
</script>
<style lang="scss" src="./navigation.scss" scoped/>