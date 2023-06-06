
// Crear el elemento textarea
var textarea = document.createElement("textarea");
textarea.setAttribute("rows", "30");
textarea.setAttribute("cols", "100");

// Crear el botón "Guardar"
var saveButton = document.createElement("button");
saveButton.innerHTML = "Guardar";
saveButton.addEventListener("click", function() {
  // Obtener el contenido del textarea
  var content = textarea.value;
  
  // Guardar el contenido en un archivo de texto
  // (Aquí puedes agregar tu código para guardar el archivo)
});

// Añadir los elementos al documento
document.body.appendChild(textarea);
document.body.appendChild(saveButton);
