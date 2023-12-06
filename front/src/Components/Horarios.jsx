import React, { useState } from "react";
import PlanDeEstudioSevice from "../Services/PlanDeEstudioSevice";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import EstudianteService from "../Services/EstudianteService";


const Horarios = () => {
  const [horariosSeleccionados, setHorariosSeleccionados] = useState([]);
  let asignatura = "";
  let [codigoAsignatura, setCodigoAsignatura] = useState("");
  const [asignaturaData, setAsignaturaData] = useState({});
  const [horarioEncontrado, setHorarioEncontrado] = useState(false);
  const [horarioElegido, setHorarioElegido] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [progreso, setProgreso] = useState(0);

  const handleAsignatura = (e) => {
    asignatura = e.target.value;
  };

  

  const submitHorario = async () => {
    setCargando(true);
    setProgreso(10);
    await sleep(1000);
    await PlanDeEstudioSevice.pasarHorario(
      codigoAsignatura,
      horarioElegido
    );
    await sleep(100);
    setProgreso(100);
    await sleep(500);

    setCargando(false);
      Swal.fire({
        title: '¡Horario Subido!',
        text: 'El horario se ha subido exitosamente.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    
    
  };
  //sleep para demostrar funcionalidad de barra de carga
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  const prueba = async () => {
      EstudianteService.getEstudiante("E-14322");

  }
  const buscarAsignatura = async () => {
    setCargando(true);
    setProgreso(10);
    await sleep(500);
    try{
      let asign = await PlanDeEstudioSevice.getAsignaturas(asignatura);
      await sleep(500);
      setProgreso(30);
      await sleep(1000);
      setProgreso(70);
      const dataFormateada = formatAsignaturaData(asign.data);
      await sleep(1000);
      setProgreso(80);
      setAsignaturaData(dataFormateada);

      setHorarioEncontrado(true);
      
      setProgreso(100);
      await sleep(500);
      setCargando(false);
    }catch{
      setProgreso(100);
      setCargando(false);
      alert("Asignatura no encontrada");
    }
  };

  const formatAsignaturaData = (asignData) => {
    const { planDeEstudioId, nivel, nombreAsignatura, carrera, asignatura } =
      asignData;
    console.log(asignatura);
    setCodigoAsignatura(asignatura);
    return (
      <div>
        <br></br>
        <p>Nombre de Asignatura: {nombreAsignatura}</p>
        <p>Carrera: {carrera}</p>
        <p>Plan de Estudio: {planDeEstudioId}</p>
        <p>Nivel: {nivel}</p>
      </div>
    );
  };

  const handleSeleccion = (hora, dia) => {
    if (!horarioElegido.includes(hora + dia)) {
      horarioElegido.push(hora + dia);
    } else {
      let indice = horarioElegido.indexOf(hora + dia);
      horarioElegido.splice(indice, 1);
    }

    const horarioExistente = horariosSeleccionados[hora];

    if (horarioExistente && horarioExistente[dia]) {
      const nuevosHorarios = { ...horariosSeleccionados };
      delete nuevosHorarios[hora][dia];
      if (Object.keys(nuevosHorarios[hora]).length === 0) {
        delete nuevosHorarios[hora];
      }

      setHorariosSeleccionados(nuevosHorarios);
    } else {
      setHorariosSeleccionados((prevHorarios) => ({
        ...prevHorarios,
        [hora]: { ...(prevHorarios[hora] || {}), [dia]: { hora, dia } },
      }));
    }
    console.log(horarioElegido);
  };

  const isHorarioSeleccionado = (hora, dia) => {
    return !!(horariosSeleccionados[hora] && horariosSeleccionados[hora][dia]);
  };

  const renderHoras = () => {
    const horas = [];
    let desc = 0;

    for (let i = 8; i < 20; i += 2) {
      desc++;

      horas.push(
        <tr key={i}>
          <td>
            {i}:00 - {i + 2}:00
          </td>
          <td>
            <button
              className={`btn ${
                isHorarioSeleccionado(i, "l") ? "btn-danger" : "btn-primary"
              }`}
              type="button"
              onClick={() => handleSeleccion(i, "l")}
            >
              Seleccionar
            </button>
          </td>
          <td>
            <button
              className={`btn ${
                isHorarioSeleccionado(i, "m") ? "btn-warning" : "btn-primary"
              }`}
              type="button"
              onClick={() => handleSeleccion(i, "m")}
            >
              Seleccionar
            </button>
          </td>
          <td>
            <button
              className={`btn ${
                isHorarioSeleccionado(i, "w") ? "btn-dark" : "btn-primary"
              }`}
              type="button"
              onClick={() => handleSeleccion(i, "w")}
            >
              Seleccionar
            </button>
          </td>
          <td>
            <button
              className={`btn ${
                isHorarioSeleccionado(i, "j") ? "btn-success" : "btn-primary"
              }`}
              type="button"
              onClick={() => handleSeleccion(i, "j")}
            >
              Seleccionar
            </button>
          </td>
          <td>
            <button
              className={`btn ${
                isHorarioSeleccionado(i, "v") ? "btn-secondary" : "btn-primary"
              }`}
              type="button"
              onClick={() => handleSeleccion(i, "v")}
            >
              Seleccionar
            </button>
          </td>
        </tr>
      );

      if (desc % 2 === 0 && i < 18) {
        horas.push(
          <tr key={`descanso${i}`}>
            <td>
              {i + 2}:00 - {i + 3}:00 (Receso)
            </td>
            <td colSpan={5}></td>
          </tr>
        );
      }
    }

    return horas;
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
                <h4 style={{ textAlign: "center", marginTop: "10px", paddingTop:"20px"  }}>Ingrese el codigo de la asignatura y luego seleccione los bloques en los que se realizará la asignatura </h4>

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
                      <label className="form-label" htmlFor="asignatura">
                        Asignatura
                      </label>
                      <input
                        className="form-control item"
                        type="number"
                        id="asignatura"
                        placeholder="Ingrese el código de la asignatura ej: "
                        onChange={handleAsignatura}
                      />
                    </div>
                    <div className="mb-3"></div>
                    <div className="mb-3"></div>
                    <div className="mb-3"></div>
                    <div className="mb-3 mt-4">
                      <button
                        className="btn btn-primary btn-lg d-block w-100"
                        onClick={buscarAsignatura}
                      >
                        Buscar asignatura
                      </button>
                      <button
                        className="btn btn-primary btn-lg d-block w-100"
                        onClick={prueba}
                      >
                        Boton de prueba
                      </button>
                    </div>
                    <div className="card special-skill-item border-0"></div>

                    {horarioEncontrado ? (
                      <div>
                        {" "}
                        <h3 style={{ textAlign: "left" }}>
                          Datos de la asignatura
                        </h3>
                        {asignaturaData}
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
                  <div className="table-responsive" style={{ width: "100%" }}>
                    {horarioEncontrado ? (
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Horario</th>
                            <th>Lunes</th>
                            <th>Martes</th>
                            <th>Miércoles</th>
                            <th>Jueves</th>
                            <th>Viernes</th>
                          </tr>
                        </thead>
                        <tbody>{renderHoras()}</tbody>
                      </table>
                    ) : null}
                    <br></br>
                  </div>
                  {horarioEncontrado ? (
                    <button
                      className="btn btn-primary btn-lg d-block w-100"
                      onClick={submitHorario}
                    >
                      Guardar horario
                    </button>
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

export default Horarios;
