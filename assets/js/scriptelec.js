// Dados dos livros (exemplo)
const livros = [
    {
        titulo: 'Instalações elétricas residenciais básicas',
        imagem: 'images/electri1.jfif',
        arquivo: 'https://www.google.co.ao/books/edition/Instala%C3%A7%C3%B5es_el%C3%A9tricas_residenciais_b/83u5DwAAQBAJ?hl=pt-PT&gbpv=1&dq=eletricidade+e+instala%C3%A7%C3%B5es+el%C3%A9tricas&printsec=frontcover'
    },
    {
        titulo: 'Instalações elétricas prediais',
        imagem: 'images/electri2.jfif',
        arquivo: 'https://www.google.co.ao/books/edition/Instala%C3%A7%C3%B5es_El%C3%A9tricas_Prediais/_AeRDQAAQBAJ?hl=pt-PT&gbpv=1&dq=eletricidade+e+instala%C3%A7%C3%B5es+el%C3%A9tricas&pg=PT50&printsec=frontcover'
    },
    {
        titulo: 'Manual do construtor de instalações electricas',
        imagem: 'images/electri3.jfif',
        arquivo: 'https://www.google.co.ao/books/edition/Manual_do_Construtor_Especial_Ed_6_Insta/Iew4DwAAQBAJ?hl=pt-PT&gbpv=1&dq=eletricidade+e+instala%C3%A7%C3%B5es+el%C3%A9tricas&pg=PA6&printsec=frontcoverassets/livros/pai.pdf'
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
