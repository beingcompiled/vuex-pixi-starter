<template>
	<div class="users">
		<form>
			<input type='text' v-model='newUser.name' placeholder='Enter Name'>
			<br />
			<input type='text' v-model='newUser.email' placeholder='Enter Email'>
			<input type='submit' value='Submit' v-on:click='addUser'>
		</form>
		<ul>
			<li v-for='user in users'>
				<input type='checkbox' class='toggle'  v-model='user.contacted'>
				<span :class='{contacted: user.contacted}'>
					{{user.name}}: {{user.email}}
					<button v-on:click='deleteUser(user)'>x</button>
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Users',
	data () {
		return {
			title: 'Users.vue',
			users: [],
			newUser: {}
		}
	},
	created: function () {
		this.$http.get('http://jsonplaceholder.typicode.com/users')
			.then(function (res) {
				this.users = res.data
			})
	},
	methods: {
		addUser: function (e) {
			this.users.push({
				name: this.newUser.name,
				email: this.newUser.email,
				contacted: false
			})
			e.preventDefault()
		},
		deleteUser: function (user) {
			this.users.splice(this.users.indexOf(user), 1)
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
.contacted {
	text-decoration: line-through;
}
</style>
