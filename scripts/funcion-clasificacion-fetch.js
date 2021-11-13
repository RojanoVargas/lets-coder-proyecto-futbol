// console.log (clasificacion.standings[0].table);
    // [0].table

function getFetch(){
    const url = "https://api.football-data.org/v2/competitions/2014/standings"
    //añadir spinner
    document.getElementById("spinner").style.display="block";
    fetch(url, {
        method: "GET",
        headers: {
            "X-Auth-Token" : "919643322e564aa1963e3bc26b5ed4fc"
        }
    }).then(response =>{
        console.log(response);
        if(response.ok){
            return response.json(); //devolver la respuesta en formato en formato json
        }
    }).then(data => { //data es todo el contenido que nos trae el json - para poder usarla en JS
        console.log (data);
        let tabla = data.standings[0].table;//navegar dentro de data para llegar a la info que queremos (ya que no los necesito todos)
        //quitar spinner
        document.getElementById("spinner").style.display="none";
        infoClasificacion(tabla); //tiene que estar dentro
    })       
}
getFetch() //función global dentro de la que después de recibir los datos (recibidos en data), empezamos a llamar a las funciones




function infoClasificacion(clasificar){
    let cuerpoTable = document.getElementById("tabla-clasificacion");
    for(let i = 0; i < clasificar.length; i++){//  inicializamos; vueltas que tiene que dar el bucle menor que el número de elementos; sumamos cada vuelta
        const tr = document.createElement("tr");
        let posicion = clasificar[i].position;
        let equipo = clasificar[i].team.name;
        let partidosJugados = clasificar[i].playedGames;
        let victorias = clasificar[i].won;
        let empates = clasificar[i].draw;
        let derrotas = clasificar[i].lost;
        let golesFavor = clasificar[i].goalsFor;
        let golesContra = clasificar[i].goalsAgainst;
        let diferenciaGoles = clasificar[i].goalDifference;
        let puntos = clasificar[i].points;
        let imgEscudo = document.createElement("img");
        imgEscudo.setAttribute("src", clasificar[i].team.crestUrl);
        imgEscudo.classList.add("escudos");
        // let escudo = clasificar[i].team.crestUrl
    


    let tablaClasificacion = [posicion, imgEscudo, equipo, partidosJugados, victorias, empates, derrotas, golesFavor, golesContra, diferenciaGoles, puntos];

    for(let j = 0; j < tablaClasificacion.length; j++){
        const td = document.createElement("td");
        td.append(tablaClasificacion[j]);
        tr.appendChild(td);
    }
    cuerpoTable.appendChild(tr);
    }
}



// parametro al crear la function
// argumento cuando creamos la llamada a la función