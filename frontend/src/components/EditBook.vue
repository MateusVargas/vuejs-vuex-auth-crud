<template>
	<user-template>
		<div slot="content">
			<div class="card">
				<div class="card-body">
					<form @submit.prevent="update">
						<input class="form-control mb-3" type="text" v-model="book.name" placeholder="Name">
						<input class="form-control mb-3" type="text" v-model="book.author" placeholder="Author">
						<button class="btn btn-success" type="submit">Update</button>
					</form>
				</div>
			</div>
		</div>
	</user-template>
</template>

<script>
	import {mapActions,mapGetters} from 'vuex'
	import UserTemplate from '@/templates/UserTemplate'

	export default{
		data(){
			return{
				id: null,
			}
		},
		components: {
			UserTemplate
		},
		created(){
			this.id = this.$route.params.id
			this.fetchSingleBook(this.id)
		},

		computed:{...mapGetters(['book'])},

		methods:{
			...mapActions(['fetchSingleBook','updateBook']),

			update(){
				const {name,author} = this.book 
				this.updateBook({
					id: this.id,
					name: name,
					author: author
				}).then(()=>{
					this.$router.push({name:'Books'})
				})
			}
		}
	}
</script>