<template>
  <q-card class="q-pa-md">
    <modal-header>Add Task</modal-header>
    <q-card-section>
      <modal-task-name :name.sync="taskToSubmit.name"></modal-task-name>
      <modal-due-date :dueDate.sync="taskToSubmit.dueDate"></modal-due-date>
      <modal-due-time
        :dueTime.sync="taskToSubmit.dueTime"
        v-if="taskToSubmit.dueDate"
      ></modal-due-time>
    </q-card-section>

    <modal-buttons @save="submitTask"></modal-buttons>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
import ModalHeader from "components/Tasks/Modals/Shared/ModalHeader.vue";
import ModalTaskName from "components/Tasks/Modals/Shared/ModalTaskName.vue";
import ModalDueDate from "components/Tasks/Modals/Shared/ModalDueDate.vue";
import ModalDueTime from "components/Tasks/Modals/Shared/ModalDueTime.vue";
import ModalButtons from "components/Tasks/Modals/Shared/ModalButtons.vue";

export default {
  components: {
    ModalHeader,
    ModalTaskName,
    ModalDueDate,
    ModalDueTime,
    ModalButtons
  },
  data() {
    return {
      taskToSubmit: {
        name: "",
        dueDate: "",
        dueTime: "",
        completed: false
      }
    };
  },
  methods: {
    ...mapActions("tasks", ["addTask"]),
    submitTask() {
      this.addTask(this.taskToSubmit);
      this.$emit("close");
      this.$q.notify({
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        message: "Saved"
      });
    }
  }
};
</script>
