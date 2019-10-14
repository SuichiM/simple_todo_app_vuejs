<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/logo.png" width="30px" height="30px" alt />
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-if="!authUser">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>

          <li class="nav-item" v-if="!authUser">
            <router-link class="nav-link" to="/signup">Sign Up</router-link>
          </li>

        <li class="nav-item" v-if="authUser">
            <router-link class="nav-link" to="/articles/create">Create New Article</router-link>
          </li>
          
         <li class="nav-item dropdown" v-if="authUser">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Hey {{ authUser.user.name }}
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" @click="logout" href="#">Logout</a>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    if (localStorage.getItem("auth")) {
      return next({ path: "/" });
    }
    next();
  },
    mounted() {
    console.log(this.$root);
  },
  computed: {
    authUser() {
      return this.$root.auth;
    }
  },
  methods:{
    logout(){

    localStorage.removeItem('auth');
    
    this.$noty.success("Succeessfully logged out.");

    this.$root.auth = null;

    this.$router.push('/login');


    }
  }
}
</script>
