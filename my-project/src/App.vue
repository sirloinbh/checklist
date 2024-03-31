<template>
  <div id="app">
    <input-line @submit="handleSubmit"></input-line>
    <item-list></item-list> 
  </div>
</template>

<script>
import InputLine from './components/InputLine.vue';
import ItemList from './components/ItemList.vue';

export default {
  name: 'App',
  components: {
    InputLine,
    ItemList,
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
