<template>
	<div class="container">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				<p class="navbar-brand" v-if="isLogged">Olá {{user.name}}</p>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			      <span class="navbar-toggler-icon"></span>
			    </button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
			      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

			      	<template v-if="isLogged">
			      		<li class="nav-item">
				          <router-link class="nav-link" aria-current="page" to="/dashboard">Dashboard</router-link>
				        </li>
				        <li class="nav-item">
				          <router-link class="nav-link" to="/books">Books</router-link>
				        </li>
				        <li class="nav-item">
				          <a href="#" class="nav-link" @click="logout">Logout</a>
				        </li>
			      	</template>

			      	<template v-else>
				        <li class="nav-item">
				          <router-link class="nav-link" aria-current="page" to="/login">Login</router-link>
				        </li>
				        <li class="nav-item">
				          <router-link class="nav-link" to="/register">Register</router-link>
				        </li>
				    </template>

			        
			      </ul>
			    </div>
			</div>
		</nav>

	    <router-view/>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'

	export default {
		computed: {...mapGetters(['isLogged','user'])},

		methods:{
			logout(){
				this.$store.dispatch('logout')
				.then(() => {
					this.$router.push({name:'Login'})
				})
			}
		}
	}
</script>