<template>
  <div class="app">
    <router-view></router-view>
<!--    <epet-footer class="footer" v-show="footerShow"></epet-footer>-->
  </div>
</template>

<script>
//  import footer from './components/footer/footer.vue'

  export default {
    data(){
      return{
        footerShow:true
      }
    },
    /*components:{
      'epet-footer':footer
    }*/
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app
  .footer
    height 55px
    background-color: #fff
    width 100%
    position fixed
    bottom 0

</style>
