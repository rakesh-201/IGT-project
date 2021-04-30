const mapify = (options) => {

    var href = "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.0/mapbox-gl-directions.css";

    if (options.searchOnly) {
        href = "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.0/mapbox-gl-geocoder.css"
    }

    var a = document.createElement('link');
    a.rel = "stylesheet"
    a.href = href
    a.type = "text/css"
    document.body.appendChild(a);

    mapboxgl.accessToken = options.accessToken;

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

        if (options.searchOnly) {
            map.addControl(
                new MapboxGeocoder({
                    accessToken: mapboxgl.accessToken,
                    mapboxgl: mapboxgl
                })
                , "top-left"
            );
        }
        else {
            const nav = new mapboxgl.NavigationControl()
            map.addControl(nav)


            const directions = new MapboxDirections({
                accessToken: mapboxgl.accessToken
            })
            map.addControl(directions, "top-left")
        }
    }
}

module.exports.mapify = mapify;
