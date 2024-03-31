<template>
  <div>
    <b-list-group>
      <b-list-group-item
        v-for="(item, index) in items"
        :key="index"
        class="d-flex justify-content-between align-items-center item"
        @mouseover="hover = index" @mouseleave="hover = null"
      >
        <span v-if="editingIndex !== index" @click="editItem(index)" class="item-content">
          <span class="number">{{ index + 1 }}.<span class="item">{{ item }}</span></span> 
        </span>
        <b-form-input
          v-else
          v-model="items[index]"
          @blur="finishEdit"
          @keyup.enter="finishEdit"
          class="item-edit"
        ></b-form-input>
        <del-button :index="index" @delete="deleteItem" v-show="hover === index"></del-button>
      </b-list-group-item>
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
      hover: null,
      editingIndex: null,
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
    editItem(index) {
      this.editingIndex = index;
    },
    finishEdit() {
      this.editingIndex = null;
      this.$store.dispatch('updateItem', { index: this.editingIndex, value: this.items[this.editingIndex] });
    },
  },
};
</script>

<style scoped>
.item-content {
  cursor: pointer;
}
.item-edit {
  flex-grow: 1;
}
</style>

<style scoped>
.number {
  font-weight: bold;
  color: #fff305; 
  margin-right: 8px;
}
.item {
  font-weight: normal;
  color: #000000; 
}

.b-list-group-item {
  border: 2px solid #3498db; 
  border-radius: 10px; 
  margin-bottom: 10px; 
  transition: transform 0.2s; 
}

.b-list-group-item:hover {
  transform: scale(1.02); 
  background-color: #f8f9fa; 
}

.del-button {
  cursor: pointer;
}

.item .del-btn {
  display: block;
}

.item-content {
  cursor: pointer;
}
.item-edit {
  flex-grow: 1;
}
</style>
