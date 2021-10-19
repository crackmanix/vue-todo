<template>
  <b-container fluid>
    <b-row>
      <b-col class="text-center">
        <Top/>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="text-center">
        <b-button variant="success" class="m-3" @click="addTask()">
          <b-icon-bookmark-plus-fill></b-icon-bookmark-plus-fill>
          Add Task
        </b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="text-center">
        <b-table hover striped :fields="fields" :items="todoList">
          <template v-slot:cell(completed)="data">
            <b-icon-check-circle-fill variant="success" v-if="data.value"
                                      :title="data.value.toString()"></b-icon-check-circle-fill>
            <b-icon-exclamation-circle-fill variant="danger" v-else
                                            :title="data.value.toString()"></b-icon-exclamation-circle-fill>
          </template>
          <template v-slot:cell(actions)="data">
            <b-button variant="warning" @click="updateTask(data.item)" class="mr-2">
              <b-icon-pencil-fill></b-icon-pencil-fill>
              Update
            </b-button>
            <b-button variant="danger" class="ml-2">
              <b-icon-trash-fill></b-icon-trash-fill>
              Delete
            </b-button>
          </template>
        </b-table>
      </b-col>
    </b-row>
    <task-modal></task-modal>
  </b-container>
</template>

<script>
import Top from '@/components/top'
import todolistService from "@/services/todoListService";
import TaskModal from "@/components/taskModal";
import {mapGetters, mapMutations} from "vuex";

export default {
  name: 'Home',
  components: {
    TaskModal,
    Top
  },
  data() {
    return {
      fields: [
        {key: 'title', label: 'Title'},
        {key: 'description', label: 'Task Description'},
        {key: 'completed', label: 'Task Completed'},
        'Actions'
      ]
    }
  },
  computed:{
    ...mapGetters(["getTask"])
  },
  asyncComputed: {
    todoList: {
      get() {
        return todolistService
            .getTodoList()
            .then(response => response.data);
      },
      default() {
        return [
          {id: 1, completed: true, description: 40, title: 'Dickerson'},
          {id: 2, completed: false, description: 21, title: 'Larsen'},
          {id: 3, completed: false, description: 89, title: 'Geneva'},
          {id: 4, completed: true, description: 38, title: 'Jami'}
        ];
      }
    }
  },
  methods:{
    ...mapMutations(["setTask"]),
    addTask(){
      this.setTask({id: null});
      this.$bvModal.show('taskModal');
    },
    updateTask(task){
      this.setTask({...task});
      this.$bvModal.show('taskModal');
    }
  }
}
</script>
