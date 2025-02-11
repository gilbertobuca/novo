// Dados fictícios dos livros
const livros = [
    { id: 1, titulo: "O homen mais rico da bibilonia", autor: "George S. Clason", genero: "Factual", url: "livros/O homem mais rico da babilonia.pdf" },
    { id: 2, titulo: "Sapiens: Uma Breve História da Humanidade", autor: "Yuval Noah Harari", genero: "Historia", url: "livros/Sapiens Uma Breve História da Humanidade.pdf" },
    { id: 3, titulo: "21 Lições para o Século XXI", autor: "Yuval Noah Harari", genero: "Realidade", url: "livros/21 licoes.pdf" },
    { id: 4, titulo: "Pai rico Pai pobre", autor: "Robert T. Kiyozaki", genero: "Factual", url: "livros/Pai rico Pai pobre.pdf" },
    { id: 5, titulo: "1984", autor: "George Orwell", genero: "Distopia", url: "local/1984.pdf" },
    { id: 6, titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez", genero: "Realismo Mágico", url: "https://example.com/cem-anos.pdf" }

];

// Função para exibir os livros na página
function exibirLivros(livrosFiltrados) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = ""; // Limpa a lista de livros

    livrosFiltrados.forEach(livro => {
        const div = document.createElement("div");
        div.classList.add("book-item");
        div.innerHTML = `
            <h3>${livro.titulo}</h3>
            <p><strong>Autor:</strong> ${livro.autor}</p>
            <p><strong>Gênero:</strong> ${livro.genero}</p>
            <a href="${livro.url}" target="_blank" class="btn-link">Acessar Livro</a>
        `;
        bookList.appendChild(div);
    });
}

// Função de busca
function buscarLivros() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const livrosFiltrados = livros.filter(livro => 
        livro.titulo.toLowerCase().includes(searchInput) || 
        livro.autor.toLowerCase().includes(searchInput)
    );
    exibirLivros(livrosFiltrados);
}

// Exibir todos os livros ao carregar a página
window.onload = function() {
    exibirLivros(livros);
};

