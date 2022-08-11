<template>
  <div class="rating">
    <p class="rating__name">Оценка</p>
    <div class="rating__wrapper">
      <button type="button" v-for="i in 5" :class="classButton(i)" @click="changeRate(i)" @mouseenter="hoverRate(i)" @mouseleave="hoverRate(0)">
        <rate />
      </button>
    </div>
  </div>
</template>
<script>
// svg
import rate from '@/assets/img/svg/popup/product/rate.svg'

export default {
  name: 'rating',
  data:()=>({
    rating: 0,
    ratingHover: null
  }),
  methods: {
    changeRate(rate) {
      this.rating = rate
      this.$emit('rate', this.rating)
    },
    hoverRate(rate) {
      this.ratingHover = rate
    },
    classButton(i) {
      return ['rating__button', {'rating__button--active': i <= this.rating, 'rating__button--hover': i<=this.ratingHover}]
    }
  },
  components: {
    rate
  }
}
</script>
<style lang="scss" src="./v-rate.scss" scoped />