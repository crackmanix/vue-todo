<template>
  <b-container fluid>
    <b-row>
      <b-col class="text-center">
        <top/>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="text-center">
        <b-button variant="success" class="m-3">Add Task</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="text-center">
        <b-table hover striped :fields="fields" :items="todoList">
          <template v-slot:cell(completed)="data">
            <b-icon-check-circle-fill variant="success" v-if="data.value" :title="data.value.toString()"></b-icon-check-circle-fill>
            <b-icon-exclamation-circle-fill variant="danger" v-else :title="data.value.toString()"></b-icon-exclamation-circle-fill>
          </template>
          <template v-slot:cell(actions)="">
            <b-button variant="warning">Update</b-button>
            <b-button variant="danger">Delete</b-button>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import top from '@/components/top.vue'
import todolistService from "@/services/todoListService";

export default {
  name: 'Home',
  components: {
    top
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
  asyncComputed: {
    todoList: {
      get() {
        return todolistService
            .getTodoList()
            .then(response => response.data);
      },
      default() {
        return [
            {completed: true, description: 40, title: 'Dickerson'},
            {completed: false, description: 21, title: 'Larsen'},
            {completed: false, description: 89, title: 'Geneva'},
            {completed: true, description: 38, title: 'Jami'}
        ];
      }
    }
  }
}
</script>
