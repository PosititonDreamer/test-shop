<template>
  <div :class="classNotification">
    <component :is="vImage" />
    <p class="notification__text">{{text}}</p>
  </div>
</template>
<script>
import arrow from '@/assets/img/svg/notifictaion/arrow.svg'
import cart from '@/assets/img/svg/notifictaion/cart.svg'

export default {
  name: 'v-notification',
  props: {
    vImage: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  computed: {
    classNotification() {
      return ['notification', {'notification--translate': this.vImage === 'arrow'}]
    }
  },
  components: {
    arrow, cart
  }
}
</script>
<style lang="scss" src="./v-notification.scss" scoped />