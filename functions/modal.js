function prueba(){
var abrirModal = document.getElementById("abrir-modal");
var cerrarModal = document.getElementById("cerrar-modal");
var amodal = document.getElementById("modal");

abrirModal.addEventListener("click",()=>{
    amodal.showModal();
})
cerrarModal.addEventListener("click",()=>{
    amodal.close();
})
};