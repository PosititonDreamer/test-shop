<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <a class="nav__link">Электроприборы</a>
      </li>
      <li class="nav__item nav__item--active">
        <a class="nav__link">Мебель</a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'navigation'
}
</script>
<style lang="scss" src="./navigation.scss" scoped/>