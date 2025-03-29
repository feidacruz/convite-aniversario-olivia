document.addEventListener('DOMContentLoaded', function() {
    // Variáveis para o quebra-cabeça
    const puzzleContainer = document.getElementById('puzzleContainer');
    const puzzleButton = document.getElementById('puzzleButton');
    const closePuzzle = document.querySelector('.close-puzzle');
    const resetPuzzleButton = document.getElementById('resetPuzzle');
    const puzzleElement = document.getElementById('puzzle');
    
    // Variáveis para o RSVP
    const rsvpButton = document.getElementById('rsvpButton');
    const rsvpForm = document.getElementById('rsvpForm');
    const rsvpSubmitButton = document.querySelector('.submit-button');
    
    // Configurações do quebra-cabeça
    const puzzleSize = 2; // 2x2 grid
    let puzzlePieces = [];
    let correctOrder = [];
    let currentOrder = [];
    
    // Abrir o modal do quebra-cabeça
    if (puzzleButton) {
        puzzleButton.addEventListener('click', function() {
            puzzleContainer.style.display = 'flex';
            initPuzzle();
        });
    }
    
    // Fechar o modal do quebra-cabeça
    if (closePuzzle) {
        closePuzzle.addEventListener('click', function() {
            puzzleContainer.style.display = 'none';
        });
    }
    
    // Reiniciar o quebra-cabeça
    if (resetPuzzleButton) {
        resetPuzzleButton.addEventListener('click', function() {
            initPuzzle();
        });
    }
    
    // Abrir formulário de RSVP
    if (rsvpButton) {
        rsvpButton.addEventListener('click', function() {
            if (rsvpForm.style.display === 'block') {
                rsvpForm.style.display = 'none';
                rsvpButton.textContent = 'Confirmar Presença';
            } else {
                rsvpForm.style.display = 'block';
                rsvpButton.textContent = 'Fechar Formulário';
            }
        });
    }
    
    // Enviar formulário de RSVP
    if (rsvpSubmitButton) {
        rsvpSubmitButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const guests = document.getElementById('guests').value;
            const confirmYes = document.getElementById('yes').checked;
            
            if (!name || !phone) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            // Aqui você pode adicionar código para enviar os dados para um servidor
            // Exemplo: fetch(), axios.post(), etc.
            
            alert('Obrigado pela confirmação, ' + name + '! Sua presença é muito importante para a Olivia.');
            
            // Resetar formulário
            document.querySelector('form').reset();
            rsvpForm.style.display = 'none';
            rsvpButton.textContent = 'Confirmar Presença';
        });
    }
    
    // Inicializar o quebra-cabeça
    function initPuzzle() {
        // Limpar o elemento do quebra-cabeça
        puzzleElement.innerHTML = '';
        
        // Definir o array de posições corretas (0-3 para um quebra-cabeça 2x2)
        correctOrder = [0, 1, 2, 3];
        
        // Criar uma cópia embaralhada para a ordem atual
        currentOrder = [...correctOrder];
        shuffleArray(currentOrder);
        
        // Criar as peças do quebra-cabeça
        for (let i = 0; i < puzzleSize * puzzleSize; i++) {
            const piece = document.createElement('div');
            piece.className = 'puzzle-piece';
            piece.dataset.correctPosition = i;
            piece.dataset.currentPosition = currentOrder[i];
            
            // Calcular a posição de background para cada peça
            const correctPos = parseInt(piece.dataset.correctPosition);
            const row = Math.floor(correctPos / puzzleSize);
            const col = correctPos % puzzleSize;
            
            // Definir o background para simular uma imagem cortada em peças
            // Aqui estamos usando cores diferentes para representar as peças
            // Em um cenário real, você usaria uma imagem real
            const colors = ['#ffd3b6', '#a7e9af', '#d3c0f9', '#ff9a8c'];
            piece.style.backgroundColor = colors[correctPos];
            
            // Quando estiver usando uma imagem real:
            // piece.style.backgroundImage = 'url("/public/images/olivia-photo.jpg")';
            // piece.style.backgroundPosition = `${-col * 100}% ${-row * 100}%`;
            
            // Adicionar listener de clique para as peças
            piece.addEventListener('click', function() {
                // Aqui você implementaria a lógica para mover as peças
                // ou trocar duas peças selecionadas
                togglePiece(this);
            });
            
            // Adicionar a peça ao quebra-cabeça
            puzzleElement.appendChild(piece);
            puzzlePieces.push(piece);
        }
    }
    
    // Função para embaralhar um array (algoritmo Fisher-Yates)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    // Função para lidar com a seleção/troca de peças
    let selectedPiece = null;
    
    function togglePiece(piece) {
        if (selectedPiece === null) {
            // Primeira peça selecionada
            selectedPiece = piece;
            piece.style.transform = 'scale(0.95)';
            piece.style.boxShadow = '0 0 10px #6c81ff';
        } else {
            // Segunda peça selecionada, trocar posições
            swapPieces(selectedPiece, piece);
            
            // Resetar a seleção
            selectedPiece.style.transform = '';
            selectedPiece.style.boxShadow = '';
            selectedPiece = null;
            
            // Verificar se o quebra-cabeça foi resolvido
            checkPuzzleCompletion();
        }
    }
    
    // Função para trocar duas peças
    function swapPieces(piece1, piece2) {
        // Trocar as posições atuais
        const tempPos = piece1.dataset.currentPosition;
        piece1.dataset.currentPosition = piece2.dataset.currentPosition;
        piece2.dataset.currentPosition = tempPos;
        
        // Atualizar a ordem atual
        currentOrder = puzzlePieces.map(piece => parseInt(piece.dataset.currentPosition));
    }
    
    // Função para verificar se o quebra-cabeça está completo
    function checkPuzzleCompletion() {
        const isComplete = currentOrder.every((position, index) => position === index);
        
        if (isComplete) {
            setTimeout(() => {
                alert('Parabéns! Você completou o quebra-cabeça da Olivia! 🎉');
                // Opcionalmente, fechar o modal após completar
                // puzzleContainer.style.display = 'none';
            }, 500);
        }
    }
});

// Função para adicionar novos ícones SVG quando necessário
function createSVGIcons() {
    const calendarSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6c81ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>`;

    const clockSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6c81ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>`;

    const locationSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6c81ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>`;

    // Esta função pode ser usada para criar os SVGs necessários e salvá-los como arquivos
    // Por enquanto, apenas deixamos o código aqui para referência
}

// Carregar animações e confetes quando o site for completamente carregado
window.addEventListener('load', function() {
    // Aqui você pode adicionar efeitos de confete ou outras animações
    // Você pode usar bibliotecas como canvas-confetti ou party.js
}); 