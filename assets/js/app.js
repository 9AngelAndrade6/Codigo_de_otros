const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('blog');
const $l = document.querySelector('location');
// Modifique las referencias de name, blog y location para que coincidan con las clases definidas en el html
//Hasta este punto logre quitar los errores de la consola pero aun necesito modificar el codigo de abajo para que cumpla con las 


// el error en await se debe a que esta dentro de una funcion no declarada como async

async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}
