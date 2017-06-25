//map portion
var map;

//Initializes the map and centers it on the United States
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: {
      lat: 38.52,
      lng: -98.35
    },
    mapTypeId: 'terrain'
  });

  // Create a <script> tag and set the USGS URL as the source.
  var script = document.createElement('script');

  script.src = 'scripts/meme.js';
  document.getElementsByTagName('head')[0].appendChild(script);

}

function eqfeed_callback(results) { //the results is the stuff inside the eqfeed_callback function from the source
  var heatmapData = []; //declares the array coordinates will be stored to

  for (var i = 0; i < results.info.length; i++) {
    var coords = results.info[i].coordinates; //stores all the coordinates from file by going through json stuff
    //var coords = results[i].coordinates;
    var latLng = new google.maps.LatLng(coords[1], coords[0]);
    heatmapData.push(latLng); //pushed all the coordinate data to array

  }

  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    dissipating: false,
    map: map
  });
}

