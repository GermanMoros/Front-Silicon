import '../Componentes/Login.css'

export function Login (){
    return(
        <>
        <div class="login-box">
<h2>Login</h2>
<form>
    <div class="user-box">
    <input type="text" name="" required=""/>
    <label>Usuario</label>
    </div>
    <div class="user-box">
    <input type="password" name="" required=""/>
    <label>Contraseña</label>
    </div>
    <a href="#">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Ingresar
    </a>
  </form>
</div>
</>
    )
    
}