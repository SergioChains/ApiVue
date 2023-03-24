<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Editar Departamento</div>
        <div class="card-body">
          <form v-on:submit.prevent="editar">
            <div class="form-group">
              <label for="">Nombre:</label>
              <input
                type="text"
                class="form-control"
                name="Nombre"
                v-model="Departamento.nombre"
                aria-describedby="helpId"
                id="Nombre"
                placeholder="Nombre"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingrese el Nombre del Departamento</small
              >
            </div>
  
            <br />
  
            <div class="btn-group" role="group">
              |<button type="submit" class="btn btn-warning">Modificar</button>|
              <!-- |<router-link :to="{ name: 'listar' }" class="btn btn-danger"
                >Cancelar</router-link
              >| -->
              <button type="button" v-on:click="listar" class="btn btn-danger">
                Cancelar</button
              >|
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        Departamento: {},
      };
    },
  
    created: function () {
    this.obtenerInformacionID();
    },
  
    methods: {
      obtenerInformacionID() {
        axios
          .get("https://localhost:7241/Departamento?id=" + this.$route.params.pkDepartamento)
          .then((result) => {
            console.log(result.data);
            this.Departamento = result.data;
          });
      },
  
      listar() {
        this.$router.push("/listarDepartamentos");
      },
  
      editar() {
        let datosEnviar = {
          nombre: this.Departamento.nombre
        };
  
        axios
          .put(
            "https://localhost:7241/Departamento?id=" + this.$route.params.pkDepartamento,
            datosEnviar
          )
          .then((result) => {
            console.log(result); 
            this.$router.push("/listarDepartamentos");
          });
      },
    },
    

    };
  </script>
  