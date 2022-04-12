import React from "react";

const GirosListar = ({ giros, perfil }) => {    
  return (
    <>
      <div className="d-grid gap-2 d-md-block">
        <a className="btn btn-success" href="./giro.html">
          Nueva solicitud de giro
        </a>
      </div>
      <br />
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Centro de costos</th>
              <th>Fecha</th>
              <th>Moneda</th>
              <th>Total</th>
              <th>Estado</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {giros.map(item => (                
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.ccostos}</td>
                <td>{item.fecha}</td>
                <td>{item.moneda}</td>
                <td>{item.total}</td>
                <td>{item.estado}</td>
                <td>
                  <a className="btn " href="#">
                    <i
                      className="bi bi-pen"
                      style={{ fontSize: "1rem", color: "blue" }}
                    ></i>
                  </a>
                </td>
                <td>
                  <a className="btn " href="#">
                    <i
                      className="bi bi-file-x"
                      style={{ fontSize: "1rem", color: "red" }}
                    ></i>
                  </a>
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GirosListar;
