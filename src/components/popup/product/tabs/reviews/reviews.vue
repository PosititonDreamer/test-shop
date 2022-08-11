<template>
  <div class="reviews">
    <div class="reviews__item" v-for="(review, index) in reviews" :key="index">
      <div class="reviews__image">
        <img :src="review.avatar" alt="">
      </div>
      <div class="reviews__wrapper">
        <div class="reviews__header">
          <p class="reviews__name">{{review.author}}</p>
          <div class="reviews__rating">
            <rating v-for="i in 5" :class="['reviews__rating-img', {'reviews__rating-img--active': i <= review.rate}]" :key="i" />
          </div>
        </div>
        <p class="reviews__text">{{review.text}}</p>
      </div>
    </div>
  </div>
</template>
<script>
// svg
import rating from '@/assets/img/svg/popup/product/rate.svg'
export default {
  name: 'reviews',
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  components: {
    rating
  }
}
</script>
<style lang="scss" src="./reviews.scss" scoped />