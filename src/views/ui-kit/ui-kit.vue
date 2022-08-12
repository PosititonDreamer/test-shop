<template>
  <section class="ui-kit">
    <div class="ui-kit__item">
      <v-button>Добавить в корзину</v-button>
      <v-button loading>Добавить в корзину</v-button>
    </div>
    <div class="ui-kit__item">
      <v-input error-text="Имя обязательно для заполнения" type="text" name="Имя"  />
      <v-input error-text="Имя обязательно для заполнения" type="text" name="Имя" error/>
    </div>
  </section>
</template>
<script>
import vButton from "@/components/ui-kit/v-button/v-button";
import vInput from "@/components/ui-kit/v-input/v-input";
import vTextarea from "@/components/ui-kit/v-textarea/v-textarea";
export default {
  name: 'ui-kit', components: {
    vButton, vInput, vTextarea
  }
}
</script>
<style lang="scss" src="./ui-kit.scss" scoped/>