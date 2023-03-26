<template>
  <header>
    <nav>
      |<RouterLink to="/Dashboard">Dashboard</RouterLink>|
      |<RouterLink to="/listarRoles">Listar</RouterLink>|
    </nav>
  </header>
  <div class="container">
    <div class="card">
      <div class="card-header">Agregar Rol</div>
      <div class="card-body">
        <form v-on:submit.prevent="AgregarRegistro">
          <div class="form-group">
            <label for="">Nombre:</label>
            <input type="text" class="form-control" name="Nombre" v-model="Rol.nombre" aria-describedby="helpId"
              id="Nombre" placeholder="Nombre" />
            <small id="helpId" class="form-text" text-muted>Ingresa el nombre del Rol</small>
          </div>

          <br />

          <div class="btn-group" role="group">
            |<button type="submit" class="btn btn-success">Agregar</button>| |<router-link :to="{ name: 'listarRoles' }"
              class="btn btn-danger">Cancelar</router-link>|
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
      Rol: {}
    }
  },

  methods: {
    AgregarRegistro() {
      console.log(this.Rol)

      var datosEnviar = {
        nombre: this.Rol.nombre
      }

      axios.post('https://localhost:7241/Rols', datosEnviar).then((result) => {
        console.log(result)
        window.location.href = 'ListarRoles'
      })
    }
  }
}
</script>
