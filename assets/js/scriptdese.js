// Dados dos livros (exemplo)
const livros = [
    {
        titulo: 'Desenho de projectos',
        imagem: 'images/desenho1.jfif',
        arquivo: 'https://www.google.co.ao/books/edition/Desenho_de_projetos/SIW6DwAAQBAJ?hl=pt-PT&gbpv=1&dq=desenho+e+projecto&pg=PA50&printsec=frontcover'
    },
    {
        titulo: 'Desenho e projecto',
        imagem: 'images/desenho2.png',
        arquivo: 'https://www.google.co.ao/books/edition/Livro_199_Projetos_E_Insights_Xi/gmVxEAAAQBAJ?hl=pt-PT&gbpv=1&dq=livro+do+curso+de+desenho+e+projecto&pg=PA83&printsec=frontcoverassets/livros/sapiens.pdf'
    },
    {
        titulo: 'Projectos exitosos em escolas públicas',
        imagem: 'images/desenho3.jfif',
        arquivo: 'https://www.google.co.ao/books/edition/PROJETOS_EXITOSOS_EM_ESCOLAS_P%C3%9ABLICAS/8KatEAAAQBAJ?hl=pt-PT&gbpv=1&dq=livro+do+curso+de+desenho+e+projecto&pg=PT14&printsec=frontcover'
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
