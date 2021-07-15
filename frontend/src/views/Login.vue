<template>
	<guest-template>
		<div slot="content">
			<h1>Login</h1>
			<form @submit.prevent="login">
				<input class="form-control mb-3" type="email" name="email" v-model="email" placeholder="Email">
				<input class="form-control mb-3" type="password" name="password" v-model="password" placeholder="Password">
				<button class="btn btn-success" type="submit">Login</button>
			</form>
		</div>
	</guest-template>
</template>

<script>
	import GuestTemplate from '@/templates/GuestTemplate'

	export default{
		data(){
			return{
				email: '',
				password: ''
			}
		},

		components: {
			GuestTemplate
		},

		methods:{
			login(){
				this.$store.dispatch('login',{
					email: this.email,
					password: this.password
				}).then(() => {
					this.$router.push({name:'Dashboard'})
				})
			}
		}
	}
</script>
