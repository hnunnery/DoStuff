<template>
  <div class="row">
    <q-input
      outlined
      autofocus
      clearable
      :value="name"
      @input="$emit('update:name', $event)"
      label="Task Name"
      ref="name"
      :rules="[val => !!val || 'Field is required']"
      class="col"
    ></q-input>
  </div>
</template>

<script>
export default {
  props: ["name"]
};
</script>
