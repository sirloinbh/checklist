<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <b-input-group>
        <b-form-input
          placeholder="무엇이든 입력하세요"
          v-model="inputValue"
        ></b-form-input>

        <b-input-group-append>
          <b-button type="submit" variant="primary">제출</b-button>
          <!-- 삭제 버튼 추가, 입력값이 있을 때만 표시 -->
          <b-button 
            v-if="inputValue" 
            @click="clearInput" 
            variant="danger">삭제</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('addItem', this.inputValue);
      this.inputValue = ''; 
    },
    clearInput() {
      this.inputValue = ''; 
    },
  },
};
</script>
