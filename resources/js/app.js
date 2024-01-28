require('./bootstrap');

window.Vue = require('vue').default;

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// Router Imported
import {routes} from './routes';

 // Import Notification Class
 import Notification from './Helpers/Notification';
 window.Notification = Notification

 // Sweet Alert start 
  import Swal from 'sweetalert2'
  window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
});

window.Toast = Toast;
 
// Sweet Alert End 

window.Reload = new Vue();

const router = new VueRouter({
    mode: 'history', 
    routes: routes,
  })
  
const app = new Vue({
    el: '#app',
    router
});

