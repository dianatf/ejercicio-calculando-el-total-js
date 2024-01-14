document.addEventListener("DOMContentLoaded", function() {
    let precio = 400000;
    let cantidad = 0;
  
    const precioSpan = document.querySelector(".precio-inicial");
    const cantidadSpan = document.querySelector(".cantidad");
    const totalSpan = document.querySelector(".valor-total");
    const botonSumar = document.querySelector(".sumar");
    const botonRestar = document.querySelector(".restar");
  
    precioSpan.innerHTML = precio;
  
    function actualizarTotal() {
      const total = precio * cantidad;
      totalSpan.innerHTML = total;
    }
  
    botonSumar.addEventListener("click", function() {
      cantidad++;
      cantidadSpan.innerHTML = cantidad;
      actualizarTotal();
    });
  
    botonRestar.addEventListener("click", function() {
      if (cantidad > 0) {
        cantidad--;
        cantidadSpan.innerHTML = cantidad;
        actualizarTotal();
      }
    });
  });