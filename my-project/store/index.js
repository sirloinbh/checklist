import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function loadState() {
  const storedState = localStorage.getItem('items');
  return storedState ? JSON.parse(storedState) : [];
}


export default new Vuex.Store({
  state: {
    items: loadState(),
    selectedDropdown: '',
  },
  mutations: {
    ADD_ITEM(state, item) {
      state.items.push(item);
      localStorage.setItem('items', JSON.stringify(state.items));
    },
    REMOVE_ITEM(state, index) {
      state.items.splice(index, 1);
      localStorage.setItem('items', JSON.stringify(state.items));
    },
    UPDATE_ITEM(state, { index, value }) {
      Vue.set(state.items, index, value);
      localStorage.setItem('items', JSON.stringify(state.items));
    },
    SET_SELECTED_DROPDOWN(state, selection) {
      state.selectedDropdown = selection; 
    },
  },
  actions: {
    addItem({ commit }, item) {
      commit('ADD_ITEM', item);
    },
    removeItem({ commit }, index) {
      commit('REMOVE_ITEM', index);
    },
    updateItem({ commit }, payload) {
      commit('UPDATE_ITEM', payload);
    },
    setSelectedDropdown({ commit }, selection) {
      commit('SET_SELECTED_DROPDOWN', selection);
    },
  },
  getters: {
    items: (state) => state.items,
    selectedDropdown: (state) => state.selectedDropdown, 
  },
});
