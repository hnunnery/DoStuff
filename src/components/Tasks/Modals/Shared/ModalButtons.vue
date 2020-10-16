<template>
  <q-card-actions align="right">
    <q-btn label="Save" color="primary" @click="submit" />
  </q-card-actions>
</template>

<script>
export default {
  methods: {
    submit() {
      this.$emit("save");
    }
  }
};
</script>
