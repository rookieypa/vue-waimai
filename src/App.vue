<template>
  <div id="app">
   <router-view/>
   <FooterGuide v-if="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  name: 'App',
  components:{
    FooterGuide
  }
}
</script>

<style lang="stylus">

</style>
