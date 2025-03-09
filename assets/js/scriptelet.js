// Dados dos livros (exemplo)
const livros = [
    {
        titulo: 'A ciência da informação criadora do conhecimento',
        imagem: 'images/eletro1.png',
        arquivo: 'https://www.google.co.ao/books/edition/A_ci%C3%AAncia_da_informa%C3%A7%C3%A3o_criadora_do_c/BH9P54bQdFwC?hl=pt-PT&gbpv=1&dq=eletr%C3%B4nica+e+telecomunica%C3%A7%C3%B5es&pg=PA125&printsec=frontcover'
    },
    {
        titulo: 'O governo electrônico e as suas múltiplas facetas',
        imagem: 'images/eletro2.jfif',
        arquivo: 'https://www.google.co.ao/books/edition/O_governo_eletr%C3%B4nico_e_suas_m%C3%BAltiplas/1G2MBAAAQBAJ?hl=pt-PT&gbpv=1&dq=eletr%C3%B4nica&pg=PA301&printsec=frontcover'
    },
    {
        titulo: 'Educação em engenharia',
        imagem: 'images/eletro3.jfif',
        arquivo: 'https://www.google.co.ao/books/edition/Educa%C3%A7%C3%A3o_em_Engenharia_Aplica%C3%A7%C3%B5es_no/ECjKEAAAQBAJ?hl=pt-PT&gbpv=1&dq=disciplina+de+eletr%C3%B4nica&pg=PA338&printsec=frontcover'
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
