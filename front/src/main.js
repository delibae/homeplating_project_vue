import Vue from 'vue'
import App from './App.vue'

import Meta from 'vue-meta'

import router from "./router";
import VueHead from 'vue-head'
import firebase from "firebase/compat/app"



const firebaseConfig = {
  apiKey: "AIzaSyA5EEPn_VoCfDBVWjKlTRD78a7DHw5fRzI",
  authDomain: "homeplating-f2027.firebaseapp.com",
  databaseURL: "https://homeplating-f2027-default-rtdb.firebaseio.com",
  projectId: "homeplating-f2027",
  storageBucket: "homeplating-f2027.appspot.com",
  messagingSenderId: "746042577266",
  appId: "1:746042577266:web:738ded2291d7dda7834deb",
  measurementId: "G-EH7V2WMEP1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.use(VueHead)

Vue.use(Meta, {
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  ssrAttribute: 'data-vue-meta-server-rendered',
  tagIDKeyName: 'vmid',  // 변화시키는 구분 값
  refreshOnceOnNavigation: true
})


Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')