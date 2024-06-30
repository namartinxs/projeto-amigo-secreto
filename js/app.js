let ar  = []

function adicionar(){
 let nome = document.getElementById('nome-amigo');
 let listaNomes = document.getElementById('lista-amigos');

 if(nome.value == ''){
    alert('Preencha o campo nome')
    //verifica se o nome ja existe no array
 }else if (ar.includes(nome.value)){
    alert('Amigo já inserido')
    
 }else{
     ar.push(nome.value);
     if (listaNomes.textContent == ''){
        listaNomes.textContent = nome.value
     }else{
       listaNomes.textContent = listaNomes.textContent + ',' + nome.value
        
    }
    
 }
 
 
 nome.value='';
 
}

function sortear(){ 
    if(ar.length < 3){
        alert('Adicione pelo menos três amigos para sortear.')
        return;
    }

    embaralha(ar);
    let sorteados = document.getElementById('lista-sorteio')
    

    for( i = 0; i < ar.length; i++){

        if (i == ar.length -1){
            sorteados.innerHTML = sorteados.innerHTML + ar[i] + '-->' + ar[0] + '<br>'
        }else{
            sorteados.innerHTML = sorteados.innerHTML + ar[i] + '-->' + ar[i+1] + '<br>'
        }
        
    }
}



function embaralha(lista){

    //indice começa com o tamanho do array
    for (let indice = lista.length; indice; indice--){
        //gera um indice aleatorio
        const indiceAleatorio = Math.floor(Math.random() * indice);
        //guarda um indice a aleatorio
        const elemento = lista[indice - 1];
        lista[indice - 1] = lista[indiceAleatorio]
        lista[indiceAleatorio] = elemento;


    }
}


function reiniciar(){
   ar = [] 
   document.getElementById('lista-amigos').innerHTML = '' 
   document.getElementById('lista-sorteio').innerHTML= ''

}