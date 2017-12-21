<template>
	<div class='page'>
		<h1>{{ title }}</h1>
		<p>{{ body }}</p>
	</div>
</template>

<script>
export default {
	name: 'Page',
	props: ['title', 'body']
}
</script>

<style scoped>
h1, h2 {
	font-weight: normal;
}
a {
	color: blue;
}
</style>
