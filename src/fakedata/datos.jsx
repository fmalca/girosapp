import { currentDate } from "../utiles/funtctions";

const centroCostos = [
    {id:0, name:"Centro de costos"},
    {id:1, name:"CP0034-2020-LIMA"},
    {id:2, name:"CP0034-2020-ATE"},
    {id:3, name:"CP0034-2020-SJL"},
]

const annos = [
    {id:0, name:"Año"},
    {id:2022, name:"2022"},
    {id:2023, name:"2023"},
]


const semanas = [
    {id:0, name:"Semana"},
    {id:1, name:"Del 28/03/2022 al 03/04/2022" },
    {id:2, name:"Del 04/04/2022 al 10/04/2022" },
]

const giros = [
    {id:1, ccostos:'CPP034-2020-ATE', moneda:'S/',total:213.72, estado:'Pendiente', idccosto:2, idsemana:1, fecha:'28/03/2022' }, 
    {id:2, ccostos:'CPP034-2020-ATE', moneda:'S/',total:520.52, estado:'Aprobada', idccosto:2, idsemana:1, fecha:'30/03/2022' } ,
    {id:2, ccostos:'CPP034-2020-ATE', moneda:'S/',total:520.52, estado:'Aprobada', idccosto:1, idsemana:2, fecha:'05/04/2022' } 
]

const perfil = 1; //1:Creador de solicitudes, 2: Aprobador 1, 3: Aprobador 2 

const cabeceraGiro = [
{idCabecera:1, idccostos:1, fecha:'28/03/2022', orden:'AWS', solicita:'FERNANDO MALCA', observaciones:'Depositar en cuenta',ccostos:'CP0034-2020 ATE'},
{idCabecera:2, idccostos:1, fecha:'29/03/2022', orden:'ZOOM', solicita:'ANGEHLO MEDINA', observaciones:'Depositar en cuenta1',ccostos:'CP0034-2020 ATE'},
{idCabecera:3, idccostos:2, fecha:'30/03/2022', orden:'FUMOSA', solicita:'GABRIEL ARRIETA', observaciones:'Depositar en cuenta2',ccostos:'CP0034-2020 LIMA'},
{idCabecera:4, idccostos:3, fecha:'31/03/2022', orden:'TAY LOY', solicita:'YUTI LEON', observaciones:'Depositar en cuenta3',ccostos:'CP0034-2020 SJL'}
]

const detalleGiro = [
    {idCabecera:1,idDetalle:101, idProveedor:1,Proveedor:"AWS", idTipoDoc:1, TipoDoc:"Factura",NroDoc:"978496417",Moneda:"$",
     Monto:13.72, Comentario:"202202"},
     {idCabecera:1,idDetalle:102, idProveedor:2,Proveedor:"Dropbox", idTipoDoc:1, TipoDoc:"Factura",NroDoc:"VQ8FNKWZP3NP",Moneda:"$",
     Monto:11.99, Comentario:"202202"}
]



export const getCentroCostos = () => centroCostos;
export const getAnnos = () => annos;
export const getSemanas = () => semanas;
export const getGiros = (idCcosto, idSemana) => giros.filter(x => x.idccosto===Number(idCcosto) && x.idsemana===Number(idSemana))
export const getPerfil = () => perfil;
export const getCabeceraGiro = (id) => {
                const vacio = { idCabecera:0, 
                                idccostos:0, 
                                fecha:currentDate(), 
                                orden:'', 
                                solicita:'', 
                                observaciones:''};                                

                if (Number(id)===0){                    
                        return vacio;
                } else {                      
                    const resultado = cabeceraGiro.find(x => x.idCabecera===Number(id))                    
                    if (resultado) {
                        return resultado
                    }
                    else {
                        return vacio;                       
                    }
                }                
};

export const getDetallesGiro = (idCabecera) => {
    return detalleGiro.filter(x=>x.idCabecera===Number(idCabecera))
}

export const getDetalleGiro = (idDetalle) => {
    return detalleGiro.find(x=>x.idDetalle===Number(idDetalle))
}



