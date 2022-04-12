import React from 'react'
import { getAnnos, getCentroCostos, getSemanas } from '../fakedata/datos'
import Giros from './Giros'

const GirosContainer = () => {
    const ccostos = getCentroCostos();
    const annos = getAnnos();
    const semanas = getSemanas();
  return (
    <Giros 
      ccostos = {ccostos}
      annos = {annos}
      semanas = {semanas}
    />
  )
}

export default GirosContainer