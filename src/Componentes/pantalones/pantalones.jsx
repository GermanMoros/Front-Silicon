import React, { useEffect } from "react";
import { useState } from "react";
import * as API from '../../Servicios/Servicios'


export function     ListaPantalones(){

    const [pantalon, setPantalones] = useState([]);

    const [mensajeError, setmensajeError] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')



    useEffect(()=>{
        API.getPantalones().then(setPantalones)
    },[])
    

    //BOTONES//

    const bajaPantalones  = async(id)=>{
        console.log('el id que vamos a dar de baja es el',id)

        const user = await API.BajaPantalones(id)
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

    const altaPantalones = async(id)=>{
        const user = await API.AltaPantalones(id)
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
        Stock de Pantalones
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
                        {pantalon.map((pantalones)=>(
                        <tr className="">
                            <td scope="row">{pantalones.idpantalones}</td>
                            <td>{pantalones.Talle}</td>
                            <td>{pantalones.Cantidad}</td>
                            <td>{pantalones.Color}</td>
                            <td>{pantalones.Estado}</td>
                            <td>
                            <div className="btn-group" role="group" aria-label="Basic example">
                            { (pantalones.Estado=='A')? 

<button onClick={() => bajaPantalones(pantalones.idpantalones,'B')} type="button" className="btn btn-outline-danger">Baja</button>
:
<button onClick={() =>altaPantalones(pantalones.idpantalones,'A')} type="button" className="btn btn-outline-primary">Alta</button>

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