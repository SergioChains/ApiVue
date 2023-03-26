<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Editar Cliente</div>
      <div class="card-body">
        <form v-on:submit.prevent="editar">
          <div class="form-group">
            <label for="">Nombre:</label>
            <input type="text" class="form-control" name="Nombre" v-model="Rol.nombre" aria-describedby="helpId"
              id="Nombre" placeholder="Nombre" />
            <small id="helpId" class="form-text" text-muted>Ingrese el Nombre del Rol</small>
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
      Rol: {},
    };
  },

  created: function () {
    this.obtenerInformacionID();
  },

  methods: {
    obtenerInformacionID() {
      axios
        .get("https://localhost:7241/Rols?id=" + this.$route.params.pkRol)
        .then((result) => {
          console.log(result.data);
          this.Rol = result.data;
        });
    },

    listar() {
      this.$router.push("/listarRol");
    },

    editar() {
      let datosEnviar = {
        nombre: this.Rol.nombre
      };

      axios
        .put(
          "https://localhost:7241/Rols?id=" + this.$route.params.pkRol,
          datosEnviar
        )
        .then((result) => {
          console.log(result);
          this.$router.push("/listarRoles");
        });
    },
  },


};
</script>
  