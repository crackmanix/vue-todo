<template>
  <b-modal :id="getModalId" v-model="modalShow">
    <template v-slot:modal-title>
      Tâche N°{{task.id}}
    </template>
    <b-container fluid>
      <b-row>
        <b-col>
          <label for="titre">Titre de la tâche</label>
          <b-form-input id="titre"
                        v-model="task.title"
                        placeholder="Acheter des pâtes ...">
          </b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <label for="description">Description de la tâche</label>
          <b-form-textarea id="description"
                           v-model="task.description"
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
                           v-model="task.completed"
                           :value="true"
                           :unchecked-value="false"
                           switch
                           size="lg">
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
      modalShow: false
    }
  },
  computed:{
    getModalId(){
      return 'taskModal' + this.task.id;
    }
  },
  methods: {
    hideModal() {
      this.$refs[this.getModalId].hide();
    }
  }
}
</script>

<style scoped>

</style>