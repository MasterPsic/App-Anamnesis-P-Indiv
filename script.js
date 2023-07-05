 // Obtener referencias a los elementos del DOM
const textoInput = document.getElementById('texto');
const guardarBtn = document.getElementById('guardar');
const cargarBtn = document.getElementById('cargar');
const borrarBtn = document.getElementById('borrar');

// Event listener para el botón de Guardar
guardarBtn.addEventListener('click', () => {
  const texto = textoInput.value;
  localStorage.setItem('textoGuardado', texto);
  alert('Texto guardado exitosamente');
});

// Event listener para el botón de Cargar
cargarBtn.addEventListener('click', () => {
  const textoGuardado = localStorage.getItem('textoGuardado');
  if (textoGuardado) {
    textoInput.value = textoGuardado;
    alert('Texto cargado exitosamente');
  } else {
    alert('No se encontró ningún texto guardado');
  }
});

// Event listener para el botón de Borrar
borrarBtn.addEventListener('click', () => {
  localStorage.removeItem('textoGuardado');
  textoInput.value = '';
  alert('Texto borrado exitosamente');
});
