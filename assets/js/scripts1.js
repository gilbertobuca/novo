// Dados dos livros (exemplo)
const livros = [
    {
        titulo: '21 lições para o seculo XXI',
        imagem: 'images/21licoes.jpeg',
        arquivo: 'assets/livros/21_licoes.pdf'
    },
    {
        titulo: 'Sapiens: Uma breve história da humanidade',
        imagem: 'images/sapiens.jpg',
        arquivo: 'assets/livros/sapiens.pdf'
    },
    {
        titulo: 'Pai rico e Pai pobre',
        imagem: 'images/pai.jpeg',
        arquivo: 'assets/livros/pai.pdf'
    }
];

// Renderiza os livros na tela
function renderizarLivros(livrosParaMostrar) {
    const container = document.getElementById('bookContainer');
    container.innerHTML = '';

    livrosParaMostrar.forEach(livro => {
        const livroDiv = document.createElement('div');
        livroDiv.className = 'book';
        livroDiv.style.backgroundImage = `url(${livro.imagem})`;

        livroDiv.innerHTML = `
            <div class="book-title">${livro.titulo}</div>
            <div class="book-actions">
                <a href="${livro.arquivo}" target="_blank">Ler</a>
                <a href="${livro.arquivo}" download>Baixar</a>
            </div>
        `;

        container.appendChild(livroDiv);
    });
}

// Função de pesquisa de livros
function pesquisarLivros() {
    const termo = document.getElementById('searchInput').value.toLowerCase();
    const livrosFiltrados = livros.filter(livro =>
        livro.titulo.toLowerCase().includes(termo)
    );
    renderizarLivros(livrosFiltrados);
}

// Inicializa com todos os livros
renderizarLivros(livros);
