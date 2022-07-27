<template>
  <section class="ui-kit">
    <headerVue />
    <div class="ui-kit__item">
        <buttonVue>Добавить в корзину</buttonVue>
        <buttonVue disabled>Добавить в корзину</buttonVue>
        <buttonVue disabled loading>Добавить в корзину</buttonVue>
    </div>
  </section>
</template>
<script>
import buttonVue from "@/components/ui-kit/button/button";
import headerVue from "@/components/header/header";
export default {
  name: 'ui-kit',
  components: {
    buttonVue,headerVue
  }
}
</script>
<style lang="scss" src="./ui-kit.scss" scoped />