<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
  >
    <div class="q-mt-lg">
      <list-header bgColor="bg-green-4">Completed</list-header>
      <q-list separator bordered>
        <task
          v-for="(task, key) in tasksCompleted"
          :key="key"
          :task="task"
          :id="key"
        />
      </q-list>
    </div>
  </transition>
</template>

<script>
import ListHeader from "components/Shared/ListHeader.vue";
import Task from "components/Tasks/Task.vue";

export default {
  props: ["tasksCompleted"],
  components: {
    ListHeader,
    Task
  }
};
</script>
