var cartCount = document.querySelector('#cart-count'); // Etiqueta para Contador
var montoTotal = document.querySelector('#totalPagar'); // Etiqueeta para Monto Total
let cantidad = 0;
let totalPagar = 0;

function incrementar(precio) { // Formula para incrementar la cantidad y el precio
    if (cantidad < 99) {
        cantidad++;
        cartCount.textContent = cantidad;
        totalPagar +=precio;
        montoTotal.textContent = totalPagar;
    }
}
function disminuir(precio) { // Formula para disminuir la cantidad y el precio
    if (cantidad > 0) {
        cantidad--;
        cartCount.textContent = cantidad;
        totalPagar -=precio;
        montoTotal.textContent = totalPagar;
    }
}
