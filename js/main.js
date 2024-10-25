let dependentes = [];

// Atualiza a tela para mostrar ou esconder os dependentes
function atualizarTela() {
    const noDependentsMsg = document.querySelector('.no-dependents');
    const dependentsList = document.querySelector('.dependents-list');

    // Se não houver dependentes, exibe a mensagem
    if (dependentes.length === 0) {
        noDependentsMsg.style.display = 'block';
        dependentsList.innerHTML = ''; // Limpa a lista de dependentes
    } else {
        noDependentsMsg.style.display = 'none';
        dependentsList.innerHTML = ''; // Limpa antes de adicionar
        dependentes.forEach((dependente, index) => {
            dependentsList.innerHTML += `
                <div class="family-profile" onclick="abrirDetalhes(${index})">
                    <div class="profile-info">${dependente.nome}</div>
                    <button class="delete-btn" onclick="removerDependente(${index})">x</button>
                </div>
            `;
        });
    }
}

// Adiciona um dependente
function adicionarDependente() {
    const nome = document.getElementById('dependente-nome').value;
    const cpf = document.getElementById('dependente-cpf').value;
    const senha = document.getElementById('dependente-senha').value;
    const parentesco = document.getElementById('dependente-parentesco').value;

    if (nome && cpf && senha && parentesco) {
        dependentes.push({ nome, cpf, senha, parentesco });
        document.querySelector('.form-container').style.display = 'none'; // Esconde o formulário
        atualizarTela(); // Atualiza a tela de dependentes
    } else {
        alert("Por favor, preencha todos os campos!");
    }
}

// Remove um dependente
function removerDependente(index) {
    dependentes.splice(index, 1); // Remove o dependente pelo índice
    atualizarTela(); // Atualiza a tela de dependentes
}

// Abre o formulário para adicionar um dependente
document.querySelector('.add-profile-btn').addEventListener('click', function() {
    document.querySelector('.form-container').style.display = 'block';
});

// Fecha o formulário
function fecharFormulario() {
    document.querySelector('.form-container').style.display = 'none';
}

// Abre os detalhes do histórico de exames
function abrirDetalhes(index) {
    document.querySelector('.profile-details').style.display = 'block';
}

// Fecha o histórico de exames
function fecharDetalhes() {
    document.querySelector('.profile-details').style.display = 'none';
}

// Inicializa a tela
window.onload = atualizarTela;
