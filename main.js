/*
Objetivo: Crear una página web que permita buscar personajes de "Rick and Morty" por nombre y mostrar detalles de los personajes seleccionados.

Funcionalidad básica:

Crear una página HTML con un campo de entrada de texto y un botón de búsqueda.
Cuando el usuario ingrese el nombre de un personaje y haga clic en el botón de búsqueda, la página deberá hacer una solicitud a la API de Rick and Morty para buscar el personaje por nombre.
Mostrar los resultados de la búsqueda en la página, incluyendo el nombre del personaje, su especie, su género y una imagen si está disponible.
Si no se encuentra ningún personaje, mostrar un mensaje indicando que no se encontraron resultados.
*/



const getPersonajeFromApi = () =>{
    return fetch(`https://rickandmortyapi.com/api/character`)
    .then(response => response.json())
    .then(({results}) => results.map((personajes)=>{
        const{name, species, image, gender} = personajes;
        console.log(name, species, image, gender)
        return{name, species, image, gender}
    }))
}

getPersonajeFromApi()