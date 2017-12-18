<template>
	<div class="test">
		<input type='text' v-model='title'><br />
		<h1>{{ title }}</h1>
		<p v-if='showName'>{{ user.firstName }}</p>
		<p v-else>Nobody</p>
		<button v-on:click='greet'>Say Greeting</button>
		<input type='text' v-on:keyup='pressKey' v-on:keyup.enter='enterHit'>
		<hr />
		<label>First Name: </label><input type='text' v-model='user.firstName'>
		<br />
		<label>Last Name: </label><input type='text' v-model='user.lastName'>
		<h3>{{fullName}}</h3>
		<h2>{{msg}}</h2>
		<hr />
	</div>
</template>

<script>
export default {
	name: 'Test',
	props: {
		msg: {
			type: String,
			default: 'Foobar'
		}
	},
	data () {
		return {
			title: 'Test.vue',
			user: {
				firstName: 'John',
				lastName: 'Doe'
			},
			showName: true
		}
	},
	methods: {
		greet: function () {
			alert('hello')
		},
		pressKey: function (e) {
			console.log(e.target.value)
		},
		enterHit: function () {
			console.log('You hit enter')
		}
	},
	computed: {
		fullName: function () {
			return this.user.firstName + ' ' + this.user.lastName
		}
	}
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
