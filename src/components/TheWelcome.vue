<template>
  <div class="login">
    <h1 class="title">Login</h1>
    <form action class="form" @submit.prevent="login">
      <label class="form-label" for="#email">Email:</label>
      <input v-model="email" class="form-input" type="email" id="email" required placeholder="Email" />
      <label class="form-label" for="#password">Password:</label>
      <input v-model="password" class="form-input" type="password" id="password" placeholder="Password" />
      <p v-if="error" class="error">Has introducido mal el email o la contraseña.</p>
      <input class="form-submit" type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: '',
    password: '',
    error: false
  }),
  methods: {
    login() {
      console.log(this.email)
      console.log(this.password)
      this.$router.push('/Dashboard')
    }
  }
}
</script>
<style scoped>
.login {
  font-size: large;
  padding: 2rem;
}

.title {
  text-align: center;
  color: white;

}

.form {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 5px;
  padding: 50px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}

.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
}

.form-input {
  padding: 10px 5px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
}

.form-submit {
  background: #0048e4;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
}

.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}
</style>
