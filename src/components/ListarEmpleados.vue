<template>
  <header>
    <nav class="TD" id="TD">
      |<RouterLink to="/Dashboard">Dashboard</RouterLink>|
    </nav>
  </header>
  <div>
    <div class="card">
      <div class="card-header">Empleados<a href="/CrearEmpleado" type="button" class="btn btn-lg btn-primary"
          style="margin-left: 70%;">Crear</a>|</div>

      <div class="card_body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Direccion</th>
              <th>Ciudad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="Empleado in Empleados" :key="Empleado.pkEmpleado">
              <td>{{ Empleado.pkEmpleado }}</td>
              <td>{{ Empleado.nombre }}</td>
              <td>{{ Empleado.apellidos }}</td>
              <td>{{ Empleado.direccion }}</td>
              <td>{{ Empleado.ciudad }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <!-- |<router-link :to="{name:'editar',param:{pkEmpleado:articulo.pkEmpleado}}" class="btn btn-info">Editar</router-link> | -->
                  |<button type="button" v-on:click="EditarEmpleado(Empleado.pkEmpleado)"
                    class="btn btn-warning">Editar</button>|
                  |<button type="button" v-on:click="borrarEmpleado(Empleado.pkEmpleado)" class="btn btn-danger">
                    Eliminar</button>|
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
      Empleados: []
    }
  },
  created: function () {
    this.consultarEmpleados()
  },
  methods: {
    consultarEmpleados() {
      axios.get('https://localhost:7241/Empleado').then((result) => {
        console.log(result.data)
        this.Empleados = result.data.result
        console.log(this.Empleados)
      })
    },
    EditarEmpleado(pkEmpleado) {
      console.log(pkEmpleado);
      this.$router.push("/editarE/" + pkEmpleado);
    },
    borrarEmpleado(pkEmpleado) {
      console.log(pkEmpleado)

      axios.delete('https://localhost:7241/Empleado?id=' + pkEmpleado)

      window.location.href = 'ListarEmpleados'
    }
  }
}
</script>
  