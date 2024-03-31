<template>
  <div>
    <b-dropdown id="dropdown-1" text="선택하세요" class="m-md-2">
      <b-dropdown-item
        v-for="(item, index) in items"
        :key="index"
        @click="selectItem(item)"
      >
        {{ item }}
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.getters.items;
    },
  },
  methods: {
    selectItem(selectedItem) {
      this.$store.dispatch('setSelectedItem', selectedItem);
    },
  },
};
</script>

<style scoped>
</style>
