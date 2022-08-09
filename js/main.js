
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://globallabs.academy/");
    //window.location.href = "https://globallabs.academy/"; abre na mesma janela
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada"); 
}

function funcaoChange(elemento){
    console.log(elemento.value)
}


/*function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)

}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));*/




/*var d = new Date();
alert(d); // dá a data completa
alert(d.getDate());  //dá só o dia
alert(d.getHours()); //dá só a hora
alert(d.getMinutes()); //dá só os minutos*/





/*var count;               //estrutura com o "for"
for(count = 0; count <= 5; count++){
    alert(count);
};*/


/*var count = 0;         //estrutura de repetição
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};*/



/*var idade = prompt("Qual sua idade?"); //comando "prompt" exibe uma pergunta ao usuário.
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};*/



/*var nome ="Marco Holanda";
var idade = 36;
var frase = "Japão é o melhor time do mundo";
var lista = ["maçã", "pêra", "laranja"];  //array [0,1,2]
//para acrescentar elementos na lista "lista.push("uva");"
lista.push("uva");
//para remover alguma elemento utiliza-se "lista.pop();" Deixando apenas com os parêntes vazio, retira o último elemento acrescido. 
lista.pop()
//se der um "console.log(lista.length);" mostra a quantidade de elementos da lista.
console.log(lista.length);
// "console.log(lista.reverse);" irá imprimir a lista ao contrário
//"console.log(lista.join);" poderá separar o elementos como quiser
console.log(lista.join("|"));
console.log(lista);
alert( nome + " tem " + idade + " anos");
//pode-se utilizar o console do navegador para verificar a alteração e erros de códigos em tempo real e atrelar códigos a ele por meio do "console.log".
*/


