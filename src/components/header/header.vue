<template>

  <div class="wrap" >
   <div class="top_wrap"  >
     <!--下载app-->
     <div class="header-wrap" v-show="isShow">
       <div class="download">
         <img src="./banner.png" alt="">
       </div>
       <span @click="hidden"><img src="./closebtn_03.png" alt=""></span>
     </div>

     <!--搜索栏-->
     <div class="search-wrap">
       <span><a href="#" class="dog">狗狗站</a></span>
       <span><a href="#">重庆</a></span>
       <input type="text" placeholder="搜索商品和品牌">
       <span class="r"><img src="./mydope.png" alt=""></span>

     </div>

     <!--tab-->

       <div class="tab" ref="tabDiv" >
         <ul >
           <li class="tab-item " >
             <router-link to="/home/indexPage">首页</router-link>
           </li>
           <li class="tab-item ">
             <router-link to="/home/zhuliang">主粮</router-link>
           </li>
           <li class="tab-item ">
             <router-link to="/home/lingshi">零食玩具</router-link>
           </li>
           <li class="tab-item ">
             <router-link to="/home/riyong">日用外出</router-link>
           </li>
           <li class="tab-item ">
             <router-link to="/home/riyong">日用外出</router-link>
           </li>



           <!--<li class="tab-item "><a href="#" class="current">首页</a></li>
           <li class="tab-item"><a href="#">猫粮</a></li>
           <li class="tab-item"><a href="#">特卖</a></li>
           <li class="tab-item"><a href="#">罐头超市</a></li>
           <li class="tab-item"><a href="#">潮品视频</a></li>
           <li class="tab-item"><a href="#">潮品视频</a></li>
           <li class="tab-item"><a href="#">潮品视频</a></li>
           <li class="tab-item"><a href="#">潮品视频</a></li>
           <li class="tab-item"><a href="#">潮品视频</a></li>-->
         </ul>
       </div>

   </div>

    <div class="router-content" ref="top">
      <router-view></router-view>
    </div>

  </div>




</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    data(){
      return{
        isShow:true
      }
    },

    mounted(){
     this.$nextTick(()=>{
        new BScroll(this.$refs.tabDiv,{
          click:true,
          scrollX:true
        })
     })
    },
    methods:{
      _initScroll(){
       /* new BScroll(this.$refs.tabDiv,{
          click:true,
          scrollX:true

        })*/



      },
      hidden(){
        this.isShow=false

        this.$refs.top.style.marginTop=90+'px'

        /*    .router-content
        margin-top 145px*/

      }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wrap
    position relative
    width 100%
    /*background-color red*/
    .top_wrap
      width 100%
      position fixed
      top 0 px
      left 0
      z-index 100
      background-color: #fff
      border-bottom 1px solid gainsboro
      .header-wrap
        /*margin-top 150px*/
        .download
          height 55px
          width 100%
          overflow hidden
          img
            width 100%
        & > span
          position absolute
          top 17px
          left 10px
          display inline-block
          height 15px
          width 15px
          img
            width 100%
            height 100%

      .search-wrap
        position relative
        height 50px
        line-height 50px
        /*background-color: yellow*/
        width 100%
        span
          display inline-block
          font-size 15px
          color #7e8c8d
          /*padding 3px*/
          a
            &.dog
              border-right 2px solid gray
              padding 0 6px

        input
          width 62%
          height 25px
          background-color: gainsboro
          border-radius 5px
          font-size 14px
          padding-left 10px
          background-image: url('search.png')
          background-size 11px 11px
          background-repeat no-repeat
          background-position 98% 50%
          outline none
        .r
          position absolute
          top 5px
          right 14px
          height 24px
          width 24px
          img
            width 100%
      .tab
        /*overflow hidden*/
        /*overflow-x auto*/

        /*display flex*/
        /*background-color: pink*/
        /*overflow hidden*/
        ul
          display flex
          white-space nowrap
          height 38px
          line-height 38px
          width 120%
          .tab-item
            flex 1
            /*float left*/
            text-align center
            width 0
            .current
              border-bottom 2px solid green
            a
              display inline-block
              height 100%
              position 10px

              &.current
                color red



    .router-content
      margin-top 145px
</style>
