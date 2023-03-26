<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Editar Usuario</div>
      <div class="card-body">
        <form v-on:submit.prevent="editar">
          <div class="form-group">
            <label for="">User:</label>
            <input type="text" class="form-control" name="User" v-model="Usuario.user" aria-describedby="helpId" id="User"
              placeholder="User" />
            <small id="helpId" class="form-text" text-muted>Ingrese el User del Usuario</small>
          </div>
          <div class="form-group">
            <label for="">Password:</label>
            <input type="text" class="form-control" name="Password" id="Password" v-model="Usuario.password"
              aria-describedby="helpId" placeholder="Password" />
            <small id="helpId" class="form-text" text-muted>Ingresa el Password del Usuario</small>
          </div>
          <div class="form-group">
            <label for="">FechaRegistro:</label>
            <input type="text" class="form-control" name="FechaRegistro" id="FechaRegistro"
              v-model="Usuario.fechaRegistro" aria-describedby="helpId" placeholder="FechaRegistro" />
            <small id="helpId" class="form-text" text-muted> FechaRegistro del Usuario</small>
          </div>
          <div class="form-group">
            <label for="">FkEmpleado:</label>
            <input type="text" class="form-control" name="FkEmpleado" id="FkEmpleado" v-model="Usuario.fkEmpleado"
              aria-describedby="helpId" placeholder="FkEmpleado" />
            <small id="helpId" class="form-text" text-muted>Ingresa la FkEmpleado del Usuario</small>
          </div>
          <div class="form-group">
            <label for="">FkRol:</label>
            <input type="text" class="form-control" name="FkRol" id="FkRol" v-model="Usuario.fkRol"
              aria-describedby="helpId" placeholder="FkRol" />
            <small id="helpId" class="form-text" text-muted>Ingresa la FkRol del Usuario</small>
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
      Usuario: {},
    };
  },

  created: function () {
    this.obtenerInformacionID();
  },

  methods: {
    obtenerInformacionID() {
      axios
        .get("https://localhost:7241/Usuarios?id=" + this.$route.params.pkUsuario)
        .then((result) => {
          console.log(result.data);
          this.Usuario = result.data;
        });
    },

    listar() {
      this.$router.push("/listar");
    },

    editar() {
      let datosEnviar = {
        user: this.Usuario.user,
        password: this.Usuario.password,
        FechaRegistro: this.Usuario.FechaRegistro,
        fkEmpleado: this.Usuario.fkEmpleado,
        fkRol: this.Usuario.fkRol
      };

      axios
        .put(
          "https://localhost:7241/Usuarios?id=" + this.$route.params.pkUsuario,
          datosEnviar
        )
        .then((result) => {
          console.log(result);
          this.$router.push("/listar");
        });
    },
  },


};
</script>
  