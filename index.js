mapboxgl.accessToken = 'pk.eyJ1IjoicmJyYWpwdXJvaGl0IiwiYSI6ImNrbW90dnhiMDBqZDkycXJ2ZXlzcDRjbXoifQ.Xi45YofolrAQXbxxRcGTIw';

const successLoc = (position) => {
    renderMap([position.coords.longitude, position.coords.latitude]);
}

const errorLoc = () => {
    renderMap([72.8777, 19.0760]);
}

navigator.geolocation.getCurrentPosition(successLoc, errorLoc, {
    enableHighAccuracy: true
})


const renderMap = (location) => {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: location,
        zoom: 15
    });

    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    })

    map.addControl(directions, "top-left")
}