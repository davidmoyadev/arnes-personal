const STORAGE_KEY = "contactos";

const form = document.getElementById("form-contacto");
const idInput = document.getElementById("contacto-id");
const nombreInput = document.getElementById("nombre");
const telefonoInput = document.getElementById("telefono");
const emailInput = document.getElementById("email");
const notasInput = document.getElementById("notas");
const btnGuardar = document.getElementById("btn-guardar");
const btnCancelar = document.getElementById("btn-cancelar");
const buscarInput = document.getElementById("buscar");
const lista = document.getElementById("lista-contactos");
const vacio = document.getElementById("vacio");

let contactos = cargar();

function cargar() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function guardar() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contactos));
}

function nuevoId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function render() {
  const q = buscarInput.value.trim().toLowerCase();
  const filtrados = contactos.filter((c) =>
    [c.nombre, c.telefono, c.email, c.notas].some((v) =>
      (v || "").toLowerCase().includes(q)
    )
  );

  lista.innerHTML = "";
  vacio.hidden = filtrados.length > 0;

  for (const c of filtrados) {
    const li = document.createElement("li");
    li.className = "contacto";

    const info = document.createElement("div");
    info.className = "info";

    const nombre = document.createElement("strong");
    nombre.textContent = c.nombre;

    const detalles = document.createElement("span");
    detalles.className = "detalles";
    detalles.textContent = [c.telefono, c.email, c.notas]
      .filter(Boolean)
      .join(" · ");

    info.append(nombre, detalles);

    const acciones = document.createElement("div");
    acciones.className = "acciones";

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.addEventListener("click", () => editar(c.id));

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Borrar";
    btnBorrar.className = "peligro";
    btnBorrar.addEventListener("click", () => borrar(c.id));

    acciones.append(btnEditar, btnBorrar);
    li.append(info, acciones);
    lista.appendChild(li);
  }
}

function resetForm() {
  form.reset();
  idInput.value = "";
  btnGuardar.textContent = "Anadir";
  btnCancelar.hidden = true;
}

function editar(id) {
  const c = contactos.find((x) => x.id === id);
  if (!c) return;
  idInput.value = c.id;
  nombreInput.value = c.nombre;
  telefonoInput.value = c.telefono || "";
  emailInput.value = c.email || "";
  notasInput.value = c.notas || "";
  btnGuardar.textContent = "Guardar";
  btnCancelar.hidden = false;
  nombreInput.focus();
}

function borrar(id) {
  contactos = contactos.filter((x) => x.id !== id);
  guardar();
  render();
  if (idInput.value === id) resetForm();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const datos = {
    nombre: nombreInput.value.trim(),
    telefono: telefonoInput.value.trim(),
    email: emailInput.value.trim(),
    notas: notasInput.value.trim(),
  };
  if (!datos.nombre) return;

  const id = idInput.value;
  if (id) {
    const c = contactos.find((x) => x.id === id);
    Object.assign(c, datos);
  } else {
    contactos.push({ id: nuevoId(), ...datos });
  }

  guardar();
  render();
  resetForm();
});

btnCancelar.addEventListener("click", resetForm);
buscarInput.addEventListener("input", render);

render();
