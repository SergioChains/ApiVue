<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Editar Empleado</div>
      <div class="card-body">
        <form v-on:submit.prevent="editar">
          <div class="form-group">
            <label for="">Nombre:</label>
            <input type="text" class="form-control" name="Nombre" v-model="Empleado.nombre" aria-describedby="helpId"
              id="Nombre" placeholder="Nombre" />
            <small id="helpId" class="form-text" text-muted>Ingrese el Nombre del Empleado</small>
          </div>
          <div class="form-group">
            <label for="">Apellidos:</label>
            <input type="text" class="form-control" name="Apellidos" id="Apellidos" v-model="Empleado.apellidos"
              aria-describedby="helpId" placeholder="Apellidos" />
            <small id="helpId" class="form-text" text-muted>Ingresa los Apellidos del Empleado</small>
          </div>
          <div class="form-group">
            <label for="">Direccion:</label>
            <input type="text" class="form-control" name="Direccion" id="Direccion" v-model="Empleado.direccion"
              aria-describedby="helpId" placeholder="Direccion" />
            <small id="helpId" class="form-text" text-muted>Ingresa la Direccion del Empleado</small>
          </div>
          <div class="form-group">
            <label for="">Ciudad:</label>
            <input type="text" class="form-control" name="Ciudad" id="Ciudad" v-model="Empleado.ciudad"
              aria-describedby="helpId" placeholder="Ciudad" />
            <small id="helpId" class="form-text" text-muted>Ingresa la Ciudad del Empleado</small>
          </div>
          <div class="form-group">
            <label for="">FkPuesto:</label>
            <input type="text" class="form-control" name="FkPuesto" id="FkPuesto" v-model="Empleado.fkPuesto"
              aria-describedby="helpId" placeholder="FkPuesto" />
            <small id="helpId" class="form-text" text-muted>Ingresa la FkPuesto del Empleado</small>
          </div>
          <div class="form-group">
            <label for="">FkDepartamento:</label>
            <input type="text" class="form-control" name="FkDepartamento" id="FkDepartamento"
              v-model="Empleado.fkDepartamento" aria-describedby="helpId" placeholder="FkDepartamento" />
            <small id="helpId" class="form-text" text-muted>Ingresa la FkDepartamento del Empleado</small>
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
      Empleado: {},
    };
  },

  created: function () {
    this.obtenerInformacionID();
  },

  methods: {
    obtenerInformacionID() {
      axios
        .get("https://localhost:7241/Empleado?id=" + this.$route.params.pkEmpleado)
        .then((result) => {
          console.log(result.data);
          this.Empleado = result.data;
        });
    },

    listar() {
      this.$router.push("/listarEmpleados");
    },

    editar() {
      let datosEnviar = {
        nombre: this.Empleado.nombre,
        apellidos: this.Empleado.apellidos,
        direccion: this.Empleado.direccion,
        ciudad: this.Empleado.ciudad,
        fkPuesto: this.Empleado.fkPuesto,
        fkDepartamento: this.Empleado.fkDepartamento
      };

      axios
        .put(
          "https://localhost:7241/Empleado?id=" + this.$route.params.pkEmpleado,
          datosEnviar
        )
        .then((result) => {
          console.log(result);
          this.$router.push("/listarEmpleados");
        });
    },
  },


};
</script>
  