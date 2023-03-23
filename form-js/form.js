// AQUI DEFINE QUE OS BOTÔES DE LOGIN E "ESQUECI A SENHA" FIQUEM ATIVOS APENAS SE TIVER UM EMAIL E SENHA VALIDOS NOS CAMPOS DE INPUT
function validateFields() {
  const emailValid = isEmailValid()
  document.getElementById('recover-password-button').disabled = !emailValid

  const passwordValid = isPasswordValid()
  document.getElementById('login-button').disabled =
    !emailValid || !passwordValid
}

function isEmailValid() {
  const email = document.getElementById('email').value
  if (!email) {
    return false
  }
  return validateEmail(email)
}

function isPasswordValid() {
  const password = document.getElementById('password').value
  if (!password) {
    return false
  }
  return true
}

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email)
}

// AQUI ADICIONA INTERAÇÃO AO BOTÃO ONDE ESCONDE OU MOSTRA A SENHA PARA O USUÁRIO

let containers = document.querySelectorAll('.input-box')
let inputs = document.querySelectorAll('.senha')
let icons = document.querySelectorAll('.toggle-icon')

for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener('click', function () {
    containers[i].classList.toggle('visible')
    if (containers[i].classList.contains('visible')) {
      icons[i].src = 'assets/eye.svg'
      inputs[i].type = 'text'
    } else {
      icons[i].src = 'assets/eye-off.svg'
      inputs[i].type = 'password'
    }
  })
}

// AQUI DEFINE QUE O BOTÃO "VOLTAR" VOLTE A PAGINA ANTERIOR EM QUE O USUARIO ESTAVA
function goBack() {
  window.history.back()
}
