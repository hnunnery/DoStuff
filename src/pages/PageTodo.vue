<template>
  <q-page class="q-pa-md">
    <no-tasks v-if="!Object.keys(tasksTodo).length" />
    <tasks-todo v-else :tasksTodo="tasksTodo" />
    <tasks-completed
      :tasksCompleted="tasksCompleted"
      v-if="Object.keys(tasksCompleted).length"
    />

    <div class="absolute-bottom-right text-center q-mb-lg q-mr-lg">
      <q-btn
        round
        color="primary"
        size="24px"
        icon="add"
        @click="showAddTask = true"
      />
    </div>

    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import TasksTodo from "components/Tasks/TasksTodo.vue";
import TasksCompleted from "components/Tasks/TasksCompleted.vue";
import NoTasks from "components/Tasks/NoTasks.vue";
import AddTask from "components/Tasks/Modals/AddTask.vue";

export default {
  components: {
    TasksTodo,
    TasksCompleted,
    NoTasks,
    AddTask
  },
  data() {
    return {
      showAddTask: false
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted"])
  },
  mounted() {
    this.$root.$on("show-add-task", () => {
      this.showAddTask = true;
    });
  }
};
</script>
