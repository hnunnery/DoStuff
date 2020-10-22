<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">
      <div class="row q-mb-lg">
        <search />
        <sort />
      </div>
      <p
        v-if="
          !Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length
        "
      >
        No search results.
      </p>

      <!-- <q-scroll-area class="q-scroll-area-tasks"> -->
      <no-tasks v-if="!Object.keys(tasksTodo).length && !search" />
      <tasks-todo v-if="Object.keys(tasksTodo).length" :tasksTodo="tasksTodo" />
      <tasks-completed
        :tasksCompleted="tasksCompleted"
        v-if="Object.keys(tasksCompleted).length"
        class="q-mb-xl"
      />
      <!-- </q-scroll-area> -->

      <div class="absolute-bottom-right text-center q-mb-lg q-mr-lg">
        <q-btn
          round
          color="primary"
          size="24px"
          icon="add"
          @click="showAddTask = true"
        />
      </div>
    </div>

    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import TasksTodo from "components/Tasks/TasksTodo.vue";
import TasksCompleted from "components/Tasks/TasksCompleted.vue";
import NoTasks from "components/Tasks/NoTasks.vue";
import AddTask from "components/Tasks/Modals/AddTask.vue";
import Search from "components/Tasks/Tools/Search.vue";
import Sort from "components/Tasks/Tools/Sort.vue";

export default {
  components: {
    TasksTodo,
    TasksCompleted,
    NoTasks,
    AddTask,
    Search,
    Sort
  },
  data() {
    return {
      showAddTask: false
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted"]),
    ...mapState("tasks", ["search"])
  },
  mounted() {
    this.$root.$on("show-add-task", () => {
      this.showAddTask = true;
    });
  }
};
</script>

<style lang="scss">
.q-scroll-area-tasks {
  display: flex;
  flex-grow: 1;
}
</style>
