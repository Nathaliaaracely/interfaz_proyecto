function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

function buscar() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  
  if (query === "") {
    alert("Por favor escribe algo para buscar.");
    return;
  }

  // Aquí puedes personalizar la lógica de búsqueda (ejemplo simple)
  if (query.includes("presidente") || query.includes("candidato")) {
    window.location.href = "candidatos.html";
  } else if (query.includes("voto") || query.includes("votación")) {
    window.location.href = "votacion.html";
  } else if (query.includes("resultado")) {
    window.location.href = "resultados.html";
  } else {
    alert("No se encontraron resultados para: " + query);
  }
}
