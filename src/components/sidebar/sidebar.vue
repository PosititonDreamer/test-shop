<template>
  <div class="sidebar">
    <nav class="sidebar-nav">
      <ul class="sidebar-nav__list">
        <li v-for="category in subCategories" :class="[['sidebar-nav__item'], {'sidebar-nav__item--active': category.id === Number($route.params.subId)}]" :key="category.id">
          <router-link class="sidebar-nav__link" :to="forwardLink(category)"> {{category.name}} </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'sidebar',
  computed: {
    ...mapGetters(['getSubCategories']),
    subCategories() {
      return this.getSubCategories.filter(item => item.parent_id === Number(this.$route.params.id))
    },
  },
  methods: {
    forwardLink(category) {
      return {name: 'subCategory', params: {subId: category.id}}
    }
  }
}
</script>
<style lang="scss" src="./sidebar.scss" scoped/>