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
    setTodoListId(state, todolistId){
      state.todoListId = todolistId;
    },
    setTasks(state, tasks){
      state.tasks = tasks;
    },
    setTask(state, task){
      state.task = task;
    }
  },
  modules: {
  }
})
