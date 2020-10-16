<template>
  <div>
    <list-header bgColor="bg-primary">Todo</list-header>
    <q-list separator bordered>
      <task
        v-for="(task, key) in tasksTodo"
        :key="key"
        :task="task"
        :id="key"
      ></task>
    </q-list>
  </div>
</template>

<script>
import ListHeader from "components/Shared/ListHeader.vue";
import Task from "components/Tasks/Task.vue";

export default {
  props: ["tasksTodo"],
  components: {
    ListHeader,
    Task
  }
};
</script>
