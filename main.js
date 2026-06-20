//no finalzin tem um gostin 
//nomeando produto ou produtos

let produtos = [] ,

function adicionarProduto(id, nome, preco, categoria) {
    const produto = {
        id,
        nome,
        preco,
        categoria
    };
    produtos.push(produto);
}
//função para adicionar produtos 

adicionarProduto(1, "monster", 10.00, "bebida");
adicionarProduto(2, "redbull", 12.00, "bebida");
adicionarProduto(3, "coca-cola", 8.00, "bebida");
adicionarProduto(4, "pepsi", 7.00, "bebida");

//funções adicionais para manipular o estoque e buscar produtos

function adicionarProduto(produto) {
    produtos.push(produto);
}

function removerProduto(id) {
    produtos = produtos.filter(produto => produto.id !== id);
}

function buscarProduto(id) {
    return produtos.find(produto => produto.id === id);
}   

function adicionarEstoque(id, quantidade) {
    const produto = buscarProduto(id);
    if (produto) {
        produto.estoque = (produto.estoque || 0) + quantidade;
    }
}

/* função que remove itens do  estoque. Se a quantidade solicitada for maior do que a disponível, exibe uma mensagem de "sem estoque". */   


function removerEstoque(id, quantidade) {
    const produto = buscarProduto(id);

    if (produto.quantidade >= quantidade) {
        produto.quantidade -= quantidade;
    } else {
        console.log("sem estoque ") 
    }
    }
    