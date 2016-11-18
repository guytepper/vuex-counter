import Vue from 'Vue';
import Vuex from 'Vuex';

Vue.use(Vuex);

const state = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
})

export default state;
