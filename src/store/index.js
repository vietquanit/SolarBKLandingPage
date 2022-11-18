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
    lastObjectQuestionSuggest: null,
    selectDepartment: '',
    linkInternal:'',
    linkCustomer:'',
    textSuggest:null,
    showMessage: false,
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
      this.state.lastObjectQuestionSuggest = listQuests['questions'][listQuests['questions'].length - 1];
      listQuests['questions'].pop(); // remove last item
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
    },
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
    updateTextSuggest(state, payload){
      state.textSuggest = payload
    },
  },
  modules: {
  },
  plugins: [createPersistedState({
    paths:[
      'username',
      'nameProject',
      'nameCustomer',
      'nameCompanyCustomer',
      'emailCustomer',
      'tokenLogin',
      'authenticated',
      'dataAll',
      'selectDepartment',
      'linkInternal',
      'linkCustomer',
      'textSuggest',
      'showMessage'
    ]
  })],
})