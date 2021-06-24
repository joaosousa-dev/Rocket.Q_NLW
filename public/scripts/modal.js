export default function Modal(){

    const wrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')
    cancelButton.addEventListener("click",close)
    
    function open(){
        // add a class active no modal
        wrapper.classList.add("active")
    }
    function close(){
        // removea class active no modal
        wrapper.classList.remove("active")
    }
    
    return {open,close}
}