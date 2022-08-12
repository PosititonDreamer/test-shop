<template>
  <div :class="classWrapper">
    <template v-if="receiveReview">
      <reviewPlaced class="form-wrapper__image" />
      <p class="form-wrapper__placed">Отзыв создан</p>
    </template>
    <template v-else>
      <v-form class="form" @submit="createReview">
        <v-rate @rate="formData.rate = $event" />
        <v-input type="text" :error-text="checkAuthor" name="Имя" v-model.trim="formData.author" @blur="formCheck.author = true" />
        <v-textarea name="Отзыв" :error-text="checkReview" v-model.trim="formData.text" @blur="formCheck.text = true"/>
        <v-button type="submit" :loading="loading">Оставить отзыв</v-button>
      </v-form>
  </template>
  </div>
</template>
<script>
// components
import vForm from '@/components/ui-kit/v-form/v-form'
import vInput from '@/components/ui-kit/v-input/v-input'
import vTextarea from '@/components/ui-kit/v-textarea/v-textarea'
import vButton from '@/components/ui-kit/v-button/v-button'
import vRate from '@/components/ui-kit/v-rate/v-rate'

// vuex
import {mapActions} from "vuex";

// svg
import reviewPlaced from '@/assets/img/svg/popup/product/review-placed.svg'

export default {
  name: 'popup-product-tabs-form',
  props: {
    productId: {
      type: Number,
      required: true
    }
  },
  data: ()=>({
    loading: false,
    formData: {
      rate: 0,
      author: '',
      text: '',
      avatar: 'https://loremflickr.com/60/60'
    },
    formCheck: {
      author: false,
      text: false
    },
    receiveReview: false
  }),
  computed: {
    classWrapper() {
      return ['form-wrapper', {'form-wrapper--create': this.receiveReview}]
    },
    checkAuthor() {
      if(this.formData.author.match(/[^a-zA-Zа-яА-Я. ]/g) && this.formCheck.author) return 'Имя должно быть только из букв и точек'
      if(!this.formData.author.trim() && this.formCheck.author) return 'Имя не должно быть пустым'
      return ''
    },
    checkReview() {
      if(this.formData.text.match(/[^a-zA-Zа-яА-Я0-9.,\\/ ]/g) && this.formCheck.text) return 'Адрес может содержать только буквы, цифры и некоторые знаки'
      if(!this.formData.text.trim() && this.formCheck.text) return 'Имя не должно быть пустым'
      return ''
    }
  },
  methods: {
    ...mapActions(['addReview']),
    createReview() {
      let newMassive = JSON.parse(JSON.stringify(this.formData))
      this.formCheck.text = true
      this.formCheck.author = true
      if(!this.checkReview && !this.checkAuthor) {
        this.loading = true
        this.addReview({id: this.productId, data: newMassive})
            .then(()=> {
              this.receiveReview = true
            })
            .finally(()=> {
              this.loading = false
            })
      }
    }
  },
  components: {
    vForm, vInput, vTextarea, vButton, vRate, reviewPlaced
  }
}
</script>
<style lang="scss" src="./popup-product-tabs-form.scss" scoped />