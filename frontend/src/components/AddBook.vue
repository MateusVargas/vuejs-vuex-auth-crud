<template>
	<user-template>
		<div slot="content">
			<div class="card">
				<div class="card-body">
					<form class="row g-3" @submit.prevent="add">
						<input class="form-control mb-3" type="text" name="name" v-model="book.name" placeholder="Name">
						<input class="form-control mb-3" type="text" name="author" v-model="book.author" placeholder="Author">
						<button class="btn btn-success" type="submit">Add</button>
					</form>
				</div>
			</div>
		</div>
	</user-template>
</template>

<script>
	import UserTemplate from '@/templates/UserTemplate'

	export default{
		data(){
			return{
				book:{}
			}
		},
		components: {
			UserTemplate
		},
		methods:{
			add(){
				this.$store.dispatch('storeBook',this.book)
				.then(()=>{
					this.$router.push({name:'Books'})
				})
			}
		}
	}
</script>