import axios from 'axios'

const state = {
  book: null,
  books: []
}

const getters = {
    booksList: state => state.books,
    book: state => state.book
}

const actions = {
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
}

const mutations = {
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
}

export default {
  state,
  getters,
  actions,
  mutations
}