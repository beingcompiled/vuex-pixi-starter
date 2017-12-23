<template>
	<div class='header'>
		<h1>Header</h1>
		<ul>
			<li v-for='(item, index) in nav'>
				<router-link v-if='item.name !== "home"' :to="{ name: item.name, params: { param: 'param ' + index }}">
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
		console.log('Header created. $route.params.param: ', this.$route.params.param)
	}
}
</script>

<style lang='styl' scoped>
	@import '~styl/component/Header.styl'
</style>