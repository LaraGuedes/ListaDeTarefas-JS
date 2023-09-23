const button = document.querySelector('.bi-cloud-arrow-down-fill')
const input = document.querySelector('.textInsert')
const listaCompleta = document.querySelector('.lista')

let minhaListaDeItens = []

function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false,
    })

    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas() {
    let novaLi = ''

  // ['comprar café', 'estudar programação']

    minhaListaDeItens.forEach((item, posicao) => {
    novaLi =
    novaLi +
    `

        <li class="task ${item.concluida && 'done'}">
            <button onclick="concluirTarefa(${posicao})"><i class="bi bi-check-circle"></i></button>
            <p>${item.tarefa}</p>
            <button onclick="deletarItem(${posicao})""><i class="bi bi-file-earmark-excel-fill"></i></button>
            
        </li>
        
        `
})

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}

function concluirTarefa(posicao) {
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

    mostrarTarefas()
}

function deletarItem(posicao) {
    minhaListaDeItens.splice(posicao, 1)

    mostrarTarefas()
}

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if (tarefasDoLocalStorage) {
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }

    mostrarTarefas()
}

recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)