<template>
  <nav class="nav">
    <ul class="nav__list">
      <li  v-for="category in getCategories" :class="['nav__item', {'nav__item--active': category.id === Number( $route.params.id) }]">
        <router-link :to="forwardLink(category)" class="nav__link" tag="a">{{category.name}}</router-link>
      </li>
      <li  :class="['nav__item', {'nav__item--active': $route.name === 'ui-kit' }]">
        <router-link :to="{name:'ui-kit'}" class="nav__link" tag="a">ui-kit</router-link>
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
  methods: {
    forwardLink(category) {
      return {name: 'category', params: {id: category.id}}
    }
  }

}
</script>
<style lang="scss" src="./navigation.scss" scoped/>