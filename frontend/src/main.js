import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

Vue.config.productionTip = false;
Vue.prototype.$http = axios
Vue.prototype.$http.defaults.baseURL = 'http://localhost:8000/api'
Vue.prototype.$http.defaults.withCredentials = true

store.dispatch('getUser').then(()=>{
  new Vue({
    router,
    store,
    // created(){
    //   const user = localStorage.getItem('user')
    //   if (user) {
    //     const userData = JSON.parse(user)
    //     this.$store.commit('setUserData',userData)
    //   }
    //   axios.interceptors.response.use(
    //     response => response,
    //     error => {
    //       if (error.response.status === 401) {
    //         this.$store.commit('clearUserData')
    //         this.$router.push({name:'Login'})
    //       }
    //       return Promise.reject(error)
    //     }
    //   )
    // },
    render: (h) => h(App),
  }).$mount('#app');
})
