<template>
  <header>
   <nav>
    <RouterLink to="/">Login</RouterLink>
    <RouterLink to="/Dashboard">Dashboard</RouterLink>
  </nav>
</header>
  <header>
    <RouterLink to="/listarDepartamentos">Listar</RouterLink>
    <RouterLink to="/crearDepartamento">Crear</RouterLink>
  </header>
  <div class="container">
    <div class="card">
      <div class="card-header">Agregar Departamento</div>
      <div class="card-body">
        <form v-on:submit.prevent="AgregarRegistro">
          <div class="form-group">
            <label for="">Nombre:</label>
            <input
              type="text"
              class="form-control"
              name="Nombre"
              v-model="Departamento.nombre"
              aria-describedby="helpId"
              id="Nombre"
              placeholder="Nombre"
            />
            <small id="helpId" class="form-text" text-muted>Ingresa el nombre del departamento</small>
          </div>

          <br />

          <div class="btn-group" role="group">
            |<button type="submit" class="btn btn-success">Agregar</button>| |<router-link
              :to="{ name: 'listarDepartamentos' }"
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
      Departamento: {}
    }
  },

  methods: {
    AgregarRegistro() {
      console.log(this.Departamento)

      var datosEnviar = {
        nombre: this.Departamento.nombre
      }

      axios.post('https://localhost:7241/Departamento', datosEnviar).then((result) => {
        console.log(result)
        window.location.href = 'ListarDepartamentos'
      })
    }
  }
}
</script>
