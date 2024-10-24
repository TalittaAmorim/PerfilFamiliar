const addProfileBtn = document.getElementById('add-profile-btn');
const modal = document.getElementById('profile-modal');
const closeModal = document.querySelector('.close');
const form = document.getElementById('profile-form');
const profilesContainer = document.getElementById('profiles-container');
const profileDetailsModal = document.getElementById('profile-details-modal');
const closeDetailsModal = document.querySelector('.close-details');
const profileDetails = document.getElementById('profile-details');

// Histórico de exames falsos
const fakeExams = [
    { data: "01/10/2024", exame: "Raio-X", gravidade: "Leve", hospital: "Hospital A", batimento: 80, peso: "70kg" },
    { data: "15/09/2024", exame: "Hemograma", gravidade: "Moderada", hospital: "Hospital B", batimento: 78, peso: "69kg" },
    { data: "20/08/2024", exame: "Ultrassom", gravidade: "Grave", hospital: "Hospital C", batimento: 85, peso: "68kg" },
];

// Abrir modal para adicionar perfil
addProfileBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Fechar modal de adicionar perfil
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fechar modal ao clicar fora
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Adicionar perfil
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;
    const relacao = document.getElementById('relacao').value;

    // Criar card de perfil
    const profileCard = document.createElement('div');
    profileCard.classList.add('profile-card');
    profileCard.innerHTML = `
        <h3>${relacao}</h3>
        <p>CPF: ${cpf}</p>
        <button class="delete-profile-btn">X</button>
    `;
    profilesContainer.appendChild(profileCard);

    // Fechar modal
    modal.style.display = 'none';

    // Resetar formulário
    form.reset();

    // Evento para exibir o histórico de exames
    profileCard.addEventListener('click', (event) => {
        if (!event.target.classList.contains('delete-profile-btn')) {
            showProfileDetails(cpf);
        }
    });

    // Evento para deletar perfil
    const deleteBtn = profileCard.querySelector('.delete-profile-btn');
    deleteBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Evitar que o clique abra os detalhes do perfil
        profileCard.remove();
    });
});

// Exibir modal com histórico de exames
function showProfileDetails(cpf) {
    profileDetails.innerHTML = `<h3>Histórico de Exames - CPF: ${cpf}</h3>`;
    fakeExams.forEach((exam) => {
        profileDetails.innerHTML += `
            <p><strong>Data:</strong> ${exam.data}</p>
            <p><strong>Exame:</strong> ${exam.exame}</p>
            <p><strong>Gravidade:</strong> ${exam.gravidade}</p>
            <p><strong>Hospital:</strong> ${exam.hospital}</p>
            <p><strong>Batimento Cardíaco:</strong> ${exam.batimento} bpm</p>
            <p><strong>Peso:</strong> ${exam.peso}</p>
            <hr>
        `;
    });
    profileDetailsModal.style.display = 'block';
}

// Fechar modal de detalhes do perfil
closeDetailsModal.addEventListener('click', () => {
    profileDetailsModal.style.display = 'none';
});

// Fechar modal de detalhes ao clicar fora
window.addEventListener('click', (event) => {
    if (event.target === profileDetailsModal) {
        profileDetailsModal.style.display = 'none';
    }
});
