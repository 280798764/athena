import Vue from 'vue'
import VueRouter from 'vue-router'
import personalCenter from '../components/personalCenter/personalCenter.vue'

import myInvoice from '../components/myInvoice/myInvoice.vue'
import invoiceCollection from '../components/invoiceCollection/invoiceCollection.vue'
import invoiceCheck from '../components/invoiceCheck/invoiceCheck.vue'
import editInvoice from '../components/editInvoice/editInvoice.vue'
import invoiceLabel from  '../components/invoiceLabel/invoiceLabel.vue'

Vue.use(VueRouter)


export default new VueRouter ({
 // linkActiveClass:'active',
  routes:[
    {
      path:'/invoiceCollection',
      component:invoiceCollection
    },
    {
      path:'/',
      redirect:'invoiceCollection'
    },
    {
      path:'/myInvoice',
      component:myInvoice  //我的发票
    },

    {
      path:'/personalCenter', //个人中心
      component:personalCenter,
    },

    {
      path:'/invoiceCheck',
      component:invoiceCheck  //发票检查
    },
    {
      path:'/editInvoice',
      component:editInvoice  //编辑发票
    },
    {
      path:'/invoiceLabel',
      component:invoiceLabel  //发票标签
    },
  ],

})
