<template>
  <header>
   <nav>
    <RouterLink to="/">Login</RouterLink>
    <RouterLink to="/Dashboard">Dashboard</RouterLink>
  </nav>
</header>
  <header>
    <RouterLink to="/listarFacturas">Listar</RouterLink>
    <RouterLink to="/crearFactura">Crear</RouterLink>
  </header>
  <div class="container">
    <div class="card">
      <div class="card-header">Agregar Factura</div>
      <div class="card-body">
        <form v-on:submit.prevent="AgregarRegistro">
          <div class="form-group">
            <label for="">RazonSocial:</label>
            <input
              type="text"
              class="form-control"
              name="RazonSocial"
              v-model="Factura.razonSocial"
              aria-describedby="helpId"
              id="RazonSocial"
              placeholder="RazonSocial"
            />
            <small id="helpId" class="form-text" text-muted>Ingresa la Razon Social de la Factura</small>
          </div>
          <div class="form-group">
            <label for="">Fecha</label>
            <input
              type="text"
              class="form-control"
              name="Fecha"
              id="Fecha"
              v-model="Factura.fecha"
              aria-describedby="helpId"
              placeholder="Fecha"
            />
            <small id="helpId" class="form-text" text-muted>Ingrese la Fecha</small>
          </div>        
          <div class="form-group">
            <label for="">RFC</label>
            <input
              type="text"
              class="form-control"
              name="RFC"
              id="RFC"
              v-model="Factura.rfc"
              aria-describedby="helpId"
              placeholder="RFC"
            />
            <small id="helpId" class="form-text" text-muted>Ingrese el RFC de la Factura</small>
          </div>
          <div class="form-group">
            <label for="">FkCliente</label>
            <input
              type="text"
              class="form-control"
              name="FkCliente"
              id="FkCliente"
              v-model="Factura.fkCliente"
              aria-describedby="helpId"
              placeholder="FkCliente"
            /> 
            <small id="helpId" class="form-text" text-muted>Ingrese la Fk de cliente</small>
          </div>

          <br />

          <div class="btn-group" role="group">
            |<button type="submit" class="btn btn-success">Agregar</button>| |<router-link
              :to="{ name: 'listarFacturas' }"
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
      Factura: {}
    }
  },

  methods: {
    AgregarRegistro() {
      console.log(this.Factura)

      var datosEnviar = {
        razonSocial: this.Factura.razonSocial,
        fecha: this.Factura.fecha,
        rfc: this.Factura.rfc,
        fkCliente: this.Factura.fkCliente
      }

      axios.post('https://localhost:7241/Factura', datosEnviar).then((result) => {
        console.log(result)
        window.location.href = 'ListarFacturas'
      })
    }
  }
}
</script>
