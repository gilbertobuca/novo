// Dados dos livros (exemplo)
const livros = [
    {
        titulo: 'Tecnologias de programação',
        imagem: 'images/21licoes.jpeg',
        arquivo: 'https://www.google.co.ao/books/edition/T%C3%A9cnicas_de_Programa%C3%A7%C3%A3o_Uma_Abordagem/H8A0lZtqaXsC?hl=pt-PT&gbpv=1'
    },
    {
        titulo: 'Redes de computadores e a internet',
        imagem: 'images/sapiens.jpg',
        arquivo: 'https://www.google.co.ao/books/edition/Redes_de_computadores_e_a_Internet_coedi/DtFJEAAAQBAJ?hl=pt-PT&gbpv=1&dq=redes+de+computador&printsec=frontcoverassets/livros/sapiens.pdf'
    },
    {
        titulo: 'Efetividade das tecnologias de informação',
        imagem: 'images/pai.jpeg',
        arquivo: 'https://www.google.co.ao/books/edition/Efetividade_das_tecnologias_da_informa%C3%A7/u_IxEAAAQBAJ?hl=pt-PT&gbpv=1&dq=tecnologia+de+informa%C3%A7%C3%A3o+e+comunica%C3%A7%C3%A3o+portugues&pg=PA25&printsec=frontcover'
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
