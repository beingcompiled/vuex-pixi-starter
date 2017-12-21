<template>
	<div class='foo'>
		<h1>Foo {{ foo }}</h1>
	</div>
</template>

<script>
export default {
	name: 'Foo',
	props: ['foo']
}
</script>

<style scoped>
h1, h2 {
	font-weight: normal;
}
li {
	display: inline-block;
}
a {
	color: blue;
}
</style>