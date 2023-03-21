<template>
  <header>
   <nav>
    <RouterLink to="/">Login</RouterLink>
    <RouterLink to="/Dashboard">Dashboard</RouterLink>
  </nav>
</header>
  <header>
    <RouterLink to="/listar">Listar</RouterLink>
    <RouterLink to="/crear">crear</RouterLink>
  </header>
  <div class="container">
    <div class="card">
      <div class="card-header">Agregar Usuario</div>
      <div class="card-body">
        <form v-on:submit.prevent="Agregar">
          <div class="form-group">
            <label for="">Nombre:</label>
            <input
              type="text"
              class="form-control"
              name="User"
              v-model="Usuario.user"
              aria-describedby="helpId"
              id="User"
              placeholder="User"
            />
            <small id="helpId" class="form-text" text-muted>Ingresa el nombre de Usuario</small>
          </div>
          <div class="form-group">
            <label for="">Password:</label>
            <input
              type="text"
              class="form-control"
              name="Password"
              id="Password"
              v-model="Usuario.password"
              aria-describedby="helpId"
              placeholder="Password"
            />
            <small id="helpId" class="form-text" text-muted>Ingresa Password</small>
          </div>
          <div class="form-group">
            <label for="">FechaRegistro:</label>
            <input
              type="text"
              class="form-control"
              name="FechaRegistro"
              id="FechaRegistro"
              v-model="Usuario.FechaRegistro"
              aria-describedby="helpId"
              placeholder="FechaRegistro"
            />
            <small id="helpId" class="form-text" text-muted>Ingresa la fecha de registro</small>
          </div>

          <br />

          <div class="btn-group" role="group">
            |<button type="submit" class="btn btn-success">Agregar</button>| |<router-link
              :to="{ name: 'listar' }"
              class="btn btn-danger"
              >Cancelar</router-link
            >|
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      Usuario: {}
    }
  },

  methods: {
    agregarRegistro() {
      console.log(this.Usuario)

      var datosEnviar = {
        user: this.Usuario.user,
        Password: this.Usuario.Password,
        FechaRegistro: this.Usuario.FechaRegistro
      }

      axios.post('https://localhost:7241/Usuarios', datosEnviar).then((result) => {
        console.log(result)
        window.location.href = 'Listar'
      })
    }
  }
}
</script>
