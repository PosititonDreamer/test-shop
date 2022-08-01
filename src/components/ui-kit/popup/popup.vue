<template>
  <div class="popup">
    <div :class="classWrapper">
      <div class="popup__heading">
        <h3 class="popup__title">{{title}}</h3>
        <button class="popup__close" @click="closePopup"><close/></button>
      </div>
      <div class="popup__content">
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
import close from '@/assets/img/svg/popup/close.svg'
export default {
  name: 'popup',
  data: ()=> ({
    close: false
  }),
  props: {
    title: {
      type: String,
      require: true,
    }
  },
  methods: {
    closePopup() {
      this.close = true
      setTimeout(()=> {
        this.$emit('close')
      }, 500)
    }
  },
  computed: {
    classWrapper() {
      return ['popup__wrapper', {'popup__wrapper--close': this.close}]
    }
  },
  components: {
    close
  }
}
</script>
<style lang="scss" src="./popup.scss" scoped/>