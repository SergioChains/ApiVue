<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Editar Cliente</div>
      <div class="card-body">
        <form v-on:submit.prevent="editar">
          <div class="form-group">
            <label for="">Nombre:</label>
            <input type="text" class="form-control" name="Nombre" v-model="Cliente.nombre" aria-describedby="helpId"
              id="Nombre" placeholder="Nombre" />
            <small id="helpId" class="form-text" text-muted>Ingrese el Nombre del Cliente</small>
          </div>
          <div class="form-group">
            <label for="">Apellido:</label>
            <input type="text" class="form-control" name="Apellido" id="Apellido" v-model="Cliente.apellido"
              aria-describedby="helpId" placeholder="Apellido" />
            <small id="helpId" class="form-text" text-muted>Ingresa el Apellido del Cliente</small>
          </div>
          <div class="form-group">
            <label for="">Telefono:</label>
            <input type="text" class="form-control" name="Telefono" id="Telefono" v-model="Cliente.telefono"
              aria-describedby="helpId" placeholder="Telefono" />
            <small id="helpId" class="form-text" text-muted>Ingresa el Telefono del Cliente</small>
          </div>
          <div class="form-group">
            <label for="">Email:</label>
            <input type="text" class="form-control" name="Email" id="Email" v-model="Cliente.email"
              aria-describedby="helpId" placeholder="Email" />
            <small id="helpId" class="form-text" text-muted>Ingresa el Email del Cliente</small>
          </div>
          <div class="form-group">
            <label for="">Direccion:</label>
            <input type="text" class="form-control" name="Direccion" id="Direccion" v-model="Cliente.direccion"
              aria-describedby="helpId" placeholder="Direccion" />
            <small id="helpId" class="form-text" text-muted>Ingresa la Direccion del Cliente</small>
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
      Cliente: {},
    };
  },

  created: function () {
    this.obtenerInformacionID();
  },

  methods: {
    obtenerInformacionID() {
      axios
        .get("https://localhost:7241/Cliente?id=" + this.$route.params.pkCliente)
        .then((result) => {
          console.log(result.data);
          this.Cliente = result.data;
        });
    },

    listar() {
      this.$router.push("/listarC");
    },

    editar() {
      let datosEnviar = {
        nombre: this.Cliente.nombre,
        apellido: this.Cliente.apellido,
        telefono: this.Cliente.telefono,
        email: this.Cliente.email,
        direccion: this.Cliente.direccion
      };

      axios
        .put(
          "https://localhost:7241/Cliente?id=" + this.$route.params.pkCliente,
          datosEnviar
        )
        .then((result) => {
          console.log(result);
          this.$router.push("/listarC");
        });
    },
  },


};
</script>
  