# RutaFuel

Web estática para GitHub Pages con calculadoras de movilidad, planificador de ruta y consulta de precios de gasolineras.

## Incluye
- Página de inicio moderna y responsive.
- Planificador con mapa Leaflet/OpenStreetMap y routing OSRM.
- Geolocalización opcional, sin almacenamiento propio de la ubicación.
- Precios de gasolineras mediante el servicio público REST de carburantes de España.
- Calculadoras: coste de viaje, consumo real, coste por km, gasolina vs diésel y coche eléctrico.
- Google Analytics `G-RGNDGLHEZR` cargado únicamente tras consentimiento.
- SEO: canonical, Open Graph, sitemap y robots.txt.
- Páginas de privacidad sin nombres, NIF, domicilio, teléfono o correo personal.

## Publicación
Sube el contenido de esta carpeta a la raíz del repositorio `calculadora-combustible` y publica con GitHub Pages.

URL prevista: https://danielcarmona-space.github.io/calculadora-combustible/

## Dependencias externas en ejecución
- Leaflet 1.9.4 desde unpkg (CSS/JS).
- Teselas de OpenStreetMap.
- Router público OSRM para rutas.
- API pública de precios de carburantes de la Administración española.
- Google Analytics solo si el visitante lo acepta.

## Nota
Los resultados y precios se muestran con carácter orientativo. Antes de monetizar o convertir el sitio en una actividad sujeta a obligaciones legales adicionales, revisa el aviso legal y adapta la información exigida por la normativa aplicable.


## V2.1
- Búsqueda de gasolineras marcando un punto en el mapa y aplicando un radio de 2–50 km.
- Gasolineras cercanas al trazado del planificador, con radio configurable y precios oficiales.
- Las coordenadas elegidas o geolocalizadas se procesan solo en el navegador y no se guardan en una base de datos de RutaFuel.


## V2.2
- Scroll independiente para la lista de gasolineras del planificador.
- Orden por precio o cercanía a la ruta.
- Filtro dinámico por marca en gasolineras de ruta.
- Separación visual clara entre búsqueda por provincia/municipio y búsqueda por punto/radio.
