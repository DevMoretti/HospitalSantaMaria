document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const userType = document.getElementById('userType').value;
        const message = document.getElementById('message');

        // Simulação de autenticação
        if (username && password) {
            switch(userType) {
                case 'recepcionista':
                    if (username === 'silvio' && password === 'unicesumar') {
                        window.location.href = 'recepcionista.html';
                    } else {
                        message.textContent = 'Credenciais inválidas para Recepcionista. Tente novamente.';
                    }
                    break;
                case 'medico':
                    if (username === 'silvio' && password === 'unicesumar') {
                        window.location.href = 'medico.html';
                    } else {
                        message.textContent = 'Credenciais inválidas para Médico. Tente novamente.';
                    }
                    break;
                case 'admin':
                    if (username === 'silvio' && password === 'unicesumar') {
                        window.location.href = 'admin.html';
                    } else {
                        message.textContent = 'Credenciais inválidas para Administrador. Tente novamente.';
                    }
                    break;
                default:
                    message.textContent = 'Área selecionada é inválida.';
            }
        } else {
            message.textContent = 'Por favor, preencha todos os campos.';
        }
    });
});

