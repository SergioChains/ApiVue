<template>
  <body id="body-pd">
    <header class="header" id="header">
      <header>
        <h1 class="diseño-login" id="diseño-login">Dashboard</h1>
      </header>
      <div class="header_toggle">
        <i class="bx bx-menu" id="header-toggle"></i>
      </div>
      <!-- <div class="header_img">
        <img
          src="https://ca-times.brightspotcdn.com/dims4/default/c3f4b96/2147483647/strip/true/crop/1970x1108+39+0/resize/1200x675!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001"
          alt=""
        />
      </div> -->
    </header>
    <div class="l-navbar" id="nav-bar">
      <nav class="nav"> 
        <div>
          <div class="nav_list">
            <router-link to="/"><a href="#" class="nav_link active">
                <i class="bx bx-grid-alt nav_icon"></i>
                <span class="nav_name">Logout</span>
              </a>
            </router-link>
            <router-link to="/Listar"><a href="#" class="nav_link active">
                <i class="bx bx-grid-alt nav_icon"></i>
                <span class="nav_name">Usuarios</span>
              </a>
            </router-link>
            <router-link to="/ListarC"><a href="#" class="nav_link active">
                <i class="bx bx-grid-alt nav_icon"></i>
                <span class="nav_name">Clientes</span>
              </a>
            </router-link>
            <router-link to="/ListarDepartamentos"><a href="#" class="nav_link active">
                <i class="bx bx-grid-alt nav_icon"></i>
                <span class="nav_name">Departamentos</span>
              </a>
            </router-link>
            <router-link to="/ListarEmpleados"><a href="#" class="nav_link active">
                <i class="bx bx-grid-alt nav_icon"></i>
                <span class="nav_name">Empleados</span>
              </a>
            </router-link>
            <router-link to="/ListarFacturas"><a href="#" class="nav_link active">
                <i class="bx bx-grid-alt nav_icon"></i>
                <span class="nav_name">Facturas</span>
              </a>
            </router-link>
            <router-link to="/ListarPuestos"><a href="#" class="nav_link active">
                <i class="bx bx-grid-alt nav_icon"></i>
                <span class="nav_name">Puestos</span>
              </a>
            </router-link>
            <router-link to="/ListarRoles"><a href="#" class="nav_link active">
                <i class="bx bx-grid-alt nav_icon"></i>
                <span class="nav_name">Roles</span>
              </a>
            </router-link>
          </div>
        </div>
      </nav>
    </div>
    <!--Container Main start-->
    <router-view />
    <!--Container Main end-->


  </body>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');

:root {
  --header-height: 5rem;
  --nav-width: 210px;
  --first-color: #091dd6;
  --first-color-light: #ff0808;
  --white-color: #ffffff;
  --body-font: 'Nunito', sans-serif;
  --normal-font-size: 1.2rem;
  --z-fixed: 100;
}

*,
::before,
::after {
  box-sizing: border-box;
}

body {
  position: relative;
  margin: var(--header-height) 0 0 0;
  padding: 0 1rem;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  transition: 0.5s;
}

a {
  text-decoration: none;
}

.header {
  width: 100%;
  height: var(--header-height);
  position: fixed;
  top: 0;
  left: 0;
  /* display:flex; */
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: var(--dark-color);
  z-index: var(--z-fixed);
  transition: 0.5s;
}

.diseño-login {
  text-shadow:
    3px 3px 1px rgb(0, 17, 255),
    5px 5px 2px rgb(0, 0, 0),
    8px 8px 3px rgb(255, 0, 0);
  font-size: 70px;
  text-align: center;
  align-content: center;

}

/* .header_toggle {
  color: var(--first-color);
  font-size: 1.5rem;
  cursor: pointer;
  
} */
/* .header_img {
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
} */
/* .header_img img {
  width: 40px;
} */
.l-navbar {
  position: fixed;
  top: 0;
  left: -30%;
  width: var(--nav-width);
  height: 100vh;
  background-color: var(--first-color);
  padding: 0.5rem 1rem 0 0;
  transition: 0.2s;
  z-index: var(--z-fixed);
}

.nav {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.nav_logo,
.nav_link {
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  column-gap: 1.5rem;
  padding: 0.5rem 0 0.5rem 1.5rem;
}

.nav_logo {
  margin-bottom: 2rem;
}

.nav_logo-icon {
  font-size: 1.25rem;
  color: var(--white-color);
}

.nav_logo-name {
  color: var(--white-color);
  font-weight: 700;
}

.nav_link {
  position: relative;
  color: var(--first-color-light);
  margin-bottom: 1.5rem;
  transition: 0.3s;
}

.nav_link:hover {
  color: var(--white-color);
}

.nav_icon {
  font-size: 1.25rem;
}

.show {
  left: 0;
}

.body-pd {
  padding-left: calc(var(--nav-width) + 1rem);
}

.active {
  color: var(--white-color);
}

.active::before {
  content: '♦';
  position: absolute;
  left: 0;
  width: 1px;
  height: 32px;
  background-color: var(--white-color);
}

.height-100 {
  height: 100vh;
}

@media screen and (min-width: 768px) {
  body {
    margin: calc(var(--header-height) + 1rem) 0 0 0;
    /* padding-left: calc(var(--nav-width)); */
  }

  .header {
    height: calc(var(--header-height) + 1rem);
    padding: 0 2rem 0 calc(var(--nav-width) + 2rem);
  }

  /* .header_img {
    width: 60px;
    height: 60px;
  }
  .header_img img {
    width: 60px;
  } */
  .l-navbar {
    left: 0;
    padding: 1rem 1rem 0 0;
  }

  .show {
    width: calc(var(--nav-width) + 156px);
  }

  /* .body-pd {
    /* padding-left: calc(var(--nav-width) + 188px); 
  } */
}</style>
