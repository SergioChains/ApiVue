<template>
    <header>
     <nav>
      <RouterLink to="/">Login</RouterLink>
      <RouterLink to="/Dashboard">Dashboard</RouterLink>
    </nav>
  </header>
    <header>
      <RouterLink to="/listarDepartamentos">Listar</RouterLink>
      <RouterLink to="/creardepartamento">Crear</RouterLink>
    </header>
    <div class="container">
      <div class="card">
        <div class="card-header">Agregar Departamento</div>
        <div class="card-body">
          <form v-on:submit.prevent="Agregar">
            <div class="form-group">
              <label for="">Nombre:</label>
              <input
                type="text"
                class="form-control"
                name="Nombre"
                v-model="Cliente.Nombre"
                aria-describedby="helpId"
                id="Nombre"
                placeholder="Nombre"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa el nombre del cliente</small>
            </div>
            <div class="form-group">
              <label for="">Apellido</label>
              <input
                type="text"
                class="form-control"
                name="Apellido"
                id="Apellido"
                v-model="Cliente.Apellido"
                aria-describedby="helpId"
                placeholder="Apellido"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa el apellido del cliente</small>
            </div>
            <div class="form-group">
              <label for="">Telefono</label>
              <input
                type="text"
                class="form-control"
                name="Telefono"
                id="Telefono"
                v-model="Cliente.Telefono"
                aria-describedby="helpId"
                placeholder="Telefono"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa el telefono del cliente</small>
            </div>
            <div class="form-group">
              <label for="">Email</label>
              <input
                type="text"
                class="form-control"
                name="Email"
                id="Email"
                v-model="Cliente.Email"
                aria-describedby="helpId"
                placeholder="Email"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa Email del cliente</small>
            </div>
            <div class="form-group">
              <label for="">Direccion</label>
              <input
                type="text"
                class="form-control"
                name="Direccion"
                id="Direccion"
                v-model="Cliente.Direccion"
                aria-describedby="helpId"
                placeholder="Direccion"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa la direccion del cliente</small>
            </div>
  
            <br />
  
            <div class="btn-group" role="group">
              |<button type="submit" class="btn btn-success">Agregar</button>| |<router-link
                :to="{ name: 'listar' }"
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
        Cliente: {}
      }
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.Cliente)
  
        var datosEnviar = {
          Nombre: this.Cliente.Nombre,
          Apellido: this.Cliente.Apellido,
          Telefono: this.Cliente.Telefono,
          Email: this.Cliente.Email,
          Direccion: this.Cliente.Direccion
        }
  
        axios.post('https://localhost:7241/Cliente', datosEnviar).then((result) => {
          console.log(result)
          window.location.href = 'Listar'
        })
      }
    }
  }
  </script>
  