<template>
  <b-container fluid>
    <b-row>
      <b-col class="text-center">
        <span class="display-3">To-Do <b-icon-file-text-fill style="color: royalblue;"></b-icon-file-text-fill></span>
        <br>
        <span class="p-3">Get it done now or never...</span>
        <hr class="my-4">
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table hover striped :fields="fields" :items="items"></b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      fields: [
        {key: 'title', label: 'Title'},
        {key: 'description', label: 'Task Description'},
        {key: 'completed', label: 'Task Completed'},
        'Actions'
      ],
      items: [
        {completed: true, description: 40, title: 'Dickerson'},
        {completed: false, description: 21, title: 'Larsen'},
        {completed: false, description: 89, title: 'Geneva'},
        {completed: true, description: 38, title: 'Jami'}
      ]
    }
  }
}
</script>

<style scoped></style>
