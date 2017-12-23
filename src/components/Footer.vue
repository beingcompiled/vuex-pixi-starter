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

<style lang='styl' scoped>
	@import '~styl/component/Footer.styl'
</style>