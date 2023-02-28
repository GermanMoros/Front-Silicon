import React, { useEffect } from "react";
import { useState } from "react";
import * as API from '../Servicios/Servicios'


export function     ListaRemeras(){

    const [remera, setRemeras] = useState([]);

    useEffect(()=>{
        API.remeras().then(setRemeras)
    },[])
    
    return(

        <div className="card">
        <div className="card-header">
        Stock de Remeras
        </div>
        <div className="card-body">
        <div className="table-responsive">
                <table className="table table-primary">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Talle</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Color</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {remera.map((remeras)=>(
                        <tr className="">
                            <td scope="row">{remeras.idremeras}</td>
                            <td>{remeras.Talle}</td>
                            <td>{remeras.Cantidad}</td>
                            <td>{remeras.Color}</td>
                            <td>{remeras.Estado}</td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
            
            

    )  
}