async function loadData(cep) {
    const RESPONSE = await fetch (`https://viacep.com.br/ws/${cep}/json/`);

    return await RESPONSE.json()
    
}
let cepDigitado = Number(prompt("Digite um cep: "))
let dados = await loadData(cepDigitado)

console.log(dados)

// mostrando os dados no html

let body = document.querySelector("body");

body.innerHTML =

`
<h1>Busque por cep</h1>
<ul>
<li>${dados.cep}</li>
<li>${dados.logradouro}</li>
<li>${dados.complemento}</li>
<li>${dados.unidade}</li>
<li>${dados.bairro}</li>
<li>${dados.localidade}</li>
<li>${dados.uf}</li>
<li>${dados.estado}</li>
<li>${dados.regiao}</li>
<li>${dados.ddd}</li>
</ul>
`