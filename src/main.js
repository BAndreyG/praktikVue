import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css'
import store from './store'
import * as fb from 'firebase/app'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  router,
  store,
  vuetify : new Vuetify(),
  render: h => h(App),
  created (){

    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: 'AIzaSyDjb1e1lcDBFmYE6D7tJPGx6pM-9QKCBrY',
      authDomain: 'udemystore-ff888.firebaseapp.com',
      databaseURL: 'https://udemystore-ff888.firebaseio.com',
      projectId: 'udemystore-ff888',
      storageBucket: 'udemystore-ff888.appspot.com',
      messagingSenderId: '940436557145',
      appId: '1:940436557145:web:288e875f34698fa8c6d048'
    }
    // Initialize Firebase
    fb.initializeApp(firebaseConfig)
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    }),
    this.$store.dispatch('fetchProducts')
  }
})
