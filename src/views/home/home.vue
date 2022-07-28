<template>
  <section class="home">
      <template v-if="error">
        НИХУЯ НЕТ
      </template>
    <template v-else-if="!error && getSubCategories.length">
      {{getSubCategories}}
    </template>
  </section>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  name: 'home',
  data: ()=>({
    error: false
  }),
  computed: {
    ...mapGetters(['getCategories', 'getSubCategories'])
  },
  mounted() {
    if (!this.$route.params.id || !this.$route.params.subId) {
      let category = Number( this.$route.params.id);
      let subCategory = Number( this.$route.params.subId);
      if (category && !subCategory) {

        let subCategories = this.getSubCategories.filter(item=>item.parent_id === category)
        if(subCategories.length) {
          subCategory = subCategories[0].id
          this.$router.push('/' + category + '/' + subCategory)
        } else this.error = true
      } else {
        category = this.getCategories[0].id
        subCategory = this.getSubCategories.find(item=> item.parent_id === category)
        this.$router.push('/'+ category + '/' + subCategory)
      }
    }
  }
}
</script>
<style lang="scss" src="./home.scss" scoped />