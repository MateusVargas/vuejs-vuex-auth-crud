import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Dashboard from '../views/Dashboard.vue';

import Books from '../components/Books.vue';
import AddBook from '../components/AddBook.vue';
import EditBook from '../components/EditBook.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/login',
    name: 'Login',
    component: Login,
  },

  {
    path: '/register',
    name: 'Register',
    component: Register,
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      auth: true
    }
  },

  {
    path: '/books',
    name: 'Books',
    component: Books,
  },

  {
    path: '/books/add',
    name: 'AddBook',
    component: AddBook,
  },

  {
    path: '/books/edit/:id',
    name: 'EditBook',
    component: EditBook,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to,from,next)=>{
  if (to.matched.some(record=>record.meta.auth) && !store.state.isLogged) {
    next('/login')
    return
  }
  next()
})

export default router;
