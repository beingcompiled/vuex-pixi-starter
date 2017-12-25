<template>
	<div class='page'>
		<div class='content'>
			<h1>{{ title }}</h1>
			<p>{{ body }}</p>
			<p>{{ $route.params.param }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Page',
	props: ['title', 'body', 'param']
}
</script>

<style lang='styl' scoped>
	@import '~styl/component/Page.styl'
</style>
