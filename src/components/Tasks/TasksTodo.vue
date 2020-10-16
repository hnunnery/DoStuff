<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
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
  </transition>
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
