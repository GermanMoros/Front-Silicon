import React, { useEffect } from "react";
import { useState } from "react";
import * as API from '../../Servicios/Servicios'


export function     ListaRemeras(){

    const [remera, setRemeras] = useState([]);

    const [mensajeError, setmensajeError] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')



    useEffect(()=>{
        API.getRemeras().then(setRemeras)
    },[])
    

    //BOTONES//

    const bajaRemeras  = async(id)=>{
        console.log('el id que vamos a dar de baja es el',id)

        const user = await API.BajaRemeras(id)
        if(user.status){
            
            setmensajeError(user.mensaje)
            setTimeout(()=>{
                setmensajeError('')
                window.location.reload(true)
            }, 3000)

        }else{
            setmensajeError(user.mensaje)
            setTimeout(()=>{
                setmensajeError('')
            }, 4000)
        }
    }

    const altaRemeras = async(id)=>{
        const user = await API.AltaRemeras(id)
        if(user.status){
            setmensajeSuccess(user.mensaje)
            setTimeout(()=>{
                setmensajeSuccess('')
                window.location.reload(true)
            }, 3000)
        }else{
            setmensajeError(user.mensaje)
            setTimeout(()=>{
                setmensajeError('')
            }, 4000)
        }
    }
    
    return(

        <div className="card table bg-dark text-white">
        <div className="card-header">
        Stock de Remeras
        </div>
        <div className="card-body">
        <div className="table-responsive">
                <table className="table text-white">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Talle</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Color</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acciones</th>

                        </tr>
                    </thead>
                    <tbody>
                        {remera.map((remeras)=>(
                        <tr className="">
                            <td scope="row">{remeras.idRemeras}</td>
                            <td>{remeras.Talle}</td>
                            <td>{remeras.Cantidad}</td>
                            <td>{remeras.Color}</td>
                            <td>{remeras.Estado}</td>
                            <td>
                            <div className="btn-group" role="group" aria-label="Basic example">
                            { (remeras.Estado=='A')? 

<button onClick={() => bajaRemeras(remeras.idRemeras,'B')} type="button" className="btn btn-outline-danger">Baja</button>
:
<button onClick={() =>altaRemeras(remeras.idRemeras,'A')} type="button" className="btn btn-outline-primary">Alta</button>

}</div>
                            </td>
                        
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
            
            

    )  
}