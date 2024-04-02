document.addEventListener('DOMContentLoaded', function() {
    const quantityInput = document.getElementById('quantity1');
    const subtotalElement = document.getElementById('subtotal1'); 
    const priceElement = document.querySelector('.price');
    const totalElement = document.getElementById('total');
 
    function calculateSubtotal() {
      const quantity = parseInt(quantityInput.value); 
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

