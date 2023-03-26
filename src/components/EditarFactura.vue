<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Editar Factura</div>
      <div class="card-body">
        <form v-on:submit.prevent="editar">
          <div class="form-group">
            <label for="">RazonSocial:</label>
            <input type="text" class="form-control" name="RazonSocial" v-model="Factura.razonSocial"
              aria-describedby="helpId" id="RazonSocial" placeholder="RazonSocial" />
            <small id="helpId" class="form-text" text-muted>Ingrese la RazonSocial del Factura</small>
          </div>
          <div class="form-group">
            <label for="">Fecha:</label>
            <input type="text" class="form-control" name="Fecha" id="Fecha" v-model="Factura.fecha"
              aria-describedby="helpId" placeholder="Fecha" />
            <small id="helpId" class="form-text" text-muted>Ingresa la Fecha de la Factura</small>
          </div>
          <div class="form-group">
            <label for="">RFC:</label>
            <input type="text" class="form-control" name="RFC" id="RFC" v-model="Factura.rFC" aria-describedby="helpId"
              placeholder="RFC" />
            <small id="helpId" class="form-text" text-muted>Ingresa el RFC de la Factura</small>
          </div>

          <div class="form-group">
            <label for="">FkCliente:</label>
            <input type="text" class="form-control" name="FkCliente" id="FkCliente" v-model="Factura.fkCliente"
              aria-describedby="helpId" placeholder="FkCliente" />
            <small id="helpId" class="form-text" text-muted>Ingresa la FkCliente de la Factura</small>
          </div>

          <span class="custom-dropdown">
            <select>
              <option>Sherlock Holmes</option>
              <option>The Great Gatsby</option>
              <option>V for Vendetta</option>
              <option>The Wolf of Wallstreet</option>
              <option>Quantum of Solace</option>
            </select>
          </span>

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
      Factura: {},
    };
  },

  created: function () {
    this.obtenerInformacionID();
  },

  methods: {
    obtenerInformacionID() {
      axios
        .get("https://localhost:7241/Factura?id=" + this.$route.params.pkFactura)
        .then((result) => {
          console.log(result.data);
          this.Factura = result.data;
        });
    },

    listar() {
      this.$router.push("/listarFacturas");
    },

    editar() {
      let datosEnviar = {
        razonSocial: this.Factura.razonSocial,
        fecha: this.Factura.fecha,
        rFC: this.Factura.rFC,
        fkCliente: this.Factura.fkCliente
      };

      axios
        .put(
          "https://localhost:7241/Factura?id=" + this.$route.params.pkFactura,
          datosEnviar
        )
        .then((result) => {
          console.log(result);
          this.$router.push("/listarFacturas");
        });
    },
  },


};

</script>
  