<template>
  <div>
    <b-dropdown id="dropdown-1" text="드롭다운 메뉴" class="m-md-2">
      <b-dropdown-item @click="selectDropdown('')">기본</b-dropdown-item>
      <b-dropdown-item @click="selectDropdown('체크리스트')">체크리스트</b-dropdown-item>
      <b-dropdown-item @click="selectDropdown('드롭다운')">드롭다운</b-dropdown-item>
      <b-dropdown-item @click="selectDropdown('라디오')">라디오</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedDropdown: '',
    };
  },
  methods: {
    selectDropdown(selection) {
      this.$store.dispatch('setSelectedDropdown', selection);
    },
  },
};
</script>


<style scoped>
</style>
