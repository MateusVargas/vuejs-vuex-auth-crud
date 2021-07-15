<template>
	<guest-template>
		<div slot="content">
			<h1>Register</h1>
			<form @submit.prevent="register">
				<input class="form-control mb-3" type="text" name="name" v-model="name" placeholder="Name">
				<input class="form-control mb-3" type="email" name="email" v-model="email" placeholder="Email">
				<input class="form-control mb-3" type="password" name="password" v-model="password" placeholder="Password">
				<button class="btn btn-success" type="submit">Register</button>
			</form>
		</div>
	</guest-template>
</template>

<script>
	import GuestTemplate from '@/templates/GuestTemplate'

	export default{
		data(){
			return {
				name: '',
				email: '',
				password: ''
			}
		},

		components: {
			GuestTemplate
		},

		methods:{
			register(){
				this.$http.get('/sanctum/csrf-cookie').then(resp=>{
					this.$http.post('/register',{
						name: this.name,
						email: this.email,
						password: this.password
					}).then(response => {
						if (response.data.success) {
							this.$router.push({name:'Login'})
						}
					})
				})
			}
		}
	}
</script>

<style>
	
</style>