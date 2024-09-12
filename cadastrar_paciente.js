document.addEventListener('DOMContentLoaded', () => {
    const buscarEnderecoButton = document.getElementById('buscar-endereco');
    const cepInput = document.getElementById('cep');
    const enderecoInput = document.getElementById('endereco');

    buscarEnderecoButton.addEventListener('click', () => {
        const cep = cepInput.value.replace(/\D/g, '');

        if (cep.length !== 8) {
            alert('CEP inválido. Por favor, insira um CEP com 8 dígitos.');
            return;
        }

        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => {
                const { logradouro, bairro, localidade, uf } = response.data;

                if (logradouro) {
                    enderecoInput.value = `${logradouro}, ${bairro} - ${localidade}/${uf}`;
                } else {
                    alert('CEP não encontrado.');
                }
            })
            .catch(error => {
                console.error('Erro ao buscar endereço:', error);
                alert('Erro ao buscar endereço. Verifique o CEP e tente novamente.');
            });
    });
});
