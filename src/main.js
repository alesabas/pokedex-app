import Vue from 'vue'
import App from '@/App.vue'

import VueResource from 'vue-resource'
Vue.use(VueResource);

Vue.http.get('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20').then(result => {
    console.log(result.body)
}, error => {
    console.error(error);
});

import Vuex from 'vuex';
Vue.use(Vuex);

import BlockUI from 'vue-blockui';
Vue.use(BlockUI);

import VeeValidate, {Validator} from 'vee-validate';
Vue.use(VeeValidate);

import {ClientTable} from 'vue-tables-2'
Vue.use(ClientTable, {}, false, 'bootstrap3', 'default');

export const store = new Vuex.Store({
  state: {

  },
  actions: {

  },
  getters: {

  },
  mutations: {

  },
  modules: {

  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
/*
const Pokedex = require('pokeapi-js-wrapper')
const P = new Pokedex.Pokedex()

P.getPokemonByName('eevee')
    .then(function(response) {
      console.log(response)
    });
    */