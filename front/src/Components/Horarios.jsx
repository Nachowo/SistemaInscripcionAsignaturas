import React, { useState } from 'react';

const Horarios = () => {
  const [horariosSeleccionados, setHorariosSeleccionados] = useState({});

  const handleSeleccion = (hora, dia) => {
    const horarioExistente = horariosSeleccionados[hora];

    if (horarioExistente && horarioExistente[dia]) {
      const nuevosHorarios = { ...horariosSeleccionados };
      delete nuevosHorarios[hora][dia];
      if (Object.keys(nuevosHorarios[hora]).length === 0) {
        delete nuevosHorarios[hora];
      }

      setHorariosSeleccionados(nuevosHorarios);
    } else {
      // Si no existe, seleccionar
      setHorariosSeleccionados(prevHorarios => ({
        ...prevHorarios,
        [hora]: { ...(prevHorarios[hora] || {}), [dia]: { hora, dia } },
      }));
    }
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
              className={`btn ${isHorarioSeleccionado(i, 'lunes') ? 'btn-secondary' : 'btn-primary'}`}
              type="button"
              onClick={() => handleSeleccion(i, 'lunes')}
            >
              Seleccionar
            </button>
          </td>
          <td>
            <button
              className={`btn ${isHorarioSeleccionado(i, 'martes') ? 'btn-secondary' : 'btn-primary'}`}
              type="button"
              onClick={() => handleSeleccion(i, 'martes')}
            >
              Seleccionar
            </button>
          </td>
          <td>
            <button
              className={`btn ${isHorarioSeleccionado(i, 'miércoles') ? 'btn-secondary' : 'btn-primary'}`}
              type="button"
              onClick={() => handleSeleccion(i, 'miércoles')}
            >
              Seleccionar
            </button>
          </td>
          <td>
            <button
              className={`btn ${isHorarioSeleccionado(i, 'jueves') ? 'btn-secondary' : 'btn-primary'}`}
              type="button"
              onClick={() => handleSeleccion(i, 'jueves')}
            >
              Seleccionar
            </button>
          </td>
          <td>
            <button
              className={`btn ${isHorarioSeleccionado(i, 'viernes') ? 'btn-secondary' : 'btn-primary'}`}
              type="button"
              onClick={() => handleSeleccion(i, 'viernes')}
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
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <title>Contact - Brand</title>
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/Lato.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css" />
        <link rel="stylesheet" href="assets/css/pikaday.min.css" />
      </head>
      <body>
        <nav className="navbar navbar-expand-lg fixed-top portfolio-navbar gradient navbar-dark">
          <div className="container">
            <a className="navbar-brand logo" href="#">
              Brand
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
                <div className="heading"></div>
                <div className="row">
                  <div className="col-md-4" style={{ width: '300px', height: '600px', paddingRight: '0px', paddingLeft: '0px' }}>
                    <form
                      className="shadow-lg pe-xl-5"
                      data-bs-theme="light"
                      style={{
                        margin: '0px',
                        marginRight: '0px',
                        height: '250px',
                        width: '300px',
                        paddingRight: '50px',
                        paddingLeft: '50px',
                        textShadow: '0px 0px var(--bs-body-bg)',
                      }}
                    >
                      <div className="mb-3">
                        <label className="form-label" htmlFor="name">
                          Asignatura
                        </label>
                        <input className="form-control item" type="text" id="name" />
                      </div>
                      <div className="mb-3"></div>
                      <div className="mb-3"></div>
                      <div className="mb-3"></div>
                      <div className="mb-3 mt-4">
                        <button className="btn btn-primary btn-lg d-block w-100" type="submit">
                          Submit Form
                        </button>
                      </div>
                    </form>
                    <div className="card special-skill-item border-0"></div>
                    <h3 style={{ textAlign: 'left' }}>Website Project</h3>
                    <p style={{ textAlign: 'left' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies, feugiat est sed,
                      efr nunc, vivamus vel accumsan dui. Quisque ac dolor cursus, volutpat nisl vel, porttitor eros.
                    </p>
                  </div>
                  <div className="col" style={{ width: '600px', paddingRight: '5px', paddingLeft: '5px' }}>
                    <div className="table-responsive" style={{ width: '100%' }}>
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
                    </div>
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
      </body>
    </>
  );
};

export default Horarios;
