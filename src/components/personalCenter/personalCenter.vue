<template>
  <div class="personalCenter-wrap">
    <h1>个人中心</h1>
    <p>3-0</p>
    <footer>
    <ul>

      <li>
        <router-link to="/invoiceCheck">发票检查</router-link>
      </li>
      <li>
        <router-link to="/editInvoice">编辑发票</router-link>
      </li>
      <li>
        <router-link to="/invoiceLabel">发票标签</router-link>
      </li>


    </ul>

    </footer>

  </div>

</template>

<script>
  export default {


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .personalCenter-wrap
    position absolute
    top 0
    z-index 200
    background-color: #fff
    width 100%
    height 100%
    footer
      position absolute
      bottom 10px
      left 0
      z-index 10
      width 100%
      ul
        li
          color red
          width 30%
          float left
          text-align center


</style>
