<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
    <q-banner class="bg-grey-3">
      <template v-slot:avatar>
        <q-icon name="check" color="primary" />
      </template>
      No more tasks to do
      <template v-slot:action>
        <q-btn
          flat
          color="primary"
          label="Add Task"
          @click="$root.$emit('show-add-task')"
        />
      </template>
    </q-banner>
  </transition>
</template>
