<template>


<div class="row">

	<div class="col-md-6 col-md-offset-3">
		<div class="panel panel-default">
		<h3>Login Form</h3>

		<div class="panel-body">
			<div class="form-group">
				<input v-model="Email" class="form-control" type="email" placeholder="Email">
			</div>

			<div class="form-group">
				<input v-model="Password" class="form-control" type="text" placeholder="Password">
			</div>

			<button @click="Login" class="btn btn-success"> Login</button>

		</div>
	</div>
</div>


</div>
	

</template>

<script>
	export default{ 

	data(){ //Este metodo sirve para la comunicacion de la api de laravel
		return{
			Email:'',
			Password:''

		}
	},

	methods:{
		Login (){

			var data = {
				client_id: 2,
				client_secret: 'z1cYAzOmgJqUys6iWqaylR4jIv1jDXkncRn5IK1g',
				grant_type:'password',
				username: this.Email,
				password: this.Password
			}

			this.$http.post("http://localhost:8000/oauth/token", data) //Hacemos la comunicacion entre Vue y laravel
			.then(Response => {
				console.log(Response)
			})
		}
	}
}

</script>

<style>
	
</style>