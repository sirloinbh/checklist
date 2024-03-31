<template>
  <div>
    <b-list-group>
      <b-form-checkbox-group 
        v-model="selectedItems"
        class="d-flex flex-column align-items-start"
      >
        <b-list-group-item
          v-for="(item, index) in items"
          :key="index"
          class="d-flex justify-content-between align-items-center item"
        >
          <b-form-checkbox :value="item">
            <span class="number">{{ index + 1 }}.</span> {{ item }}
          </b-form-checkbox>
          <del-button :index="index" @delete="deleteItem"></del-button>
        </b-list-group-item>
      </b-form-checkbox-group>
    </b-list-group>
  </div>
</template>

<script>
import DelButton from './DelButton.vue';

export default {
  components: {
    DelButton,
  },
  data() {
    return {
      selectedItems: [], 
    };
  },
  computed: {
    items() {
      return this.$store.getters.items;
    },
  },
  methods: {
    deleteItem(index) {
      this.$store.dispatch('removeItem', index);
    },
  },
};
</script>

<style scoped>
.number {
  font-weight: bold;
  color: #333; 
  margin-right: 8px;
}
.item {
  font-weight: normal;
  color: #000; 
}
</style>
