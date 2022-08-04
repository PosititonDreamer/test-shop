<template>
  <v-form class="form" @submit="createOrder">
    <div class="form__block">
      <v-input class="form__input" :error-text="checkName" type="text" name="Имя" v-model="formData.name" @blur="formCheck.name = true"/>
      <v-input class="form__input" :error-text="checkPhone" type="text" name="Телефон" v-model="formData.phone" v-mask="'+7 (###) ##-##-###'" @blur="formCheck.phone = true"/>
    </div>
    <v-input class="form__input" :error-text="checkAddress" type="text" name="Полный адрес" v-model="formData.address" @blur="formCheck.address = true"/>
    <v-button class="form__button" type="submit" :loading="loading" :disabled="loading">Заказать</v-button>
  </v-form>
</template>
<script>
// components
import vForm from '@/components/ui-kit/v-form/v-form'
import vButton from '@/components/ui-kit/v-button/v-button'
import vInput from '@/components/ui-kit/v-input/v-input'

// vuex
import {mapActions} from "vuex";

export default {
  name: 'basketForm',
  data: ()=>({
    formData: {
      name: '',
      phone: '',
      address: ''
    },
    formCheck: {
      name: false,
      phone: false,
      address: false
    },
    loading: false,
  }),
  computed: {
    checkName() {
      if(this.formData.name.match(/[^a-zA-Zа-яА-Я0-9]/g) && this.formCheck.name) return 'Имя должно быть только из букв'
      if(!this.formData.name.trim() && this.formCheck.name) return 'Имя не должно быть пустым'
      return ''
    },checkPhone() {
      if(this.formData.phone.length !== 18 && this.formCheck.phone) return 'Номер должен быть полный'
      return ''
    },checkAddress() {
      if(this.formData.address.match(/[^a-zA-Zа-яА-Я0-9.,\\/ ]/g) && this.formCheck.address) return 'Имя должно быть только из букв'
      if(!this.formData.address.trim() && this.formCheck.address) return 'Адрес не должен быть пустым'
      return ''
    },
  },
  methods: {
    ...mapActions(['addOrder']),
    createOrder() {
      this.formCheck.name = this.formCheck.address = this.formCheck.phone = true
      if(!this.checkName && !this.checkPhone && !this.checkAddress) {
        this.loading = true
        this.addOrder(this.formData).then(()=>{
          this.$emit('newOrder')
        }).catch(()=> {

        }).finally(()=> {
          this.loading = false
        })
      }
    }
  },
  components: {
    vForm, vButton, vInput
  }
}
</script>
<style lang="scss" src="./form.scss" scoped />