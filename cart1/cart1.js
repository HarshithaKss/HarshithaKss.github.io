function toggleSelection(productId) {
    var product = products.find(item => item.id === productId);
    if (product) {
        product.selected = !product.selected;
        updateProductSelection(productId);
    }
}

function updateProductSelection(productId) {
    var productElement = document.getElementById('product-' + productId);
    var product = products.find(item => item.id === productId);

    if (productElement && product) {
        if (product.selected) {
            productElement.classList.add('selected');
        } else {
            productElement.classList.remove('selected');
        }
    }
}

// Update the cart and product selection when a product is clicked
function productClicked(productId) {
    toggleSelection(productId);
    updateCart();
}
function myFunction() {
    alert("Hello! I am an alert box!");
  }