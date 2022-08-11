<template>
  <div class="tab" v-if="isActive">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'vTab',
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