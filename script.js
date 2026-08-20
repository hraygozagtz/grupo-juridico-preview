document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');
navToggle.addEventListener('click', () => {
  const isOpen = navMobile.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});
navMobile.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = form.nombre.value.trim();
  const correo = form.correo.value.trim();
  const mensaje = form.mensaje.value.trim();
  if (!nombre || !correo || !mensaje) {
    note.textContent = 'Completa los campos obligatorios.';
    return;
  }
  // Nota: este formulario aún no está conectado a un backend.
  // Opciones para conectarlo: Formspree, un endpoint PHP propio en Hostinger,
  // o un enlace mailto/WhatsApp como respaldo.
  note.textContent = 'Gracias, ' + nombre.split(' ')[0] + '. Este formulario es una vista previa; aún falta conectarlo a un servicio de envío real.';
  form.reset();
});
