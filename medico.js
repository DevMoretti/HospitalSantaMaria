// Consultar Pacientes
document.addEventListener('DOMContentLoaded', () => {
    const searchPatientForm = document.getElementById('searchPatientForm');
    const requestExamForm = document.getElementById('requestExamForm');
    const issueDiagnosisForm = document.getElementById('issueDiagnosisForm');

    if (searchPatientForm) {
        searchPatientForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const patientId = document.getElementById('patientId').value;
            // Lógica para buscar paciente
            console.log('Buscando paciente com ID:', patientId);
            document.getElementById('patientDetails').textContent = `Paciente com ID ${patientId} encontrado.`;
        });
    }

    if (requestExamForm) {
        requestExamForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const patientId = document.getElementById('patientId').value;
            const examType = document.getElementById('examType').value;
            // Lógica para solicitar exame
            console.log('Solicitando exame para paciente com ID:', patientId);
            document.getElementById('examRequestStatus').textContent = `Exame ${examType} solicitado para o paciente com ID ${patientId}.`;
        });
    }

    if (issueDiagnosisForm) {
        issueDiagnosisForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const patientId = document.getElementById('patientId').value;
            const diagnosis = document.getElementById('diagnosis').value;
            // Lógica para emitir diagnóstico
            console.log('Emitindo diagnóstico para paciente com ID:', patientId);
            document.getElementById('diagnosisStatus').textContent = `Diagnóstico emitido para o paciente com ID ${patientId}.`;
        });
    }
});
