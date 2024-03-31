<template>
  <div id="app">
    <input-line @submit="handleSubmit"></input-line>
    <dropdown-menu></dropdown-menu>
    <item-list v-if="selectedDropdown === ''"></item-list>
    <check-list v-else-if="selectedDropdown === '체크리스트'"></check-list>
    <radio-list v-else-if="selectedDropdown === '라디오'"></radio-list>
    <drop-list v-else-if="selectedDropdown === '드롭다운'"></drop-list>

  </div>
</template>

<script>
import InputLine from './components/InputLine.vue';
import ItemList from './components/lists/ItemList.vue';
import DropdownMenu from './components/DropDownMenu.vue';
import CheckList from './components/lists/ChList.vue';
import RadioList from './components/lists/RaList.vue';
import DropList from './components/lists/DropList.vue'; 

export default {
  name: 'App',
  components: {
    InputLine,
    ItemList,
    DropdownMenu,
    CheckList,
    RadioList,
    DropList,
  },
    computed: {
    selectedDropdown() {
      return this.$store.getters.selectedDropdown;
    }
  },
  methods: {
    handleSubmit(value) {
      alert(`Submitted value: ${value}`);
    }
  }
};
</script>
<style>
#app {
  font-family: 'Nunito', sans-serif; 
  color: #34495e;
  margin-top: 20px;
  max-width: 600px; 
  margin-left: auto;
  margin-right: auto;
}

.card {
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,.1); 
}

.input-group {
  margin-bottom: 20px;
}

.list-group-item {
  text-align: left;
}

.del-btn {
  background-color: #e74c3c;
  color: white;
}

.del-btn:hover {
  background-color: #c0392b;
}
</style>
