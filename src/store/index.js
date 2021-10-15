import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoListId: "",
    tasks: [],
    task: {}
  },
  getters: {
    getTodoListId: state => state.todoListId,
    getTasks: state => state.tasks,
    getTask: state => state.task
  },
  mutations: {
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
  actions: {
  }
})
