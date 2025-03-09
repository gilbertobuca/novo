// Dados dos livros (exemplo)
const livros = [
    {
        titulo: 'Filosofia para becos e vielas',
        imagem: 'images/filosofia1.jfif',
        arquivo: 'https://www.google.co.ao/books/edition/Filosofia_para_becos_e_vielas/8zNjEAAAQBAJ?hl=pt-PT&gbpv=1&dq=livros+de+filosofia&printsec=frontcover'
    },
    {
        titulo: 'Alem da alma',
        imagem: 'images/filosofia2.jfif',
        arquivo: 'https://www.google.co.ao/books/edition/Al%C3%A9m_da_Alma/cXYDAwAAQBAJ?hl=pt-PT&gbpv=1&dq=livros+de+filosofia&pg=PA121&printsec=frontcover'
    },
    {
        titulo: 'Filosofia e história da ciência no cune sul',
        imagem: 'images/filosofia3.jfif',
        arquivo: 'https://www.google.co.ao/books/edition/Filosofia_E_Histria_Da_Cincia_No_Cone_Su/0JtEfKUBWu4C?hl=pt-PT&gbpv=1&dq=livros+de+filosofia&pg=PA2&printsec=frontcover'
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
