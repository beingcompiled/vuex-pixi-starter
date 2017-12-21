<template>
	<div class='footer'>
		<ul>
			<li v-for='item in links'>
				<router-link :to="item.path">{{ item.link }}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Footer',
	props: {
		links: {
			type: Array,
			required: true
		}
	}
}
</script>

<style scoped>
.footer {
	position: absolute;
	left: 0;
	bottom: 0;

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