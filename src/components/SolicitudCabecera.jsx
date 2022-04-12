import React, { useState } from 'react'
import { formatDate } from '../utiles/funtctions';
import SolicitudDetalleContainer from './SolicitudDetalleContainer';

const SolicitudCabecera = ({cabecera}) => {          

    const [data, setData] = useState({});

    const [fecha, setFecha] = useState( formatDate(cabecera.fecha));
    const [orden, setOrden] = useState(cabecera.orden);    
    const [solicita, setSolicita] = useState(cabecera.solicita);
    const [observaciones, setObservaciones] = useState(cabecera.observaciones);

    const handleOrden = (e) => { setOrden(e.target.value) }
    const handleSolicita = (e) => { setSolicita(e.target.value) }
    const handleFecha = (e) => { setFecha(formatDate(e.target.value)) }
    const handleObservaciones = (e) => { setObservaciones(e.target.value) }

    const handleSubmit = (e) => {    
        e.preventDefault();    
        if (cabecera.idCabecera===0){
            setData({
                id:Math.trunc(Math.random()*10000),
                fecha: fecha,
                orden:orden,
                solicita:solicita,
                observaciones:observaciones,
                idccostos: cabecera.idccostos
            })
        }
        else {
            setData({
                id:cabecera.idCabecera,
                fecha: fecha,
                orden:orden,
                solicita:solicita,
                observaciones:observaciones,
                idccostos: cabecera.idccostos
            })
        }   
              
    }

  return (
    <>
      <hr />
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-4 fw-bold">{ cabecera.idCabecera?`Solicitud de giro Nº ${cabecera.idCabecera}`:'Nueva solicitud de giro' }</div>
        <div className="col-4">{cabecera.ccostos}</div>
        <div className="col-4">
          <input 
            type="date" 
            placeholder="Fecha" 
            value={fecha}  
            onChange={handleFecha}    
            />
        </div>
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            placeholder="Girar a la orden de"
            value = {orden}
            onChange = {handleOrden}
          />
        </div>
        <div className="col-12">
          <input    
            type="text" 
            className="form-control" 
            placeholder="Solicita" 
            value={solicita}
            onChange = {handleSolicita}
             />
        </div>
        <div className="col-12">
          <label htmlFor="observaciones" className="form-label">
            Observaciones
          </label>
          <textarea 
            className="form-control" 
            rows="3" 
            id="observaciones"
            onChange={handleObservaciones}
            value = {observaciones}
            />
        </div>
        <div className="d-grid gap-2 d-md-block">
          <button type="submit" className=".btn btn-primary">
            Guardar
          </button>
        </div>
      </form>
      <hr/>
      { cabecera.idCabecera
        ?
        <SolicitudDetalleContainer idCabecera={cabecera.idCabecera}/>
        :'' 
      }
    </>
  );
}

export default SolicitudCabecera