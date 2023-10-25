document.querySelector('#button-to-get').addEventListener("click", process)

function process (){

fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json()) // Parsear la respuesta como JSON
  .then(data => {
    console.log(data.results[15].image);
    let name = data.results[15].name
    let foto = data.results[15].image
    document.querySelector('h1').innerText = name
    document.querySelector('img').src = foto
  })
  .catch(error => {
    console.error('Error:', error);
  });

}
