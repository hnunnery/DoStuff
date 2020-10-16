<template>
  <q-card class="q-pa-md">
    <modal-header>Edit Task</modal-header>
    <q-card-section>
      <modal-task-name :name.sync="taskToSubmit.name" />
      <modal-due-date :dueDate.sync="taskToSubmit.dueDate" />
      <modal-due-time
        :dueTime.sync="taskToSubmit.dueTime"
        v-if="taskToSubmit.dueDate"
      />
    </q-card-section>

    <modal-buttons @save="submitTask" />
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
  props: ["task", "id"],
  components: {
    ModalHeader,
    ModalTaskName,
    ModalDueDate,
    ModalDueTime,
    ModalButtons
  },
  data() {
    return {
      taskToSubmit: {}
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask"]),
    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      });
      this.$emit("close");
      this.$q.notify({
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        message: "Updated"
      });
    }
  },
  mounted() {
    this.taskToSubmit = Object.assign({}, this.task);
  }
};
</script>
