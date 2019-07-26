<template>
  <div class="row my-5">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-header text-center my-3">
          <h3>Sign Up</h3>
        </div>
        <div class="card-body">
          <div class="form-group">
            <input v-bind:class="{ 'is-invalid': errors.name, 'is-valid': !errors.name && this.submitted }" 
                  v-model="name" type="text" placeholder="Name" class="form-control">
            <div class="errors" v-if="errors.name">
              <small class="text-danger">{{ errors.name.join(', ') }}</small>
            </div>

          </div>

          <div class="form-group">
            <input v-bind:class="{ 'is-invalid': errors.email, 'is-valid': !errors.email && this.submitted }" v-model="email" type="text" placeholder="Email" class="form-control">
              <div class="errors" v-if="errors.email">
                <small class="text-danger">{{ errors.email.join(', ') }}</small>
            </div>
          </div>

          <div class="form-group">
          
           <input v-bind:class="{ 'is-invalid': errors.password, 'is-valid': !errors.password && this.submitted }" v-model="password" type="password" placeholder="Password" class="form-control">
            <div class="errors" v-if="errors.password">
              <small class="text-danger">{{ errors.password.join(', ') }}</small>
            </div>
          </div>

          <div class="form-group text-center">
            <button @click="registerUser" class="btn btn-primary form-control">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      errors: {},
      submitted: false
    };
  },
  methods: {
    
    registerUser() {
      // http(s)://5d3a5824fa091c00144708ed.mockapi.io/api/:endpoint
      Axios.post("https://5d3a5824fa091c00144708ed.mockapi.io/api/register",  {
        name: this.name,
        email: this.email,
        password: this.password
      })
        .then((response) => {
          const { data } = response;
          
          localStorage.setItem('auth', JSON.stringify(data))
          this.$root.auth = data;

          this.$router.push('home');
        })
        .catch(({ response }) => {
          this.submitted = true;
          this.errors = response.data;
        });

    }
  }
};
</script>
