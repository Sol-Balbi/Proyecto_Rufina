//Mapa Dinamico

navigator.geolocation.getCurrentPosition(function(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let map = L.map("ubicacion",{
        center :[latitude,longitude],
        zoom: 17
    });
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    let control = L.Routing.control({
        waypoints: [
            L.latLng(latitude, longitude),
            L.latLng(36.54537,-4.61820)
        ],
        language:'es',
        show: true
    }).addTo(map);

    let marker = L.marker([36.54537,-4.61820]).bindPopup("Estamos Aquí!").openPopup().addTo(map);

    
});