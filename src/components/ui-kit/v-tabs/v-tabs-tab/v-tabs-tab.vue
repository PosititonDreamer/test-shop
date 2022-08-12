<template>
  <div class="tab" v-if="isActive">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'v-tab',
  data: ()=>({
    isActive: false
  }),
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>