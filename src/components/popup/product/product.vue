<template>
  <b>Продукт</b>
</template>
<script>
export default {
  name: 'productDetail',
  props: {
    productId: {
      type: Number,
      required: true
    }
  },
  mounted() {
    console.log(this.productId)
  }
}
</script>