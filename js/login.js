var login = document.getElementById('login');
var senha = document.getElementById('senha');
var btnEntrar = document.getElementById('btn-entrar');
var alerta = document.getElementById('alerta');
var x = document.getElementById('x');

/**
 * 1° Capturar o login e senha
 * 2° Verificar se login e senha estão válidos.
 * 3° Caso esteja invalido, notificar o usuário com msg 
 * personalizada.
 * 4° Caso esteja valido, mandar mensagem bonita e direcionar 
 * para outro HTML.
 * */

btnEntrar.addEventListener('click', function (e) {

  e.preventDefault();

  var acesso = usuarioESenhaEstaoCorretos(login.value, senha.value );
  if (acesso) {
    alert("Login efetuado com sucesso!")
  } else {
    mostrarAlerta();
  }
})

function usuarioESenhaEstaoCorretos(login, senha) {
  if (login.toLowerCase() == 'admin' && senha == '123') {
    return true;
  }
  return false;
}

function mostrarAlerta() {
  alerta.classList.remove('alerta-invisivel');
}

function esconderAlerta() {
  alerta.classList.add('alerta-invisivel');
}