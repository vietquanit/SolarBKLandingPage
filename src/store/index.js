import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    username:'',
    password:'',
    nameProject:'',
    nameCustomer:'',
    nameCompanyCustomer:'',
    emailCustomer:'',
    tokenLogin:'',
    listMarks: [],
    listQuestions: [],
    listDepartments: [],
    selectDepartment: '',
    linkInternal:'',
    linkCustomer:'',
    messageText:'',
    showMessage: false,
    stateMessage: 'success'
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
