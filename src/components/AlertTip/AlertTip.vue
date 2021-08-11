<template>
  <div class="alert_container">
      <section class="tip_text_container">
          <div class="tip_icon">
              <span></span>
              <span></span>
          </div>
          <p class="tip_text">{{alertText}}</p>
          <div class="confirm" @click="closeTip">确认</div>
      </section>

  </div>
</template>

<script>
export default {
    props:{
        alertText:String
    },
    methods:{
        closeTip(){
            this.$emit('closeTip')
        }
    }
}
</script>

<style lang="stylus">

</style>