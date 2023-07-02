// Obtener elementos del DOM para interactuar
var guardarBtn = document.getElementById("guardar");
var cargarBtn = document.getElementById("cargar");
var borrarBtn = document.getElementById("borrar");
var textoInput = document.getElementById("texto");

// Escuchar evento de clic en el botón "Guardar"
guardarBtn.addEventListener("click", function() {
  var nota = textoInput.value;
  localStorage.setItem("nota", nota);
  alert("Nota guardada correctamente");
});

// Escuchar evento de clic en el botón "Cargar"
cargarBtn.addEventListener("click", function() {
  var notaGuardada = localStorage.getItem("nota");
  if (notaGuardada) {
    textoInput.value = notaGuardada;
    alert("Nota cargada correctamente");
  } else {
    alert("No hay ninguna nota guardada");
  }
});

// Escuchar evento de clic en el botón "Borrar"
borrarBtn.addEventListener("click", function() {
    localStorage.removeItem("nota");
    textoInput.value = "";
    alert("Nota borrada correctamente");
  });
  