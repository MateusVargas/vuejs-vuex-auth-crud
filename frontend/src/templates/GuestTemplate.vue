<template>
	<main>
		<slot name="content"/>
	</main>
</template>

<script>
	import {mapGetters} from 'vuex'

	export default {
		computed: {...mapGetters(['isLogged'])},

		mounted(){
			if (this.isLogged) {
				this.$router.push({name:'Dashboard'})
			}
		}
	}
</script>