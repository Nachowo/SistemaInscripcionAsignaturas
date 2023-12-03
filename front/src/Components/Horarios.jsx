import React, { useState } from 'react';
import PlanDeEstudioSevice from '../Services/PlanDeEstudioSevice';

const Horarios = () => {
  const [horariosSeleccionados, setHorariosSeleccionados] = useState([]);
  let asignatura = '';
  let [codigoAsignatura, setCodigoAsignatura] = useState('');
  const [asignaturaData, setAsignaturaData] = useState({});
  const [horarioEncontrado, setHorarioEncontrado] = useState(false);
  const [horarioElegido, setHorarioElegido] = useState([]);

  const handleAsignatura = e => {
    asignatura = e.target.value;
  };

  const submitHorario = async () => {
    console.log(horarioElegido);
    console.log("en submit horario: " + codigoAsignatura)
    const response = await PlanDeEstudioSevice.pasarHorario(codigoAsignatura, horarioElegido);
    }
  
  const buscarAsignatura = async () => {
    let asign = await PlanDeEstudioSevice.getAsignaturas(asignatura);
    if (asign === null) {
      alert('Asignatura no encontrada');
    }
    else {
      const dataFormateada = formatAsignaturaData(asign.data);
      setAsignaturaData(dataFormateada);
      setHorarioEncontrado(true);
      
    }
  };

  const formatAsignaturaData = (asignData) => {
    const { planDeEstudioId, nivel, nombreAsignatura, carrera, asignatura } = asignData;
    console.log(asignatura);
    setCodigoAsignatura(asignatura);
    return <div>
      <br></br>
      <p>Nombre de Asignatura: {nombreAsignatura}</p>
    <p>Carrera: {carrera}</p>
    <p>Plan de Estudio: {planDeEstudioId}</p>
    <p>Nivel: {nivel}</p>
    
  </div>
  };


  const handleSeleccion = (hora, dia) => {
    if(!horarioElegido.includes(hora+dia)){
      horarioElegido.push(hora+dia);
    }else{
      let indice = horarioElegido.indexOf(hora+dia);
      horarioElegido.splice(indice,1);
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
      setHorariosSeleccionados(prevHorarios => ({
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
          <td>{i}:00 - {i + 2}:00</td>
          <td>
            <button
              className={`btn ${isHorarioSeleccionado(i, 'l') ? 'btn-danger' : 'btn-primary'}`}
              type="button"
              onClick={() => handleSeleccion(i, 'l')}
            >
              Seleccionar
            </button>
          </td>
          <td>
            <button
              className={`btn ${isHorarioSeleccionado(i, 'm') ? 'btn-warning' : 'btn-primary'}`}
              type="button"
              onClick={() => handleSeleccion(i, 'm')}
            >
              Seleccionar
            </button>
          </td>
          <td>
            <button
              className={`btn ${isHorarioSeleccionado(i, 'w') ? 'btn-dark' : 'btn-primary'}`}
              type="button"
              onClick={() => handleSeleccion(i, 'w')}
            >
              Seleccionar
            </button>
          </td>
          <td>
            <button
              className={`btn ${isHorarioSeleccionado(i, 'j') ? 'btn-success' : 'btn-primary'}`}
              type="button"
              onClick={() => handleSeleccion(i, 'j')}
            >
              Seleccionar
            </button>
          </td>
          <td>
            <button
              className={`btn ${isHorarioSeleccionado(i, 'v') ? 'btn-secondary' : 'btn-primary'}`}
              type="button"
              onClick={() => handleSeleccion(i, 'v')}
            >
              Seleccionar
            </button>
          </td>
        </tr>
      );

      if (desc % 2 === 0 && i < 18) {
        horas.push(
          <tr key={`descanso${i}`}>
            <td>{i + 2}:00 - {i + 3}:00 (Receso)</td>
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/Lato.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css" />
        <link rel="stylesheet" href="assets/css/pikaday.min.css" />
      
        <nav className="navbar navbar-expand-lg fixed-top portfolio-navbar gradient navbar-dark">
          <div className="container">
            <a className="navbar-brand logo" href="/">
              Sistema de gestión de ramos
            </a>
            <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbarNav">
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
          <section className="portfolio-block contact">
            <section className="portfolio-block skills">
              <div className="container">
                <div className="row">
                  <div className="col-md-4" style={{ width: '300px', height: '600px', paddingRight: '20px', paddingLeft: '0px' }}>
                  <div style={{ marginRight: '20px' }}>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="asignatura">
                          Asignatura
                        </label>
                        <input className="form-control item" type="text" id="asignatura" placeholder='Ingrese el código de la asignatura ej: ' onChange={handleAsignatura}/>
                      </div>
                      <div className="mb-3"></div>
                      <div className="mb-3"></div>
                      <div className="mb-3"></div>
                      <div className="mb-3 mt-4">
                        <button className="btn btn-primary btn-lg d-block w-100" onClick={buscarAsignatura}>
                          Buscar asignatura
                        </button>
                      </div>
                    <div className="card special-skill-item border-0"></div>
                   
                    { horarioEncontrado ? (<div>  <h3 style={{ textAlign: 'left' }}>Datos de la asignatura</h3>
                    
                  
        {asignaturaData}
                     </div>): null}
                  </div>
                  </div>
                  <div className="col" style={{ width: '600px', paddingRight: '5px', paddingLeft: 'px' }}>
                    <div className="table-responsive" style={{ width: '100%' }}>
                    {horarioEncontrado ? (<table className="table">
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
        </table >): null}
        <br></br>
                    </div>
                    {horarioEncontrado ? (<button className="btn btn-primary btn-lg d-block w-100" onClick={submitHorario}>
                          Guardar horario
                        </button>): null}
                  </div>
                  
                </div>
              </div>
              
            </section>
            
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
