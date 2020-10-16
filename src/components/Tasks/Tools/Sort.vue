<template>
  <q-select
    outlined
    emit-value
    map-options
    v-model="sortBy"
    :options="options"
    label="Sort by"
    class="col q-ml-sm"
  />
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      options: [
        {
          label: "Date",
          value: "dueDate"
        },
        {
          label: "Name",
          value: "name"
        }
      ]
    };
  },
  computed: {
    ...mapState("tasks", ["sort"]),
    sortBy: {
      get() {
        return this.sort;
      },
      set(value) {
        this.setSort(value);
      }
    }
  },
  methods: {
    ...mapActions("tasks", ["setSort"])
  }
};
</script>

<style lang="scss" scoped>
.q-select {
  flex: 0 0 112px;
}
</style>
