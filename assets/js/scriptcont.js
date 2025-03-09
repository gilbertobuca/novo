// Dados dos livros (exemplo)
const livros = [
    {
        titulo: 'Contabilidade e gestão de custos',
        imagem: 'images/conta1.jfif',
        arquivo: 'https://www.google.co.ao/books/edition/Contabilidade_Gest%C3%A3o_de_Custos/mFzBEAAAQBAJ?hl=pt-PT&gbpv=1&dq=contabilidade+e+gest%C3%A3o&printsec=frontcover'
    },
    {
        titulo: 'Contabilidade de gestão: calculo de custos e valorização de inventários',
        imagem: 'images/conta2.png',
        arquivo: 'https://www.google.co.ao/books/edition/Contabilidade_de_Gest%C3%A3o_c%C3%A1lculo_de_cus/fePIEAAAQBAJ?hl=pt-PT&gbpv=1&dq=contabilidade+e+gest%C3%A3o&printsec=frontcover'
    },
    {
        titulo: 'Contabilidade de gestão avançada: gestão de custos e avaliação do desempenho',
        imagem: 'images/conta3.jfif',
        arquivo: 'https://www.google.co.ao/books/edition/Contabilidade_de_Gest%C3%A3o_Avan%C3%A7ada_gest/f-PIEAAAQBAJ?hl=pt-PT&gbpv=1&dq=contabilidade+e+gest%C3%A3o&printsec=frontcover'
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
