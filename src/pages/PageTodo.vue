<template>
  <q-page class="q-pa-md">
    <q-list separator bordered>
      <q-item
        v-for="task in tasks"
        :key="task.id"
        :class="!task.completed ? 'bg-white-1' : 'bg-green-1'"
        v-ripple
        clickable
        @click="task.completed = !task.completed"
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label :class="{ 'text-strikethrough': task.completed }">
            {{ task.name }}
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="row">
            <div class="column justify-center">
              <q-icon name="event" size="20px" class="q-mr-xs" />
            </div>
            <div class="column">
              <q-item-label class="row justify-end" caption>{{
                task.dueDate
              }}</q-item-label>
              <q-item-label class="row justify-end" caption>{{
                task.dueTime
              }}</q-item-label>
            </div>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "Go to Shop",
          completed: false,
          dueDate: "2019/05/14",
          dueTime: "18:30"
        },
        {
          id: 2,
          name: "Eat Lunch",
          completed: false,
          dueDate: "2019/05/12",
          dueTime: "14:30"
        },
        {
          id: 3,
          name: "Brush Teeth",
          completed: true,
          dueDate: "2019/05/13",
          dueTime: "16:30"
        }
      ]
    };
  }
};
</script>
