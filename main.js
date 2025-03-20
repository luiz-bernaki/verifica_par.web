function verifica_par() {
    let numero = document.getElementById("numero").value; 
    let resultado = document.getElementById("resultado"); 

    if (numero === "") {
        resultado.textContent = "Por favor, insira um número.";
        return;
    }

    numero = parseInt(numero); 

    if (numero % 2 === 0) {
        resultado.textContent = `O número ${numero} é PAR!`;
    } else {
        resultado.textContent = `O número ${numero} é IMPAR!`;
    }
}
