// CEREBRO DE MATEO-3D SHOP
// Muestra productos + buscador

const contenedor = document.getElementById("productos");
const buscador = document.getElementById("buscador");

function mostrarProductos(lista) {
  contenedor.innerHTML = "";

  if (lista.length === 0) {
    contenedor.innerHTML = "<p>No se encontraron productos 😿</p>";
    return;
  }

  lista.forEach(p => {
    const card = document.createElement("div");
    card.className = "producto";

    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p>${p.descripcion}</p>
      <a class="comprar" href="mailto:mateomomazostristes@gmail.com?subject=${encodeURIComponent(p.nombre)}">
        Comprar
      </a>
    `;

    contenedor.appendChild(card);
  });
}

// Mostrar todo al cargar
mostrarProductos(productos);

// BUSCADOR
buscador.addEventListener("input", () => {
  const texto = buscador.value.toLowerCase().trim();

  if (texto === "") {
    mostrarProductos(productos);
    return;
  }

  const filtrados = productos.filter(p =>
    p.nombre.toLowerCase() === texto ||
    p.categoria.toLowerCase().includes(texto) ||
    p.keywords.some(k => k.toLowerCase().includes(texto))
  );

  mostrarProductos(filtrados);
});
