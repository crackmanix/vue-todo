<template>
  <b-modal :id="modalId" v-model="modalShow" @cancel="cancel" @ok="validate" cancel-variant="danger"
           ok-variant="success">
    <template v-slot:modal-title>
      Tâche N°{{ task.id }}
    </template>
    <b-form>
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
                             switch
                             size="lg">
            </b-form-checkbox>
          </b-col>
        </b-row>
      </b-container>
    </b-form>
    <template v-slot:modal-ok>
      <b-icon-check></b-icon-check>
      Valider
    </template>
    <template v-slot:modal-cancel>
      <b-icon-exclamation></b-icon-exclamation>
      Annuler
    </template>
  </b-modal>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "taskModal",
  data() {
    return {
      modalShow: false,
      modalId: 'taskModal',
      task: {}
    }
  },
  computed: {
    ...mapGetters(["getTask"])
  },
  methods: {
    ...mapMutations(["setTask"]),
    cancel() {
      this.setTask({});
    },
    validate() {
      this.setTask(this.task);
    }
  },
  watch: {
    getTask: {
      handler() {
        this.task = this.getTask;
      },
      immediate: true
    }
  }
}
</script>

<style scoped>

</style>