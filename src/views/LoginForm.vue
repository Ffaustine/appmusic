<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      isAuthenticated: false,
      errorMessage: '',
    };
  },

  methods: {
    login() {
      if (this.username === 'ff@gmail.com' && this.password === '123456') {
        this.isAuthenticated = true;
        this.$router.push("/home");
      } else {
        this.errorMessage = 'Wrong username/password. Please try again!';
      }
    },

    mounted() {
      if (this.isAuthenticated) {
        this.$router.push("/home");
      }
    },
  }
};
</script>

<template>
  <div>
    <h1>LogIn</h1>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username">
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password">
      <button type="submit">LogIn</button>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>
