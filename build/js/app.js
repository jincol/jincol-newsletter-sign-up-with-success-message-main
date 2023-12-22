let form = document.querySelector("form");
const texto = document.querySelector(".input");
labels = document.querySelector(".labels")
u_none = document.querySelector(".contenedor_update")
e_none = document.querySelector(".contenedor-enviado")
txt = document.querySelector(".text_corfimation")

form.addEventListener("submit", (e) => {
  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  e.preventDefault();
  if (!emailRegex.test(texto.value)) {
      div("error", "Correo Incoreccto");
  } else {
    u_none.classList.add("u_none")
    e_none.classList.add("e_none")
    txt.textContent=texto.value;

  }
});

function div(alert, mensaje) {
  const alerta = document.createElement("label");
  alerta.classList.add(alert);
  alerta.textContent = mensaje;
  labels.appendChild(alerta);
  form.addEventListener('click',() => alerta.remove());
}
