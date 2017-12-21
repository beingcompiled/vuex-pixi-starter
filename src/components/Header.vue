<template>
	<div class='header'>
		<h1>Header</h1>
		<ul>
			<li v-for='page in nav'>
				<router-link :to='page.path'>{{ page.title }}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Header',
	props: {
		nav: {
			type: Array,
			required: true
		}
	}
}
</script>

<style scoped>
h1, h2 {
	font-weight: normal;
}
li {
	display: inline-block;
	padding: 0 10px;
}
a {
	color: blue;
}
</style>