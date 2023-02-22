const Inicio= document.getElementById('inicio');
const Clientes= document.getElementById('clientes');
const Creditos= document.getElementById('credito');
const Title= document.querySelector('.title');
const InicioContainer= document.querySelector('.container-Main');
const ClientesContainer= document.querySelector('.container-Clientes');
const CreditosContainer= document.querySelector('.container-Creditos');


Inicio.addEventListener('click', function(){
    Title.innerHTML="Inicio";
    InicioContainer.style.visibility="visible";
    ClientesContainer.style.visibility="collapse";
    CreditosContainer.style.visibility="collapse";
});

Clientes.addEventListener('click', function(){
    Title.innerHTML = "Clientes";
    InicioContainer.style.visibility="collapse";
    ClientesContainer.style.visibility="visible";
    CreditosContainer.style.visibility="collapse";

});

Creditos.addEventListener('click', function(){
    Title.innerHTML = "Nuevo Cr&eacute;dito";
    InicioContainer.style.visibility="collapse";
    ClientesContainer.style.visibility="collapse";
    CreditosContainer.style.visibility="visible";

});