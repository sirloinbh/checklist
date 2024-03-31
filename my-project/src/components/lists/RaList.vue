<template>
  <div>
    <b-list-group>
      <b-form-radio-group
        v-model="selectedItem"
        class="d-flex flex-column align-items-start"
        @change="updateSelectedItem"
      >
        <b-list-group-item
          v-for="(item, index) in items"
          :key="index"
          class="d-flex justify-content-between align-items-center"
        >
          <b-form-radio :value="item">
            <span class="number">{{ index + 1 }}.</span> {{ item }}
          </b-form-radio>
          <del-button :index="index" @delete="deleteItem"></del-button>
        </b-list-group-item>
      </b-form-radio-group>
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
      selectedItem: null, 
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
      if (this.selectedItem === this.items[index]) {
        this.selectedItem = null; 
      }
    },
    updateSelectedItem(value) {
      this.selectedItem = value;
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
</style>
