<template>
  <header>
    <nav class="TD" id="TD">
      |<RouterLink to="/Dashboard">Dashboard</RouterLink>|
    </nav>
  </header>
  <div>
    <div class="card">
      <div class="card-header">Roles<a href="/crearRol" type="button" class="btn btn-lg btn-primary"
          style="margin-left: 40%;">Crear</a>|</div>

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
            <tr v-for="Rol in Rols" :key="Rol.pkRol">
              <td>{{ Rol.pkRol }}</td>
              <td>{{ Rol.nombre }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                  |<button type="button" v-on:click="EditarRol(Rol.pkRol)" class="btn btn-warning">
                    Editar</button>|
                  |<button type="button" v-on:click="borrarRol(Rol.pkRol)" class="btn btn-danger">
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
      Rols: []
    }
  },
  created: function () {
    this.consultarRols()
  },
  methods: {
    consultarRols() {
      axios.get('https://localhost:7241/Rols').then((result) => {
        console.log(result.data)
        this.Rols = result.data.result
        console.log(this.Rols)
      })
    },
    EditarRol(pkRol) {
      console.log(pkRol);
      this.$router.push("/editarRol/" + pkRol);
    },
    borrarRol(pkRol) {
      console.log(pkRol)

      axios.delete('https://localhost:7241/Rols?id=' + pkRol)

      window.location.href = 'ListarRoles'
    }
  }
}
</script>
