document.addEventListener('DOMContentLoaded', () => {
    const pacienteSelect = document.getElementById('pacienteSelect');

    // Simulando uma lista de pacientes
    const pacientes = [
        { id: 1, nome: 'Paciente 1' },
        { id: 2, nome: 'Paciente 2' },
        // Mais pacientes podem ser adicionados aqui
    ];

    // Adicionando opções ao menu suspenso
    pacientes.forEach(paciente => {
        const option = document.createElement('option');
        option.value = paciente.id;
        option.textContent = paciente.nome;
        pacienteSelect.appendChild(option);
    });

    // Botão para voltar ao login
    document.getElementById('voltarLogin').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});
