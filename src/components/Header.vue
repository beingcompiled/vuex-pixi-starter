<template>
	<div class='header'>
		<h1>Header</h1>
		<ul>
			<li v-for='item in nav'>
				<router-link :to="item.path">{{ item.link }}</router-link>
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
.header {
	width: 100%;
	background-color: #222;
	padding: 0 50px;

	color: white;
	text-align: left;
}
h1, h2, ul, li, a {
	display: inline-block;
	color: white;
}
ul {
	padding: 0 50px;
}
li {
	display: inline-block;
	padding: 0 10px;
}
</style>