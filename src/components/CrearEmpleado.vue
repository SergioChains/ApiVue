<template>
  <header>
    <nav>
      |<RouterLink to="/Dashboard">Dashboard</RouterLink>|
      |<RouterLink to="/listarEmpleados">Listar</RouterLink>|
    </nav>
  </header>
  <div class="container">
    <div class="card">
      <div class="card-header">Agregar Empleado</div>
      <div class="card-body">
        <form v-on:submit.prevent="AgregarRegistro">
          <div class="form-group">
            <label for="">Nombre:</label>
            <input type="text" class="form-control" name="Nombre" v-model="Empleado.nombre" aria-describedby="helpId"
              id="Nombre" placeholder="Nombre" />
            <small id="helpId" class="form-text" text-muted>Ingresa el nombre del Empleado</small>
          </div>
          <div class="form-group">
            <label for="">Apellidos</label>
            <input type="text" class="form-control" name="Apellidos" id="Apellidos" v-model="Empleado.apellidos"
              aria-describedby="helpId" placeholder="Apellidos" />
            <small id="helpId" class="form-text" text-muted>Ingresa los apellidos del Empleado</small>
          </div>
          <div class="form-group">
            <label for="">Direccion</label>
            <input type="text" class="form-control" name="Direccion" id="Direccion" v-model="Empleado.direccion"
              aria-describedby="helpId" placeholder="Direccion" />
            <small id="helpId" class="form-text" text-muted>Ingresa la direccion del Empleado</small>
          </div>
          <div class="form-group">
            <label for="">Ciudad</label>
            <input type="text" class="form-control" name="Ciudad" id="Ciudad" v-model="Empleado.ciudad"
              aria-describedby="helpId" placeholder="Ciudad" />
            <small id="helpId" class="form-text" text-muted>Ingrese la Ciudad del Empleado</small>
          </div>
          <div class="form-group">
            <label for="">FKPuesto</label>
            <input type="text" class="form-control" name="FkPuesto" id="FkPuesto" v-model="Empleado.fkPuesto"
              aria-describedby="helpId" placeholder="FkPuesto" />
            <small id="helpId" class="form-text" text-muted>Ingrese la FKPuesto del empleado</small>
          </div>
          <div class="form-group">
            <label for="">FkDepartamento</label>
            <input type="text" class="form-control" name="FkDepartamento" id="FkDepartamento"
              v-model="Empleado.fkDepartamento" aria-describedby="helpId" placeholder="FkDepartamento" />
            <small id="helpId" class="form-text" text-muted>Ingrese la FkDepartamento del Empleado</small>
          </div>

          <br />

          <div class="btn-group" role="group">
            |<button type="submit" class="btn btn-success">Agregar</button>| |<router-link
              :to="{ name: 'listarEmpleados' }" class="btn btn-danger">Cancelar</router-link>|
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
      Empleado: {}
    }
  },

  methods: {
    AgregarRegistro() {
      console.log(this.Empleado)

      var datosEnviar = {
        nombre: this.Empleado.nombre,
        apellidos: this.Empleado.apellidos,
        direccion: this.Empleado.direccion,
        ciudad: this.Empleado.ciudad,
        fkPuesto: this.Empleado.fkPuesto,
        fkDepartamento: this.Empleado.fkDepartamento
      }

      axios.post('https://localhost:7241/Empleado', datosEnviar).then((result) => {
        console.log(result)
        window.location.href = 'ListarEmpleados'
      })
    }
  }
}
</script>
