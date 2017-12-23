<template>
	<div class='header'>
		<h1>Header</h1>
		<ul>
			<li v-for='item in nav'>
				<router-link v-if='item.name !== "home"' :to="{ name: item.name, params: { param: 123 }}">
					{{ item.link }}
				</router-link>
				<router-link v-else :to="item.path">{{ item.link }}</router-link>
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
	},
	created: function () {
		console.log('Header created: ', this.$route.params.param)
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