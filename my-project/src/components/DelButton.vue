<template>
  <b-button variant="danger" @click="deleteItem" class="del-btn">삭제</b-button>
</template>

<script>
export default {
  props: {
    index: Number,
  },
  methods: {
    deleteItem() {
      this.$emit('delete', this.index);
    },
  },
};
</script>

<style scoped>
.del-btn {
  display: none;
}
</style>