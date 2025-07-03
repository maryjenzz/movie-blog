document.addEventListener('DOMContentLoaded', () => {

    // Funcionalidade 1: FAQ com Accordion
    const faqItems = document.querySelectorAll('.faq-question');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            // Alterna a classe 'active' no botão clicado para estilização (ex: mudar o ícone)
            item.classList.toggle('active');

            // Pega o painel de resposta que é irmão do botão
            const answer = item.nextElementSibling;

            // Alterna a visibilidade da resposta com base na altura máxima
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null; // Recolhe o accordion
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px"; // Expande o accordion
            } 
        });
    });

    // Funcionalidade 2: Calculadora de Frete
    const freteForm = document.getElementById('freteForm');
    const resultadoDiv = document.getElementById('resultadoFrete');

    if (freteForm) {
        freteForm.addEventListener('submit', (event) => {
            // Previne o comportamento padrão de recarregar a página
            event.preventDefault(); 

            // Pega os valores dos campos do formulário
            const cepInput = document.getElementById('cep');
            const cep = cepInput.value;
            const tipoEntrega = document.querySelector('input[name="tipo-entrega"]:checked').value;

            // Validação simples do CEP
            if (!cep || cep.length !== 8 || !/^\d+$/.test(cep)) {
                resultadoDiv.innerHTML = `<p class="erro">Por favor, digite um CEP válido com 8 dígitos numéricos.</p>`;
                resultadoDiv.style.display = 'block';
                return;
            }

            // Simulação do cálculo
            let custoFrete = 0;
            let nomeEntrega = '';

            if (tipoEntrega === 'normal') {
                custoFrete = 12.50;
                nomeEntrega = 'Normal';
            } else {
                custoFrete = 28.90;
                nomeEntrega = 'Expressa';
            }
            
            // Formata o CEP para exibição
            const cepFormatado = `${cep.substring(0, 5)}-${cep.substring(5)}`;

            // Exibe o resultado na tela
            resultadoDiv.innerHTML = `
                <p><strong>Frete para o CEP ${cepFormatado}:</strong></p>
                <p>Valor: <strong>R$ ${custoFrete.toFixed(2).replace('.', ',')}</strong></p>
                <p>Tipo de Entrega: ${nomeEntrega}</p>
            `;
            resultadoDiv.style.display = 'block';
        });
    }
document.addEventListener('DOMContentLoaded', () => {

    // Funcionalidade 1: FAQ com Accordion
    const faqItems = document.querySelectorAll('.faq-question');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            // Alterna a classe 'active' no botão clicado para estilização (ex: mudar o ícone)
            item.classList.toggle('active');

            // Pega o painel de resposta que é irmão do botão
            const answer = item.nextElementSibling;

            // Alterna a visibilidade da resposta com base na altura máxima
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null; // Recolhe o accordion
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px"; // Expande o accordion
            } 
        });
    });

    // Funcionalidade 2: Calculadora de Frete
    const freteForm = document.getElementById('freteForm');
    const resultadoDiv = document.getElementById('resultadoFrete');

    if (freteForm) {
        freteForm.addEventListener('submit', (event) => {
            // Previne o comportamento padrão de recarregar a página
            event.preventDefault(); 

            // Pega os valores dos campos do formulário
            const cepInput = document.getElementById('cep');
            const cep = cepInput.value;
            const tipoEntrega = document.querySelector('input[name="tipo-entrega"]:checked').value;

            // Validação simples do CEP
            if (!cep || cep.length !== 8 || !/^\d+$/.test(cep)) {
                resultadoDiv.innerHTML = `<p class="erro">Por favor, digite um CEP válido com 8 dígitos numéricos.</p>`;
                resultadoDiv.style.display = 'block';
                return;
            }

            // Simulação do cálculo
            let custoFrete = 0;
            let nomeEntrega = '';

            if (tipoEntrega === 'normal') {
                custoFrete = 12.50;
                nomeEntrega = 'Normal';
            } else {
                custoFrete = 28.90;
                nomeEntrega = 'Expressa';
            }
            
            // Formata o CEP para exibição
            const cepFormatado = `${cep.substring(0, 5)}-${cep.substring(5)}`;

            // Exibe o resultado na tela
            resultadoDiv.innerHTML = `
                <p><strong>Frete para o CEP ${cepFormatado}:</strong></p>
                <p>Valor: <strong>R$ ${custoFrete.toFixed(2).replace('.', ',')}</strong></p>
                <p>Tipo de Entrega: ${nomeEntrega}</p>
            `;
            resultadoDiv.style.display = 'block';
        });
    }

    const cpfInput = document.getElementById('cpf');
    const cadastroForm = document.getElementById('cadastroForm');

    // Função que faz a validação matemática do CPF
    function validaCPF(cpf) {
    // 1. Remove formatação e verifica se o CPF foi informado
    const cpfLimpo = cpf.replace(/\D/g, '');
    if (!cpfLimpo || cpfLimpo.length !== 11) return false;

    // 2. Verifica se todos os dígitos são iguais (ex: 111.111.111-11), o que é inválido
    if (/^(\d)\1+$/.test(cpfLimpo)) return false;

    try {
        let soma = 0;
        let resto;

        // 3. Validação do primeiro dígito verificador
        for (let i = 1; i <= 9; i++) {
            soma += parseInt(cpfLimpo.substring(i - 1, i)) * (11 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpfLimpo.substring(9, 10))) return false;

        // 4. Validação do segundo dígito verificador
        soma = 0;
        for (let i = 1; i <= 10; i++) {
            soma += parseInt(cpfLimpo.substring(i - 1, i)) * (12 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpfLimpo.substring(10, 11))) return false;

        // 5. Se passou por todas as verificações, o CPF é válido
        return true;
    } catch (e) {
        return false;
    }
    }

    // Verifica se estamos na página de cadastro
    if (cpfInput && cadastroForm) {
    // ---- MÁSCARA (Continua a mesma) ----
    cpfInput.addEventListener('input', (event) => {
        let value = event.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.substring(0, 11);

        if (value.length > 9) {
            value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        } else if (value.length > 6) {
            value = value.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
        } else if (value.length > 3) {
            value = value.replace(/(\d{3})(\d{1,3})/, '$1.$2');
        }
        event.target.value = value;
    });

    // ---- VALIDAÇÃO NO ENVIO DO FORMULÁRIO ----
    cadastroForm.addEventListener('submit', (event) => {
        const cpfError = document.getElementById('cpf-error');
        
        // Verifica se o CPF é válido usando nossa nova função
        if (!validaCPF(cpfInput.value)) {
            // Se for inválido:
            // 1. Previne o envio do formulário
            event.preventDefault();
            
            // 2. Exibe a mensagem de erro
            cpfError.textContent = 'CPF inválido. Verifique o número digitado.';
            
            // 3. Adiciona a classe de erro ao input
            cpfInput.classList.add('input-error');
        } else {
            // Se for válido, limpa qualquer erro anterior
            cpfError.textContent = '';
            cpfInput.classList.remove('input-error');
        }
    });

    // Bônus: Validação em tempo real quando o usuário sai do campo
    cpfInput.addEventListener('blur', () => {
        const cpfError = document.getElementById('cpf-error');
        if (cpfInput.value.length > 0 && !validaCPF(cpfInput.value)) {
            cpfError.textContent = 'CPF inválido. Verifique o número digitado.';
            cpfInput.classList.add('input-error');
        } else {
            cpfError.textContent = '';
            cpfInput.classList.remove('input-error');
        }
    });
    }
});
});