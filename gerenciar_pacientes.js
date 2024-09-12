// Função de busca de pacientes
function searchPatient() {
    let input = document.getElementById('search').value.toLowerCase();
    let rows = document.querySelectorAll('#patient-list tr');

    rows.forEach(row => {
        let name = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
        if (name.includes(input)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Função para exibir detalhes do paciente
function viewDetails(id) {
    let rows = document.querySelectorAll('#patient-list tr');
    rows.forEach(row => {
        if (row.querySelector('td:nth-child(1)').textContent == id) {
            document.getElementById('detail-name').textContent = row.querySelector('td:nth-child(2)').textContent;
            document.getElementById('detail-age').textContent = row.querySelector('td:nth-child(3)').textContent;
            document.getElementById('detail-contact').textContent = row.querySelector('td:nth-child(4)').textContent;
            document.getElementById('detail-plan').textContent = row.querySelector('td:nth-child(5)').textContent;
            document.getElementById('detail-date').textContent = row.querySelector('td:nth-child(6)').textContent;
        }
    });
    document.getElementById('patient-details').classList.remove('hidden');
}

// Função para fechar detalhes do paciente
function hideDetails() {
    document.getElementById('patient-details').classList.add('hidden');
}

// Função para excluir paciente (apenas exemplo)
function deletePatient(id) {
    alert("Paciente " + id + " excluído!");
    // Aqui poderia ser implementada a lógica de exclusão real
}
