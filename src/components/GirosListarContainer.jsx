import React from 'react'
import { getGiros, getPerfil } from '../fakedata/datos'
import GirosListar from './GirosListar'

const GirosListarContainer = ({ccosto,semana}) => {    
    const giros = getGiros(ccosto,semana)
    const perfil = getPerfil()
  return (
    <GirosListar
        giros = {giros}
        perfil = {perfil}
     />
  )
}

export default GirosListarContainer