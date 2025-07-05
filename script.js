const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const edad = document.getElementById('edad');
const btnEnviar = document.getElementById('btnEnviar');

const errorNombre = document.getElementById('errorNombre');
const errorEmail = document.getElementById('errorEmail');
const errorPassword = document.getElementById('errorPassword');
const errorConfirmPassword = document.getElementById('errorConfirmPassword');
const errorEdad = document.getElementById('errorEdad');

function aplicarClase(input, valido) {
  input.classList.remove('valid', 'invalid');
  input.classList.add(valido ? 'valid' : 'invalid');
}

function validarNombre() {
  const valido = nombre.value.trim().length >= 3;
  aplicarClase(nombre, valido);
  errorNombre.textContent = valido ? '' : 'El nombre debe tener al menos 3 caracteres.';
  return valido;
}

function validarEmail() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const valido = regex.test(email.value);
  aplicarClase(email, valido);
  errorEmail.textContent = valido ? '' : 'El correo no tiene un formato válido.';
  return valido;
}

function validarPassword() {
  const regex = /^(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  const valido = regex.test(password.value);
  aplicarClase(password, valido);
  errorPassword.textContent = valido ? '' : 'Mín. 8 caracteres, un número y un carácter especial.';
  return valido;
}

function validarConfirmPassword() {
  const valido = password.value === confirmPassword.value && confirmPassword.value !== '';
  aplicarClase(confirmPassword, valido);
  errorConfirmPassword.textContent = valido ? '' : 'Las contraseñas no coinciden.';
  return valido;
}

function validarEdad() {
  const valido = parseInt(edad.value) >= 18;
  aplicarClase(edad, valido);
  errorEdad.textContent = valido ? '' : 'Debes tener al menos 18 años.';
  return valido;
}

function validarFormulario() {
  const nombreValido = validarNombre();
  const emailValido = validarEmail();
  const passValido = validarPassword();
  const confirmValido = validarConfirmPassword();
  const edadValida = validarEdad();

  btnEnviar.disabled = !(nombreValido && emailValido && passValido && confirmValido && edadValida);
}

// Eventos
[nombre, email, password, confirmPassword, edad].forEach(input => {
  input.addEventListener('input', validarFormulario);
});

formulario.addEventListener('submit', function (event) {
  event.preventDefault();
  alert('🎉 ¡Formulario enviado con éxito!');
});

