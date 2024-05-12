

const yourName = document.getElementById ('name');
const yourEmail = document.getElementById ('email');
const password1 = document.getElementById ('password1');
const password2 = document.getElementById ('password2');
const submitBtn = document.getElementById ('submitBtn');
const borrar = document.getElementById("borrar");



 




let myArray = []

const user = JSON.parse(localStorage.getItem('user')) 
if (user !== 0) {
  myArray = [JSON.parse(localStorage.getItem('user')) ];
}








    
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (() => {
      'use strict'
    
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll('.needs-validation')
    
      // Loop over them and prevent submission
      Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
          if (!form.checkValidity() ) {
            event.preventDefault()
            event.stopPropagation()
          }
          const valuePass1 = password1.value
          const valuePass2 = password2.value
          if (valuePass1 !== valuePass2){
            event.preventDefault()
            event.stopPropagation()
            alert("Las claves no coinciden")
          }
        


          function onSubmit(event){
  
            event.preventDefault()
            const valueNombre = yourName.value
            const valueEmail = yourEmail.value
            const valuePassword1 = password1.value
            const valuePassword2 = password2.value
           
            localStorage.setItem('user', JSON.stringify({
              Nombre: valueNombre,
              Email: valueEmail,
              Clave: valuePassword1
            }))
              const user = JSON.parse(localStorage.getItem('user')) 
              myArray.push (user);
              console.log(user)
          
              localStorage.setItem('user', JSON.stringify({myArray}))
             const h1 = document.getElementById("select_h1")
            
              h1.textContent = "El usuario " + user.Nombre + " se ha creado correctamente."
                  setTimeout(function () {
                  h1.textContent = '';
                  redireccionar()
                  
                }, 3000)
          
                function redireccionar() {
                  location.href='./usuarios.html'
                  
                  
              const listaordenada = document.querySelector(".card")
              document.body.insertBefore(h1,listaordenada)
          
          
              const li = document.createElement("li")
              listaordenada.appendChild(li)
              li.textContent="Nombre: " +user.Nombre + "      Email: " + user.Email + "    Clave: " +user.Clave
              
                }
          
           
             
          };
          
          function erasedata(event){
          event.preventDefault
          localStorage.removeItem("user");
          const h1 = document.getElementById("select_h1")
          const listaordenada = document.getElementById("lista")
          h1.remove()
          listaordenada.remove()
          myArray.length=0
          
          
          };
          
          
          submitBtn.addEventListener("click",onSubmit);
          borrar.addEventListener("click",erasedata)
          


















          
           form.classList.add('was-validated')
        }, false)
     
      })
    })()


