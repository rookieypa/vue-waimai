<template>
  <div id="app">
   <router-view/>
   <FooterGuide v-if="$route.meta.showFooter"/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  name: 'App',
  components:{
    FooterGuide
  },
  methods:{
    ...mapActions(['getAddress'])
  }
    
}
</script>

<style lang="stylus">

</style>
