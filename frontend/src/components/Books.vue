<template>
	<user-template>
		<div slot="content">
			<table class="table table-striped">
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Author</th>
						<th scope="col">Opções</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="book in booksList" :key="book.id">
						<td>{{book.name}}</td>
						<td>{{book.author}}</td>
						<td>
							<router-link
								class="btn btn-warning me-2" 
								:to="{ name: 'EditBook', params: {id: book.id }}">
								Edit
							</router-link>
							<button class="btn btn-danger" @click="removeBook(book.id)">Delete</button>
						</td>
					</tr>
				</tbody>
			</table>

			<button type="button" class="btn btn-primary" @click="$router.push('/books/add')">New Book</button>
		</div>
	</user-template>
</template>

<script>
	import {mapActions,mapGetters} from 'vuex'
	import UserTemplate from '@/templates/UserTemplate'

	export default{
		computed:{...mapGetters(['booksList'])},

		components: {
			UserTemplate
		},

		methods: {
			...mapActions(['fetchAllBooks','deleteBook']),

			removeBook(id){
				this.deleteBook(id)
				this.fetchAllBooks()
			}
		},

		created(){
			this.fetchAllBooks()
		}
	}
</script>