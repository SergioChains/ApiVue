<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Editar Puesto</div>
      <div class="card-body">
        <form v-on:submit.prevent="editar">
          <div class="form-group">
            <label for="">Nombre:</label>
            <input type="text" class="form-control" name="Nombre" v-model="Puesto.nombre" aria-describedby="helpId"
              id="Nombre" placeholder="Nombre" />
            <small id="helpId" class="form-text" text-muted>Ingrese el Nombre del Puesto</small>
          </div>

          <br />

          <div class="btn-group" role="group">
            |<button type="submit" class="btn btn-warning">Modificar</button>|
            <!-- |<router-link :to="{ name: 'listar' }" class="btn btn-danger"
                >Cancelar</router-link
              >| -->
            <button type="button" v-on:click="listar" class="btn btn-danger">
              Cancelar</button>|
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
      Puesto: {},
    };
  },

  created: function () {
    this.obtenerInformacionID();
  },

  methods: {
    obtenerInformacionID() {
      axios
        .get("https://localhost:7241/Puesto?id=" + this.$route.params.pkpuesto)
        .then((result) => {
          console.log(result.data);
          this.Puesto = result.data;
        });
    },

    listar() {
      this.$router.push("/listarPuestos");
    },

    editar() {
      let datosEnviar = {
        nombre: this.Puesto.nombre
      };

      axios
        .put(
          "https://localhost:7241/Puesto?id=" + this.$route.params.pkpuesto,
          datosEnviar
        )
        .then((result) => {
          console.log(result);
          this.$router.push("/listarPuestos");
        });
    },
  },


};
</script>
  