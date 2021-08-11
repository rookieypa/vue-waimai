<template>
  <div id="app">
   <router-view/>
   <FooterGuide v-if="$route.meta.showFooter"/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
// import {reqFoodCategorys} from './api'
export default {
  name: 'App',
  components:{
    FooterGuide
  },
  methods:{
    ...mapActions(['getAddress','getUserInfo'])
  },
  mounted(){
    this.getAddress(),
    this.getUserInfo()
  }  
}
</script>

<style lang="stylus">

</style>
