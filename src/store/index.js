import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoListId: "",
    tasks: [],
    task: {}
  },
  mutations: {
    getTodoListId: state => state.todoListId,
    getTasks: state => state.tasks,
    getTask: state => state.task
  },
  actions: {
  },
  modules: {
  }
})
