<template>
    <div class="row my-5">

        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header text-center my-3">
                    <h3>Login</h3>
                </div>
                <div class="card-body">

                    <div class="form-group">
                        <input v-bind:class="{ 'is-invalid': errors.email }" v-model="email" type="text" placeholder="Email" class="form-control">
                        <div class="errors" v-if="errors.email">
                            <small class="text-danger" :key="error" v-for="error in errors.email">{{ error }}</small>
                        </div>
                    </div>

                    <div class="form-group">
                        <input v-bind:class="{ 'is-invalid': errors.password }" v-model="password" type="password" placeholder="Password" class="form-control">
                        <div class="errors" v-if="errors.password">
                            <small class="text-danger" :key="error" v-for="error in errors.password">{{ error }}</small>
                        </div>
                    </div>

                    <div class="form-group text-center">
                    <button @click="loginUser" :disabled="loading" class="btn btn-primary form-control">
                      
                        <i class="fas fa-spin fa-spinner" v-if="loading"></i>
                      
                        {{ loading ? '' : 'Login' }}
                    
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import auth from '@/mixins/auth'
export default {
    data(){
        return {
            email:'',
            password: '',
            errors:{},
            loading: false
        }
    },
    mixins:[auth],
    methods:{
       loginUser() {
           this.loading = true;
            const {email, password} = this.$data
            this.$store.dispatch('user/login', {email, password})
            /* Axios.post(`${config.apiUrl}/auth/login`, {
                    email: this.email,
                    password: this.password
                })
                .then(({data}) => {
                    this.loading = false;
                    
                    this.$root.auth = data.data;
                    localStorage.setItem("auth", JSON.stringify(data.data));

                this.$noty.success("Successfully logged in.");
                this.$router.push("/");

                    })
                .catch(({ response }) => {
                    this.loading = false;
            
                    this.$noty.error("Oops ! something went wrong.");
                    
                    if (response.status === 401) {
                        this.errors = {
                        email: ["These credentials do not match our records."]
                        };
                    } else {
                        this.errors = response.data;
                    }
                });
            */
        }
  }

};
</script>
