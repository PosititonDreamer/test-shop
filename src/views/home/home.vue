<template>
    <catalog @openProduct="$emit('openProduct', $event)" />
</template>
<script>
// components
import catalog from '@/components/catalog/catalog'

// vuex
import {mapGetters} from 'vuex'

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
    forwardLinkError(text) {
      this.$router.push({name: 'error', params: {text: text}})
    },
    trackRoute() {
      if(this.$route.name === 'home') this.forwardLinkEmpty()
      if(this.$route.name === 'category') {
        let category = this.getCategories.find(item=> item.id === Number(this.$route.params.id))
        if(category) this.forwardLinkSubCategory()
        else this.forwardLinkError("Данная категория не найдена")
      }
      if(this.$route.name === 'subCategory') {
        let category = this.getCategories.find(item=> item.id === Number(this.$route.params.id))
        let subCategory = this.getSubCategories.find(item=> item.id === Number(this.$route.params.subId))
        if(!category && subCategory) this.forwardLinkError("Данная категория не найдена")
        else if (!category && !subCategory) this.forwardLinkError("Данная категория и подкатегория не найдены")
        else if(category && !subCategory) this.forwardLinkError("Данная подкатегория не найдена")
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