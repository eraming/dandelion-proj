import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ToDo from '@/components/ToDo'
import EmployeeTable from '@/components/EmployeeTable.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EmployeeTable',
      component: EmployeeTable
    },

    {
      path: '/todos',
      component: ToDo
    },


  ]
})
