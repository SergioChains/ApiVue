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
    <div>
      <div class="card">
        <div class="card-header">Departamentos</div>
  
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
              <tr v-for="Departamento in Departamentos" :key="Departamento.pkDepartamento">
                <td>{{ Departamento.pkDepartamento }}</td>
                <td>{{ Departamento.nombre }}</td>                
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                    |<button
                      type="button"
                      v-on:click="EditarDepartamento(Departamento.pkDepartamento)"
                      class="btn btn-warning"
                    >
                      Editar</button>|
                    |<button
                      type="button"
                      v-on:click="borrarDepartamento(Departamento.pkDepartamento)"
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
        Departamentos: []
      }
    },
    created: function () {
      this.consultarDepartamentos()
    },
    methods: {
      consultarDepartamentos() {
        axios.get('https://localhost:7241/Departamento').then((result) => {
          console.log(result.data)
          this.Departamentos = result.data.result
          console.log(this.Departamentos)
        })
      },
      EditarDepartamento(pkDepartamento) {
      console.log(pkDepartamento);
      this.$router.push("/editarD/" + pkDepartamento);
    },
      borrarDepartamento(pkDepartamento) {
        console.log(pkDepartamento)
  
        axios.delete('https://localhost:7241/Departamento?id=' + pkDepartamento)
  
        window.location.href = 'ListarDepartamentos'
      }
    }
  }
  </script>
  