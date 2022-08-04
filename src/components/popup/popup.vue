<template>
  <div class="popup" @click="popupClick">
    <div :class="classWrapper" >
      <div class="popup__heading">
        <h3 class="popup__title">{{title}}</h3>
        <button class="popup__close" @click="closePopup" ><close/></button>
      </div>
      <div class="popup__content">
          <slot />
      </div>
    </div>
  </div>
</template>
<script>
// svg
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
    },
    popupClick(e) {
      if(!e.target.closest('.popup__wrapper')) this.closePopup()
    },
    clickEscape(e) {
      if(e.code === 'Escape') this.closePopup()
    }
  },
  computed: {
    classWrapper() {
      return ['popup__wrapper', {'popup__wrapper--close': this.close}]
    }
  },
  mounted() {
    window.addEventListener('keydown', this.clickEscape)
  },
  beforeDestroy() {
    window.removeEventListener('keydown',this.clickEscape)
  },
  components: {
    close
  }
}
</script>
<style lang="scss" src="./popup.scss" scoped/>