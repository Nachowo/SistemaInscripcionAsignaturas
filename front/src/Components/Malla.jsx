import React, { useState } from "react";
import PlanDeEstudioSevice from "../Services/PlanDeEstudioSevice";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import EstudianteService from "../Services/EstudianteService";
import "./styles.css";
import RequisitosService from "../Services/RequisitosService";

const Malla = () => {
  let alumnoRut = "";
  const [rut, setRut] = useState("");
  let [estudianteData, setEstudianteData] = useState([]);
  const [estudianeEncontrado, setEstudianteEncontrado] = useState(false);
  const [malla, setMalla] = useState({});
  const [cargando, setCargando] = useState(false);
  const [progreso, setProgreso] = useState(0);
  const [nombreCarrera, setNombreCarrera] = useState("");
  const [pre, setPre] = useState("");
  const [post, setPost] = useState("");

  const handleAlumno = (e) => {
    alumnoRut = e.target.value;
  };

  //sleep para demostrar funcionalidad de barra de carga
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  const buscarAlumno = async () => {
    setCargando(true);
    setProgreso(10);
    await sleep(500);
    try {
      setRut(alumnoRut);
      await sleep(500);
      setProgreso(30);
      const estudiante = await EstudianteService.getEstudiante(alumnoRut);
      console.log(estudiante);
      getCarrera(estudiante.data.carrera);
      await sleep(1000);
      setProgreso(60);
      const dataFormateada = formatearData(estudiante.data);
      const malla = await PlanDeEstudioSevice.getMalla(estudiante.data.carrera);
      console.log(malla.data);
      setMalla(malla.data);
      await sleep(1000);
      setProgreso(80);
      setEstudianteData(dataFormateada);
      setEstudianteEncontrado(true);
      setProgreso(100);
      await sleep(500);
      setCargando(false);
     
      
    } catch {
      setProgreso(100);
      setCargando(false);
      alert("Alumno no encontrado");
    }
  };

  const color = (ramo) => {
    console.log(ramo);
    return
    }

    const ventana = (ramo) => {
      return () => {
        Swal.fire({
          title: ramo.nombreAsignatura,
          html: `
            <p>Codigo: ${ramo.asignatura}</p>
            <p>Requisitos: ${pre.data}</p>
            <p>Requisitos: ${post.data}</p>
            <p>Plan de estudio: ${ramo.planDeEstudioId}</p>
            <p>Horario: ${ramo.horarios}</p>`,
          showCloseButton: true,
          showConfirmButton: false,
          customClass: {
            closeButton: 'mi-boton',
          },
          showCancelButton: true, 
          cancelButtonText: 'Cerrar', 
          cancelButtonClass: 'mi-boton', 
          focusCancel: true, 
          showConfirmButton: true, 
          confirmButtonText: 'Inscribir Ramo', 
          confirmButtonClass: 'mi-boton-inscribir', 
        }).then((result) => {
          if (result.isConfirmed) {
            
            inscribirRamo(ramo);
          }
        });
      };
    };
    
    const inscribirRamo = (ramo) => {
      ramo.color = "#66FF66";
      console.log(`Inscribiendo ramo: ${ramo.nombreAsignatura}`);
      setMalla([...malla]);
    };
    
    
const getCarrera = async (carrera) => {
    try {
        const res = await PlanDeEstudioSevice.getCarrera(carrera);
        console.log(res);
        setNombreCarrera(res.data);

}catch{}};

  const formatearData = (estudiante) => {
    const { rut, apellido, nombre, correo, carrera } = estudiante;
    return (
      <div>
        <p>Rut: {rut}</p>
        <p>Nombre: {nombre}</p>
        <p>Apellido: {apellido}</p>
        <p>Correo: {correo}</p>
      </div>
    );
  };

  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
      <link rel="stylesheet" href="assets/css/Lato.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"
      />
      <link rel="stylesheet" href="assets/css/pikaday.min.css" />

      <nav className="navbar navbar-expand-lg fixed-top portfolio-navbar gradient navbar-dark">
        <div className="container">
          <a className="navbar-brand logo" href="/">
            Sistema de gestión de ramos
          </a>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navbarNav"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="contact.html">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="page contact-page">
        {cargando && (
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${progreso}%` }}
              aria-valuenow={progreso}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {progreso}%
            </div>
          </div>
        )}
        <h4
          style={{ textAlign: "center", marginTop: "10px", paddingTop: "20px" }}
        >
          Para observar la malla primero ingrese el rut del estudiante{" "}
        </h4>

        <section className="portfolio-block contact">
          <div className="container">
            <div className="row">
              <div
                className="col-md-4"
                style={{
                  width: "300px",
                  height: "600px",
                  paddingRight: "20px",
                  paddingLeft: "0px",
                }}
              >
                <div style={{ marginRight: "20px" }}>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="alumno">
                      Alumno
                    </label>
                    <input
                      className="form-control item"
                      type="text"
                      id="alumno"
                      placeholder="Ingrese el rut del alumno"
                      onChange={handleAlumno}
                    />
                  </div>
                  <div className="mb-3"></div>
                  <div className="mb-3"></div>
                  <div className="mb-3"></div>
                  <div className="mb-3 mt-4">
                    <button
                      className="btn btn-primary btn-lg d-block w-100"
                      onClick={buscarAlumno}
                    >
                      Obtener malla del alumno
                    </button>
                  </div>
                  <div className="card special-skill-item border-0"></div>

                  {estudianeEncontrado ? (
                    <div>
                      {" "}
                      <h3 style={{ textAlign: "left" }}>Datos del alumno</h3>
                      {estudianteData}
                      <p>Carrera: {nombreCarrera}</p>
                    </div>
                  ) : null}
                </div>
              </div>
              <div
                className="col"
                style={{
                  width: "600px",
                  paddingRight: "5px",
                  paddingLeft: "px",
                }}
              >
                {estudianeEncontrado &&
                Array.isArray(malla) &&
                malla.length > 0 ? (
                  <table className="table">
                    <thead>
                      <tr>
                        {[...Array(11).keys()].map((nivel) => (
                          <th key={nivel + 1}>{`Nivel ${nivel + 1}`}</th>
                         
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {[...Array(11).keys()].map((nivel) => (
                          <td key={nivel + 1}>
                            <ul>
                              {malla
                                .filter((ramo) => ramo.nivel === nivel + 1)
                                .map((ramo, index) => (
                                    <div
                                    className={`ramo-container`}
                                    style={{ backgroundColor: ramo.color || "#FFFF99" }}
                                      onClick={ventana(ramo)}
                                    >
                                      {ramo.nombreAsignatura}
                                    </div>
                                ))}
                            </ul>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="page-footer py-3 border-top">
        <div className="container my-4">
          <div className="links">
            <a href="#">About me</a>
            <a href="#">Contact me</a>
            <a href="#">Projects</a>
          </div>
          <div className="social-icons">
            <a className="me-3" href="#">
              <i className="icon ion-social-facebook"></i>
            </a>
            <a className="me-3" href="#">
              <i className="icon ion-social-instagram-outline"></i>
            </a>
            <a className="me-3" href="#">
              <i className="icon ion-social-twitter"></i>
            </a>
          </div>
        </div>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      <script src="assets/js/pikaday.min.js"></script>
      <script src="assets/js/theme.js"></script>
    </>
  );
};

export default Malla;
