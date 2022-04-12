import React from 'react'
import { BsSearch, BsPen,BsXCircleFill } from "react-icons/bs";

const SolicitudDetalle = ({data}) => {
    console.log("data",data)
  return (
    <div>
       <div className="d-grid gap-2 d-md-block">
            <a className="btn btn-success"   href="./concepto.html">Nuevo concepto</a>
        </div>
        <br/>
        <div className="table-responsive">
        <table className="table table-bordered">        
        <thead>     
            <tr>
                <th>Proveedor</th>                
                <th>Tipo de documento</th>
                <th>Nº documento</th>                
                <th>Ver</th>                
                <th>Moneda</th>
                <th>Monto</th>
                <th>Comentario</th>
                <th>Editar</th>
                <th>Eliminar</th>            
            </tr>       
        </thead>            
        <tbody>
            { data.map((item)=>(
                <tr key={item.idDetalle}>
                    <td>{item.Proveedor}</td>
                    <td>{item.TipoDoc}</td>
                    <td>{item.NroDoc}</td>                
                    <td><BsSearch /></td>
                    <td>{item.Moneda}</td>                
                    <td>{item.Monto}</td>
                    <td>{item.Comentario}</td>
                    <td><BsPen /></td>
                    <td><BsXCircleFill /></td>
                </tr>
            )) }
            <tr>
                <td colSpan="4"></td>
                <td>Sub total</td>
                <td>25.71</td>
                <td></td>
            </tr>
        </tbody>
        </table>
        </div>

        <hr/>
        <h5>Otros Adjuntos</h5>
        <table className="table">
        <thead>
            <tr>
                <th>Id</th>                
                <th>Tipo de documento</th>
                <th>Nº documento</th>                
                <th>Ver</th> 
            </tr>
        </thead>            
        <tbody>
            <tr>
                <td>1</td>
                <td>Cotización</td>
                <td>001-25536</td>
                <td><i className="bi bi-search"></i></td>
            </tr>
        </tbody>
        </table>
    </div>
  )
}

export default SolicitudDetalle