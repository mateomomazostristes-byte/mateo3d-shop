const productList = document.getElementById("product-list");
const searchInput = document.getElementById("searchInput");

// Función para renderizar productos
function renderProductos(lista) {
  productList.innerHTML = "";
  lista.forEach(prod => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("product-image");

    const img = document.createElement("img");
    img.src = prod.imagen;
    img.alt = prod.nombre;
    imgDiv.appendChild(img);

    const nombre = document.createElement("h3");
    nombre.textContent = prod.nombre;

    const desc = document.createElement("p");
    desc.textContent = prod.descripcion;

    const btn = document.createElement("a");
    btn.classList.add("comprar");
    btn.textContent = "Comprar";
    btn.href = `mailto:mateomomazostristes@gmail.com?subject=Mat-3D Shop - ${prod.nombre}`;

    card.appendChild(imgDiv);
    card.appendChild(nombre);
    card.appendChild(desc);
    card.appendChild(btn);

    productList.appendChild(card);
  });
}

// Filtrado por búsqueda (nombre o categoría)
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = productos.filter(p => 
    p.nombre.toLowerCase().includes(query) || p.categoria.toLowerCase().includes(query)
  );
  renderProductos(filtered);
});

// Render inicial
renderProductos(productos);
