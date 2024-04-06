document.addEventListener('DOMContentLoaded', function() {
    const quantidadeInput = document.getElementById('quantidade1');
    const subtotalElement = document.getElementById('subtotal1'); 
    const priceElement = document.querySelector('.price');
    const totalElement = document.getElementById('total');
 
    function calculateSubtotal() {
      const quantidade = parseInt(quantityInput.value); 
      const price = parseFloat(priceElement.textContent);
      const subtotal = quantity * price; 
      subtotalElement.textContent = `Subtotal: R$ ${subtotal.toFixed(2)}`; 
      return subtotal;
    }
  
    function updateTotal() {
      const subtotal = calculateSubtotal();
      totalElement.textContent = subtotal.toFixed(2); 
    }

    quantityInput.addEventListener('change', updateTotal);
  
    updateTotal();
  });

  function obterParametro(nome) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(nome);
  }

  const imagemProduto = obterParametro('imagem');
  const nomeProduto = obterParametro('produto');
  const precoProduto = obterParametro('preco');
  const descricaoProduto = obterParametro('descricao');

  const imagemElement = document.getElementById('imagemProduto').imagemElement.src = imagemProduto;
  document.getElementById('nomeProduto').innerText = nomeProduto;
  document.getElementById('precoProduto').innerText = precoProduto;
  document.getElementById('descricaoProduto').innerText = descricaoProduto;


  function addToCart(event) {
    const product = event.target.parentNode;
    const productName = product.querySelector('h4').innerText;
    const productImage = product.querySelector('img').src;
    const productPrice = product.querySelector('p:nth-child(3)').innerText;
  
    // Cria um objeto para representar o produto
    const productData = {
      name: productName,
      image: productImage,
      price: productPrice
    };
  
    // Obtém o carrinho atual do armazenamento local ou cria um novo array vazio
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Adiciona o produto ao carrinho
    cart.push(productData);
  
    // Salva o carrinho atualizado de volta no armazenamento local
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  const buyButtons = document.querySelectorAll('.Botao');
  
  buyButtons.forEach(button => {
    button.addEventListener('click', addToCart);
  });

  function exibirMensagemAdicao(nomeItem) {
    const mensagem = document.getElementById('mensagemAdicao');
    mensagem.textContent = `${nomeItem} foi adicionado ao carrinho.`;

    // Limpa a mensagem após alguns segundos
    setTimeout(() => {
        mensagem.textContent = '';
    }, 3000); // Define o tempo em milissegundos antes de limpar a mensagem (por exemplo, 3000 ms = 3 segundos)
}

// Função para adicionar um item ao carrinho
function adicionarItemAoCarrinho(nomeItem) {
    // Lógica para adicionar o item ao carrinho...
    
    // Exibe a mensagem de adição ao carrinho
    exibirMensagemAdicao(nomeItem);
}

function mostrarSobre() {
  var divSobre = document.getElementById('sobre-nos');
  if (divSobre.style.display === 'none') {
      divSobre.style.display = 'block';
  } else {
      divSobre.style.display = 'none';
  }
}