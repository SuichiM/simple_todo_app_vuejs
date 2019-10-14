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

          <button @click="registerUser()" :disabled="loading" class="btn form-control btn-success">
            <i class="fas fa-spin fa-spinner" v-if="loading"></i>
            {{ loading ? '' : 'Signup' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
import config from '@/config';

export default {
  beforeRouteEnter(to, from, next) {
    if (localStorage.getItem("auth")) {
      return next({ path: "/" });
    }
    next();
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      errors: {},
      submitted: false,
      loading: false
    };
  },
  methods: {
    fakePost(url, data){
      return new Promise((resolve, reject)=>{
        let errors = {data:{}};

        if(!data.name)
          errors.data.name = ['The name must be valid.']
        if(!data.email)
          errors.data.email = ['The email must be valid.']
        if(!data.password)
          errors.data.password = ['The password must be valid.']

        if(Object.keys(errors.data).length > 0 )
          return reject (errors);

         setTimeout(()=>{ resolve( {data:{
                  user: 'SuichiM',
                  name: 'Suichi',
                  token: 'aADALskdjASdasldj124ALASDJlas'
                  }})
                }, Math.random()*5)
        
      });
    },

    registerUser() {
      this.loading = true;

      // http(s)://5d3a5824fa091c00144708ed.mockapi.io/api/:endpoint
      Axios.post(`${config.apiUrl}/auth/register`, {
      // Axios.post("https://5d3a5824fa091c00144708ed.mockapi.io/api/register",  {
      // this.fakePost('https://afake.url',{
        name: this.name,
        email: this.email,
        password: this.password
      })
        .then(({response}) => {
          this.loading = false;
          localStorage.setItem('auth', JSON.stringify(response.data))
          this.$root.auth = response.data;

          this.$noty.success("Successfully registered.");

          this.$router.push('/');
        })
        .catch(( {response} ) => {

          this.loading = false;
          
          this.$noty.error("Oops ! Something went wrong.");

          this.submitted = true;
          this.errors = response.data;
        });

    }
  }
};
</script>
