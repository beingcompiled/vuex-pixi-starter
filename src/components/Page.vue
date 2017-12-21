<template>
	<div class='page'>
		<h1>{{ title }}</h1>
		<p>{{ body }}</p>
		<p>{{ param }}</p>
	</div>
</template>

<script>
export default {
	name: 'Page',
	props: ['title', 'body', 'param']
}
</script>

<style scoped>
.page {
	padding: 50px;
}
</style>
