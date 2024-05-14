function cargar() {
    caja()
    
}
let nuevoarray = []
function caja(){
    
 let card = document.createElement("div")
    const card_header = document.createElement('div')
    const ul_list = document.createElement('ul')
    const li_list1 = document.createElement('li')
    const li_list2 = document.createElement('li')
    
    card.setAttribute('class', 'card')
    card.setAttribute('style', 'width: 18rem;')
    card_header.setAttribute('class', 'card-header')
    ul_list.setAttribute("class", "list-group list-group-flush")
    li_list1.setAttribute("class","list-group-item")
    li_list2.setAttribute("class","list-group-item")
    

    const user = JSON.parse(localStorage.getItem('user')) 
    nuevoarray.push (user)
    console.log(nuevoarray.nombre);
    
nuevoarray.forEach(element => { 
   const array = nuevoarray[3]
       card_header.innerText = "Usuario"
       li_list1.innerText = "Nombre: " + array
       li_list2.innerText = "Email: " 
 
       
      document.body.appendChild(card)
       card.appendChild(card_header)
       card.appendChild(ul_list)
       ul_list.appendChild(li_list1)
       ul_list.appendChild(li_list2)
       document.body.appendChild(document.createElement("p"))
    });

}
