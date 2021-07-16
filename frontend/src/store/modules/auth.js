import axios from 'axios'

const state = {
	isLogged: false,
	user: null
}

const getters = {
    user: state => state.user,
  	isLogged: state => state.isLogged
}

const actions = {
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
}

const mutations = {
	setUserData(state,userData){
  		state.isLogged = true
      state.user = userData
  	},

  	clearUserData(state){
  		state.isLogged = false
      state.user = null
  	},
}

export default {
  state,
  getters,
  actions,
  mutations
}