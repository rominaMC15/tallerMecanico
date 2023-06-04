document.addEventListener("DOMContentLoaded", function() {
    const opciones = document.querySelector(".opciones");
    const resultado = document.querySelector(".spanResultado");
    const buttonPresupuesto = document.querySelector(".buttonPresupuesto");
  
    opciones.addEventListener("change", function() {
      const opcionActiva = opciones.value;
      let result = "";
  
      if (opcionActiva === "1") {
        result = calcularPorcentaje(2000, 25);
      } else if (opcionActiva === "2") {
        result = calcularPorcentaje(4500, 30);
      }
  
      resultado.textContent = result;
    });
  
    function calcularPorcentaje(precio, porcentaje) {
      const descuento = (precio * porcentaje) / 100;
      const precioDescontado = precio - descuento;
      return "El valor con el descuento es = $" + precioDescontado;
    }

    buttonPresupuesto.addEventListener("click", function() {
        alert("El presupuesto ha sido aprobado, indicar su correo electrónico en el taller para aplicar el descuento!");
        location.reload();
    });
  });
  