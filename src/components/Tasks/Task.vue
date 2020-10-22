<template>
  <q-item
    :class="!task.completed ? 'bg-white-1' : 'bg-green-1'"
    v-ripple
    clickable
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
  >
    <q-item-section side top>
      <q-checkbox :value="task.completed" class="no-pointer-events" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{ 'text-strikethrough': task.completed }">
        {{ task.name }}
      </q-item-label>
    </q-item-section>

    <q-item-section side v-if="taskDueDate">
      <q-icon name="event" size="20px" class="q-mr-xs" />
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <div class="column">
          <q-item-label class="row justify-end" caption>{{
            taskDueDate
          }}</q-item-label>
          <q-item-label class="row justify-end" caption>{{
            taskDueTime
          }}</q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <q-btn
          flat
          round
          dense
          color="primary"
          icon="edit"
          @click.stop="showEditTask = true"
        ></q-btn>
        <q-btn
          flat
          round
          dense
          color="red"
          icon="delete"
          @click.stop="promptToDelete(id)"
        ></q-btn>
      </div>
    </q-item-section>

    <q-dialog v-model="showEditTask">
      <edit-task :task="task" :id="id" @close="showEditTask = false" />
    </q-dialog>
  </q-item>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { date } from "quasar";
const { addToDate } = date;
import EditTask from "components/Tasks/Modals/EditTask.vue";

export default {
  props: ["task", "id"],
  components: {
    EditTask
  },
  data() {
    return {
      showEditTask: false
    };
  },
  computed: {
    taskDueDate() {
      return date.formatDate(this.task.dueDate, "MMM D");
    },
    taskDueTime() {
      return date.formatDate(
        this.task.dueDate + " " + this.task.dueTime,
        "h:mmA"
      );
    }
  },
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),
    promptToDelete(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to delete this task?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.deleteTask(id);
          this.$q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Deleted"
          });
        });
    }
  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, "MMM D");
    }
  }
};
</script>
