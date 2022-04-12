import React from 'react'
import { getDetallesGiro } from '../fakedata/datos'
import SolicitudDetalle from './SolicitudDetalle'

const SolicitudDetalleContainer = ({idCabecera}) => {
  const detalles =  getDetallesGiro(idCabecera);  
  return (
    <>        
        <SolicitudDetalle data={detalles}/>
    </>
  )
}

export default SolicitudDetalleContainer