<template>
  <section class="home">
      <template v-if="error">
        НИХУЯ НЕТ
      </template>
    <catalog v-else-if="!error && getSubCategories.length" @openProduct="$emit('openProduct', $event)" />
  </section>
</template>
<script>
import {mapGetters} from 'vuex'
import catalog from '@/components/catalog/catalog'

export default {
  name: 'home',
  data: ()=>({
    error: false,
  }),
  computed: {
    ...mapGetters(['getCategories', 'getSubCategories'])
  },
  methods: {
    forwardLinkEmpty() {
      let category = this.getCategories[0];
      let subCategory = this.getSubCategories.find(item => item.parent_id === category.id)
      this.$router.push({name: 'subCategory', params: {id: category.id, subId: subCategory.id}} )
    },
    forwardLinkSubCategory() {
      let category = this.getCategories.find(item=> item.id === Number(this.$route.params.id))
      let subCategory = this.getSubCategories.find(item => item.parent_id === category.id)
      this.$router.push({name: 'subCategory', params: { subId: subCategory.id}} )
    },
    forwardLinkError() {
      this.$router.push({name: 'errorCategory'})
    },
    trackRoute() {
      if(this.$route.name === 'home') this.forwardLinkEmpty()
      if(this.$route.name === 'category') {
        let category = this.getCategories.find(item=> item.id === Number(this.$route.params.id))
        if(category) this.forwardLinkSubCategory()
        else this.forwardLinkError()
      }
    },
  },
  mounted() {
    this.trackRoute()
  },
  watch: {
    $route() {
      this.trackRoute()
    }
  },
  components: {
    catalog
  }

}
</script>
<style lang="scss" src="./home.scss" scoped />