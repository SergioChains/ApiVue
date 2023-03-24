<template>
  <header>
   <nav>
    <RouterLink to="/">Login</RouterLink>
    <RouterLink to="/Dashboard">Dashboard</RouterLink>
  </nav>
</header>
  <header>
    <RouterLink to="/listar">Listar</RouterLink>
    <RouterLink to="/crear">Crear</RouterLink>
  </header>
  <div class="container">
    <div class="card">
      <div class="card-header">Agregar Usuario</div>
      <div class="card-body">
        <form v-on:submit.prevent="AgregarRegistro">
          <div class="form-group">
            <label for="">User:</label>
            <input
              type="text"
              class="form-control"
              name="User"
              v-model="Usuario.user"
              aria-describedby="helpId"
              id="User"
              placeholder="User"
            />
            <small id="helpId" class="form-text" text-muted>Ingresa el User</small>
          </div>
          <div class="form-group">
            <label for="">Password</label>
            <input
              type="text"
              class="form-control"
              name="Password"
              id="Password"
              v-model="Usuario.password"
              aria-describedby="helpId"
              placeholder="Password"
            />
            <small id="helpId" class="form-text" text-muted>Ingresa el Password</small>
          </div>
          <!-- <div class="form-group">
            <label for="">FechaRegistro</label>
            <input
              type="text"
              class="form-control"
              name="FechaRegistro"
              id="FechaRegistro"
              v-model= "isDate"
              aria-describedby="helpId"
              placeholder="FechaRegistro"
            />
            <small id="helpId" class="form-text" text-muted>Fecha de Registro</small>
          </div> -->
          <div class="form-group">
            <label for="">FkEmpleado</label>
            <input
              type="text"
              class="form-control"
              name="FkEmpleado"
              id="FkEmpleado"
              v-model="Usuario.fkEmpleado"
              aria-describedby="helpId"
              placeholder="FkEmpleado"
            /> 
            <small id="helpId" class="form-text" text-muted>Ingresa FkEmpleado del Usuario</small>
          </div>
          <div class="form-group">
            <label for="">FkRol</label>
            <input
              type="text"
              class="form-control"
              name="FkRol"
              id="FkRol"
              v-model="Usuario.fkRol"
              aria-describedby="helpId"
              placeholder="FkRol"
            />
            <small id="helpId" class="form-text" text-muted>Ingresa la FkRol del Usuario</small>
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
import { isDate } from '@vue/shared'
import axios from 'axios'
export default {
  data() {
    return {
      Usuario: {}
    }
  },

  methods: {
    AgregarRegistro() {
      console.log(this.Usuario)

      var datosEnviar = {
        user: this.Usuario.user,
        password: this.Usuario.password,
        fechaRegistro: this.fechaRegistro,
        fkDepartamento: this.Usuario.fkDepartamento,
        fkRol: this.Usuario.fkRol
      }

      axios.post('https://localhost:7241/Usuarios', datosEnviar).then((result) => {
        console.log(result)
        window.location.href = 'listar'
      })
    }
  }
}
</script>
