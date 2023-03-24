import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListarUsuario from '../components/ListarUsuario.vue'
import CrearUsuario from '../components/CrearUsuario.vue'
import ListarClientes from '../components/ListarClientes.vue'
import CrearCliente from '../components/CrearCliente.vue'
import ListarDepartamentos from '../components/ListarDepartamentos.vue'
import CrearDepartamento from '../components/CrearDepartamento.vue'
import ListarEmpleados from '../components/ListarEmpleados.vue'
import CrearEmpleado from '../components/CrearEmpleado.vue'
import ListarFacturas from '../components/ListarFacturas.vue'
import CrearFactura from '../components/CrearFactura.vue'
import ListarPuestos from '../components/ListarPuestos.vue'
import CrearPuesto from '../components/CrearPuesto.vue'
import ListarRoles from '../components/ListarRoles.vue'
import CrearRol from '../components/CrearRol.vue'
import EditarCliente from '../components/EditarCliente.vue'
import EditarRol from '../components/EditarRol.vue'
import EditarDepartamento from '../components/EditarDepartamento.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/listar',
      name: 'listar',
      component: ListarUsuario
    },
    {
      path: '/crear',
      name: 'crear',
      component: CrearUsuario
    },
    {
      path: '/listarC',
      name: 'listarC',
      component: ListarClientes
    },
    {
      path: '/crearC',
      name: 'crearC',
      component: CrearCliente
    },
    {
      path: '/editarC/:pkCliente',
      name: 'editarC',
      component: EditarCliente
    },
    {
      path: '/listarDepartamentos',
      name: 'listarDepartamentos',
      component: ListarDepartamentos
    },
    {
      path: '/crearDepartamento',
      name: 'crearDepartamento',
      component: CrearDepartamento
    },
    {
      path: '/editarD/:pkDepartamento',
      name: 'editarD',
      component: EditarDepartamento
    },
    {
      path: '/listarEmpleados',
      name: 'listarEmpleados',
      component: ListarEmpleados
    },
    {
      path: '/crearEmpleado',
      name: 'crearEmpleado',
      component: CrearEmpleado
    },
    {
      path: '/listarFacturas',
      name: 'listarFacturas',
      component: ListarFacturas
    },
    {
      path: '/crearFactura',
      name: 'crearFactura',
      component: CrearFactura
    },
    {
      path: '/listarPuestos',
      name: 'listarPuestos',
      component: ListarPuestos
    },
    {
      path: '/crearPuesto',
      name: 'crearPuesto',
      component: CrearPuesto
    },
    {
      path: '/listarRoles',
      name: 'listarRoles',
      component: ListarRoles
    },
    {
      path: '/crearRol',
      name: 'crearRol',
      component: CrearRol
    },
    {
      path: '/editarRol/:pkRol',
      name: 'editarRol',
      component: EditarRol
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue')
    }
  ]
})

export default router
