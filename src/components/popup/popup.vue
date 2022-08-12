<template>
  <teleport to="body">
    <div class="popup" @click="closePopup">
      <div :class="classWrapper" @click.stop>
        <div class="popup__heading">
          <h3 class="popup__title">{{title}}</h3>
          <button class="popup__close" @click="closePopup" ><close/></button>
        </div>
        <div class="popup__content">
          <simplebar class="popup__scroll" data-simplebar-auto-hide="false">
            <slot />
          </simplebar>
        </div>
      </div>
    </div>
  </teleport>
</template>
<script>
// svg
import close from '@/assets/img/svg/popup/close.svg'

// component
import simplebar from 'simplebar-vue';
import teleport from 'vue2-teleport'

export default {
  name: 'popup',
  data: ()=> ({
    close: false
  }),
  props: {
    title: {
      type: String,
      required: true,
    }
  },
  methods: {
    closePopup() {
      this.close = true
      setTimeout(()=> {
        this.$emit('closePopup')
      }, 500)
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
    close, simplebar, teleport
  }
}
</script>
<style lang="scss" src="./popup.scss" scoped/>