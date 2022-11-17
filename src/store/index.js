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
    authenticated: false,
    dataAll: [],
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
    getListMarks({ commit }, payload){
      commit('getListMarks', payload);
    },
    // eslint-disable-next-line no-unused-vars
    updateSelectMark({ commit }, payload){
      let objIndex = this.state.listQuestions.findIndex((obj => obj.STT == payload['sttQuestion']));
      this.state.listQuestions[objIndex]['Cautraloi'] = payload['valueMark']
      commit('updateSelectMark', this.state.listQuestions);
    },
    getListQuestions({ commit }, payload){
      commit('getListQuestions', payload);
    },
    updateListQuestions({ commit }, payload){
      let listQuests = this.state.dataAll['questions'][payload.indexItem];
      commit('getListQuestions', listQuests['questions']);
    },
    getListDepartments({ commit }, payload){
      let arrayDepartment = [];
      let obj = {
        name: '',
        indexItem:'',
      }
      payload.map((value, index)=> {
        obj = {
          name: value.department,
          indexItem: index,
        }
        arrayDepartment.push(obj)
      })
      commit('getListDepartments', arrayDepartment);
      console.log();
    }
  },
  mutations: {
    setValue(state, payload){
      state[payload.action] = payload.value
    },
    getListMarks(state, payload){
      state.listMarks = payload
    },
    updateSelectMark(state, payload){
      state.listQuestions = payload
    },
    getListQuestions(state, payload){
      state.listQuestions = payload
    },
    getListDepartments(state, payload){
      state.listDepartments = payload
    },

  },
  modules: {
  },
  plugins: [createPersistedState()],
})
