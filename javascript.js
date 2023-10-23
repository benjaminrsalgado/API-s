fetch("https://api.thecatapi.com/v1/images/search")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    console.log(data[0].url);
    document.getElementById('catImage').src = data[0].url;
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

/*console.log(data[0].url); 
- data es el objeto que almacena la respuesta de la API.
- data [0] la respuesta de la API por lo general son un arreglo de objetos, donde cada objeto contiene información sobre una imagen de gato. Asi que este se refiere al primer objeto de un arreglo
*/

/* document.getElementById('catImage').src = data[0].url;

- document.getElementById('catImage')  busca un elemento en HTML que tenga un atributo id con el valor "catImage". 

- .src: Una vez que se selecciona el elemento con id="catImage", se accede a su atributo "src". En el contexto de una etiqueta <img>, el atributo "src" se utiliza para especificar la fuente de la imagen que se mostrará en el elemento.

- data[0].url;

- data es una variable que contiene la respuesta de la API, que suele ser una lista (array) de objetos.
- [0] se utiliza para acceder al primer elemento (objeto) en esa lista.
- .url es una propiedad de ese primer objeto, que almacena la URL de una imagen.

*/