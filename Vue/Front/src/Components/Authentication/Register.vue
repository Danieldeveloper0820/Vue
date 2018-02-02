<template>
<div class="row">

	<div class="col-md-6 col-md-offset-3">
		<div class="panel panel-default">
		<h3>Register Form</h3>

		<div class="panel-body">
			<div class="form-group">
				<input v-model="Name" class="form-control" type="text" placeholder="Name">
			</div>

			<div class="form-group">
				<input v-model="Email" class="form-control" type="email" placeholder="Email">
			</div>

			<div class="form-group">
				<input v-model="Password" class="form-control" type="password" placeholder="Password">
			</div>

			<button class="btn btn-success pull-right">Register</button>

		</div>
	</div>
</div>


</div>
	
	

</template>

<script>
	export default{
		data(){

			return{
				Name: '',
				Email: '',
				Password: ''
			}
		}
	}
</script>

<style></style>