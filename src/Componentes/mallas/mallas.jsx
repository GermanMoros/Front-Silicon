import React, { useEffect } from "react";
import { useState } from "react";
import * as API from '../../Servicios/Servicios'


export function     ListaMallas(){

    const [malla, setMallas] = useState([]);

    const [mensajeError, setmensajeError] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')



    useEffect(()=>{
        API.getMallas().then(setMallas)
    },[])
    

    //BOTONES//

    const bajaMallas  = async(id)=>{
        console.log('el id que vamos a dar de baja es el',id)

        const user = await API.BajaMallas(id)
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

    const altaMallas = async(id)=>{
        const user = await API.AltaMallas(id)
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
        Stock de Mallas
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
                        {malla.map((mallas)=>(
                        <tr className="">
                            <td scope="row">{mallas.idMallas}</td>
                            <td>{mallas.Talle}</td>
                            <td>{mallas.Cantidad}</td>
                            <td>{mallas.Color}</td>
                            <td>{mallas.Estado}</td>
                            <td>
                            <div className="btn-group" role="group" aria-label="Basic example">
                            { (mallas.Estado=='A')? 

<button onClick={() => bajaMallas(mallas.idMallas,'B')} type="button" className="btn btn-outline-danger">Baja</button>
:
<button onClick={() =>altaMallas(mallas.idMallas,'A')} type="button" className="btn btn-outline-primary">Alta</button>

}
</div>
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