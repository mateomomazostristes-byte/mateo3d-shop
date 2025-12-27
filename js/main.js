const productList = document.getElementById("product-list");
const searchInput = document.getElementById("searchInput");

function renderProductos(lista) {
  productList.innerHTML = "";
  lista.forEach(prod => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    // Solo la imagen arriba
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("product-image");
    const img = document.createElement("img");
    img.src = prod.imagen;
    img.alt = prod.nombre; // accesibilidad, no se muestra
    imgDiv.appendChild(img);

    // Contenedor de texto abajo
    const textDiv = document.createElement("div");
    textDiv.classList.add("product-text");

    const desc = document.createElement("p");
    desc.textContent = prod.descripcion;

    const btn = document.createElement("a");
    btn.classList.add("comprar");
    btn.textContent = "Comprar";
    btn.href = `mailto:mateomomazostristes@gmail.com?subject=Mat-3D Shop - ${prod.nombre}`;

    textDiv.appendChild(desc);
    textDiv.appendChild(btn);

    card.appendChild(imgDiv);
    card.appendChild(textDiv);

    productList.appendChild(card);
  });
}

// Buscador dinámico
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = productos.filter(p => 
    p.nombre.toLowerCase().includes(query) || p.categoria.toLowerCase().includes(query)
  );
  renderProductos(filtered);
});

// Render inicial
renderProductos(productos);
