<template>
  <div>
    <h1>发票归集</h1>
    <p>1-0</p>
    <p>1-1</p>

    <div class="bottomNav">
      <ul>
        <li>
          <router-link to="invoiceCollection">发票归集</router-link>
        </li>
        <li>
          <router-link to="/myInvoice">我的发票</router-link>
        </li>
        <li>
          <router-link to="/personalCenter">个人中心</router-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>


  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .bottomNav
    position absolute
    bottom 10px
    width 100%
    /*background-color: red*/
    height 40px
    line-height 40px
    color gold
    li
      width 30%
      float left
      text-align center



</style>
