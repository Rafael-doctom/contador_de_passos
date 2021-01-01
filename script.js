



console.log('Vamos começar!')
function funcao_contar(){
    var n_inicio = Number(document.getElementById('numero_inicio').value)
    var n_fim = Number(document.getElementById('numero_fim').value)
    var n_passos = Number(document.getElementById('numero_passos').value)
    var resultado = document.getElementById('resultado')
    for(var c = n_inicio; c <=n_fim; c += n_passos){
        resultado.innerHTML+= ` ${c}`
    }
    
  
}
