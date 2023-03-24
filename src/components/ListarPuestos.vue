<template>
  <header>
   <nav>
    <RouterLink to="/">Login</RouterLink>
    <RouterLink to="/Dashboard">Dashboard</RouterLink>
  </nav>
</header>
  <header>
    <RouterLink to="/ListarPuestos">Listar</RouterLink>
    <RouterLink to="/CrearPuesto">Crear</RouterLink>
  </header>
  <div>
    <div class="card">
      <div class="card-header">Usuarios</div>

      <div class="card_body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="Puesto in Puestos" :key="Puesto.pkPuesto">
              <td>{{ Puesto.pkpuesto }}</td>
              <td>{{ Puesto.nombre }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                  |<button
                    type="button"
                    v-on:click="borrarPuesto(Puesto.pkpuesto)"
                    class="btn btn-danger"
                  >
                    Eliminar</button
                  >|
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      Puestos: []
    }
  },
  created: function () {
    this.consultarPuestos()
  },
  methods: {
    consultarPuestos() {
      axios.get('https://localhost:7241/Puesto').then((result) => {
        console.log(result.data)
        this.Puestos = result.data.result
        console.log(this.Puestos)
      })
    },

    borrarPuesto(pkpuesto) {
      console.log(pkpuesto)

      axios.delete('https://localhost:7241/Puesto?id=' + pkpuesto)

      window.location.href = 'ListarPuestos'
    }
  }
}
</script>
