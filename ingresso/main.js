function comprar(){
    let tipoIngresso = document.querySelector("#tipo-ingresso");
    let quantidade = parseInt(document.querySelector("#qtd").value);

    if(tipoIngresso.value == "pista" ){
        pista(quantidade);
      
    }
     else if(tipoIngresso.value == "superior" ){
        superior(quantidade);
      
    }
   else {
        inferior(quantidade);
      
    }
   
    
}
function superior(quantidade){
    let quantidadesuperior = parseInt(document.querySelector("#qtd-superior").textContent)
    if(quantidade>quantidadesuperior){
      alert("Ingressos insuficientes");
    }else{
        quantidadesuperior = quantidadesuperior - quantidade
        document.querySelector("#qtd-superior").textContent = quantidadesuperior;
        alert("Parabens pela compra!");
    }
    
  
    
}
function inferior(quantidade){
    let quantidadeInferior = parseInt(document.querySelector("#qtd-inferior").textContent)
    if(quantidade>quantidadeInferior){
      alert("Ingressos insuficientes");
    }else{
        quantidadeInferior = quantidadeInferior - quantidade
        document.querySelector("#qtd-inferior").textContent = quantidadeInferior;
        alert("Parabens pela compra!");
    }
    
  
    
}
function pista(quantidade){
    let quantidadePista = parseInt(document.querySelector("#qtd-pista").textContent)
    if(quantidade>quantidadePista){
      alert("Ingressos insuficientes");
    }else{
        quantidadePista = quantidadePista - quantidade
        document.querySelector("#qtd-pista").textContent = quantidadePista;
        alert("Parabens pela compra!");
    }
    
  
    
}