<script>
export default {
  data(){
    return {
      username: '',
      password:'',
      isSignUp: false,
      registeredUsers: [],
    };
  },

  methods: {
    signUp() {
      // Logique d'inscription ici
      // Ajouter l'utilisateur à la liste des utilisateurs inscrits
      this.registeredUsers.push({
        username: this.username,
        password: this.password,
        email: this.email,
      });

      // Réinitialiser les champs du formulaire
      this.username = '';
      this.password = '';
      this.email = '';
    },
  },
};
</script>

<template>
  <div>
    <h1>SignUp</h1>
    <form @submit.prevent="signin">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username">
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password">
      <button type="submit">SignUp</button>
    </form>
  </div>
</template>
