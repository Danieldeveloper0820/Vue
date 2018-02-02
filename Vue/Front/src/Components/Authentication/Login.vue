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
				<input v-model="Password" class="form-control" type="password" placeholder="Password">
			</div>

			<button @click="Test" class="btn btn-success"> Login</button>

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
		Test(){
			this.$http.get("http://localhost:8000/api/Test") //Hacemos la comunicacion entre Vue y laravel
			.then(function(response){

				console.log(response)
			})
		}
	}
}
	
</script>

<style>
	
</style>