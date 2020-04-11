<style scoped>
li {
  font-size: 1rem;
}
</style>
<template>
  <div class="row">
    <a-menu
      v-if="isLoggedIn"
      @click="handleClick"
      :defaultSelectedKeys="['1']"
      :openKeys.sync="openKeys"
      mode="horizontal"
      class="my-3 ml-auto"
    >
      <a-menu-item key="1">
        <router-link to="/"> <a-icon type="home" /> Home </router-link>
      </a-menu-item>

      <a-menu-item key="2">
        <router-link to="/todos">
          <a-icon type="ordered-list" /> Todos
        </router-link>
      </a-menu-item>

      <a-menu-item key="3">
        <router-link to="/accounts">
          <a-icon type="desktop" /> Accounts
        </router-link>
      </a-menu-item>

      <a-menu-item key="4">
        <a-icon type="inbox" />
        <span>Option 3</span>
      </a-menu-item>
    </a-menu>

    <nav class="navbar navbar-expand-lg navbar-light ml-auto">
      <div class="container-fluid">
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
            
            <li class="nav-item" v-if="!isLoggedIn">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>

            <li class="nav-item" v-if="!isLoggedIn">
              <router-link class="nav-link" to="/signup">Sign Up</router-link>
            </li>

            <li class="nav-item" v-if="isLoggedIn">
              <router-link class="nav-link" to="/articles/create"
                >Create New Article</router-link
              >
            </li>

            <li class="nav-item dropdown" v-if="isLoggedIn">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                Hey {{ User.username }}
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" @click="logout" href="#">Logout</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import auth from "@/mixins/auth";
export default {
  mixins: [auth],
  data() {
    return {
      current: ["mail"],
      openKeys: ["sub1"]
    };
  },
  methods: {
    handleClick(e) {
      console.log("click", e);
    },
    titleClick(e) {
      console.log("titleClick", e);
    },
    logout() {
      this.$store.dispatch('user/logout')
    }
  },
  watch: {
    openKeys(val) {
      console.log("openKeys", val);
    }
  }
};
</script>
