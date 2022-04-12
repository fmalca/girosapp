import React from 'react'
import { getCabeceraGiro } from '../fakedata/datos'
import SolicitudCabecera from './SolicitudCabecera'

const SolicitudCabeceraContainer = ({idCabecera}) => {       
    const cabecera = getCabeceraGiro(idCabecera);        
  return (
    <>
        <SolicitudCabecera cabecera={cabecera} />
    </>
  )
}

export default SolicitudCabeceraContainer