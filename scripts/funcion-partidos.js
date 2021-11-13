function infoPartidos(matches){
    let cuerpoTable = document.getElementById("tabla-partidos");
    cuerpoTable.innerHTML = '';
    for(let i = 0; i < matches.length; i++){//  inicializamos; vueltas que tiene que dar el bucle menor que el número de elementos; sumamos cada vuelta
        const tr = document.createElement("tr");
        let jornada = matches[i].matchday;
        let equipoLocal = matches[i].homeTeam.name;
        let imgEscudoLocal = document.createElement("img");
        imgEscudoLocal.setAttribute("src", "https://crests.football-data.org/" + matches[i].homeTeam.id + ".svg");
        imgEscudoLocal.classList.add("escudos");
        let imgEscudoVisitante = document.createElement("img");
        imgEscudoVisitante.setAttribute("src", "https://crests.football-data.org/" + matches[i].awayTeam.id + ".svg");
        imgEscudoVisitante.classList.add("escudos");
        let equipoVisitante = matches[i].awayTeam.name;
        let fechaPartido = new Date(matches[i].utcDate);
        let resultadoPartido = matches[i].score.fullTime.homeTeam + " - " + matches[i].score.fullTime.awayTeam;

        if(resultadoPartido === "null - null") {
            resultadoPartido = "Próximamente";
    } 
    // else{
    //     resultadoPartido.textContent = matches[i].score.fullTime.homeTeam + " - " + matches[i].score.fullTime.awayTeam;
    // }
// resultado, equipo visitante, fecha

        let resultados = [imgEscudoLocal, equipoLocal, resultadoPartido, imgEscudoVisitante, equipoVisitante, fechaPartido.toLocaleString(), jornada]; //el orden afecta a como se imprime en pantalla

        for(let j = 0; j < resultados.length; j++){
            const td = document.createElement("td");
            td.append(resultados[j]);
            tr.appendChild(td);
        }
        cuerpoTable.appendChild(tr);
    } 
}
infoPartidos(matches);



function datosFiltrados (datosPartidos) {
    let inputData = document.getElementById("equipo").value;

    let arrayFiltrada = datosPartidos.filter((p) =>{
        // if (p.homeTeam.name.toLowerCase().includes(inputData.toLowerCase().value) || (p.awayTeam.name.toLowerCase()).includes(inputData.toLowerCase().value)){
        if (p.homeTeam.name.toLowerCase().includes(inputData.toLowerCase())  || p.awayTeam.name.toLowerCase().includes(inputData.toLowerCase())){
            return true;
        }
        else {
            return false;
        }
    })

    infoPartidos(arrayFiltrada);
}

let boton = document.getElementById("buscarEquipos");
boton.addEventListener("click", ()=>{
    datosFiltrados(partidos.matches);
});

// datosFiltrados(partidos.matches);



// https://crests.football-data.org/ + matches[i].homeTeam.id + ".svg"

// clasificacion.stadings[0].table.team.crestUrl


// dentro del fetch
// let buttonSearch = document.getElementById("search");
// buttonSearch.addEventListener("click"), function () {
//     datosFiltrados(partidos.matches);
// }