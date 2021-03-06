import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth'
import book from './modules/book'

Vue.use(Vuex);

export default new Vuex.Store({
  /*state: {
  	isLogged: false,
    user: null,
  	book: null,
  	books: []
  },

  getters: {
  	booksList: state => state.books,
    user: state => state.user,
  	book: state => state.book,
  	isLogged: state => state.isLogged
  },

  mutations: {
  	setUserData(state,userData){
  		state.isLogged = true
      state.user = userData
  	},

  	clearUserData(state){
  		state.isLogged = false
      state.user = null
  	},

  	setBooks(state,books){
  		state.books = books
  	},

  	setSingleBook(state,book){
  		state.book = book
  	},

  	saveNewBooks(state,book){
  		state.books.unshift(book)
  	},

  	setUpdateBook(state,book){
  		state.books.unshift(book)
  	},

  	setDeleteBook(state,id){
  		state.books.filter(x => x.id !== id)
  	},

  },

  actions: {
  	async login({dispatch},credentials){
      await axios.get('/sanctum/csrf-cookie')
  		await axios.post('/login',credentials).then(response=>{
        if (response.data.success) {
          return dispatch('getUser')
        }
  		})
  	},

  	async logout({dispatch}){
      await axios.get('/sanctum/csrf-cookie')
      await axios.post('/logout').then(response=>{
        if (response.data.success) {
          return dispatch('getUser')
        }
      })
  	},

    async getUser({commit}){
      return await axios.get('/user').then(response=>{
        commit('setUserData',response.data)
      }).catch(()=>{
        commit('clearUserData')
      })
    },

  	async fetchAllBooks({commit}){
  		await axios.get('/books').then(resp=>{
  			const books = resp.data
  			commit('setBooks',books)
  		})
  	},

  	async fetchSingleBook({commit},id){
  		await axios.get(`/books/edit/${id}`).then(resp=>{
  			commit('setSingleBook',resp.data)
  		})
  	},

  	async storeBook({commit},book){
  		await axios.post('/books/add',book).then(resp=>{
  			commit('saveNewBooks',resp.data)
  		})
  	},

  	async updateBook({commit},book){
  		await axios.put(`/books/update/${book.id}`,book).then(resp=>{
  			commit('saveUpdateBook',book)
  		})
  	},

  	async deleteBook({commit},id){
  		await axios.delete(`/books/delete/${id}`).then(resp=>{
  			commit('setDeleteBook',id)
  		})
  	},

  },*/

  modules: {
    auth,
    book
  },

});
