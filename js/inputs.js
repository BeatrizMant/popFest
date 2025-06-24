// Input idade
function mais(){
    var atual = document.getElementById ("total").value;
    var novo = atual - (-1); //Evitando Concatenacoes
    document.getElementById("total").value = novo;
}
  
function menos(){
    var atual = document.getElementById("total").value;
    //Não permitir números negativos
    if(atual > 0) { 
      var novo = atual - 1;
      document.getElementById("total").value = novo;
    }
}

// Input quantidade
function mais2(){
  var atual = document.getElementById("total2").value;
  var novo = atual - (-1); //Evitando Concatenacoes
  document.getElementById("total2").value = novo;
}

function menos2(){
  var atual = document.getElementById("total2").value;
  //Não permitir números negativos
  if(atual > 0 & atual <5.000) { 
    var novo = atual - 1;
    document.getElementById("total2").value = novo;
  }
}