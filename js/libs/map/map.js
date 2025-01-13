//Ukrainian version
// document.addEventListener("DOMContentLoaded", function () {
//   const map = L.map("location").setView([49.8383, 24.0232], 15); // Координаты Львова
//   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//     attribution: "© OpenStreetMap contributors",
//   }).addTo(map);

//   // Добавляем адрес на Mateyka St, 6
//   L.marker([49.8383, 24.0232])
//     .addTo(map)
//     .bindPopup("Mateyka St, 6, Lviv")
//     .openPopup();
// });

//*English version

document.addEventListener("DOMContentLoaded", function () {
  // Координаты для Mateyka St, 6, Lviv
  const coordinates = [49.8383, 24.0232];

  // Инициализация карты
  const map = L.map("location").setView(coordinates, 15);

  // Добавление тайл-слоя Mapbox
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGFrb3N0aSIsImEiOiJjbTVwcWc3ZTgwM2RxMmtzZmwzMXBmbTlnIn0.u1eWTN6JF66g1t5hg9hPxg",
    {
      attribution:
        'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, © <a href="https://www.mapbox.com/">Mapbox</a>',
      tileSize: 512,
      zoomOffset: -1,
    }
  ).addTo(map);

  // Добавление маркера
  L.marker(coordinates).addTo(map).bindPopup("Mateyka St, 6, Lviv").openPopup();
});
