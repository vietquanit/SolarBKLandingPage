import { createStore } from 'vuex'

export default createStore({
  state: {
    listMarks: [],
    listQuestions: []
  },
  getters: {
  },
  actions: {
    getListMarks({ commit }, payload){
      console.log('run')
      commit('getListMarks', payload);
    },
    getListQuestions({commit}, payload){
      commit('getListQuestions', payload);
    }
  },
  mutations: {
    getListMarks(state, payload){
      state.listMarks = payload;
    },
    getListQuestions(state, payload){
      state.listQuestions = payload;
    }
  },
  modules: {
  }
})
