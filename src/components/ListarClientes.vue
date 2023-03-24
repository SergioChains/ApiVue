<template>
    <header>
     <nav>
      <RouterLink to="/">Login</RouterLink>
      <RouterLink to="/Dashboard">Dashboard</RouterLink>
    </nav>
  </header>
    <header>
      <RouterLink to="/listarC">Listar</RouterLink>
      <RouterLink to="/crearC">Crear</RouterLink>
    </header>
    <div>
      <div class="card">
        <div class="card-header">Clientes</div>
  
        <div class="card_body">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Telefono</th>
                <th>Email</th>
                <th>Direccion</th>  
                <th>Acciones</th>            
              </tr>
            </thead>
            <tbody>
              <tr v-for="Cliente in Clientes" :key="Cliente.pkCliente">
                <td>{{ Cliente.pkCliente }}</td>
                <td>{{ Cliente.nombre }}</td>
                <td>{{ Cliente.apellido }}</td>
                <td>{{ Cliente.telefono }}</td>
                <td>{{ Cliente.email }}</td>
                <td>{{ Cliente.direccion }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                    |<button
                      type="button"
                      v-on:click="EditarCliente(Cliente.pkCliente)"
                      class="btn btn-warning"
                    >
                      Editar</button>|
                    |<button
                      type="button"
                      v-on:click="borrarCliente(Cliente.pkCliente)"
                      class="btn btn-danger"
                    >
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
  <script>
  import axios from 'axios'
  export default {
    data() {
      return {
        Clientes: []
      }
    },
    created: function () {
      this.consultarClientes()
    },
    methods: {
      consultarClientes() {
        axios.get('https://localhost:7241/Cliente').then((result) => {
          console.log(result.data)
          this.Clientes = result.data.result
          console.log(this.Clientes)
        })
      },
      EditarCliente(pkCliente) {
      console.log(pkCliente);
      this.$router.push("/editarC/" + pkCliente);
    },
  
      borrarCliente(pkCliente) {
        console.log(pkCliente)
  
        axios.delete('https://localhost:7241/Cliente?id=' + pkCliente)
  
        window.location.href = 'ListarC'
      }
    }
  }
  </script>
  