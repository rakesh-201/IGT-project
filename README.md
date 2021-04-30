# MAPIFY - map it!

## Description



## Installation

Open up your terminal and run the following command:

`npm i mapify`

For `yarn` users

`yarn add mapify`

## Getting Started

To use the package you will need to do a couple of things.

First, add the following scripts inside of your `HTML` head tag:

```
<link href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css" rel="stylesheet" />

<script src="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js"></script>

<script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.0/mapbox-gl-directions.js"></script>
<script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.0/mapbox-gl-geocoder.min.js"></script>
```

After this is done, go to [mapbox.com](https://account.mapbox.com/) and get a free account.

After your account is created, select the type of your application ( _Web/Android/iOS_ ). After this click on CDN and grab your access token.

And that's it...

See the example given below for understanding the usage.

## Example

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MAPIFY</title>

    <script src="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js"></script>
    <link href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css" rel="stylesheet" />

    <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.0/mapbox-gl-directions.js"></script>
    <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.0/mapbox-gl-geocoder.min.js"></script>

    <style>
        body {
            margin: 0px;
        }

        #map {
            height: 100vh;
            width: 100vw;
        }
    </style src="index.js" >

    <script>

    </script>
</head>

<body>
    <div id="map"></div>
</body>

</html>
```

### index.js

```
import {mapify} from 'mapify'

const options = {
    searchOnly: false,
    accessToken: <YOUR_ACCESS_TOKEN>
}

mapify(options)
```

## Options

The mapify function takes in an object which has two properties:
1. `searchOnly`(boolean): If set to `true` then map having searching ability will be displayed. If set to `false` then the map will be able to navigate
