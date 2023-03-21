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
              <tr v-for="Cliente in Cliente" :key="Cliente.id">
                <td>{{ Cliente.Id }}</td>
                <td>{{ Cliente.Nombre }}</td>
                <td>{{ Cliente.Apellido }}</td>
                <td>{{ Cliente.Telefono }}</td>
                <td>{{ Cliente.Email }}</td>
                <td>{{ Cliente.Direccion }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                    |<button
                      type="button"
                      v-on:click="borrarCliente(Cliente.id)"
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
        Cliente: []
      }
    },
    created: function () {
      this.consultarClientes()
    },
    methods: {
      consultarClientes() {
        axios.get('https://localhost:7241/Cliente').then((result) => {
          console.log(result.data)
          this.Cliente = result.data
        })
      },
  
      borrarCliente(id) {
        console.log(id)
  
        axios.delete('https://localhost:7241/Cliente/borrar/' + id)
  
        window.location.href = 'Listar'
      }
    }
  }
  </script>
  