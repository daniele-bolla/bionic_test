import Vue from "vue";
export const store = Vue.observable({
  userChoice: null
});
export getter 
export const mutations = {
  addMessage(payload) {
    store.data = payload;
  },
  changeUserChoice() {}
};
