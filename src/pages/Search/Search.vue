<!--  -->
<template>
  <section class="search">
  
    <HeaderTop title="搜索" />
    <form class="search_form" action="#" @submit.prevent="search">
      <input
        type="search"
        name="search"
        placeholder="请输入商家或美食名称"
        class="search_input"
        v-model="keyword"
      />
      <input type="submit" name="submit" class="search_submit" />
    </form>
  </section>
</template>

<script>
import {mapState} from 'vuex'
import HeaderTop from '../../components/HeaderTop/HeaferTop.vue'
import {reqSearchShops} from '../../api'
export default {
  data() {
    return {
      keyword:''
    };
  },

  components: {
    HeaderTop
  },

  computed: {
    ...mapState(['searchShops'])
  },

  mounted: {},

  methods: {
    search(){
      const keyword=this.keyword.trim()
      if(keyword){
        this.$store.dispatch('searchShop',keyword)
      }
    }
  },
};
</script>
<style lang='stylus' scoped>
@import "../../common/stylus/mixins.styl"
  .search  //搜索
    width 100%
    overflow hidden
    .search_form
      clearFix()
      margin-top 45px
      background-color #fff
      padding 12px 8px
      input
        height 35px
        padding 0 4px
        border-radius 2px
        font-weight bold
        outline none
        &.search_input
          float left
          width 79%
          border 4px solid #f2f2f2
          font-size 14px
          color #333
          background-color #f2f2f2
        &.search_submit
          float right
          width 18%
          border 4px solid #02a774
          font-size 16px
          color #fff
          background-color #02a774
</style>