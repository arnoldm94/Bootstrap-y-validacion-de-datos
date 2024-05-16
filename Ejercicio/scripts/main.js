

const yourName = document.getElementById ('name');
const yourEmail = document.getElementById ('email');
const password1 = document.getElementById ('password1');
const password2 = document.getElementById ('password2');
const submitBtn = document.getElementById ('submitBtn');
const borrar = document.getElementById("borrar");
const h1 = document.getElementById("select_h1")
let myArray = []



export function prueba() {
  let userviejo = JSON.parse(localStorage.getItem('user'))
 
  const formularios = document.getElementById ("formu")
  const valuePassword1 = password1.value
  const valuePassword2 = password2.value
  const valueNombre = yourName.value
  const valueEmail = yourEmail.value




if (userviejo === null) {
        if ((valueNombre.length != 0)&& (valueEmail.length != 0) && (/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm.test(valueEmail)) && (formularios.hasAttribute("class","was-validated" )) && (valuePassword1 === valuePassword2) && (valuePassword1.length !== 0) ){
                  localStorage.setItem('user', JSON.stringify({
                  Nombre: valueNombre,
                  Email: valueEmail,
                  Clave: valuePassword1
                  }))
        const usernuevo = JSON.parse(localStorage.getItem('user')) 

        myArray.push(usernuevo)


 h1.textContent = "El usuario " + myArray[0].Nombre + " se ha creado correctamente."
  setTimeout(function () {
    h1.textContent = '';
 redireccionar()
    
  }, 3000)

  function redireccionar() {
    location.href='./usuarios.html' 
  }
            

} } else { 
 
          if ((valueNombre.length != 0)&& (valueEmail.length != 0) && (/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm.test(valueEmail)) && (formularios.hasAttribute("class","was-validated" )) && (valuePassword1 === valuePassword2) && (valuePassword1.length !== 0)){
                 let usernuevo ={
                  Nombre: valueNombre,


 h1.textContent = "El usuario " + valueNombre + " se ha creado correctamente."
    setTimeout(function () {
    h1.textContent = '';
    redireccionar()
    
  }, 3000)

  function redireccionar() {
    location.href='./usuarios.html'
              
}}}}








 
/* 


      
  const listaordenada = document.querySelector(".card")
  document.body.insertBefore(h1,listaordenada)


  const li = document.createElement("li")
  listaordenada.appendChild(li)
  li.textContent="Nombre: " +user.Nombre + "      Email: " + user.Email + "    Clave: " +user.Clave
  
    }

 */



  

            
            function erasedata(event){
            event.preventDefault
            localStorage.removeItem("user");
            const listaordenada = document.getElementById("lista")
            h1.remove()
            listaordenada.remove()
            
            let myArray = []
           
            
          }
          
          borrar.addEventListener("click",erasedata)
