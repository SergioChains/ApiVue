<template>
  <header>
    <nav>
      |<RouterLink to="/Dashboard">Dashboard</RouterLink>|
      |<RouterLink to="/listarPuestos">Listar</RouterLink>|
    </nav>
  </header>
  <div class="container">
    <div class="card">
      <div class="card-header">Agregar Puesto</div>
      <div class="card-body">
        <form v-on:submit.prevent="AgregarRegistro">
          <div class="form-group">
            <label for="">Nombre:</label>
            <input type="text" class="form-control" name="Nombre" v-model="Puesto.nombre" aria-describedby="helpId"
              id="Nombre" placeholder="Nombre" />
            <small id="helpId" class="form-text" text-muted>Ingresa el nombre del Puesto</small>
          </div>

          <br />

          <div class="btn-group" role="group">
            |<button type="submit" class="btn btn-success">Agregar</button>| |<router-link :to="{ name: 'listarPuestos' }"
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
      Puesto: {}
    }
  },

  methods: {
    AgregarRegistro() {
      console.log(this.Puesto)

      var datosEnviar = {
        nombre: this.Puesto.nombre
      }

      axios.post('https://localhost:7241/Puesto', datosEnviar).then((result) => {
        console.log(result)
        window.location.href = 'ListarPuestos'
      })
    }
  }
}
</script>
