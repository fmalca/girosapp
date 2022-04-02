import React from 'react'

const Giros = () => {
  return (
    <>
      <form className="row g-3">
        <div className="col-12">
          <select className="form-select" aria-label="Default select example" defaultValue={0}>
            <option value="0">Centro de costos</option>
            <option value="1">CP0034-2020-ATE</option>
            <option value="2">CP0034-2020-LIMA</option>
            <option value="3">CP0034-2020-SJL</option>
            <option value="4">POZOS-SUR</option>
            <option value="5">POZOS-NORTE</option>
            <option value="6">TODOS</option>
          </select>
        </div>
        <div className="col-12">
          <select className="form-select" aria-label="Default select example" defaultValue={0}>
            <option value="0">Año</option>
            <option value="1">2022</option>
            <option value="2">2023</option>
          </select>
        </div>
        <div className="col-12">
          <select className="form-select" aria-label="Default select example" defaultValue={0}>
            <option value="0">Mes</option>
            <option value="1">Enero</option>
            <option value="2">Febrero</option>
            <option value="2">Marzo</option>
            <option value="2">Abril</option>
          </select>
        </div>
        <div className="col-12">
          <select className="form-select" aria-label="Default select example" defaultValue={0}>
            <option value="0">Semana</option>
            <option value="1">Del 28/03/2022 al 03/04/2022</option>
            <option value="2">Del 21/03/2022 al 27/03/2022</option>
          </select>
        </div>
      </form>
      <hr />
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
          <tr>
            <td>1</td>
            <td>CP0034-2020-ATE</td>
            <td>25/03/2022</td>
            <td>S/</td>
            <td>213.72</td>
            <td>Pendiente</td>
            <td>
              <a className="btn " href="#">
                <i
                  className="bi bi-pen"
                  style={{"fontSize": "1rem", "color":"blue"}}
                ></i>
              </a>
            </td>
            <td>
              <a className="btn " href="#">
                <i
                  className="bi bi-file-x"
                  style={{"fontSize": "1rem", "color":"red"}}
                ></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>CP0034-2020-SJL</td>
            <td>22/03/2022</td>
            <td>S/</td>
            <td>520.72</td>
            <td>Aprobada</td>
            <td>
              <a className="btn " href="#">
                <i
                  className="bi bi-pen"
                  style={{"fontSize": "1rem", "color":"blue"}}
                ></i>
              </a>
            </td>
            <td>
              <a className="btn " href="#">
                <i
                  className="bi bi-file-x"
                  style={{"fontSize": "1rem", "color":"blue"}}
                ></i>
              </a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Giros