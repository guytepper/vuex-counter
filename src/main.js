import Vue from 'vue';
import Store from './store';
import App from './App.vue';


new Vue({
  el: '#app',
  store: Store,
  render: h => h(App)
})
