<template>
  <b-modal id="taskModal" v-model="modalShow">
    <template v-slot:modal-title>
      Tâche N°{{taskId}}
    </template>
    <b-container fluid>
      <b-row>
        <b-col>
          <label for="titre">Titre de la tâche</label>
          <b-form-input id="titre"
                        v-model="taskTitle"
                        placeholder="Acheter des pâtes ...">
          </b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <label for="description">Description de la tâche</label>
          <b-form-textarea id="description"
                           v-model="taskDescription"
                           placeholder="Acheter des linguines et de la sauce carbonara."
                           rows="3"
                           max-rows="6">
          </b-form-textarea>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <label for="etat">Tâche accomplie ?</label>
          <b-form-checkbox id="etat"
                           v-model="taskCompleted"
                           :value="true"
                           :unchecked-value="false">
          </b-form-checkbox>
        </b-col>
      </b-row>
    </b-container>
    <template v-slot:modal-footer>
      <b-button variant="success">
        <b-icon-check></b-icon-check> Valider
      </b-button>
      <b-button variant="danger">
       <b-icon-exclamation></b-icon-exclamation> Annuler
      </b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "taskModal",
  props: ['task'],
  data() {
    return {
      modalShow: false,
      taskTitle: this.task.taskTitle,
      taskDescription: this.task.description,
      taskCompleted: this.task.completed
    }
  },
  computed: {
    taskId() {
      return 'modal-' + this.task.taskId;
    }
  },
  methods: {
    hideModal() {
      this.$refs['taskModal'].hide();
    }
  }
}
</script>

<style scoped>

</style>