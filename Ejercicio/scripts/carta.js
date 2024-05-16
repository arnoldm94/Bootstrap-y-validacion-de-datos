function cargar() {
    cajaultimo()
    caja()
    cajaunico()
} 
let nuevoarray = []
function cajaunico(){
  const user = JSON.parse(localStorage.getItem('user')) 
  
 if (user !== 0){
  let unico = user

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


     card_header.innerText = "Usuario"
     li_list1.innerText = "Nombre: " + unico.Nombre
     li_list2.innerText = "Email: " + unico.Email

     
    document.body.appendChild(card)
     card.appendChild(card_header)
     card.appendChild(ul_list)
     ul_list.appendChild(li_list1)
     ul_list.appendChild(li_list2)
     document.body.appendChild(document.createElement("p"))}
}



function cajaultimo(){

    const user = JSON.parse(localStorage.getItem('user')) 
   if (user !== 0) {
    
   
    let ultimo = user.myArray[1]

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


       card_header.innerText = "Usuario"
       li_list1.innerText = "Nombre: " + ultimo.Nombre
       li_list2.innerText = "Email: " + ultimo.Email

       
      document.body.appendChild(card)
       card.appendChild(card_header)
       card.appendChild(ul_list)
       ul_list.appendChild(li_list1)
       ul_list.appendChild(li_list2)
       document.body.appendChild(document.createElement("p"))}
}


function caja(){

  const user = JSON.parse(localStorage.getItem('user')) 
  if (user !== 0){
  let ciclo = user.myArray[0].myArray
let ciclo0 = ciclo[0]
  let ciclo1 = ciclo[1]
ciclecard(ciclo0)
ciclecard(ciclo1)
let ciclo3 = ciclo0.myArray
if(ciclo3[1] !== undefined){
ciclecard(ciclo3[1])
ciclecard(ciclo3[0])
}

  }
function ciclecard(ciclos){


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


     card_header.innerText = "Usuario"
     li_list1.innerText = "Nombre: " + ciclos.Nombre
     li_list2.innerText = "Email: " + ciclos.Email

     
    document.body.appendChild(card)
     card.appendChild(card_header)
     card.appendChild(ul_list)
     ul_list.appendChild(li_list1)
     ul_list.appendChild(li_list2)
     document.body.appendChild(document.createElement("p")) 



}

}
