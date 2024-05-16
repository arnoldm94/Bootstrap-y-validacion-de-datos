   import { prueba } from "./main.js";
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

       
        
        form.classList.add('was-validated')
       event.stopPropagation()
        event.preventDefault()
        prueba()
    }, false)

  })
})()

