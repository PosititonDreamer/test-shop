<template>
  <div class="tabs" >
    <div class="tabs__list">
      <div  v-for="(tab, index) in tabs" :class="classItem(tab)" @click="changeTab(index)" :key="index">{{tab.title}}</div>
    </div>
    <slot  />
  </div>
</template>
<script>

export default {
  name: 'v-tabs',
  data:()=>({
    activeIndex: 0,
    tabs: []
  }),
  methods: {
    changeTab(indexTab = 0) {
      this.activeIndex = indexTab
      this.$children.forEach((item, index)=> {
        item.isActive = index === this.activeIndex
      })
      this.tabs = this.$children.map((item)=> {
        return {isActive: item.isActive, title: item.title}
      })
    },
    classItem(tab) {
      return ['tabs__item', {'tabs__item--active': tab.isActive}]
    }
  },
  mounted() {
    this.changeTab()
  },
}
</script>