<template>
  <header>
    <nav class="TD" id="TD">
      |<RouterLink to="/Dashboard">Dashboard</RouterLink>|
    </nav>
  </header>
  <div>
    <div class="card">
      <div class="card-header" id="card-header">Usuarios<a href="/crear" type="button" class="btn btn-lg btn-primary"
          style="margin-left: 70%;">Crear</a>|</div>

      <div class="card_body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Password</th>
              <th>FechaRegistro</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="Usuario in Usuarios" :key="Usuario.pkUsuario">
              <td>{{ Usuario.pkUsuario }}</td>
              <td>{{ Usuario.user }}</td>
              <td>{{ Usuario.password }}</td>
              <td>{{ Usuario.fechaRegistro }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                  |<button type="button" v-on:click="EditarUsuario(Usuario.pkUsuario)"
                    class="btn btn-lg btn-outline-warning">
                    Editar</button>|
                  |<button type="button" v-on:click="borrarUsuario(Usuario.pkUsuario)"
                    class="btn btn-lg btn-outline-danger">
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
  .card-header{
    background-color: black;
  }
</style>
<script>
import axios from 'axios'
import { RouterLink } from 'vue-router'
export default {
  data() {
    return {
      Usuarios: []
    }
  },
  created: function () {
    this.consultarUsuarios()
  },
  methods: {
    consultarUsuarios() {
      axios.get('https://localhost:7241/Usuarios').then((result) => {
        console.log(result.data)
        this.Usuarios = result.data.result
        console.log(this.Usuarios)
      })
    },
    EditarUsuario(pkUsuario) {
      console.log(pkUsuario);
      this.$router.push("/editar/" + pkUsuario);
    },
    borrarUsuario(pkUsuario) {
      console.log(pkUsuario)

      axios.delete('https://localhost:7241/Usuarios?id=' + pkUsuario)

      window.location.href = 'Listar'
    }
  }
}
</script>
