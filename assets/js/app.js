const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

// Modifiqué la sintaxys de name, blog y location para que coincidan con las clases definidas en el html, 
// agregando un . al inicio


//  el error en await se debe a que esta dentro de una funcion no declarada como async

async function displayUser(username) {
  
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);

  // Aqui se aplica un .json() a response
  const data = await response.json();
  // Se manda a imprimir en consola, podria no estar pero permite ver todos mis datos en formato Json en la consola
  console.log(data);
  $n.textContent = data.name;
  $b.textContent = data.blog;
  $l.textContent = data.location;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  //Aqui hacia falta un $ par allamar correctamente a la constante de name
  $n.textContent = `Algo salió mal: ${err}`
}

// Mando a llamar a la funcion con mi UserName de Git
displayUser('9AngelAndrade6')
handleError();  
//HAsta este punto logre hacer que el codigo funcione y mande a imprimir mis datos, 
//sin embargo aun no logro implementar la funcion del error de una manera satisfactoria