import Vue from 'vue'
import Router from 'vue-router'
import TaskList from '@/components/v2/TaskList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TaskList',
      component: TaskList
    }
  ]
})
