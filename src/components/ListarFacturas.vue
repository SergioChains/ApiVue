<template>
  <header>
    <nav class="TD" id="TD">
      |<RouterLink to="/Dashboard">Dashboard</RouterLink>|
    </nav>
  </header>
  <div>
    <div class="card">
      <div class="card-header">Facturas<a href="/CrearFactura" type="button" class="btn btn-lg btn-primary"
          style="margin-left: 70%;">Crear</a>|</div>

      <div class="card_body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>RazonSocial</th>
              <th>Fecha</th>
              <th>RFC</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="Factura in Facturas" :key="Factura.pkFactura">
              <td>{{ Factura.pkFactura }}</td>
              <td>{{ Factura.razonSocial }}</td>
              <td>{{ Factura.fecha }}</td>
              <td>{{ Factura.rfc }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                  |<button type="button" v-on:click="EditarFactura(Factura.pkFactura)" class="btn btn-warning">
                    Editar</button>|
                  |<button type="button" v-on:click="borrarFactura(Factura.pkFactura)" class="btn btn-danger">
                    Eliminar</button>|
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<style>
  .TD{
    font-size: xx-large;
  }
</style>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      Facturas: []
    }
  },
  created: function () {
    this.consultarFacturas()
  },
  methods: {
    consultarFacturas() {
      axios.get('https://localhost:7241/Factura').then((result) => {
        console.log(result.data)
        this.Facturas = result.data.result
        console.log(this.Facturas)
      })
    },
    EditarFactura(pkFactura) {
      console.log(pkFactura);
      this.$router.push("/editarF/" + pkFactura);
    },
    borrarFactura(pkFactura) {
      console.log(pkFactura)

      axios.delete('https://localhost:7241/Factura?id=' + pkFactura)

      window.location.href = 'ListarFacturas'
    }
  }
}
</script>
