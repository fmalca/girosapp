import React, { useState } from 'react'
import GirosListarContainer from './GirosListarContainer';

const Giros = ({ccostos, annos, semanas}) => { 
  const [ccosto, setCcosto] = useState(0);
  const [semana, setSemana] = useState(0);
  const [anno, setAnno] = useState(0);

  const handleCcosto = (e) =>{
    setCcosto( e.target.value);
  }
  const handleAnno = (e) =>{
    setAnno( e.target.value);
  }
  const handleSemana = (e) =>{
    setSemana( e.target.value);
  }

  return (
    <>
      <form className="row g-3">
        <div className="col-12">
          <select className="form-select" aria-label="Default select example" value={ccosto} onChange={handleCcosto}>
            { ccostos.map( (item) => (
                <option value={item.id} key={item.id} >{item.name}</option>
                )
              )
            }
          </select>
        </div>
        <div className="col-12">
          <select className="form-select" aria-label="Default select example" value={anno} onChange={handleAnno}>
            { annos.map( (item) => (
                <option value={item.id} key={item.id} >{item.name}</option>
                )
              )
            }
          </select>
        </div>
        <div className="col-12">
          <select className="form-select" aria-label="Default select example" value={semana} onChange={handleSemana}>
            { semanas.map( (item) => (
                <option value={item.id} key={item.id} >{item.name}</option>
                )
              )
            }
          </select>
        </div>
      </form>
      <hr />
      <GirosListarContainer
        ccosto={ccosto}
        semana = {semana} />   
    </>
  );
}

export default Giros