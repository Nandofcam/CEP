const cep = document.querySelector('#cep')
const endereco = document.querySelector('#endereco')
const bairro = document.querySelector('#bairro')
const cidade = document.querySelector('#cidade')
const estado = document.querySelector('#estado')

function buscarEndereco() {
    const url = `https://viacep.com.br/ws/${cep.value}/json/`
    fetch(url)
    .then((response) => {
        return response.json()
    })
    .then(data => preencherCampos(data))
}

function preencherCampos(end) {
    endereco.value = end.logradouro
    bairro.value = end.bairro
    cidade.value = end.localidade
    estado.value = end.uf
}

cep.addEventListener('blur', buscarEndereco)