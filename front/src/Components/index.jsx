import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const Index = () => {

  const navigateTo = (event,path) => {
    event.preventDefault();
    window.location.href = path;
  };

  return (
    <><head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
      <title>Home - Brand</title>
      <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
      <link rel="stylesheet" href="assets/css/Lato.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css" />
      <link rel="stylesheet" href="assets/css/pikaday.min.css" />
      </head>
      <body>
        <nav class="navbar navbar-expand-lg fixed-top portfolio-navbar gradient navbar-dark">
          <div class="container"><a class="navbar-brand logo" href="#">Sistema de gestión de ramos</a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navbarNav"><span class="visually-hidden">Toggle navigation</span></button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link active" href="#">Menú</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <main class="page lanidng-page">
          <section class="portfolio-block photography"></section>
          <section class="portfolio-block skills">
            <div class="container">
              <div class="heading">
                <h2>¿Que acción desea realizar?</h2>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card special-skill-item border-0">
                    <div class="card-header bg-transparent border-0"><i class="icon ion-android-calendar"></i>
                    <br></br><br></br>
                    
                    <button class="btn btn-outline-primary btn-lg" type="button" onClick={(e)=>navigateTo(e,'/Horarios') } >Asignar horarios</button></div>
                    <div class="card-body">
                      <h3 class="card-title"></h3>
                      <p class="card-text">Ingrese el horario de clases para alguna asignatura.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card special-skill-item border-0">
                    <div class="card-body">
                      <h3 class="card-title"></h3>
                      <p class="card-text"></p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card special-skill-item border-0">
                    <div class="card-header bg-transparent border-0"><i class="icon ion-ios-bookmarks"></i><br></br><br></br>
                    <button class="btn btn-outline-primary btn-lg" type="button" onClick={(e)=>navigateTo(e,'/MallaInteractiva') }>Tomar ramos</button></div>
                    <div class="card-body">
                      <h3 class="card-title"></h3>
                      <p class="card-text">Realize la toma de ramos a traves de una malla interactiva.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer class="page-footer py-3 border-top">
          <div class="container my-4">
            <div class="links"><a href="#">About me</a><a href="#">Contact me</a><a href="#">Projects</a></div>
            <div class="social-icons"><a class="me-3" href="#"><i class="icon ion-social-facebook"></i></a><a class="me-3" href="#"><i class="icon ion-social-instagram-outline"></i></a><a class="me-3" href="https://github.com/Nachowo"><i class="icon ion-social-github"></i></a></div>
          </div>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
        <script src="assets/js/pikaday.min.js"></script>
        <script src="assets/js/theme.js"></script>
      </body></>

  );
};

export default Index;
