document.getElementById("searchButton").addEventListener("click", () => {
    const searchTerm = document.getElementById("searchInput").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = data.meals ? data.meals.map(meal => meal.strMeal).join(', ') : "No se encontraron comidas con ese nombre.";
        })
        .catch(error => console.log("Error: " + error));
});

/*
fetch(url): Esta línea de código realiza una solicitud HTTP a la URL especificada en url. En este caso, estás enviando una solicitud para obtener datos de la API en la URL proporcionada.
*/

/*
.then(response => response.json()) devuelve en formato JSON
*/

/*
.then(data => { ... }) Una vez que los datos se han convertido a JSON, Los datos JSON se pasan como un parámetro data a una función anónima.
*/

/*
const resultDiv = document.getElementById("result")   Se obtiene una referencia al elemento HTML con el ID "result". Este elemento se utiliza para mostrar los resultados de la búsqueda.
*/

/*
resultDiv.innerHTML = data.meals ? data.meals.map(meal => meal.strMeal).join(', ') : "No se encontraron comidas con ese nombre.";: 

Aquí se está actualizando el contenido del elemento resultDiv. El código verifica si la propiedad meals existe en los datos. Si existen comidas en los datos, se utiliza .map() para extraer los nombres de las comidas (meal.strMeal) y se unen con comas para formar una cadena legible. Si no se encuentran comidas, se muestra el mensaje "No se encontraron comidas con ese nombre."
*/