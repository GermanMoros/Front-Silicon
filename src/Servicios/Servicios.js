const API_URL = 'http://localhost:3300'

//Exportar nuestras funciones


export async function clientes(){
    try{
        const response = await fetch(`${API_URL}/Clientes`);
        const data = await response.json();
        return data;
}   catch (error){
    console.log('Nuestro error es',error);
}
}

//Funcion que trae datos
export async function getClientes(){
    // const token = JSON.parse(localStorage.getItem('token'));
    
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
        //   Authorization: `Bearer ${token}`,
        },
      };
      
    try{
        const response = await fetch(`${API_URL}/clientes`, requestOptions);
        const data = await response.json();
        return data;
    }catch(error){
        console.log('Nuestro error', error);
    }
}

// Baja y alta

export async function BajaCliente(idClientes){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',

        }
    };
    try{
        const response = await fetch(`${API_URL}/bajaclientes/${idClientes}`, requestOptions)
        const data = await response.json();
        console.log(data)
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function AltaCliente(idClientes){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try{
        const response = await fetch(`${API_URL}/altaclientes/${idClientes}`, requestOptions)
        const data = await response.json();
        // console.log(data)
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}







export async function proveedores(){
    try{
        const response = await fetch(`${API_URL}/Proveedores`);
        const data = await response.json();
        return data;
}   catch (error){
    console.log('Nuestro error es',error);
}
}










export async function buzosycamperas(){
    try{
        const response = await fetch(`${API_URL}/buzosycamperas`);
        const data = await response.json();
        return data;
}   catch (error){
    console.log('Nuestro error es',error);
}
}

//funcion buzosycamperas get//
export async function getBuzosyCamperas(){
    // const token = JSON.parse(localStorage.getItem('token'));
    
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
        //   Authorization: `Bearer ${token}`,
        },
      };
      
    try{
        const response = await fetch(`${API_URL}/buzosycamperas`, requestOptions);
        const data = await response.json();
        return data;
    }catch(error){
        console.log('Nuestro error', error);
    }
}

// Baja y alta

export async function BajaBuzosycamperas(idBuzosyCamperas){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',

        }
    };
    try{
        const response = await fetch(`${API_URL}/bajabuzosycamperas/${idBuzosyCamperas}`, requestOptions)
        const data = await response.json();
        console.log(data)
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function Altabuzosycamperas(idBuzosyCamperas){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try{
        const response = await fetch(`${API_URL}/altabuzosycamperas/${idBuzosyCamperas}`, requestOptions)
        const data = await response.json();
        // console.log(data)
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}


export async function chanclas(){
    try{
        const response = await fetch(`${API_URL}/chanclas`);
        const data = await response.json();
        return data;
}   catch (error){
    console.log('Nuestro error es',error);
}
}

//funcion chanclas get//
export async function getChanclas(){
    // const token = JSON.parse(localStorage.getItem('token'));
    
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
        //   Authorization: `Bearer ${token}`,
        },
      };
      
    try{
        const response = await fetch(`${API_URL}/chanclas`, requestOptions);
        const data = await response.json();
        return data;
    }catch(error){
        console.log('Nuestro error', error);
    }
}

// Baja y alta

export async function BajaChanclas(idchanclas){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',

        }
    };
    try{
        const response = await fetch(`${API_URL}/bajachanclas/${idchanclas}`, requestOptions)
        const data = await response.json();
        console.log(data)
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function AltaChanclas(idchanclas){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try{
        const response = await fetch(`${API_URL}/altachanclas/${idchanclas}`, requestOptions)
        const data = await response.json();
        // console.log(data)
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}


//  MALLAS //

export async function mallas(){
    try{
        const response = await fetch(`${API_URL}/mallas`);
        const data = await response.json();
        return data;
}   catch (error){
    console.log('Nuestro error es',error);
}
}
// GET MALLAS // 
export async function getMallas(){
    // const token = JSON.parse(localStorage.getItem('token'));
    
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
        //   Authorization: `Bearer ${token}`,
        },
      };
      
    try{
        const response = await fetch(`${API_URL}/mallas`, requestOptions);
        const data = await response.json();
        return data;
    }catch(error){
        console.log('Nuestro error', error);
    }
}

// Baja y alta MALLAS

export async function BajaMallas(idMallas){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',

        }
    };
    try{
        const response = await fetch(`${API_URL}/bajamallas/${idMallas}`, requestOptions)
        const data = await response.json();
        console.log(data)
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function AltaMallas(idMallas){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try{
        const response = await fetch(`${API_URL}/altamallas/${idMallas}`, requestOptions)
        const data = await response.json();
        // console.log(data)
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}
// PANTALONES //
export async function pantalones(){
    try{
        const response = await fetch(`${API_URL}/pantalones`);
        const data = await response.json();
        return data;
}   catch (error){
    console.log('Nuestro error es',error);
}
}
//funcion pantalones get//
export async function getPantalones(){
    // const token = JSON.parse(localStorage.getItem('token'));
    
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
        //   Authorization: `Bearer ${token}`,
        },
      };
      
    try{
        const response = await fetch(`${API_URL}/pantalones`, requestOptions);
        const data = await response.json();
        return data;
    }catch(error){
        console.log('Nuestro error', error);
    }
}

// Baja y alta

export async function BajaPantalones(idPantalones){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',

        }
    };
    try{
        const response = await fetch(`${API_URL}/bajapantalones/${idPantalones}`, requestOptions)
        const data = await response.json();
        console.log(data)
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function AltaPantalones(idPantalones){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try{
        const response = await fetch(`${API_URL}/altapantalones/${idPantalones}`, requestOptions)
        const data = await response.json();
        // console.log(data)
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

// REMERAS //
export async function remeras(){
    try{
        const response = await fetch(`${API_URL}/remeras`);
        const data = await response.json();
        return data;
}   catch (error){
    console.log('Nuestro error es',error);
}
}


//funcion REMERAS get//
export async function getRemeras(){
    // const token = JSON.parse(localStorage.getItem('token'));
    
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
        //   Authorization: `Bearer ${token}`,
        },
      };
      
    try{
        const response = await fetch(`${API_URL}/remeras`, requestOptions);
        const data = await response.json();
        return data;
    }catch(error){
        console.log('Nuestro error', error);
    }
}

// Baja y alta

export async function BajaRemeras(idRemeras){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',

        }
    };
    try{
        const response = await fetch(`${API_URL}/bajaremeras/${idRemeras}`, requestOptions)
        const data = await response.json();
        console.log(data)
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function AltaRemeras(idRemeras){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try{
        const response = await fetch(`${API_URL}/altaremeras/${idRemeras}`, requestOptions)
        const data = await response.json();
        // console.log(data)
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}


export async function Login(datos){
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    };
    try{
    const response = await fetch(`${API_URL}/login`, requestOptions)
    const data = await response.json();
    console.log(data)
    return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function Registro(datos){
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    };
    try{
    const response = await fetch(`${API_URL}/registro`, requestOptions)
    const data = await response.json();
    console.log(data)
    return data;
    } catch(e){
        // console.log('no funciona')
    }
}