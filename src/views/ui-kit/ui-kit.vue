<template>
  <section class="ui-kit">
    <div class="ui-kit__item">
      <v-button>Добавить в корзину</v-button>
      <v-button disabled>Добавить в корзину</v-button>
      <v-button disabled loading>Добавить в корзину</v-button>
    </div>
  </section>
</template>
<script>
import vButton from "@/components/ui-kit/v-button/v-button";
export default {
  name: 'ui-kit', components: {
    vButton
  }
}
</script>
<style lang="scss" src="./ui-kit.scss" scoped/>