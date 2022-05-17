
//localStorage.setItem("Datos", JSON.stringify(Heroes))
//console.log(localStorage.getItem("Datos"))

// Obtener el array del LocalStorage
var Heroes = JSON.parse(localStorage.getItem("Datos"))

function LoadHeroes() {

    // Obtener el contenedor
    let container = document.getElementById("container");

    // Reset container
    container.innerHTML = "";

    // Cargar los datos
    for (let index = 0; index < Heroes.length; index++) {
        const element = `
        <div id="div_heroe">
                <img src="${Heroes[index].img}"><br>
                <label id="nombre">${Heroes[index].nombre}</label><br>
                <label id="bio">${Heroes[index].bio}</label><br>
                <input type="button" id="btnDescription" value="Descripción" onclick="location.href='app.html?q=${Heroes[index].nombre}'">

        </div>`
        
        // Mostrar cada dato
        container.innerHTML += element
    }
}

function ShowMyHero(hero) {
    // Cargar los datos
    for (let index = 0; index < Heroes.length; index++) {

        // Buscar mi heroe
        if (Heroes[index].nombre == hero) {

            const element = `
                <div id="div_heroe">
                        <img src="${Heroes[index].img}"><br>
                        <label id="nombre">${Heroes[index].nombre}</label><br>
                        <label id="fullBio">${Heroes[index].bio}</label><br>
                        <input type="button" id="btnDescription" value="Regresar" onclick="location.href='.'">
                </div>
        `
            // Mostrar cada dato
            container.innerHTML += element

            // Salir
            return
        }
    }
}

