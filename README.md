# README.MD
Dos tablas que reciben datos desde una API externa y muestran estadísticas de los partidos y de la clasificación de LaLiga Santander.


## Demo
Puede verse una versión web de este proyecto en [Demo del proyecto](https://vibrant-jennings-99c6ef.netlify.app/)


## Funcionalidades

- Acceso a la clasificación en tiempo real
- Acceso a los resultados en tiempo real
- Posibilidad de filtrar por equipos la tabla de partidos


## Tecnologías empleadas

- HTML - para la estructura
- CSS3 y Bootstrap - Bootstrap para los estilos generales y CSS3 para pequeños cambios a posteriori
- Javascript: para llamar a las API e imprimir los resultados en pantalla en **clasificacion** y **partidos**. También para dar funcionalidad al buscador en **partidos**


## Descripción técnica del proyecto

La página de **clasificacion** recibe información de una de las dos API externas (https://api.football-data.org/v2/competitions/2014/standings). Mientras carga los datos, un spinner aparece en pantalla y este desaparece cuando se imprime la tabla. La función "getFetch" llama a los datos y "infoClasificacion" genera una tabla y los imprime en esta.

La página de **partidos** funciona de manera similar pero añade las funcionalidades de filtrar por equipo con "datosFiltrados". 


## Versiones

Versión 1.0: 18 de noviembre de 2021.


## Mejoras del proyecto

- Añadir distintos tipos de filtro para la tabla. Por ejemplo, poder ver solo la última jornada jugada.
- Mejorar los estilos en las tres páginas, para dar más dinamismo y aprovechar de manera más extensiva las opciones que ofrece Bootstrap.