const productList = document.getElementById("product-list");
const searchInput = document.getElementById("searchInput");
const currentUser = "mateomomazostristes@gmail.com"; // tu mail

// PANEL DE CREACIÓN
const panelDiv = document.createElement("div");
panelDiv.id = "product-panel";
panelDiv.style.display = "none"; // oculto por defecto
panelDiv.innerHTML = `
  <h2>Agregar Producto</h2>
  <input id="panel-nombre" placeholder="Nombre">
  <input id="panel-desc" placeholder="Descripción">
  <input id="panel-cat" placeholder="Categoría">
  <input id="panel-img" placeholder="URL de Imagen">
  <button id="panel-agregar">Agregar</button>
`;
document.body.appendChild(panelDiv);

// Mostrar panel solo si el usuario es yo
if (currentUser === "mateomomazostristes@gmail.com") {
  panelDiv.style.display = "block";
}

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
    img.alt = "";
    imgDiv.appendChild(img);

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

// Botón de agregar producto en el panel
document.getElementById("panel-agregar").addEventListener("click", () => {
  const nombre = document.getElementById("panel-nombre").value;
  const desc = document.getElementById("panel-desc").value;
  const cat = document.getElementById("panel-cat").value;
  const img = document.getElementById("panel-img").value;

  if (!nombre || !desc || !cat || !img) {
    alert("Completá todos los campos!");
    return;
  }

  productos.push({
    nombre: nombre,
    descripcion: desc,
    categoria: cat,
    imagen: img
  });

  // Limpiar campos
  document.getElementById("panel-nombre").value = "";
  document.getElementById("panel-desc").value = "";
  document.getElementById("panel-cat").value = "";
  document.getElementById("panel-img").value = "";

  renderProductos(productos);
});

// Render inicial
renderProductos(productos);
