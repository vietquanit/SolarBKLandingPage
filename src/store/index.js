import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    username:'',
    password:'',
    nameProject:'',
    nameCustomer:'',
    nameCompanyCustomer:'',
    emailCompanyCustomer:'',
    tokenLogin:'',
    listMarks: [],
    listQuestions: [],
    listDepartments: [],
    selectDepartment: ''
  },
  getters: {
  },
  actions: {
    setValue({ commit }, payload){
      commit('setValue', payload);
    },
  },
  mutations: {
    setValue(state, payload){
      state[payload.action] = payload.value
    },
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
