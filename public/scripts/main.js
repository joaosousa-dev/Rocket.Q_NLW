import Modal from './modal.js'
const modal = Modal()

// PEgar todos os buttons que existe class check
const checkButtons = document.querySelectorAll(".actions a.check")
const deleteButtons = document.querySelectorAll(".actions a.delete")

checkButtons.forEach(button =>{
    // adicionar a escuta
    // Pegar quando o marcar como lido for clicado
    button.addEventListener("click", event=>{
    // Abrir modal
        modal.open()
    })
})

deleteButtons.forEach(button =>{
    // adicionar a escuta
    // Pegar quando o marcar como lido for clicado
    button.addEventListener("click", event=>{
    // Abrir modal
        modal.open()
    })
})