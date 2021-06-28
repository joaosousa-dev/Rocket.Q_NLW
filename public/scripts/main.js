import Modal from './modal.js'
const modal = Modal()

const modalTitle = document.querySelector(".modal h2")
const modalDescription = document.querySelector(".modal p")
const modalButton = document.querySelector(".modal button ")

// Pegar todos os buttons que existe class check e delete
const checkButtons = document.querySelectorAll(".actions a.check")
const deleteButtons = document.querySelectorAll(".actions a.delete")

checkButtons.forEach(button =>{
    // adicionar a escuta e Pegar quando o marcar como lido for clicado
    button.addEventListener("click",handleClick)
})
// Abre modal excluir 
deleteButtons.forEach(button =>{
    button.addEventListener("click", (event) => handleClick(event,false))
})

function handleClick(event,check = true){
    event.preventDefault()
    const slug= check?"check":"delete"

    const roomId=document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action",`/question/${roomId}/${questionId}/${slug}`)

    check ? modalButton.classList.remove("red"): modalButton.classList.add("red")
    modalTitle.innerHTML=check ? "Marcar como lido" : "Excluir essa pergunta"
    modalDescription.innerHTML=check? "Deseja marcar essa pergunta como lida?":"Deseja excluir essa pergunta?"
    modalButton.innerHTML=check?"Sim,Marcar como lido":"Sim,Excluir"
    
    // Abrir modal
    modal.open()
}