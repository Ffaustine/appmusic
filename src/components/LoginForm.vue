<script>
import SignUpForm from './SignUpForm.vue';

export default {
  components: {
    SignUpForm,
  },
  data() {
    return {
      username: '',
      password: '',
      isAuthenticated: false,
      showSignupForm: false,
      errorMessage: '',
    };
  },

  methods: {
    login() {
      // Votre logique d'authentification ici
      // Par exemple, vérification des identifiants
      if (this.username === 'your_username' && this.password === 'your_password') {
        this.isAuthenticated = true;
        // Rediriger vers la page de classement musical
        this.$router.push('/classement');
      } else {
        // Afficher un message d'erreur ou gérer l'échec de l'authentification
        this.errorMessage = 'Wrong credentials. Please try again!';
      }
    },

    signup() {
      // Ajouter l'utilisateur à la liste des utilisateurs inscrits
      this.registeredUsers.push({
        username: this.username,
        password: this.password,
        email: this.email,
      }),

      // Réinitialiser les champs du formulaire
      this.username = '';
      this.password = '';
      this.email = '';
      this.isAuthenticated = true;
      // Rediriger vers la page de classement musical
      this.$router.push('/classement');
    },


    mounted() {
      // Vérifier si l'utilisateur est déjà authentifié
      // Si oui, rediriger vers la page de classement musical
      if (this.isAuthenticated) {
        this.$router.push('/classement');
      }
    },
  }
};
</script>

<template>
  <div>
    <h1>LogIn</h1>
    <form v-if="!showSignUp" @submit.prevent="login">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username">
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password">
      <button type="submit">LogIn</button>
      <button type="button" @click="showSignUp = true">Sign Up</button>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    <SignUpForm v-if="showSignUp" />
  </div>
</template>

<style>
  .form {

  }
</style>
